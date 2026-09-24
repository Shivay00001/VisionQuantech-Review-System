# VisionQuantech-Review-System — AI code review demo

A Google AI Studio-style demo: paste code into the editor pane and Gemini
(`gemini-2.5-flash`) returns structured code review feedback — bugs,
performance, style, security, and best-practice findings with line numbers
and explanations.

## Demo mode — honest login

This demo **does not perform a real Google sign-in**. An earlier version had
a fake "Sign in with Google" button that fabricated a user on click; that was
removed. You now enter as a clearly-labeled **demo user** (see the "Demo
mode" banner on the entry screen) — nothing is authenticated.

To add real Google sign-in, wire up Google Identity Services with your own
`YOUR_GOOGLE_CLIENT_ID` OAuth client (see the comments in `App.tsx` and
`pages/LoginPage.tsx`).

## How to run

**Prerequisites:** Node.js 18+

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` (or `.env.local`) and set
   `GEMINI_API_KEY=YOUR_GEMINI_API_KEY` to your real Gemini API key
   (get one at https://aistudio.google.com/app/apikey)
3. Run the dev server: `npm run dev` — opens on http://localhost:3000

## API key handling

- The Gemini key is **never hardcoded in source**. It is read only from the
  `GEMINI_API_KEY` environment variable at build time (`vite.config.ts`
  injects it as `process.env.API_KEY`).
- `.env` files are gitignored; `.env.example` contains only the placeholder
  `YOUR_GEMINI_API_KEY`.
- Client-side key note: because this demo calls the Gemini API directly from
  the browser bundle, the key you build with is visible to anyone who opens
  the built site. Use a key with strict API restrictions (HTTP referrer /
  quota limits) and treat it as public. For production use, move the Gemini
  calls to a server-side endpoint.
- Without a key, the app throws a clear error on load
  (`services/geminiConfig.ts`) instead of failing silently.

## Current state (honest)

- `index.html` currently serves a static landing page; the React app
  (`App.tsx`, mounted via `index.tsx`) is present and type-checks
  (`npx tsc --noEmit` is clean) but is not wired into `index.html`. To run
  the full interactive demo, add `<div id="root"></div>` and
  `<script type="module" src="/index.tsx"></script>` to `index.html`
  before the closing `</body>`.

## License

Apache-2.0 (see LICENSE).
