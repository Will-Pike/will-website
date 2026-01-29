import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | William Pike",
  description:
    "Learn about William Pike's background, experience, and expertise in software product management and technical leadership.",
};

export default function AboutPage() {
  const experience = [
    {
      role: "Software Product Manager",
      company: "TriggerPoint Media",
      location: "Austin, Texas",
      description:
        "Leading product strategy for 2-sided marketplace platform for digital OOH marketing.",
    },
  ];

  const education = [
    {
      institution: "AWS",
      program: "Certified Solutions Architect – Associate",
      year: "Obtained May 2025",
      courses: [],
    },
    {
      institution: "Austin Community College",
      program: "Computer Science, Computer Programming",
      year: "2007-2009",
      courses: [],
    },
  ];

  const skills = [
    "Software Product Management",
    "Product Strategy & Roadmaps",
    "SaaS Development",
    "Payments Integration",
    "Cross-functional Leadership",
    "Agile/Scrum",
    "Data-Driven Decision Making",
    "AWS Solutions Architecture",
  ];

  const languages = [
    { name: "English", level: "Native" },
  ];

  const products = [
    {
      name: "SignJet",
      logo: "/img/signjet.png",
      company: "Digital Touch Systems",
      url: "https://signjet.com",
    },
    {
      name: "SavvyDisplays",
      logo: "/img/savvydisplays.png",
      company: "TriggerPoint Media",
      url: "https://savvydisplays.com",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="mb-8 text-4xl font-bold text-neutral-900">About Me</h1>

        {/* Bio Section */}
        <section className="mb-16">
          <div className="mb-12 md:flex md:gap-12 md:items-start">
            <div className="mb-8 md:mb-0 md:flex-shrink-0">
              <Image
                src="/img/will-headshot.jpg"
                alt="William Pike"
                width={300}
                height={300}
                className="rounded-lg shadow-lg w-full md:w-[280px] object-cover"
                priority
              />
            </div>
            <div className="flex-1">
              <p className="mb-6 text-lg leading-relaxed text-neutral-600">
                I&apos;m a vision-driven Software Product Manager and technical leader
                with proven expertise in building and scaling SaaS products. Based in
                Austin, Texas, I specialize in aligning business strategy with
                technical execution to deliver measurable results.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-neutral-600">
                My expertise spans software product management, payments integration,
                digital signage platforms, and leading cross-functional teams through
                rapid growth. I&apos;ve increased software revenue 100x, scaled
                deployments from 800 to 3000+ locations, and successfully integrated
                platforms following company acquisitions.
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-neutral-600">
            Throughout my career, I&apos;ve focused on launching innovative
            products, leveraging data-driven insights, and mentoring teams to
            achieve excellence. I believe great products are built through a
            combination of strategic vision, technical expertise, and a deep
            understanding of user needs.
          </p>
        </section>

        {/* Products Section */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-20 items-center justify-center">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    width={180}
                    height={72}
                    className="h-auto w-auto max-h-20 object-contain"
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-center text-neutral-900">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-center text-neutral-500">
                  {product.company}
                </p>
              </a>
            ))}
          </div>
        </section>
          
        {/* Experience Section */}
        <section className="mb-16">
          <p className="mb-6 text-lg leading-relaxed text-neutral-600">
            My expertise spans software product management, payments integration,
            digital signage platforms, and leading cross-functional teams through
            rapid growth. I&apos;ve increased software revenue 100x, scaled
            deployments from 800 to 3000+ locations, and successfully integrated
            platforms following company acquisitions.
          </p>
          <p className="text-lg leading-relaxed text-neutral-600">
            Throughout my career, I&apos;ve focused on launching innovative
            products, leveraging data-driven insights, and mentoring teams to
            achieve excellence. I believe great products are built through a
            combination of strategic vision, technical expertise, and a deep
            understanding of user needs.
          </p>
        </section>

        {/* AWS Certification Badge */}
        <section className="flex justify-center pt-8">
          <a
            href="https://www.credly.com/badges/018c7256-1a42-46a2-bcaa-a7987d4c6d2d"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-lift inline-block"
          >
            <Image
              src="/img/aws-saa-badge.png"
              alt="AWS Certified Solutions Architect - Associate"
              width={150}
              height={150}
              className="w-[150px] h-auto"
            />
          </a>
        </section>
      </div>
    </div>
  );
}
