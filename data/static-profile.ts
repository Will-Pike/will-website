export interface StaticProfile {
  name: string;
  title: string;
  location: string;
  status: string;
  summary: string;
  skills: {
    strong: string[];
    moderate: string[];
    gaps: string[];
  };
  education: { school: string; degree: string }[];
  suggestedQuestions: string[];
}

export const staticProfile: StaticProfile = {
  name: "Grady Karp",
  title: "Distinguished Technical Fellow | Technical Chief of Staff",
  location: "Seattle, WA",
  status: "Open to executive advisory, fractional CTO, and consulting engagements",

  summary: `Strategic technology and business leader operating at the intersection of architecture, organizational design, and product strategy. Expert in defining and executing multi-year engineering strategies, establishing architectural governance, and shaping high-scale R&D operating models.`,

  skills: {
    strong: [
      "Multi-year engineering strategy",
      "Architecture (Domain-Driven Design, distributed systems, cloud)",
      "Organizational design & operating models",
      "Executive advisory (CTO/C-suite)",
      "Scaling engineering orgs (400+ teams, 2000+ staff)",
      "Technical governance frameworks",
      "Mentoring senior ICs, architects, and managers",
      "Cross-functional alignment in ambiguous environments",
      "Portfolio management & prioritization frameworks",
    ],
    moderate: [
      "Hands-on coding (Node.js, Python, Java, JavaScript)",
      "Cost transformation & unit economics",
      "Product management",
      "API design and service boundaries",
      "Developer velocity and SDLC optimization",
    ],
    gaps: [
      "Recent hands-on IC work (leadership-focused for 10+ years)",
      "Deep ML/AI implementation (strategic perspective, not hands-on practitioner)",
      "Startup founder experience (advisor/employee, not founder)",
    ],
  },

  education: [
    { school: "Stanford University", degree: "B.S. Cognitive Science" },
    { school: "INSEAD", degree: "MBA, International Product Development" },
  ],

  suggestedQuestions: [
    "Would Grady be a good fit for a fractional CTO role at a Series B startup?",
    "How did Grady scale Indeed's SMB engineering org from 23 to 85 people?",
    "What's Grady's experience with organizational transformation and operating models?",
    "Tell me about Grady's work on Amazon Echo - what was his role?",
  ],
};
