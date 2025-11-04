const socialLinks = [
  { icon: 'fab fa-facebook', label: 'Facebook', href: '#' },
  { icon: 'fab fa-twitter', label: 'Twitter', href: '#' },
  { icon: 'fab fa-linkedin', label: 'LinkedIn', href: '#' },
];

const contactDetails = [
  {
    label: 'Email',
    value: 'info@seogrowthers.com',
    href: 'mailto:info@seogrowthers.com',
  },
  {
    label: 'Teléfono',
    value: '+1 (234) 567-890',
    note: 'Solo para consultas urgentes',
    href: 'tel:+123456789',
  },
  {
    label: 'Dirección',
    value: 'Calle Ficticia 123, Ciudad Digital, País Virtual',
  },
  {
    label: 'Horario',
    value: 'Lunes a Viernes, 9:00 a 17:00 (GMT-3)',
  },
];

export default function ContactoPage() {
  return (
    <main className="bg-dark-bg text-text-light">
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
            Contacto
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            ¿Listo para conversar?
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Completa el formulario o escríbenos a través de nuestros canales
            directos. Respondemos en menos de 48 horas hábiles.
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <form className="rounded-2xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-white"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  className="mt-2 w-full rounded-lg border border-text-muted/30 bg-black/30 px-4 py-2 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="mt-2 w-full rounded-lg border border-text-muted/30 bg-black/30 px-4 py-2 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-white"
              >
                Asunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="¿Sobre qué te gustaría hablar?"
                className="mt-2 w-full rounded-lg border border-text-muted/30 bg-black/30 px-4 py-2 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Cuéntanos brevemente cómo podemos ayudarte."
                className="mt-2 w-full rounded-lg border border-text-muted/30 bg-black/30 px-4 py-3 text-sm text-text-light focus:border-text-accent focus:outline-none focus:ring-2 focus:ring-text-accent/40"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-text-accent px-4 py-3 text-sm font-semibold text-dark-bg transition hover:bg-text-accent/90"
            >
              Enviar mensaje
            </button>
            <p className="text-xs text-text-muted">
              Al enviar tus datos aceptas nuestra política de privacidad. No
              enviamos spam ni compartimos tu información.
            </p>
          </form>

          <div className="space-y-8">
            <section className="rounded-2xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20">
              <h2 className="text-xl font-semibold text-white">
                Nuestra información
              </h2>
              <ul className="mt-5 space-y-4 text-sm text-text-muted">
                {contactDetails.map(({ label, value, href, note }) => (
                  <li key={label}>
                    <p className="text-text-light">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 inline-block text-text-accent hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1">{value}</p>
                    )}
                    {note && (
                      <p className="text-xs text-text-muted/70">{note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-card-bg bg-card-bg/80 p-8 shadow-lg shadow-black/20">
              <h2 className="text-xl font-semibold text-white">
                Síguenos en redes
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Compartimos recursos gratuitos, oportunidades y casos de
                estudio.
              </p>
              <div className="mt-6 flex gap-4">
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-text-muted/30 text-text-muted transition hover:border-text-accent/40 hover:text-text-accent"
                  >
                    <i className={`${social.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
