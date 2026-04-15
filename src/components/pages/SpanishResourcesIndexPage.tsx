import { Link, useNavigate } from 'react-router-dom';
import { esResourcesData } from '../../data/es-resources-data';
import SEO from '../SEO';

export default function SpanishResourcesIndexPage() {
  const navigate = useNavigate();

  return (
    <div>
      <SEO
        title="Recursos de Inmigración | Abogados de Inmigración Los Ángeles"
        description="Guías gratuitas de inmigración en español de la Oficina Legal de Todd Becraft. Deportación, ciudadanía, tarjeta verde y más."
        canonical="/es/recursos"
        schema={{ "@context": "https://schema.org", "@type": "LegalService", "name": "Law Office of Todd Becraft", "url": "https://becraftimmigrationlaw.com" }}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
              Recursos <span className="text-[#D4A853]">Gratuitos</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Guías completas sobre el proceso de inmigración, escritas por el Abogado Todd Becraft
              para ayudarle a entender sus derechos y opciones.
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {esResourcesData.map((resource) => (
              <div
                key={resource.slug}
                className="bg-white rounded-sm border border-gray-100 p-8 card-hover flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div className="gold-line flex-1" />
                </div>
                <h2 className="text-xl font-serif font-bold text-[#1B2A4A] mb-3">
                  {resource.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {resource.metaDescription}
                </p>
                <Link
                  to={`/es/recursos/${resource.slug}`}
                  className="inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group"
                >
                  Leer la Guía
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white font-bold mb-4">
            ¿Tiene Preguntas Específicas sobre su Caso?
          </h2>
          <p className="text-gray-300 mb-8">
            Nuestros abogados están disponibles para una consulta gratuita. Hablamos español.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2133881821" className="btn-gold">
              Llame al (213) 388-1821
            </a>
            <button onClick={() => navigate('/es/contactenos')} className="btn-outline">
              Contáctenos en Línea
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
