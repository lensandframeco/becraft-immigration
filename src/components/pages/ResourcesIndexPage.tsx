import { Link } from 'react-router-dom';
import { resourcesData } from '../../data/resources-data';
import SEO from '../SEO';

export default function ResourcesIndexPage() {
  return (
    <div>
      <SEO
        title="Immigration Resources &amp; Guides | Law Office of Todd Becraft"
        description="Free immigration guides from Attorney Todd Becraft — how to get a green card, become a US citizen, avoid deportation, and more."
        canonical="/resources"
        schema={{ "@context": "https://schema.org", "@type": "WebPage", "name": "Immigration Resources & Guides | Law Office of Todd Becraft" }}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
              Immigration <span className="text-[#D4A853]">Resources</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Free guides and educational content from Attorney Todd Becraft to help you
              understand the immigration process and your legal options.
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Resources grid */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {resourcesData.map((resource) => (
              <Link
                key={resource.slug}
                to={`/resources/${resource.slug}`}
                className="bg-white rounded-sm border border-gray-100 p-8 card-hover group"
              >
                <div className="gold-line mb-4" />
                <h2 className="text-xl font-serif font-bold text-[#1B2A4A] mb-2 group-hover:text-[#D4A853] transition-colors">
                  {resource.title}
                </h2>
                <p className="text-[#D4A853] text-sm font-medium mb-3">{resource.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {resource.intro}
                </p>
                <span className="mt-4 inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase group-hover:text-[#C49A48] transition-colors">
                  Read Guide
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white font-bold mb-4">
            Have Questions About Your Situation?
          </h2>
          <p className="text-gray-300 mb-8">
            Our guides provide general information, but every case is unique. Contact us for a
            free consultation to discuss your specific circumstances.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2133881821" className="btn-gold">
              Call (213) 388-1821
            </a>
            <Link to="/contact" className="btn-outline">
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
