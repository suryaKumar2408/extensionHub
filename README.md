# Browser Extensions Showcase

A lightweight, dependency-free showcase website for browser extensions. It is a single-page app with URL-based routing for:

- `/` — extension directory and developer introduction
- `/extension/<slug>` — generated detail page for any extension in the data model
- `/support` — optional UPI support page

## Add your content

Open `app.js` and update the `SITE` object with your contact details and social profiles. Add future extensions as additional objects in `EXTENSIONS`; their cards and detail pages are generated automatically. Store extension icons and screenshots in `assets/` and reference their paths from the corresponding object.

The supplied Extension Hub logo and original UPI QR image are already stored in `assets/extension-hub-logo.png` and `assets/upi-qr.png`. The QR file is copied byte-for-byte from the supplied image and is used by `/support` with click-to-enlarge behavior.

Codeforces Studio currently has its Firefox Add-ons link configured. Its Chrome button remains hidden until a Chrome Web Store URL is added.

ORBIT is listed as "Coming soon". Add its `chromeUrl` or `firefoxUrl` in `app.js` and change `status` to `Available now` when it is published.

## Run locally

Because the app uses clean URL routes, serve the folder with any static server rather than opening `index.html` directly. For example:

```bash
python3 serve.py
```

Open `http://localhost:4173`.

The included server falls back to `index.html` for clean routes such as `/support` and `/extension/codeforces-studio`, so direct reloads work during local development.

For deployment, configure your host to serve `index.html` as the fallback for `/support` and `/extension/*` routes.
