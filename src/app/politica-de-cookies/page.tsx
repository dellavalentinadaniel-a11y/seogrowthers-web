import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | SeoGrowthers',
  description: 'Entiende cómo utilizamos las cookies en nuestro sitio web.',
};

export default function CookiesPolicyPage() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 text-text-light">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">Legal</p>
        <h1 className="mt-3 text-4xl font-bold text-white">Política de Cookies</h1>
        <p className="mt-3 text-text-muted">
          Explicamos qué cookies utilizamos, por qué las usamos y cómo puedes gestionarlas desde tu navegador.
        </p>
      </header>

      <aside className="mt-8 rounded-xl border border-amber-300/30 bg-amber-500/10 p-6 text-amber-100">
        <p className="font-semibold">Nota importante</p>
        <p className="mt-2 text-sm text-amber-100/80">
          Ajusta este contenido a las cookies reales de tu proyecto y valida la redacción con un profesional legal especializado.
        </p>
      </aside>

      <article className="prose prose-invert prose-headings:text-white prose-strong:text-text-light prose-a:text-text-accent mt-10 max-w-none">
        <p>
          <strong>Fecha de vigencia:</strong> 06 de octubre de 2025
        </p>

        <p>
          Este sitio web, SeoGrowthers ([URL del Sitio Web]), utiliza cookies para mejorar la experiencia del usuario. Esta política explica
          qué son las cookies, cuáles utilizamos, por qué las empleamos y cómo puedes gestionarlas.
        </p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Una cookie es un pequeño archivo de texto que un sitio web almacena en tu ordenador o dispositivo móvil cuando lo visitas. Permite
          recordar tus acciones y preferencias (inicio de sesión, idioma, tamaño de fuente y otras configuraciones) durante un período de
          tiempo, evitando que debas volver a configurarlas cada vez que regresas.
        </p>

        <h2>2. ¿Cómo usamos las cookies?</h2>
        <p>Las cookies que empleamos se agrupan en las siguientes categorías:</p>
        <ul>
          <li>
            <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio; sin ellas, algunos servicios podrían dejar de
            estar disponibles.
          </li>
          <li>
            <strong>Cookies de rendimiento y análisis:</strong> Recopilan métricas anónimas sobre el uso del sitio (por ejemplo, Google Analytics) y nos ayudan a mejorar contenidos y funcionalidades.
          </li>
          <li>
            <strong>Cookies de funcionalidad:</strong> Permiten recordar elecciones personalizadas, como idioma o ubicación, para ofrecer una experiencia más relevante.
          </li>
          <li>
            <strong>Cookies de publicidad:</strong> Facilitan la muestra de anuncios alineados con tus intereses.
          </li>
        </ul>

        <h2>3. Cookies de terceros</h2>
        <p>
          Además de nuestras cookies, podemos utilizar cookies de terceros como Google Analytics o Meta Pixel con fines de análisis y medición
          de campañas.
        </p>

        <h2>4. ¿Cómo puedes controlar las cookies?</h2>
        <p>
          Puedes gestionar y eliminar cookies desde la configuración de tu navegador. Consulta{' '}
          <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">
            aboutcookies.org
          </a>{' '}
          para obtener instrucciones detalladas.
        </p>
        <p>
          Ten presente que, si eliminas o bloqueas cookies, es posible que algunas preferencias deban configurarse manualmente en cada visita
          y que ciertas funcionalidades queden limitadas.
        </p>

        <h2>5. Cambios en la política de cookies</h2>
        <p>
          Podemos actualizar esta política periódicamente. Publicaremos la versión vigente en esta página junto con la fecha de última
          modificación.
        </p>

        <h2>6. Contacto</h2>
        <p>Para dudas o inquietudes sobre nuestro uso de cookies, escríbenos a:</p>
        <p>
          <strong>[Email de contacto]</strong>
        </p>
      </article>
    </main>
  );
}
