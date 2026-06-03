import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { esServicesData } from '../../data/es-services-data';
import SEO from '../SEO';

export default function SpanishServicesIndexPage() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <SEO
        title="Nuestros Servicios | Abogados de Inmigración Los Ángeles"
        description="Servicios completos de inmigración en Los Ángeles. Asilo, cancelación de deportación, tarjetas verdes, ciudadanía, DACA, Visa U y más. Consulta gratis: (213) 388-1821."
        canonical="/es/servicios"
        schema={{ "@context": "https://schema.org", "@type": "LegalService", "name": "Law Office of Todd Becraft", "url": "https://becraftimmigrationlaw.com" }}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
              Nuestros <span className="text-[#D4A853]">Servicios</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nuestra firma maneja la gama completa de asuntos de inmigración. Desde asilo y
              defensa contra la deportación hasta reunificación familiar y ciudadanía, tenemos
              la experiencia y dedicación que su caso exige.
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Services */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {esServicesData.map((service) => {
              const isExpanded = expanded === service.slug;
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-sm border border-gray-100 overflow-hidden card-hover"
                >
                  <button
                    onClick={() => setExpanded(isExpanded ? null : service.slug)}
                    className="w-full text-left p-6 md:p-8 flex items-start gap-5"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-serif font-bold text-[#1B2A4A] mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{service.intro.substring(0, 120)}...</p>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className={`w-5 h-5 text-[#D4A853] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-8 ml-0 md:ml-[4.75rem]">
                      <div className="gold-line mb-5" />
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.intro}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-4">
                        <Link
                          to={`/es/servicios/${service.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group"
                        >
                          Leer Más
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                          </svg>
                        </Link>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/es/contactenos');
                          }}
                          className="inline-flex items-center text-gray-500 font-semibold text-sm tracking-wide uppercase hover:text-[#1B2A4A] transition-colors"
                        >
                          Consultar su Caso
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white font-bold mb-4">
            ¿No Está Seguro Qué Servicio Necesita?
          </h2>
          <p className="text-gray-300 mb-8">
            Cada caso de inmigración es único. Contáctenos para una consulta gratuita y le
            ayudaremos a entender sus opciones.
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
