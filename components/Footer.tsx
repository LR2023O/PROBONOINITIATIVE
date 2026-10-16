export default function Footer({ name, note }: { name: string; note: string }) {
  return (
    <footer className="bg-pbi-900 text-pbi-100/80">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-serif text-base text-white">{name}</p>
          <p>
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-pbi-100/60">{note}</p>
      </div>
    </footer>
  );
}
