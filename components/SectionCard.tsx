
export default function SectionCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string | string[];
}) {
  return (
    <div className="group h-full rounded-2xl border border-pbi-100 bg-white p-7 text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pbi-100 text-2xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mb-3 font-serif text-xl font-bold text-pbi-800">
        {title}
      </h3>

      {Array.isArray(body) ? (
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-600">
          {body.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
          {body}
        </p>
      )}
    </div>
  );
}
