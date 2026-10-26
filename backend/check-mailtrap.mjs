// Owner-authorised connectivity test. Never prints tokens or response bodies.
import fs from 'node:fs';
const keyFile = process.argv[2];
if (!keyFile || !fs.existsSync(keyFile)) {
  console.error('Usage: node backend/check-mailtrap.mjs /path/to/token');
  process.exit(2);
}
const token = fs.readFileSync(keyFile, 'utf8').trim();
const response = await fetch('https://send.api.mailtrap.io/api/send', {
  method: 'POST',
  headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    from: { email:'amit@axon.com.sg', name:'SpenceCom — backed by Axon 1Pro' },
    to: [{ email:'amit@axon.com.sg' }],
    subject:'SpenceCom Mailtrap sender verification test',
    html:'<div style="font:16px Arial;background:#fff;padding:24px"><img src="https://spencecom.ph/assets/brand/spencecom-logo-teal.png" width="225" alt="SpenceCom"><h2>SpenceCom email integration test</h2><p>This message verifies Mailtrap can send branded messages from amit@axon.com.sg.</p><p>Sent by the SpenceCom website integration setup.</p></div>'
  }),
  signal: AbortSignal.timeout(15000)
});
console.log(`Mailtrap test HTTP ${response.status}; accepted=${response.ok}`);
if (!response.ok) process.exitCode = 1;
