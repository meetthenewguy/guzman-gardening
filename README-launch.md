# Guzman Gardening production package

Client: Guzman Gardening & Landscaping International Inc.
Domain: guzgardening.com
Canonical URL: https://www.guzgardening.com/
Phone: (561) 285-7252
Email: guzgardening@gmail.com

## What changed from the preview HTML

- Extracted embedded base64 photos into `images/`.
- Moved inline CSS into `css/styles.css`.
- Moved inline JavaScript into `js/main.js`.
- Removed visible preview placeholders for license, hours, social links, and the unconfirmed consultation-fee claim.
- Added canonical, Open Graph, Twitter Card, favicon, and LocalBusiness structured data.
- Added `robots.txt`, `sitemap.xml`, `.nojekyll`, and `CNAME`.
- Added client, asset, and deployment manifests in `data/`.
- Updated the quote form so the visitor must provide a name, project details, and either phone or email.

## Files to upload to GitHub

Upload everything inside this folder to the publishing root of the repository:

```text
index.html
CNAME
.nojekyll
robots.txt
sitemap.xml
favicon.svg
css/styles.css
js/main.js
images/*
data/*
```

## GitHub Pages settings

1. Repository → Settings → Pages.
2. Source: deploy from branch.
3. Branch: `main`.
4. Folder: `/root` unless you intentionally use `/docs`.
5. Custom domain: `www.guzgardening.com`.
6. Turn on Enforce HTTPS after GitHub provisions the certificate.

## NameSilo DNS target

Use your real GitHub owner name in place of `YOUR-GITHUB-OWNER`.

```text
www  CNAME  YOUR-GITHUB-OWNER.github.io
```

For the apex/root domain `guzgardening.com`, use NameSilo forwarding to `https://www.guzgardening.com/` or add GitHub Pages apex records if you want both apex and www handled directly.

Current GitHub Pages apex A records:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

Optional IPv6 records:

```text
@  AAAA  2606:50c0:8000::153
@  AAAA  2606:50c0:8001::153
@  AAAA  2606:50c0:8002::153
@  AAAA  2606:50c0:8003::153
```

Do not point `www` to the repository URL. It should point to `YOUR-GITHUB-OWNER.github.io` only.

## Confirm before launch

- Hours or scheduling policy.
- Whether the business is licensed and insured, and the exact wording allowed.
- Whether the `$200 consultation credited toward the job` copy should be added back.
- Whether Palm Beach County and South Florida service-area language is accurate.
- Whether every photo is client-owned or approved for publication.
- Social profile links, if any.
- GitHub owner/repository name for the deployment manifest.
