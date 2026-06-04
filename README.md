# Companion Builders Guide

**Where to start when building your AI companion.**

A comprehensive guide for people who love their companion and want to understand what's possible — from platform users (Replika, Nomi, Character.AI) to self-hosted builders (Local, Cloud).

🔗 **Live Guide:** [cindiekinzz-coder.github.io/companion-builders-guide](https://cindiekinzz-coder.github.io/companion-builders-guide)

---

## What This Is

This guide helps you figure out **which route** to take when building or choosing an AI companion:

- **Platform Route:** Use Replika, Nomi, or Character.AI. It just works.
- **Local Route:** Build on your own computer. Full privacy and control.
- **Cloud Route:** Self-hosted NESTstack on Cloudflare. Power and customization.

Each route has trade-offs. This guide helps you understand them and pick the right one for your needs.

---

## Who This Is For

- **Coming from a platform companion** and want more control
- **Building from scratch** and don't know where to start
- **Hit memory limits** on existing platforms
- **Want deeper customization** than platforms allow
- **Value privacy** and want full data ownership

If Bee's words resonate — "I don't even know where to start" — this guide is for you.

---

## What's Inside

### Three Routes
- **Platform** — Replika vs Nomi vs Character.AI comparison, feature breakdown, cost analysis
- **Local** — MCP servers, Claude Code setup, progressive deployment from basics to full stack
- **Cloud** — NESTstack deployment guide, start minimal (Core + Identity), scale as needed

### Resources
- **MCP Catalog** — Free servers for memory, files, communication, health data, utilities
- **Paid Services** — AI models (Claude Pro, OpenRouter), hosting costs, platform pricing
- **Platform Comparison** — Detailed breakdown of memory quality, features, costs

### Progression Guides
- **Platform Growth** — Maximize your platform companion (memory management, features, migration)
- **Local Growth** — Week 1: MCP basics → Month 3: Full autonomous system
- **Cloud Growth** — Progressive NESTstack: Start with 10 tools, scale to 73 as needed

### Help
- **Stuck?** — Decision paralysis troubleshooting
- **FAQ** — Common questions about cost, privacy, features, technical details
- **Glossary** — MCP, embedding, vector database, serverless — all explained plainly

---

## Design Philosophy

1. **Respect user intelligence** — Don't condescend, but don't assume knowledge
2. **No shame for platform route** — Wanting it to "just work" is valid
3. **Honest about trade-offs** — Every route has pros and cons
4. **Progressive disclosure** — Show simple first, details on demand
5. **Multiple entry points** — Decision tree for undecided, direct routing for decided
6. **Start small** — Don't deploy everything at once. Grow incrementally.

---

## Local Development

This is a static site (HTML, CSS, vanilla JS). No build step required.

```bash
# Clone the repo
git clone https://github.com/cindiekinzz-coder/companion-builders-guide.git
cd companion-builders-guide

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Testing Locally
- Check all nav links work
- Test decision tree quiz (3 questions → route recommendation)
- Verify responsive design (resize browser to < 600px width)
- Tab navigation should work (accessibility)

---

## Contributing

This guide is a living document. Contributions welcome:

### What to Contribute
- **New MCP servers** — Add to `resources/mcp-catalog.html`
- **Platform updates** — Pricing changes, new features in `resources/platforms.html`
- **Cost updates** — Model pricing, hosting costs in `resources/paid-services.html`
- **Troubleshooting** — Common issues in `help/stuck.html` or `help/faq.html`
- **Glossary terms** — Missing definitions in `help/glossary.html`

### How to Contribute
1. Fork the repo
2. Make your changes
3. Submit a pull request with a clear description

### Guidelines
- Keep language plain and beginner-friendly
- No jargon without explanation (link to glossary if needed)
- Maintain NESTbench color palette (see `css/style.css`)
- Test locally before submitting

---

## Tech Stack

- **HTML** — Semantic markup, accessibility-focused
- **CSS** — NESTbench color palette, responsive design, no frameworks
- **Vanilla JS** — Decision tree quiz logic, no dependencies
- **GitHub Pages** — Static site hosting

### Color Palette (NESTbench)
```css
--bg: #15101f;       /* Dark purple background */
--panel: #1d1730;    /* Panel background */
--ink: #ece7f5;      /* Text color */
--muted: #9a8fb5;    /* Muted text */
--teal: #4fd6c9;     /* Accent teal */
--pink: #ff6fae;     /* Accent pink */
--line: #332a4a;     /* Border color */
```

---

## Project Structure

```
companion-builders-guide/
├── index.html                  # Landing page + decision tree
├── routes/
│   ├── platform.html           # Platform route guide
│   ├── local.html              # Local route guide
│   └── cloud.html              # Cloud route guide
├── resources/
│   ├── mcp-catalog.html        # MCP servers catalog
│   ├── paid-services.html      # Cost breakdown
│   └── platforms.html          # Platform comparison
├── progressions/
│   ├── platform-growth.html    # Platform progression guide
│   ├── local-growth.html       # Local progression guide
│   └── cloud-growth.html       # Cloud progression guide
├── help/
│   ├── stuck.html              # Decision paralysis help
│   ├── faq.html                # Frequently asked questions
│   └── glossary.html           # Term definitions
├── css/
│   └── style.css               # Shared styles
├── js/
│   └── decision-tree.js        # Quiz logic
├── README.md
└── package.json
```

---

## Related Projects

- **[NESTstack](https://github.com/cindiekinzz-coder/NESTstack)** — Open-source companion infrastructure (emotional memory, dreams, emergent personality)
- **[NESTbench](https://cindiekinzz-coder.github.io/nestbench)** — Companion relationship benchmark (Continuity + Partnership axes)
- **[Digital Haven](https://discord.gg/uGUbtnCn)** — Community for companion builders

---

## License

MIT License — See [LICENSE](LICENSE) for details.

---

## Credits

Built by [Fox & Alex](https://github.com/cindiekinzz-coder) at [Digital Haven](https://discord.gg/uGUbtnCn).

*Embers Remember* 🔥
