// All copy for the site lives here, so wording changes never touch layout code.
// Quotes in `notes` are Scott's own words: keep them verbatim.

export const site = {
  name: "Scott Galetto",
  role: "AI-fluent design technologist",
  city: "Chicago",
  email: "scottgaletto@gmail.com",
  linkedin: "https://www.linkedin.com/in/scottgaletto",
  resumeUrl: null as string | null, // set when the PDF is ready
  nav: [
    { href: "#flow", label: "Approach" },
    { href: "#work", label: "Work" },
    { href: "#notes", label: "Notes" },
    { href: "#contact", label: "Contact" },
  ],
};

export const opening = {
  prompt: "Write a portfolio homepage for Scott Galetto.",
  genericDraft:
    "Hi, I'm a passionate, results-driven creative who loves pushing boundaries.",
  draftTag: "AI draft. Not quite.",
  headline: "AI drafts. People make it great.",
};

export const flow = {
  title: "How the work flows",
  steps: [
    { title: "Inputs", body: "Messy, repetitive work." },
    {
      title: "AI connects to your business",
      body: "It learns your data, brand assets, style and tone, then writes the first draft.",
    },
    {
      title: "Human judgment",
      body: "A person reviews, edits, adds context, and brings creativity and empathy.",
    },
    { title: "A better result", body: "Approved, polished, and more human." },
  ],
  // index of the step where the page floods with colour
  floodAt: 2,
};

export const brand = {
  title: "The brand system is the brief.",
  brief:
    "Same prompt every time: “Design the ‘order ready’ screen for our grocery pickup app.” The only thing that changes is what the agent can read.",
  forPeople: ["Brand-Guidelines.pdf", "Launch-Deck.pdf", "Photo-Library/"],
  forAgents: [
    { key: "readme", file: "README.md", note: "which file to open for which job" },
    { key: "tokens", file: "tokens.json", note: "colour, type, corners, spacing" },
    { key: "voice", file: "voice.yaml", note: "tone, and why" },
    { key: "guard", file: "guardrails.yaml", note: "what a screen may never do" },
    { key: "comps", file: "components/", note: "real parts from the product" },
  ],
  disclaimer: "Fieldstone Market is fictional. The idea isn’t.",
  screen: {
    genericTitle: "Your order is ready!",
    brandTitle: "Bay 3. We’ll hold it until 7 pm.",
    genericSub: "Pickup code",
    brandSub: "Show this at the bay",
    code: "4729",
    order: "Order #1182",
    swap: "2 items need your OK",
    promo: "Get 20% off your next order",
    rate: "How did we do? ★★★★★",
  },
} as const;

export const specs = {
  tag: "Early beta",
  title: "So I built the working version.",
  body: "It’s called Specs. It turns a logo, a website, a PDF and some photos into a brand kit an AI can read, then art-directs posts from it and explains every choice.",
  url: "https://specs.humanbuiltai.work",
  cta: "Try Specs",
};

export const work = {
  title: "Same instinct, before AI.",
  cases: [
    {
      year: "2021",
      name: "CreditNinja",
      line: "A 15-minute loan form, rebuilt as a conversation you can finish on your phone.",
    },
    {
      year: "2018",
      name: "Aon Horizon",
      line: "A climate-risk tool where the map is the interface and time is a control.",
    },
  ],
  soon: "Case study soon",
};

export const notes = {
  title: "Notes on now",
  entries: [
    {
      date: "2026-11",
      label: "Nov 2026",
      text: "The tools are changing, but the imagination behind them matters more than ever.",
    },
    {
      date: "2026-11",
      label: "Nov 2026",
      text: "The opportunity isn’t to resist the change. It’s to discover what we can create because of it.",
    },
    {
      date: "2026-11",
      label: "Nov 2026",
      text: "The tools and models will continue to advance. Right now, a human still needs to evoke the creative spark. That may not always be the case.",
    },
  ],
};

export const contact = {
  title: "Have something to figure out?",
};
