export const willProfile = {
  name: "William Pike",
  title: "Software Product Manager | Technical Leader",
  location: "Austin, TX",
  status: "Open to product management, consulting, and technical leadership opportunities",

  summary: `Vision-driven change agent with proven expertise in software product management, business analysis, and software development. Exceptional track record of aligning business strategy with technical execution to deliver measurable results. Expert in payments integration, SaaS product development, and leading cross-functional teams through rapid growth and transformation.`,

  experience: [
    {
      company: "TriggerPoint Media",
      role: "Software Product Manager",
      period: "December 2022 – Present",
      highlights: [
        "Product Strategy lead for 2-sided marketplace platform for digital OOH marketing (SavvyDisplays)",
        "Launched new product enabling businesses to monetize digital marketing strategies",
        "Managed software conversion, increasing active locations from 800 to 3000+",
        "Facilitated merger of software platforms following company acquisition",
        "Lead end-to-end product development and delivery of roadmaps for releases",
        "Partner with senior leadership to define business needs and product requirements",
        "Consolidated product operations tools to maximize team efficiency",
      ],
      aiContext: [{
        situation:
          "TriggerPoint Media needed to scale their digital OOH marketplace platform and integrate acquired company's software",
        approach:
          "End-to-end product management, cross-functional collaboration, and strategic platform consolidation",
        technicalWork:
          "2-sided marketplace platform, digital OOH advertising technology, business monetization tools",
        lessonsLearned:
          "Successful acquisitions require technical acumen combined with strong product vision and cross-team collaboration",
      }],
    },
    {
      company: "Digital Touch Systems",
      role: "Software Product Manager",
      period: "September 2015 – December 2022",
      highlights: [
        "Launched digital signage platform deployed at 800+ locations with 10,000+ displays",
        "Launched digital menu and ordering system used by major restaurant chains like Subway",
        "Increased software revenue 100x from $30,000 to $3,000,000 annually",
        "Led comprehensive testing and quality assurance for three proprietary SaaS products",
        "Generated data visualizations to inform product decisions and roadmap planning",
        "Managed and mentored Development, Support, and Client Relations teams",
        "Delivered custom software solutions, client training, and consultations",
        "Administered Network and IT solutions, evaluated hardware for unique client scenarios",
      ],
      aiContext: [{
        situation:
          "Digital Touch Systems needed to scale their digital signage and menu ordering products from early stage to enterprise deployment",
        approach:
          "Product-led growth strategy, comprehensive testing framework, team leadership, and data-driven decision making",
        technicalWork:
          "SaaS digital signage platform, digital menu ordering system, cloud-based content management",
        lessonsLearned:
          "100x revenue growth requires balancing product vision, operational excellence, and team development",
      }],
    },
    {
      company: "Visual Innovations",
      role: "Programming Engineer",
      period: "November 2014 – December 2017",
      highlights: [
        "Conceptualized and created hardware solutions for Audio-Visual installations",
        "Produced CAD drawings to diagram AV solutions",
        "Programmed control systems to interact with AV hardware",
        "Designed touchscreen user interfaces for AV control systems",
      ],
      aiContext: [{
        situation:
          "Visual Innovations needed integrated hardware and software solutions for AV installations",
        approach:
          "Full-stack approach combining hardware design, control system programming, and UI/UX design",
        technicalWork:
          "AV control systems, touchscreen interfaces, CAD design, hardware integration",
        lessonsLearned:
          "Successful AV solutions require tight integration between hardware capabilities and user experience",
      }],
    },
    {
      company: "Digital Touch Systems",
      role: "QA Engineer Associate",
      period: "September 2014 – September 2015",
      highlights: [
        "Tested new software features for quality and ease of use",
        "Improved digital menu ordering system concept and functionality",
        "Leveraged service industry experience to enhance product usability",
      ],
      aiContext: [{
        situation:
          "Digital Touch Systems was developing a digital menu ordering system that needed real-world validation",
        approach:
          "Quality-focused testing combined with domain knowledge from service industry experience",
        technicalWork:
          "Software testing, usability evaluation, digital menu ordering systems",
        lessonsLearned:
          "Domain expertise significantly improves product quality and user experience",
      }],
    },
  ],

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

  suggestedQuestions: [
    "How did William increase software revenue 100x at Digital Touch Systems?",
    "What's William's experience with payments integration for SaaS products?",
    "Tell me about William's work managing the acquisition and merger at TriggerPoint Media",
    "How did William scale from 800 to 3000+ locations?",
    "What kind of digital signage and menu ordering systems has William built?",
  ],
};

export type WillProfile = typeof willProfile;
