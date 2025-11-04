import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Página optimizada en Next.js + Tailwind
// Instrucciones:
// 1) Copiar este archivo en /pages/blog/crear-app-ia.js (o en /app if preferís adaptar)
// 2) Asegurate de tener Tailwind configurado en tu proyecto Next.js.
// 3) Añadí las imágenes en /public/images/ con los nombres usados abajo o cambiá las rutas.

export async function getStaticProps() {
  // Simulación: en un proyecto real reemplaza por fetch a tu CMS o API
  const relatedPosts = [
    { id: 'mejores-herramientas-no-code-2025', title: 'Mejores herramientas No-Code 2025', href: '/blog/mejores-herramientas-no-code-2025' },
    { id: 'conectar-openai-bubble', title: 'Cómo conectar OpenAI con Bubble en 10 minutos', href: '/blog/conectar-openai-bubble' }
  ]

  return {
    props: { relatedPosts }
  }
}

export default function CrearAppIA({ relatedPosts }) {
  const canonical = 'https://tu-dominio.com/blog/crear-app-ia-sin-programar'
  const meta = {
    title: 'Cómo Crear una App Web con Inteligencia Artificial sin Saber Programar [Guía 2025]',
    description: 'Guía paso a paso para crear una app web con IA usando herramientas No-Code y APIs. Ideal para principiantes: Bubble, Adalo, OpenAI, ejemplos y recursos.'
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': meta.title,
    'description': meta.description,
    'author': { '@type': 'Person', 'name': 'Tu Nombre' },
    'publisher': { '@type': 'Organization', 'name': 'SEOGROWTHERS' },
    'mainEntityOfPage': canonical
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="/images/crear-app-ia-hero.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <div className="min-h-screen bg-gray-900 text-gray-200">
        {/* Header */}
        <header className="bg-[#1f2937] border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/">
              <a className="text-white font-bold text-xl">SEOGROWTHERS</a>
            </Link>
            <nav className="space-x-4 hidden md:flex">
              <Link href="/blog"><a className="text-gray-300 hover:text-white">Blog</a></Link>
              <Link href="/cursos"><a className="text-gray-300 hover:text-white">Cursos</a></Link>
              <Link href="/contacto"><a className="text-gray-300 hover:text-white">Contacto</a></Link>
            </nav>
          </div>
        </header>

        {/* Main content container */}
        <main className="max-w-6xl mx-auto px-6 py-10">

          <article className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="md:flex-1 pr-6">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight">Cómo Crear una App Web con Inteligencia Artificial sin Saber Programar</h1>
                  <p className="text-sm text-gray-500 mt-3">Publicado: 8 Mar 2024 · por <strong>IA Innovador</strong></p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">IA</span>
                    <span className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">No-Code</span>
                    <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">Desarrollo Web</span>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <a href="#descarga" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Descargar mini-guía (PDF)</a>
                    <a href="#suscribite" className="ml-3 inline-block border border-gray-300 text-gray-800 px-4 py-2 rounded-md">Suscribite</a>
                  </div>
                </div>

                <div className="md:w-1/3 mt-6 md:mt-0">
                  <div className="rounded-lg overflow-hidden shadow">
                    <Image src="/images/crear-app-ia-hero.jpg" alt="Inteligencia artificial creando una app" width={900} height={500} priority className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Table of contents */}
              <nav className="mt-8 p-4 bg-gray-50 rounded-lg border">
                <h2 className="font-semibold text-gray-700">Contenido</h2>
                <ol className="mt-2 ml-4 list-decimal text-sm text-gray-600">
                  <li><a className="hover:underline" href="#por-que-ia">¿Por qué usar IA en tu app?</a></li>
                  <li><a className="hover:underline" href="#retos">Retos que vas a encontrar</a></li>
                  <li><a className="hover:underline" href="#6-pasos">Hoja de ruta: 6 pasos</a></li>
                  <li><a className="hover:underline" href="#recursos">Recursos recomendados</a></li>
                  <li><a className="hover:underline" href="#conclusion">Conclusión</a></li>
                </ol>
              </nav>

              {/* Content sections */}
              <section id="por-que-ia" className="mt-8">
                <h2 className="text-2xl font-bold">¿Por qué usar IA en tu app?</h2>
                <p className="mt-3 text-gray-700">La Inteligencia Artificial te permite automatizar tareas, personalizar la experiencia del usuario y ofrecer funciones avanzadas (recomendaciones, análisis de texto, clasificación de imágenes) con poco código. Es ideal para emprendedores y creadores que quieran validar ideas rápido.</p>

                <div className="mt-4 grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-white">
                    <h4 className="font-semibold">Chatbots 24/7</h4>
                    <p className="text-sm text-gray-600 mt-2">Responde preguntas y guía a tus usuarios sin soporte humano constante.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-white">
                    <h4 className="font-semibold">Recomendaciones</h4>
                    <p className="text-sm text-gray-600 mt-2">Sugerí productos o contenido relevante en base al comportamiento del usuario.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-white">
                    <h4 className="font-semibold">Procesamiento de lenguaje</h4>
                    <p className="text-sm text-gray-600 mt-2">Generá textos automáticos, resúmenes o análisis de sentimiento.</p>
                  </div>
                </div>
              </section>

              <section id="retos" className="mt-8">
                <h2 className="text-2xl font-bold">Retos que vas a encontrar</h2>
                <ul className="list-disc ml-6 mt-3 text-gray-700">
                  <li><strong>Calidad de datos:</strong> los modelos funcionan mejor con datos limpios y estructurados.</li>
                  <li><strong>Costos:</strong> planificar el consumo de APIs para no tener sorpresas en la factura.</li>
                  <li><strong>Curva de aprendizaje:</strong> aun con No-Code tendrás que entender conceptos básicos de APIs y flujos.</li>
                </ul>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <strong>Tip rápido:</strong> Empezá con un MVP muy concreto (por ejemplo, un chatbot que responda 5 preguntas frecuentes) y medí la adopción.
                </div>
              </section>

              <section id="6-pasos" className="mt-8">
                <h2 className="text-2xl font-bold">Hoja de ruta: 6 pasos para lanzar tu primera app con IA</h2>
                <ol className="mt-4 space-y-4">
                  <li>
                    <h3 className="font-semibold">1. Define la idea</h3>
                    <p className="text-gray-700">¿Qué problema resuelve tu app? Sé específico.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">2. Elegí tus herramientas</h3>
                    <p className="text-gray-700">Bubble o Adalo para front; OpenAI/Midjourney/Google para IA; Zapier/Make para integraciones.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">3. Diseñá la estructura</h3>
                    <p className="text-gray-700">Mapeá pantallas y flujos. Un diseño simple mejora la adopción.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">4. Integra la IA</h3>
                    <p className="text-gray-700">Conectá la API (ej. OpenAI) y probá con prompts sencillos.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">5. Probar y mejorar</h3>
                    <p className="text-gray-700">Feedback continuo: métricas, tests A/B y usuarios reales.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">6. Publicar y promocionar</h3>
                    <p className="text-gray-700">Landing page, SEO, y campañas pequeñas para validar tracción.</p>
                  </li>
                </ol>

                <div className="mt-6">
                  <Image src="/images/proceso-crear-app.png" alt="Proceso creativo para crear una app" width={1200} height={400} />
                </div>
              </section>

              <section id="recursos" className="mt-8">
                <h2 className="text-2xl font-bold">Recursos recomendados</h2>
                <ul className="mt-3 ml-6 text-gray-700 list-inside space-y-2">
                  <li><a className="text-blue-600 hover:underline" href="https://bubble.io" target="_blank" rel="noopener noreferrer">Bubble</a> — Construcción No-Code (ideal MVP).</li>
                  <li><a className="text-blue-600 hover:underline" href="https://platform.openai.com" target="_blank" rel="noopener noreferrer">OpenAI</a> — APIs de lenguaje para chat y generación de texto.</li>
                  <li><a className="text-blue-600 hover:underline" href="https://zapier.com" target="_blank" rel="noopener noreferrer">Zapier / Make</a> — Conectores y automatizaciones.</li>
                </ul>

                <div className="mt-6 border p-4 rounded bg-gray-50">
                  <h4 className="font-semibold">Recursos descargables</h4>
                  <p className="text-sm text-gray-600 mt-2">Descargá un checklist para lanzar tu app (MVP + Integración IA)</p>
                  <a id="descarga" href="#" className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded">Descargar checklist</a>
                </div>
              </section>

              <section id="conclusion" className="mt-8">
                <h2 className="text-2xl font-bold">Conclusión</h2>
                <p className="mt-3 text-gray-700">Crear tu primera aplicación con ayuda de la IA es totalmente posible hoy. Empezá pequeño, medí resultados y escalá. Si querés, podés usar esta guía como plantilla para futuros posts y crear una serie de artículos con casos de estudio.</p>

                <div className="mt-6 border-t pt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">¿Te sirvió esta guía?</p>
                    <div className="mt-2 flex gap-3">
                      <a href="#" className="text-sm bg-blue-600 text-white px-3 py-1 rounded">Sí, fue útil</a>
                      <a href="#" className="text-sm border px-3 py-1 rounded">No, necesito más</a>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold">Artículos relacionados</h4>
                    <ul className="text-sm mt-2">
                      {relatedPosts.map(p => (
                        <li key={p.id}><Link href={p.href}><a className="text-blue-600 hover:underline">{p.title}</a></Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

            </div>
          </article>

          {/* Footer small */}
          <footer className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} SEOGROWTHERS. Todos los derechos reservados.
          </footer>
        </main>
      </div>
    </>
  )
}
