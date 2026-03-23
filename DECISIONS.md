# DECISIONS.md - Architectural Decision Log

> Record significant decisions to prevent re-debating them later.
> Not auto-loaded. Claude writes here when making architectural choices.
> To load automatically every session, add `@DECISIONS.md` to CLAUDE.md.

> **When to log:** choosing a library/framework, designing an API, selecting an auth approach, changing a data model, making a build/deploy decision.

---

## ADR Format

Format: Lightweight

---

### Hosting: Cloudflare Pages | 2026-03-22 | Status: Active
Chose: Cloudflare Pages over GitHub Pages, Netlify, Azure Static Web Apps. Why: Domain DNS already managed on Cloudflare — zero CNAME configuration, free tier, global CDN. Tradeoff: Slightly more opinionated deploy pipeline than raw GitHub Pages, but offset by DNS integration. Reversal cost: Low — static files deploy anywhere.

### Build tooling: None (plain HTML/CSS) | 2026-03-22 | Status: Active
Chose: Plain HTML/CSS with no build step over static site generators (11ty, Astro, Hugo). Why: Single-page site that changes rarely — zero dependencies means near-zero maintenance. Tradeoff: No templating or component reuse, but unnecessary at this scale. Reversal cost: Low — can add a generator later if scope grows.

### CSS approach: Optional minified library | 2026-03-22 | Status: Active
Chose: Allow optional minified CSS library (e.g., Pico, Water.css) over hand-written-only or framework CSS. Why: Clean baseline typography and reset without framework weight. Specific library TBD at implementation. Tradeoff: Minor external dependency. Reversal cost: Low.

### Contact method: Plain email link | 2026-03-22 | Status: Active
Chose: Plain mailto link (contact@tiberiusascent.com) over contact form. Why: No backend or third-party form service needed. Due diligence visitors expect email, not forms. Tradeoff: No spam filtering on inbound — acceptable at expected volume. Reversal cost: Low.

### Brand positioning: Neutral "technology ventures" | 2026-03-22 | Status: Active
Chose: Neutral positioning ("technology ventures") over AI/agentic-focused messaging. Why: Let subsidiaries define their own positioning. Holding company site stays evergreen regardless of market trends. Tradeoff: Misses potential signal to AI-aware visitors. Reversal cost: Low — copy change only.

---

## Known Debt

> Record shortcuts, workarounds, and deferred quality work here. Claude logs debt when implementing workarounds. `/aam-milestone` surfaces the debt list alongside scope drift.

| ID | Description | Impact | Logged | Sprint |
|---|---|---|---|---|
<!-- Debt entries go here -->
