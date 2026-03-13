/**
 * Beta Invite Email Sender
 * Uses AWS SES to send beta invitations to coaches
 * 
 * Usage:
 *   npx ts-node send-beta-invites.ts --csv coaches.csv --limit 100 --dry-run
 *   npx ts-node send-beta-invites.ts --csv coaches.csv --limit 100
 * 
 * CSV format:
 *   email,first_name,last_name,sport,school
 * 
 * Environment variables required:
 *   AWS_ACCESS_KEY_ID
 *   AWS_SECRET_ACCESS_KEY
 *   AWS_REGION (default: us-east-1)
 */

import * as dotenv from 'dotenv';
import * as path from 'path';

// Load .env from scripts/email directory
dotenv.config({ path: path.join(__dirname, '.env') });

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import * as fs from 'fs';
import * as path from 'path';
import { recordSent, hasBeenSent, getUnsentFromCSV, getCampaignStats, SentEmail } from './tracking';

// Configuration
const FROM_EMAIL = 'The Assistant Coach <info@theassistantcoach.co>';
const SUBJECT = "Coach {{FIRST_NAME}}, you're invited to try The Assistant Coach";
const RATE_LIMIT_MS = 100; // 10 emails per second (SES limit is 14/sec)
const CAMPAIGN_NAME = 'beta-invite-mar-2026';

interface Coach {
  email: string;
  first_name: string;
  last_name?: string;
  sport?: string;
  school?: string;
}

async function loadTemplate(): Promise<string> {
  const templatePath = path.join(__dirname, 'beta-invite-template.html');
  return fs.readFileSync(templatePath, 'utf-8');
}

function parseCSV(csvPath: string): Coach[] {
  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.trim().split('\n');
  const headers = lines[0].toLowerCase().split(',').map(h => h.trim());
  
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const coach: Record<string, string> = {};
    headers.forEach((header, i) => {
      coach[header] = values[i] || '';
    });
    return coach as unknown as Coach;
  });
}

function personalizeTemplate(template: string, coach: Coach): string {
  return template
    .replace(/\{\{FIRST_NAME\}\}/g, coach.first_name || 'Coach')
    .replace(/\{\{LAST_NAME\}\}/g, coach.last_name || '')
    .replace(/\{\{SPORT\}\}/g, coach.sport || '')
    .replace(/\{\{SCHOOL\}\}/g, coach.school || '')
    .replace(/\{\{UNSUBSCRIBE_URL\}\}/g, `https://theassistantcoach.co/unsubscribe?email=${encodeURIComponent(coach.email)}`);
}

function personalizeSubject(coach: Coach): string {
  return SUBJECT.replace(/\{\{FIRST_NAME\}\}/g, coach.first_name || 'Coach');
}

async function sendEmail(
  ses: SESClient,
  coach: Coach,
  htmlBody: string,
  dryRun: boolean
): Promise<{ success: boolean; error?: string }> {
  // Skip if already sent
  if (hasBeenSent(coach.email)) {
    console.log(`⏭️  Skipped (already sent): ${coach.email}`);
    return { success: true };
  }

  if (dryRun) {
    console.log(`[DRY RUN] Would send to: ${coach.email} (${coach.first_name})`);
    return { success: true };
  }

  try {
    const command = new SendEmailCommand({
      Source: FROM_EMAIL,
      Destination: {
        ToAddresses: [coach.email],
      },
      Message: {
        Subject: {
          Data: personalizeSubject(coach),
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: htmlBody,
            Charset: 'UTF-8',
          },
        },
      },
    });

    const result = await ses.send(command);
    
    // Record the sent email
    recordSent({
      email: coach.email,
      first_name: coach.first_name,
      last_name: coach.last_name,
      sport: coach.sport,
      school: coach.school,
      sent_at: new Date().toISOString(),
      campaign: CAMPAIGN_NAME,
      message_id: result.MessageId,
    });
    
    console.log(`✓ Sent to: ${coach.email}`);
    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`✗ Failed: ${coach.email} - ${message}`);
    return { success: false, error: message };
  }
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const args = process.argv.slice(2);
  const csvIndex = args.indexOf('--csv');
  const limitIndex = args.indexOf('--limit');
  const dryRun = args.includes('--dry-run');

  if (csvIndex === -1) {
    console.error('Usage: npx ts-node send-beta-invites.ts --csv coaches.csv [--limit 100] [--dry-run]');
    process.exit(1);
  }

  const csvPath = args[csvIndex + 1];
  const limit = limitIndex !== -1 ? parseInt(args[limitIndex + 1], 10) : Infinity;

  if (!fs.existsSync(csvPath)) {
    console.error(`CSV file not found: ${csvPath}`);
    process.exit(1);
  }

  // Load coaches
  let coaches = parseCSV(csvPath);
  console.log(`Loaded ${coaches.length} coaches from CSV`);

  if (limit < coaches.length) {
    coaches = coaches.slice(0, limit);
    console.log(`Limited to ${limit} coaches`);
  }

  // Load template
  const template = await loadTemplate();
  console.log('Template loaded');

  // Initialize SES
  const ses = new SESClient({
    region: process.env.AWS_REGION || 'us-east-1',
  });

  if (dryRun) {
    console.log('\n🔍 DRY RUN MODE - No emails will be sent\n');
  } else {
    console.log('\n📧 SENDING EMAILS\n');
  }

  // Send emails
  let sent = 0;
  let failed = 0;
  const failures: { email: string; error: string }[] = [];

  for (const coach of coaches) {
    const personalizedHtml = personalizeTemplate(template, coach);
    const result = await sendEmail(ses, coach, personalizedHtml, dryRun);

    if (result.success) {
      sent++;
    } else {
      failed++;
      failures.push({ email: coach.email, error: result.error || 'Unknown' });
    }

    // Rate limit
    if (!dryRun) {
      await sleep(RATE_LIMIT_MS);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log(`📊 SUMMARY`);
  console.log(`   Sent: ${sent}`);
  console.log(`   Failed: ${failed}`);
  console.log('='.repeat(50));

  if (failures.length > 0) {
    console.log('\nFailed emails:');
    failures.forEach(f => console.log(`  - ${f.email}: ${f.error}`));
    
    // Write failures to file
    const failuresPath = path.join(__dirname, `failures-${Date.now()}.json`);
    fs.writeFileSync(failuresPath, JSON.stringify(failures, null, 2));
    console.log(`\nFailures saved to: ${failuresPath}`);
  }

  // Show overall stats
  if (!dryRun) {
    getCampaignStats();
  }
}

main().catch(console.error);
