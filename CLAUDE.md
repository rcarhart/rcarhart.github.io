# rcarhart.github.io — Personal Portfolio

Ross Carhart's personal portfolio website. Deployed on GitHub Pages at `https://rcarhart.github.io`. Static site — no build process, no framework, no backend.

## Tech Stack

- Vanilla HTML/CSS/JavaScript (no framework)
- particles.js v2.0.0 — animated particle background
- Font Awesome 6.5.1 (CDN)
- Google Fonts (Lato)
- Web3Forms — contact form submissions
- hCaptcha — spam protection on contact form
- Google Analytics GA4 (ID: `G-MC536JMFYS`)

## Running Locally

```bash
# Python
python -m http.server 8000

# Node
npx http-server
```

Then open `http://localhost:8000`.

## Deployment

GitHub Pages auto-deploys on push to `master`. No CI/CD pipeline. Changes are live within seconds of pushing.

```bash
git push origin master
```

Several feature branches exist (`claude`, `design_changes`, `googletag`, `references_carousel`, `custom_contact_form-redirect`). Use PRs to merge into master.

## Directory Structure

```
rcarhart.github.io/
├── index.html                  # Main portfolio page
├── resume.html                 # Standalone resume page
├── resources/
│   ├── particles.json          # Particle animation config
│   ├── js/
│   │   ├── app.js              # Dynamic subtitle cycling animation
│   │   ├── script.js           # Nav, form validation, scroll effects
│   │   ├── carousel.js         # References carousel
│   │   ├── contactform.js      # Form submission (mostly commented out)
│   │   └── particles.js        # Particle library
│   ├── css/
│   │   ├── style.css           # Main stylesheet (dark theme, responsive)
│   │   ├── grid.css            # Responsive grid system
│   │   └── images/             # Project screenshots and profile photos
│   └── docs/
│       └── Ross_Carhart_Resume.pdf
└── vendors/
    └── fonts/fontawesome-free-6.5.1-web/
```

## Page Sections (index.html)

1. Header — animated particles background, hamburger nav, dynamic subtitle cycling through "Data Visualization", "Data Engineering", "Analytics Engineering"
2. About — bio + horizontal career timeline (TruFoodMfg → GNC → Doner Media → Abercrombie & Fitch)
3. Stats banner — $5M+ cost savings, 200% subscription growth, 30% pipeline reduction, 8+ years experience
4. Visualizations — grid gallery of Tableau dashboards with screenshots
5. References — carousel with two testimonials (Pete Lawson, Nicole Peduto)
6. Contact — Web3Forms + hCaptcha form
7. Footer — GitHub, LinkedIn, Tableau, email links

## Styling Notes

- Dark theme: `#282525` background, `#eb0909` red accent
- Mobile breakpoint at 480px (hamburger menu, stacked layout)
- Responsive grid in `grid.css`; main styles in `style.css`

## External Services

| Service | Location | Purpose |
|---|---|---|
| Web3Forms | `index.html` line ~315 | Contact form submissions |
| hCaptcha | `index.html` | Bot protection on contact form |
| Google Analytics | Both HTML files | GA4 pageview tracking |
| Google Fonts | CDN in `<head>` | Lato font |
| Font Awesome | CDN in `<head>` | Icons |

## Key Behaviors

- `app.js` — fades the subtitle text in/out through a list of specialties on a timer
- `script.js` — handles hamburger toggle, smooth scroll-to-anchor, contact form captcha validation
- `particles.json` — controls particle density, speed, hover repulse, and click push effects; tweak this to change the header animation
