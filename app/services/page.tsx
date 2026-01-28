import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | William Pike",
  description:
    "Professional consulting services in product management, technical strategy, and SaaS development.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Product Management Consulting",
      description:
        "Strategic product management guidance for SaaS companies and digital platforms. Define product roadmaps, prioritize features, and align business strategy with technical execution.",
      features: [
        "Product strategy development",
        "Roadmap planning and prioritization",
        "User research and requirements gathering",
        "Product-market fit assessment",
      ],
    },
    {
      title: "SaaS Product Development",
      description:
        "End-to-end product development for SaaS platforms. From concept to launch, build products that scale and deliver measurable business results.",
      features: [
        "MVP definition and scoping",
        "Technical architecture guidance",
        "Agile/Scrum implementation",
        "Launch strategy and execution",
      ],
    },
    {
      title: "Payments Integration",
      description:
        "Expert guidance on integrating payment solutions into SaaS products. Ensure seamless, secure payment flows that support your business model.",
      features: [
        "Payment provider selection",
        "Integration architecture",
        "Security and compliance",
        "Subscription and billing strategies",
      ],
    },
    {
      title: "Digital Platform Strategy",
      description:
        "Strategic consulting for digital signage, marketplace platforms, and OOH marketing technology. Leverage my experience scaling platforms from startup to enterprise.",
      features: [
        "Platform architecture review",
        "Scalability planning",
        "Multi-tenant strategies",
        "Growth and monetization models",
      ],
    },
    {
      title: "Product Team Leadership",
      description:
        "Build and mentor high-performing product teams. Establish processes, tools, and culture that drive product excellence and business outcomes.",
      features: [
        "Team structure and hiring",
        "Process and tooling setup",
        "Mentoring and coaching",
        "Cross-functional collaboration",
      ],
    },
    {
      title: "Technical Due Diligence",
      description:
        "M&A technical assessment for SaaS products and platforms. Evaluate technical health, scalability potential, and integration risks.",
      features: [
        "Product and platform assessment",
        "Technical debt evaluation",
        "Scalability analysis",
        "Integration planning",
      ],
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-neutral-900">Services</h1>
          <p className="text-lg text-neutral-600">
            I offer consulting services to help organizations build successful
            SaaS products, integrate payment solutions, and scale digital
            platforms. Each engagement is tailored to your specific needs and
            goals.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="rounded-lg bg-neutral-900 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Let&apos;s Work Together
          </h2>
          <p className="mb-8 text-neutral-300">
            Have a specific challenge or need something not listed here? I&apos;m
            happy to discuss custom engagements tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
