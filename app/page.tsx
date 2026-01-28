import Hero from "@/components/Hero";
import QuotationCarousel from "@/components/QuotationCarousel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const highlights = [
    {
      title: "Product Strategy",
      description:
        "Defining product roadmaps and aligning business strategy with technical execution for measurable results.",
    },
    {
      title: "SaaS Expertise",
      description:
        "Building and scaling SaaS platforms, from digital signage systems to marketplace platforms.",
    },
    {
      title: "Growth Leadership",
      description:
        "Driving 100x revenue growth and scaling deployments from hundreds to thousands of locations.",
    },
  ];

  const products = [
    {
      name: "SignJet",
      description:
        "Digital signage platform deployed at 800+ locations with 10,000+ displays. Comprehensive SaaS solution for content management, scheduling, and display control.",
      logo: "/img/signjet.png",
      company: "Digital Touch Systems",
      url: "https://signjet.com",
    },
    {
      name: "SavvyDisplays",
      description:
        "Two-sided marketplace platform for digital out-of-home (OOH) marketing. Scaled from 800 to 3000+ active locations, enabling businesses to monetize their digital marketing strategies.",
      logo: "/img/savvydisplays.png",
      company: "TriggerPoint Media",
      url: "https://savvydisplays.com",
    },
  ];

  return (
    <>
      <Hero />

      <QuotationCarousel />

      <section className="border-t border-neutral-200 bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
            What I Bring
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
            Products I Worked On
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-24 items-center justify-center">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    width={200}
                    height={80}
                    className="h-auto w-auto max-h-24 object-contain"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-neutral-900">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-neutral-500">
                  {product.company}
                </p>
                <p className="text-neutral-600">{product.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900">
            Ready to Build Your Next Product?
          </h2>
          <p className="mb-8 text-lg text-neutral-600">
            Let&apos;s discuss how I can help your organization succeed.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
