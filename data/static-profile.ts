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
  testimonials: { text: string; attribution: string }[];
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
      "Clean escalations for fast decision-making and tie-breaking",
      "Reliability engineering and culture of operational excellence"
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
      "Deep infrastructural knowledge (e.g., K8s, Terraform, networking, etc.) -- passing knowledge at best."
    ],
  },

  education: [
    { school: "Stanford University", degree: "B.S. Cognitive Science" },
    { school: "INSEAD", degree: "MBA, International Product Development" },
  ],

  testimonials: [
    {
      text: "If imitation is the highest form of flattery then I can say nothing better about Grady than that I have attempted to manage my employees in the same way that he managed me.",
      attribution: "Co-founder and CTO, HouseWhisper",
    },
    {
      text: "[Grady] challenges assumptions, asks the right questions, and helps you arrive at better answers yourself. His guidance is always practical, rooted in decades of real experience across engineering and product leadership. I'm one of many people he's invested in this way. His willingness to mentor across the organization speaks to who he is.",
      attribution: "Senior Manager, Software Engineering, Indeed.com",
    },
    {
      text: "One thing that stands out about Grady is how deeply he cares about quality and engineering hygiene. He's not someone who tolerates shortcuts or technical debt as a way of life. He instills a discipline around code quality, testing practices, and sustainable engineering that elevates entire organizations. It's not about perfectionism. It's about building things right so they last.",
      attribution: "Senior Manager, Software Engineering, Indeed.com",
    },
    {
      text: "Grady has a rare ability to operate across the full spectrum. He never loses sight of the bigger picture while still engaging meaningfully with the details that matter.",
      attribution: "Senior Manager, Software Engineering, Indeed.com",
    },
    {
      text: "[Grady] championed clear standards, thoughtful architectural decisions, and long-term technical health, all while empowering those around him to grow and excel .. his influence extended far beyond individual initiatives—he strengthened the engineering culture itself through his leadership, judgment, and commitment to building durable, scalable systems.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "When teams and other leaders encountered challenging trade-offs, conflicting goals between product and engineering, complicated large-scale technical initiatives, Grady was consistently the person they sought out for clarity and direction.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "He brought structure, clarity, and accountability to complex technical landscapes, ensuring that quality was not an aspiration but an operational reality.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "I have been extremely fortunate to experience firsthand what it means to work with an incredibly empathetic leader. Working with Grady was one of the most impactful experiences of my career.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "What truly sets Grady apart ... is his leadership style. He operates across the full spectrum, never losing sight of the big picture while engaging meaningfully with the details. He leads through trust and delegation, creating a culture of high expectations while genuinely investing in the growth of his people. He has a relentless focus on business outcomes, ensuring that technical improvements always serve the company's broader goals. Grady is a visionary leader who drives systematic improvement with wisdom and clarity.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "Grady was instrumental in elevating Domain-Driven Design from a niche interest to a strategic priority for senior executive leadership... Grady was always a clear, articulate, and pragmatic voice for modernization.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "When teams faced difficult trade-offs between product goals and engineering rigor, Grady was the clear voice of reason we turned to for direction.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "[Grady] was ... an innovator in how we worked, pioneering the application of LLMs to improve design review quality and ensuring that complex technical decisions were communicated effectively to stakeholders across the business.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "An empathetic mentor and a leader, Grady is the rare executive who can 'ride the software architecture elevator' between the board room and the 'engine room' where theory collides with the realities of a sprawling engineering organization.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "[Grady's] ability to seamlessly navigate between people leadership and profound technical contribution makes him exceptionally versatile and valuable in any complex engineering environment.",
      attribution: "Senior Manager, Technical Program Management, Indeed.com",
    },
    {
      text: "[Grady] builds bridges across organizational boundaries that others struggle to navigate, earning trust from engineering teams, product leadership, and executive stakeholders alike. His focus is always squarely on what's best for the business—not politics, not ego.",
      attribution: "Senior Manager, Technical Program Management, Indeed.com",
    },
    {
      text: "What sets Grady apart is his rare ability to cut through complexity and identify the critical technical bottlenecks that, once resolved, unlock significant delivery velocity for entire organizations. He doesn't just solve problems—he solves the *right* problems.",
      attribution: "Senior Manager, Technical Program Management, Indeed.com",
    },
    {
      text: "Grady is a rare kind of technical leader: strategic, compassionate, and genuinely committed to helping others grow.",
      attribution: "Product Director, Indeed.com",
    },
    {
      text: "What impressed me most was how consistently [Grady] supported and elevated the people around him. In moments of organizational change or uncertainty, Grady was the kind of leader who stepped in, provided clarity, and ensured teams and individuals had what they needed to succeed.",
      attribution: "Product Director, Indeed.com",
    },
    {
      text: "[Grady] was my go-to for escalations and for talking through cross-team challenges, and I always appreciated how unbiased he was. I learned a lot from him about driving alignment across groups.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "I've grown significantly in my role and in my career under his mentorship, and I'm deeply grateful for the time and care he invested in me.",
      attribution: "Principal Software Engineer (Machine Learning), Indeed.com",
    },
    {
      text: "Grady has a rare ability to quickly understand complex systems, identify the real bottlenecks, and translate those insights into a clear, immediately actionable set of improvements.",
      attribution: "Principal Software Engineer (Machine Learning), Indeed.com",
    },
    {
      text: "I'm very fortunate to have had Grady as my mentor. Despite working in different areas of the company, he consistently invested time in helping me and my team improve our engineering and operational practices.",
      attribution: "Principal Software Engineer (Machine Learning), Indeed.com",
    },
    {
      text: "Grady has a unique combination of strong technical breadth and depth coupled with practical leadership skills, and is always able to connect technical goals directly to business objectives.",
      attribution: "Senior Director of Engineering, Indeed.com",
    },
    {
      text: "[Grady] impressed me as an open minded engineer leader and a seasoned people manager—transparent, yet with a unique ability to keep his team motivated.",
      attribution: "Senior Director of Engineering, Indeed.com",
    },
    {
      text: "As a Distinguished Technical Fellow, Grady was instrumental in identifying key technical domains across R&D systems.",
      attribution: "Senior Director of Engineering, Indeed.com",
    },
    {
      text: "Grady is a strategic and highly effective engineering leader with a rare ability to unifying teams across R&D to drive toward a clear, single technical direction.",
      attribution: "Senior Director of Engineering, Indeed.com",
    },
  ],

  suggestedQuestions: [
    "Would Grady be a good fit for a fractional CTO role at a Series B startup?",
    "How did Grady scale Indeed's SMB engineering org from 23 to 85 people?",
    "What's Grady's experience with organizational transformation and operating models?",
    "Tell me about Grady's work on Amazon Echo - what was his role?",
  ],
};
