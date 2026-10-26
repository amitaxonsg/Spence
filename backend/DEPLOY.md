# SpenceCom API — deployment notes

Isolated service for `spencecom.ph` only. Node 22, no npm dependencies.

- `GET /api/health` → non-secret readiness flags.
- `POST /api/chat` → OpenAI Responses API (limited requests and token budget).
- `POST /api/enquiry` → Mailtrap transactional mail, sending from verified `amit@axon.com.sg`, notification to Amit with Spencer CC, branded client acknowledgement, support reply-to.

## Secrets and process

Run under the dedicated `spencecom` Unix account, bound only to `127.0.0.1:4783`.

Credential files in `/etc/spencecom/` must be owned by root, group `spencecom`, mode 0640. Directory mode 0750. Do not copy credentials into the repo, document root, logs, terminal output or browser JavaScript.

Required:

- `SPENCECOM_OPENAI_KEY_FILE=/etc/spencecom/openai.key`
- `SPENCECOM_OPENAI_MODEL=gpt-4o-mini`

Mail is **disabled** unless both are present:

- `SPENCECOM_MAILTRAP_KEY_FILE=/etc/spencecom/mailtrap.key`
- `SPENCECOM_MAILTRAP_FROM=amit@axon.com.sg`

Only use a Mailtrap token whose sending permissions have been tested for the verified `axon.com.sg` domain. Token filenames for other client projects are not proof of sender authorisation.

Reverse proxy only in the SpenceCom TLS vhost:

```
ProxyPreserveHost On
ProxyPass /api/ http://127.0.0.1:4783/
ProxyPassReverse /api/ http://127.0.0.1:4783/
```

Verify `apache2ctl configtest` before reloading Apache; verify the systemd unit and health endpoint before exposing `/api/`.

The browser form reverts to a `mailto` link if delivery is unavailable; it does not falsely claim an email was delivered. The AI widget also shows a human support handoff when unavailable.
