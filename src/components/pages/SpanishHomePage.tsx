import { useNavigate, Link } from 'react-router-dom';
import SEO from '../SEO';

const services = [
  {
    slug: 'deportacion-y-remocion',
    title: 'Deportación y Remoción',
    description: 'Nuestros abogados luchan agresivamente para mantener a las familias unidas. Exploramos cada posible forma de alivio contra la deportación.',
  },
  {
    slug: 'ciudadania-y-naturalizacion',
    title: 'Ciudadanía y Naturalización',
    description: 'La Oficina Legal de Todd Becraft le puede asistir en realizar su sueño de ser ciudadano/a de los Estados Unidos.',
  },
  {
    slug: 'asilo',
    title: 'Asilo',
    description: 'La Oficina Legal de Todd Becraft tiene experiencia en todas las etapas del proceso de asilo por persecución.',
  },
  {
    slug: 'tarjeta-verde-ajuste-de-estatus',
    title: 'Tarjeta Verde / Ajuste de Estatus',
    description: 'Guiamos a nuestros clientes a través del complejo proceso de obtener tarjetas verdes por relaciones familiares o empleo.',
  },
  {
    slug: 'cancelacion-de-eliminacion',
    title: 'Cancelación de Eliminación',
    description: 'Una defensa poderosa para personas en procedimientos de remoción con residencia a largo plazo en los EE.UU.',
  },
  {
    slug: 'daca',
    title: 'DACA',
    description: 'Hemos ayudado a innumerables beneficiarios de DACA con sus solicitudes iniciales y renovaciones.',
  },
  {
    slug: 'visa-u',
    title: 'Visa U',
    description: 'La Oficina legal de Todd Becraft representa clientes víctimas de delitos que cooperan en una investigación criminal.',
  },
  {
    slug: 'estado-de-proteccion-temporal-tps',
    title: 'Estado de Protección Temporal (TPS)',
    description: 'Asistimos a clientes con solicitudes iniciales de TPS, re-registraciones y documentos de autorización de trabajo.',
  },
  {
    slug: 'visa-de-prometido-k-1',
    title: 'Visa de Prometido K-1',
    description: 'La visa K-1 permite al prometido/a extranjero/a de un ciudadano de EE.UU. viajar y casarse en los Estados Unidos.',
  },
  {
    slug: 'i-601a-exenciones-provisionales',
    title: 'I-601A Exenciones Provisionales',
    description: 'Permitimos a ciertos parientes inmediatos de ciudadanos de EE.UU. solicitar una exención antes de su entrevista consular.',
  },
];

const testimonials = [
  {
    name: 'Tiwa Bob',
    text: 'Siempre viviré para recordar los servicios legales profesionales que recibí de la Oficina Legal de Todd Becraft. Todo el personal de este bufete de abogados es atento y siempre trabaja de acuerdo con las instrucciones de su cliente.',
  },
  {
    name: 'Ariel Arauz',
    text: 'Ciertamente, el abogado Todd Becraft, es el mejor abogado de inmigración que conozco, entre sus cualidades se incluyen: Honestidad, dedicación, profesionalismo, muy inteligente, carisma, profundo conocimiento de la ley de inmigración, etc.',
  },
  {
    name: 'John',
    text: 'En mi primer encuentro con él, la recepción fue fantástica y muy profesional. me mostró mucho cuidado al preguntar cómo está mi familia, para mí eso es una marca de una persona que se preocupa por otras personas.',
  },
  {
    name: 'Joseph M.',
    text: 'El abogado Todd Becraft es un abogado de inmigración excepcional y conocedor. El abogado Todd manejó mi caso con tanta clase y dignidad que gané mi caso.',
  },
];

