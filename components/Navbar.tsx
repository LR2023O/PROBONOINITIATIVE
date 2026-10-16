import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({
  name,
  tagline,
  links,
}: {
  name: string;
  tagline: string;
  links: { label: string; href: string }[];
}) {
  return (
    <header className="sticky top-0 z-40 bg-pbi-900/95 text-white shadow-md backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt={`${name} logo`} width={44} height={44} className="rounded-full" />
          <div className="leading-tight">
            <div className="font-serif text-lg font-semibold tracking-wide">{name}</div>
            <div className="text-xs text-pbi-100/80">{tagline}</div>
          </div>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-pbi-500">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
