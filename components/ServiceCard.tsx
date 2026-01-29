interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white p-8 hover-lift shadow-sm hover:shadow-glow hover:border-accent-200 transition-all duration-300">
      <h3 className="mb-3 text-xl font-semibold text-neutral-900 group-hover:text-accent-700 transition-colors">{title}</h3>
      <p className="mb-4 text-neutral-600 leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-neutral-600">
              <svg
                className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500 group-hover:text-accent-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
