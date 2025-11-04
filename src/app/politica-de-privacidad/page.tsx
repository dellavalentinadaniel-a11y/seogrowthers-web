import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | SeoGrowthers',
  description:
    'Consulta nuestra política de privacidad para entender cómo manejamos tus datos.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto max-w-4xl px-6 py-16 text-text-light">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white">
          Política de Privacidad
        </h1>
        <p className="mt-3 text-text-muted">
          Conoce cómo recopilamos, utilizamos y protegemos los datos personales
          dentro del ecosistema SEOGROWTHERS.
        </p>
      </header>

      <aside className="mt-8 rounded-xl border border-amber-300/30 bg-amber-500/10 p-6 text-amber-100">
        <p className="font-semibold">Nota importante</p>
        <p className="mt-2 text-sm text-amber-100/80">
          Este texto es una referencia y debe adaptarse a las necesidades de tu
          proyecto. Busca asesoría legal para garantizar el cumplimiento
          normativo en tu jurisdicción.
        </p>
      </aside>

      <article className="prose prose-invert prose-headings:text-white prose-strong:text-text-light prose-a:text-text-accent mt-10 max-w-none">
        <p>
          <strong>Fecha de vigencia:</strong> 06 de octubre de 2025
        </p>

        <p>
          En SeoGrowthers (“nosotros”, “nuestro”), valoramos tu privacidad y nos
          comprometemos a proteger tu información personal. Esta Política de
          Privacidad explica cómo recopilamos, usamos, divulgamos y
          salvaguardamos tu información cuando visitas nuestro sitio web [URL
          del Sitio Web].
        </p>

        <h2>1. Información que recopilamos</h2>
        <p>
          Podemos recopilar información sobre ti de varias maneras. La
          información que podemos recopilar en el Sitio incluye:
        </p>
        <ul>
          <li>
            <strong>Datos personales:</strong> Información de identificación
            personal, como tu nombre, dirección de correo electrónico y número
            de teléfono, que nos proporcionas voluntariamente cuando te
            registras o participas en actividades del sitio.
          </li>
          <li>
            <strong>Datos de uso:</strong> Información que nuestro servidor
            recopila automáticamente al acceder al Sitio, como dirección IP,
            tipo de navegador y sistema operativo.
          </li>
          <li>
            <strong>Datos de cookies:</strong> Utilizamos cookies para
            personalizar tu experiencia. Consulta la Política de Cookies para
            más información.
          </li>
        </ul>

        <h2>2. Cómo usamos tu información</h2>
        <p>
          Disponer de información precisa nos permite ofrecer una experiencia
          fluida, eficiente y personalizada. Podemos usarla para:
        </p>
        <ul>
          <li>Crear, gestionar y mantener tu cuenta.</li>
          <li>
            Comunicarnos contigo respecto a tu cuenta, soporte o promociones
            relevantes.
          </li>
          <li>Mejorar la eficiencia, seguridad y funcionamiento del Sitio.</li>
          <li>
            Analizar el uso y las tendencias para optimizar contenidos y
            servicios.
          </li>
        </ul>

        <h2>3. Divulgación de tu información</h2>
        <p>
          No venderemos, distribuiremos ni alquilaremos tu información personal
          a terceros, salvo que contemos con tu autorización expresa o exista
          una obligación legal.
        </p>

        <h2>4. Seguridad de tu información</h2>
        <p>
          Implementamos medidas de seguridad administrativas, técnicas y físicas
          para proteger tu información personal. Aunque aplicamos medidas
          razonables, ningún sistema es infalible.
        </p>

        <h2>5. Tus derechos de protección de datos</h2>
        <p>
          Dependiendo de tu ubicación, puedes ejercer los siguientes derechos:
        </p>
        <ul>
          <li>Solicitar acceso a tus datos personales.</li>
          <li>Solicitar correcciones si detectas información inexacta.</li>
          <li>
            Solicitar la supresión de tus datos, dentro de los límites
            permitidos por la ley.
          </li>
        </ul>

        <h2>6. Contacto</h2>
        <p>
          Si tienes preguntas o comentarios sobre esta Política de Privacidad,
          contáctanos en:
        </p>
        <p>
          <strong>[Email de contacto]</strong>
        </p>
      </article>
    </main>
  );
}
