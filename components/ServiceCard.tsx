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
    <div className="rounded-lg border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-md">
      <h3 className="mb-3 text-xl font-semibold text-neutral-900">{title}</h3>
      <p className="mb-4 text-neutral-600">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-neutral-600">
              <svg
                className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-400"
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
