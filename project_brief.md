# Project Brief
Target for these days famous sport  
## 1. Website Concept
<!-- Fill in after Phase 2 — Defining the Project Brief -->

**Website Topic:**
Sports — with a primary focus on cricket and popular sporting events.
**Why:**
Sport is extremely popular around the world and attracts a large and diverse audience. Cricket, in particular, has millions of passionate fans who regularly follow matches, players, teams, results, and major sporting events. This website will provide an engaging and easy-to-use online experience for people who want to stay connected with the world of cricket and sports.
**Target Audience:**
Cricket fans and sports enthusiasts of different ages who enjoy following cricket matches, teams, players, competitions, and major sporting events.
**Visitor Outcome:**
Visitors will be able to explore sports and cricket-related information online in a simple and engaging way. The website will help users discover popular teams and players, learn about major competitions, and stay interested in the latest developments in the sport.
**Three Main Sections:**
Sport fan page, sport rules & how to guide , upcoming matches/season tracker
**Key Highlight:**
web development service in AI
---

## 2. Visual Plan
<!-- Fill in after Phase 3 — Visual Planning Prompt -->

**Mood and Tone:**
Modern, energetic, bold - a stadium-atmosphere vibe with streamlined tech/AI polish. Confident headlines, punchy contrast, clean spacing.

**Color Palette:**
- Background: `#F4F8FB` (blue-tinted white)
- Primary Text: `#0F1B2B` (navy)
- Brand Color: `#1E88E5` (electric blue)
- Accent: `#2ECC71` (pitch green)

**Typography:**
- Heading Font: Bebas Neue (or Montserrat bold/black) - condensed, sporty
- Body Font: Inter (or Roboto) - clean, modern, readable

**Layout Approach:**
Sticky navigation bar at top with smooth-scroll links to each section. Full-width hero with striking headline, tagline, and call-to-action Button. Sections rendered as responsive card grids:
- Fan page
- Rules & how-to guide
- Season tracker / matches
Footer with credits + "built with AI" note.

**Images & Graphics Style:**
High-energy cricket photos (action shots, stadium, pitch) in rounded-corner cards with subtle shadows; dark gradient overlay on hero images for text legibility; simple line SVG icons for the rules section.

**Button & UI Style:**
- Primary: filled pitch green `#2ECC71`, white text, rounded (8px), generous padding (14px 28px), soft shadow. Hover: lighter green + lift (translateY) + deeper shadow; active: press down.
- Secondary/Ghost: outlined 2px electric blue `#1E88E5`, transparent bg, blue text. Hover: fills blue, text off-white, subtle shadow.
- Both: visible focus ring (2px offset electric blue outline) for accessibility. One primary action per section; ghost for link-like actions.

---

## 3. Interaction Specifications

### Interaction 1
- **Interaction Name:** Sticky Nav Active Section Highlight
- **Visitor Action:** Scrolls through the page (hero → fan page → rules → matches)
- **Page Response:** The nav link for the section currently in view highlights in pitch green; the nav bar becomes sticky and gains a background + shadow after scrolling past the hero
- **HTML Elements:** `<nav id="navbar">`, nav links `<a class="nav-link" data-section="...">`, page sections `<section id="...">`
- **JS Event:** `scroll` (on window)
- **Function Name:** `highlightActiveSection()`
- **CSS Class Toggled:** `.active` (on nav links), `.scrolled` (on navbar)

### Interaction 2
- **Interaction Name:** Player Card Flip
- **Visitor Action:** Clicks/taps a player card on the fan page
- **Page Response:** The card flips (3D rotate) to reveal a stat/highlight on the back, then flips back to the front
- **HTML Elements:** card container `<div class="card">` with inner `<div class="card-inner">`, front `<div class="card-front">`, back `<div class="card-back">`
- **JS Event:** `click` (on each `.card`)
- **Function Name:** `flipCard()`
- **CSS Class Toggled:** `.flipped` (on `.card`)

### Interaction 3
- **Interaction Name:** Rules FAQ Accordion
- **Visitor Action:** Clicks/taps a rule question heading
- **Page Response:** The matching answer expands open or collapses; the icon rotates; only one section is open at a time
- **HTML Elements:** accordion item `<div class="acc-item">`, button `<button class="acc-btn">`, answer `<div class="acc-panel">`, icon `<span class="acc-icon">`
- **JS Event:** `click` (on each `.acc-btn`)
- **Function Name:** `toggleAccordion()`
- **CSS Class Toggled:** `.open` (on `.acc-item` / `.acc-panel`), `.rotate` (on `.acc-icon`)

### Interaction 4
- **Interaction Name:** Season Tracker Match Filters
- **Visitor Action:** Clicks a filter button: All / Won / Lost / Upcoming
- **Page Response:** Match cards re-filter to show only the selected status; the active filter button highlights in pitch green
- **HTML Elements:** filter buttons `<button class="filter-btn" data-status="...">`, match cards `<div class="match-card" data-status="...">`
- **JS Event:** `click` (on each `.filter-btn`)
- **Function Name:** `filterMatches()`
- **CSS Class Toggled:** `.active` (on filter button), `.hidden` (on `match-card`)

---

## 4. Architecture Plan

**HTML Structure Plan:**
index.html
- header > nav#navbar with nav-link[data-section] links (Home, Fan Page, Rules, Matches)
- main
  - section#hero (headline, tagline, CTA button)
  - section#fan (player card grid: .card > .card-inner > .card-front + .card-back)
  - section#rules (accordion: .acc-item > button.acc-btn + div.acc-panel with span.acc-icon)
  - section#matches (filter buttons .filter-btn[data-status] + .match-card[data-status] grid)
- footer (credits + "built with AI" note)

**CSS Architecture Plan:**
- Reset/Base: box-sizing, margin/padding zero, font smoothing, scroll-behavior smooth
- Variables: color palette (--bg #F4F8FB, --text #0F1B2B, --brand #1E88E5, --accent #2ECC71 + hover variants), fonts, spacing, border radii
- Typography: heading (Bebas Neue) + body (Inter) + heading/paragraph rules
- Layout: sticky nav, hero, and card grid utilities with responsive breakpoints
- Components: nav bar, buttons (primary + ghost), player card, accordion, match card, filter buttons
- Interactive/State styles: .active, .scrolled, .flipped, .open, .rotate, .hidden + hover/active/focus states

**JavaScript Function Map:**
| Function | Trigger | Manipulates |
|---|---|---|
| highlightActiveSection() | window scroll | nav links .active, navbar .scrolled |
| flipCard() | click on .card | that card .flipped |
| toggleAccordion() | click on .acc-btn | .acc-item/.acc-panel .open, .acc-icon .rotate |
| filterMatches() | click on .filter-btn | .match-card .hidden, filter buttons .active |

**Implementation Steps:**
1. Set up files (index.html, styles.css, script.js); link CSS in head and JS before </body>
2. Build HTML skeleton (header/nav, hero, three sections, footer)
3. Add content (headlines, player cards, rule Q&A, match cards)
4. Write CSS reset + variables (colors, fonts, spacing)
5. Style layout (nav, hero, section grids, responsive breakpoints)
6. Style components (buttons, cards, accordion, filters per visual plan)
7. Add interactive state classes (.active, .flipped, .open, .hidden)
8. Write JS (implement 4 functions + attach event listeners)
9. Test & polish (hover/active states, focus rings, mobile responsiveness)
