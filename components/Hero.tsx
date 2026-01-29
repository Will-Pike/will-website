import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-accent-50/30 to-white pt-24 pb-12 md:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-neutral-200/50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Product Leadership Meets{" "}
            <span className="text-gradient">Technical Excellence</span>
          </h1>
          <p className="mb-8 text-lg text-neutral-600 md:text-xl leading-relaxed">
            Software Product Manager and technical leader with a proven track record
            in SaaS development, digital platforms, and payments integration. I help
            organizations align business strategy with technical execution to deliver
            measurable results and drive growth.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-neutral-900 to-neutral-800 px-8 py-3.5 text-base font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              View Services
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-neutral-300 bg-white px-8 py-3.5 text-base font-medium text-neutral-900 transition-all hover:border-accent-500 hover:text-accent-700 hover:shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
