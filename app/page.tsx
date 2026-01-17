import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const highlights = [
    {
      title: "Strategic Leadership",
      description:
        "Setting R&D objectives and establishing quality governance structures for engineering organizations.",
    },
    {
      title: "Operational Excellence",
      description:
        "Improving system reliability and production operations through proven methodologies.",
    },
    {
      title: "Team Development",
      description:
        "Mentoring engineers and building high-performing teams across organizational domains.",
    },
  ];

  return (
    <>
      <Hero />

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
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900">
            Ready to Transform Your Engineering Organization?
          </h2>
          <p className="mb-8 text-lg text-neutral-600">
            Let&apos;s discuss how I can help your team achieve its goals.
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
