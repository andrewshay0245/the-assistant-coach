/**
 * Email Tracking System
 * Tracks sent emails, opens, and replies
 */

import * as fs from 'fs';
import * as path from 'path';

const TRACKING_FILE = path.join(__dirname, 'sent-emails.json');
const REPLIES_FILE = path.join(__dirname, 'replies.json');

export interface SentEmail {
  email: string;
  first_name: string;
  last_name?: string;
  sport?: string;
  school?: string;
  sent_at: string;
  campaign: string;
  message_id?: string;
}

export interface Reply {
  from_email: string;
  subject: string;
  received_at: string;
  snippet: string;
  original_campaign: string;
}

export interface TrackingData {
  campaigns: {
    [campaign: string]: {
      started_at: string;
      total_sent: number;
      last_sent_at: string;
    };
  };
  sent: SentEmail[];
}

export function loadTracking(): TrackingData {
  if (fs.existsSync(TRACKING_FILE)) {
    return JSON.parse(fs.readFileSync(TRACKING_FILE, 'utf-8'));
  }
  return { campaigns: {}, sent: [] };
}

export function saveTracking(data: TrackingData): void {
  fs.writeFileSync(TRACKING_FILE, JSON.stringify(data, null, 2));
}

export function recordSent(email: SentEmail): void {
  const data = loadTracking();
  
  // Update campaign stats
  if (!data.campaigns[email.campaign]) {
    data.campaigns[email.campaign] = {
      started_at: email.sent_at,
      total_sent: 0,
      last_sent_at: email.sent_at,
    };
  }
  data.campaigns[email.campaign].total_sent++;
  data.campaigns[email.campaign].last_sent_at = email.sent_at;
  
  // Add to sent list
  data.sent.push(email);
  
  saveTracking(data);
}

export function hasBeenSent(email: string): boolean {
  const data = loadTracking();
  return data.sent.some(s => s.email.toLowerCase() === email.toLowerCase());
}

export function getSentEmails(campaign?: string): SentEmail[] {
  const data = loadTracking();
  if (campaign) {
    return data.sent.filter(s => s.campaign === campaign);
  }
  return data.sent;
}

export function getUnsentFromCSV(csvCoaches: { email: string }[]): { email: string }[] {
  const data = loadTracking();
  const sentSet = new Set(data.sent.map(s => s.email.toLowerCase()));
  return csvCoaches.filter(c => !sentSet.has(c.email.toLowerCase()));
}

export function getCampaignStats(): void {
  const data = loadTracking();
  
  console.log('\n📊 CAMPAIGN STATISTICS\n');
  console.log('='.repeat(60));
  
  for (const [name, stats] of Object.entries(data.campaigns)) {
    console.log(`\n📧 ${name}`);
    console.log(`   Started: ${stats.started_at}`);
    console.log(`   Total Sent: ${stats.total_sent}`);
    console.log(`   Last Sent: ${stats.last_sent_at}`);
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`Total emails sent (all campaigns): ${data.sent.length}`);
  
  // Group by domain for insights
  const domains: { [domain: string]: number } = {};
  data.sent.forEach(s => {
    const domain = s.email.split('@')[1] || 'unknown';
    domains[domain] = (domains[domain] || 0) + 1;
  });
  
  console.log('\nTop domains:');
  Object.entries(domains)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([domain, count]) => {
      console.log(`   ${domain}: ${count}`);
    });
}

// Export sent list to CSV
export function exportSentToCSV(outputPath: string): void {
  const data = loadTracking();
  const headers = ['email', 'first_name', 'last_name', 'sport', 'school', 'sent_at', 'campaign'];
  const rows = data.sent.map(s => 
    [s.email, s.first_name, s.last_name || '', s.sport || '', s.school || '', s.sent_at, s.campaign].join(',')
  );
  
  fs.writeFileSync(outputPath, [headers.join(','), ...rows].join('\n'));
  console.log(`Exported ${data.sent.length} sent emails to ${outputPath}`);
}

// CLI commands
if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'stats':
      getCampaignStats();
      break;
    case 'export':
      const outputPath = process.argv[3] || 'sent-export.csv';
      exportSentToCSV(outputPath);
      break;
    case 'list':
      const campaign = process.argv[3];
      const sent = getSentEmails(campaign);
      sent.forEach(s => console.log(`${s.email} - ${s.first_name} - ${s.sent_at}`));
      console.log(`\nTotal: ${sent.length}`);
      break;
    default:
      console.log('Usage:');
      console.log('  npx ts-node tracking.ts stats           - Show campaign statistics');
      console.log('  npx ts-node tracking.ts export [file]   - Export sent list to CSV');
      console.log('  npx ts-node tracking.ts list [campaign] - List sent emails');
  }
}
