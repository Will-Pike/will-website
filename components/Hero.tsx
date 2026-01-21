import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-12 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Engineering Leadership for the Modern Era
          </h1>
          <p className="mb-8 text-lg text-neutral-600 md:text-xl">
            Executive-level technical & business leader with a track record of
            success in engineering leadership and operational excellence. I help
            organizations build high-performing engineering teams and achieve
            technical excellence.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
