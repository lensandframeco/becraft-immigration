import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getServiceBySlug, enToEsServiceSlug } from '../../data/services-data';
import SEO from '../SEO';
import { trackServiceView, trackPhoneClick, trackCtaClick } from '../../utils/analytics';

export default function ServiceDetailPage() {
  const { area } = useParams<{ area: string }>();
  const service = area ? getServiceBySlug(area) : undefined;

  useEffect(() => {
    if (service) {
      trackServiceView({ service_name: service.title, service_slug: service.slug, language: 'en' });
    }
  }, [service?.slug]);

  if (!service) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-3xl font-serif font-bold text-[#1B2A4A] mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8">That practice area doesn't exist.</p>
        <Link to="/services" className="btn-gold">Back to Practice Areas</Link>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={`${service.title} | Law Office of Todd Becraft`}
        description={service.metaDescription}
        canonical={`/services/${service.slug}`}
        ogImage={`https://www.makeitglow.co/api/og/becraft-immigration?title=${encodeURIComponent(service.title)}&subtitle=${encodeURIComponent('Law Office of Todd Becraft')}`}
        schema={{ "@context": "https://schema.org", "@type": "LegalService", "name": "Law Office of Todd Becraft", "url": "https://becraftimmigrationlaw.com" }}
        hreflang={enToEsServiceSlug[service.slug] ? [
          { lang: 'en', path: `/services/${service.slug}` },
          { lang: 'es', path: `/es/servicios/${enToEsServiceSlug[service.slug]}` },
          { lang: 'x-default', path: `/services/${service.slug}` },
        ] : undefined}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <nav className="mb-4 text-sm text-gray-400 flex items-center gap-2">
              <Link to="/services" className="hover:text-[#D4A853] transition-colors">
                Practice Areas
              </Link>
              <span>/</span>
              <span className="text-gray-300">{service.title}</span>
            </nav>
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-[#D4A853] font-medium mb-6">{service.subtitle}</p>
            <p className="text-lg text-gray-300 leading-relaxed">{service.intro}</p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Content */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {service.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-2xl font-serif font-bold text-[#1B2A4A] mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4A853] flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.numbered && section.numbered.length > 0 && (
                  <ol className="space-y-2 mb-4">
                    {section.numbered.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2A4A] text-[#D4A853] text-xs font-bold flex items-center justify-center">
                          {j + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="gold-line my-10" />

          {/* CTA block */}
          <div className="bg-[#1B2A4A] rounded-sm p-8 text-center">
            <p className="text-gray-300 leading-relaxed mb-6">{service.cta}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:2133881821" onClick={() => trackPhoneClick({ phone_number: '2133881821', location: 'service_cta', language: 'en' })} className="btn-gold">
                Call (213) 388-1821
              </a>
              <Link to="/contact" onClick={() => trackCtaClick({ label: 'contact_us_online', location: 'service_cta', language: 'en' })} className="btn-outline">
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="py-8 bg-warm-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group"
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            All Practice Areas
          </Link>
        </div>
      </section>
    </div>
  );
}
