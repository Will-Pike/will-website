import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              William Pike
            </h3>
            <p className="text-neutral-600">
              Software Product Manager & technical leader helping organizations
              build successful SaaS products and scale digital platforms.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/will-pike-6b97a413a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-600 transition-colors hover:text-neutral-900"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} William Pike. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
