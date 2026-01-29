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
  name: "William Pike",
  title: "Software Product Manager | Technical Leader",
  location: "Austin, TX",
  status: "Open to product management, consulting, and technical leadership opportunities",

  summary: `Vision-driven change agent with proven expertise in software product management, business analysis, and software development. Exceptional track record of aligning business strategy with technical execution to deliver measurable results. Expert in payments integration, SaaS product development, and leading cross-functional teams through rapid growth and transformation.`,

  skills: {
    strong: [
      "Software Product Management",
      "Product Strategy & Roadmap Planning",
      "SaaS Platform Development",
      "Payments Integration",
      "Cross-functional Team Leadership",
      "Agile/Scrum Methodologies",
      "Data-Driven Decision Making",
      "Business Analysis & Requirements Gathering",
      "Stakeholder Management",
      "Digital Signage & OOH Marketing Technology",
      "Restaurant Technology & Menu Systems",
      "Team Mentoring & Development",
    ],
    moderate: [
      "Cloud Architecture (AWS, Azure, Google Cloud)",
      "Frontend Development (React, Angular, HTML/CSS/JS, Tailwind, Bootstrap, jQuery)",
      "Backend Development (Node.js, Python, Java, PHP)",
      "Database Design (MySQL, PostgreSQL, SQL Server, MongoDB)",
      "DevOps & Infrastructure (Pulumi, Terraform)",
      "Product Analytics (Tableau, Splunk)",
      "Project Management Tools (JIRA, Confluence, Monday, Figma)",
      "API Design & Integration (Postman)",
      "Monitoring & Debugging (Raygun)",
    ],
    gaps: [
      "Deep Machine Learning / AI implementation",
      "Mobile-first native app development (iOS/Android)",
      "Large-scale enterprise sales experience",
      "Deep experience with containerization (Docker, Kubernetes)",
    ],
  },

  education: [
    { school: "AWS", degree: "Certified Solutions Architect – Associate (Obtained May 2025)" },
    { school: "Austin Community College", degree: "Computer Science, Computer Programming (2007-2009)" },
    { school: "University of Texas at San Antonio", degree: "Mechanical Engineering (2005-2007)" },
  ],

  testimonials: [
    {
      text: "Will understood our vision and helped us realize our goals with his exceptional product management skills. His ability to bridge the gap between technical teams and business objectives was invaluable.",
      attribution: "VP of Marketing, Kwik Trip, Inc.",
    },
    {
      text: "Will is an exceptional product manager who combines deep technical knowledge with a keen understanding of market needs. His leadership was instrumental in driving our product's success.",
      attribution: "Founder and CEO, Digital Touch Systems",
    },
    // Add as many as you want
  ],

  suggestedQuestions: [
    "How did William increase software revenue 100x at Digital Touch Systems?",
    "What's William's experience with payments integration for SaaS products?",
    "Tell me about William's work managing the acquisition and merger at TriggerPoint Media",
    "How did William scale from 800 to 3000+ locations?",
    "What kind of digital signage and menu ordering systems has William built?",
  ],
};
