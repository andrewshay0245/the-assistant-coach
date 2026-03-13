# Email Outreach Scripts

Send beta invitations to coaches using AWS SES.

## Setup

```bash
cd scripts/email
npm install
```

## Environment Variables

Set these in your shell or `.env` file:

```bash
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret
export AWS_REGION=us-east-1
```

## CSV Format

Your coach list should be a CSV with these columns:

```csv
email,first_name,last_name,sport,school
coach@school.edu,John,Smith,Football,State University
```

Required: `email`, `first_name`
Optional: `last_name`, `sport`, `school`

## Usage

### Dry Run (preview without sending)
```bash
npx ts-node send-beta-invites.ts --csv coaches.csv --dry-run
```

### Send to first 100 coaches
```bash
npx ts-node send-beta-invites.ts --csv coaches.csv --limit 100
```

### Send to all coaches
```bash
npx ts-node send-beta-invites.ts --csv coaches.csv
```

## Template

Edit `beta-invite-template.html` to customize the email design.

Available placeholders:
- `{{FIRST_NAME}}` - Coach's first name
- `{{LAST_NAME}}` - Coach's last name
- `{{SPORT}}` - Coach's sport
- `{{SCHOOL}}` - Coach's school
- `{{UNSUBSCRIBE_URL}}` - Auto-generated unsubscribe link

## Rate Limiting

The script sends at 10 emails/second (SES limit is 14/sec). Adjust `RATE_LIMIT_MS` in the script if needed.

## Failures

Failed emails are logged and saved to `failures-{timestamp}.json` for retry.