export default function SpanishHomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Abogados de Inmigración en Los Ángeles | Ley Becraft"
        description="Abogados de inmigración expertos en Los Ángeles. Asilo, defensa contra deportación, tarjetas verdes, ciudadanía y más. Consulta gratis: (213) 388-1821."
        canonical="/es"
        schema={{ "@context": "https://schema.org", "@type": "LegalService", "name": "Law Office of Todd Becraft", "url": "https://becraftimmigrationlaw.com" }}
        hreflang={[
          { lang: 'en', path: '/' },
          { lang: 'es', path: '/es' },
          { lang: 'x-default', path: '/' },
        ]}
      />
      {/* Hero */}
      <section className="relative bg-[#1B2A4A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,168,83,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="gold-line mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6">
              Te Podemos Ayudar A Lograr Tu{' '}
              <span className="text-[#D4A853]">Sueño Americano.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              Honestos | Experimentados | Comprometidos Para Ayudarte
            </p>
            <p className="text-gray-400 mb-10">
              Ley de inmigración es todo lo que hacemos — y lo hacemos excepcionalmente bien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:2133881821" className="btn-gold">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Consulta Gratis
              </a>
              <button
                onClick={() => navigate('/es/servicios')}
                className="btn-outline"
              >
                Nuestros Servicios
              </button>
            </div>
            <div className="mt-10 flex items-center gap-3 text-gray-400 text-sm">
              <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>(213) 388-1821</span>
              <span className="text-gray-600">|</span>
              <span>Toll Free: (855) 201-6898</span>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* About Preview */}
      <section id="es-about" className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-line mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-6">
                Comprometidos a Defender los{' '}
                <span className="text-[#D4A853]">Derechos de los Inmigrantes</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For more than 20 years, The Law Office of Todd Becraft has been dedicated to
                defending the rights of immigrants from all over the world. Based in Los Angeles
                California, our firm is dedicated exclusively to immigration law. Whether the
                case involves removal from the United States, a family petition, an asylum case,
                or a citizenship case we are committed to achieving the best results for our
                clients and their families. Our firm is fully bilingual (English / Spanish)
                because at the law office of Todd Becraft we believe that communication is the
                key to success in any legal matter. At The Law Office of Todd Becraft you will
                never have to wonder about the status of your case.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-sm overflow-hidden">
                <img
                  src="https://becraftimmigrationlaw.com/wp-content/uploads/2025/10/todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp"
                  alt="Todd Becraft, Abogado Fundador"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="bg-[#1B2A4A] p-6">
                  <p className="text-white font-serif font-bold">Todd Becraft</p>
                  <p className="text-[#D4A853] text-xs tracking-wider uppercase mt-1">Abogado Fundador</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4A853]/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="es-services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Manejamos una amplia gama de asuntos de inmigración, desde peticiones
              familiares hasta defensa de deportación y apelaciones en tribunales federales.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/es/servicios/${service.slug}`}
                className="text-left p-6 bg-[#FAFAF8] rounded-sm border border-gray-100 card-hover group block"
              >
                <div className="text-[#D4A853] mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-[#1B2A4A] mb-2 group-hover:text-[#D4A853] transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/es/servicios" className="btn-gold inline-flex items-center">
              Ver Todos los Servicios
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="es-testimonials" className="section-padding bg-warm-gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold">
              Testimonios
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-sm border border-gray-100 p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#D4A853]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center">
                    <span className="text-[#D4A853] font-serif font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-[#1B2A4A] text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-xs">Cliente</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="bg-[#1B2A4A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">
              Miles de Familias <span className="text-[#D4A853]">Reunidas</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Años de Experiencia' },
              { number: '12', label: 'Áreas de Práctica' },
              { number: '4', label: 'Abogados y Personal' },
              { number: '2', label: 'Idiomas' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-serif text-[#D4A853] font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources / Guides */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
              Guías Gratuitas de Inmigración
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Recursos educativos gratuitos preparados por el Abogado Todd Becraft para ayudarle a entender sus opciones.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              to="/es/recursos/la-guia-becraft-para-evitar-la-deportacion"
              className="p-8 bg-white rounded-sm border border-gray-100 card-hover group block"
            >
              <div className="text-[#D4A853] mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-[#1B2A4A] text-lg mb-3 group-hover:text-[#D4A853] transition-colors">
                La Guía Becraft para Evitar la Deportación
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Una guía completa sobre el proceso de deportación, sus derechos legales y todas las defensas disponibles para evitar la remoción.
              </p>
              <span className="mt-4 inline-flex items-center text-[#D4A853] text-sm font-semibold">
                Leer la Guía
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </Link>
            <Link
              to="/es/recursos/la-guia-de-becraft-sobre-como-convertirse-en-ciudadano-estadounidense"
              className="p-8 bg-white rounded-sm border border-gray-100 card-hover group block"
            >
              <div className="text-[#D4A853] mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-[#1B2A4A] text-lg mb-3 group-hover:text-[#D4A853] transition-colors">
                Cómo Convertirse en Ciudadano Estadounidense
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Todo lo que necesita saber sobre el proceso de naturalización: requisitos de elegibilidad, el proceso paso a paso y los beneficios de la ciudadanía.
              </p>
              <span className="mt-4 inline-flex items-center text-[#D4A853] text-sm font-semibold">
                Leer la Guía
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link to="/es/recursos" className="text-[#D4A853] hover:underline text-sm font-semibold">
              Ver Todos los Recursos →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog link */}
      <section id="es-blog" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="gold-line-center mb-6" />
          <h2 className="text-3xl font-serif text-[#1B2A4A] font-bold mb-4">Blog</h2>
          <p className="text-gray-500 mb-8">Lea las últimas noticias y actualizaciones sobre la ley de inmigración.</p>
          <a
            href="https://becraftimmigrationlaw.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center"
          >
            Leer el Blog
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section id="es-contact" className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
            Programe Su Consulta Gratis Hoy
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Dé el primer paso para asegurar su futuro. Nuestros abogados de inmigración
            con experiencia están listos para evaluar su caso y discutir sus opciones.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2133881821" className="btn-gold">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Llame al (213) 388-1821
            </a>
            <button onClick={() => navigate('/contact')} className="btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
              Envíenos un Mensaje
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Toll Free: <a href="tel:8552016898" className="text-[#D4A853] hover:underline">(855) 201-6898</a>
            <span className="mx-3 text-gray-300">|</span>
            <span className="text-[#D4A853] font-semibold">Se Habla Español</span>
          </p>
        </div>
      </section>
    </div>
  );
}
