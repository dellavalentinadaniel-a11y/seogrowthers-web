import Link from 'next/link';

const footerLinks = [
  { href: '/politica-de-privacidad', label: 'Política de privacidad' },
  { href: '/politica-de-cookies', label: 'Política de cookies' },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-card-bg bg-black/40">
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-10 text-center text-sm text-text-muted md:flex-row md:justify-between md:text-left">
        <p className="text-text-muted/80">
          &copy; {new Date().getFullYear()} SEOGROWTHERS. Todos los derechos reservados.
        </p>
        <nav className="flex items-center gap-4">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
