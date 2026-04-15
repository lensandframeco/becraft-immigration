import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getResourceBySlug } from '../../data/resources-data';
import SEO from '../SEO';
import { trackResourceView } from '../../utils/analytics';

export default function ResourcePage() {
  const { slug } = useParams<{ slug: string }>();
  const resource = slug ? getResourceBySlug(slug) : undefined;

  useEffect(() => {
    if (resource) {
      trackResourceView({ resource_name: resource.title, resource_slug: resource.slug, language: 'en' });
    }
  }, [resource?.slug]);

  if (!resource) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-3xl font-serif font-bold text-[#1B2A4A] mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8">That resource doesn't exist.</p>
        <Link to="/resources" className="btn-gold">Back to Resources</Link>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title={`${resource.title} | Becraft Immigration`}
        description={resource.metaDescription}
        canonical={`/resources/${resource.slug}`}
        schema={{ "@context": "https://schema.org", "@type": "Article", "headline": resource.title, "author": { "@type": "Person", "name": "Todd Becraft" } }}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <nav className="mb-4 text-sm text-gray-400 flex items-center gap-2">
              <Link to="/resources" className="hover:text-[#D4A853] transition-colors">
                Resources
              </Link>
              <span>/</span>
              <span className="text-gray-300">{resource.title}</span>
            </nav>
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
              {resource.title}
            </h1>
            <p className="text-xl text-[#D4A853] font-medium mb-6">{resource.subtitle}</p>
            <p className="text-lg text-gray-300 leading-relaxed">{resource.intro}</p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Content */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {resource.sections.map((section, i) => (
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
            <p className="text-gray-300 leading-relaxed mb-6">{resource.cta}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:2133881821" className="btn-gold">
                Call (213) 388-1821
              </a>
              <Link to="/contact" className="btn-outline">
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
            to="/resources"
            className="inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group"
          >
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            All Resources
          </Link>
        </div>
      </section>
    </div>
  );
}
