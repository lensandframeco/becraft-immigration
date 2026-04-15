import { useNavigate } from 'react-router-dom';
import TestimonialCarousel from '../TestimonialCarousel';
import SEO from '../SEO';

const services = [
  {
    title: 'Asylum',
    desc: 'Protection for those fleeing persecution',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'BIA & 9th Circuit Appeals',
    desc: 'Challenging unfavorable decisions',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" />
      </svg>
    ),
  },
  {
    title: 'Cancellation of Removal',
    desc: 'Stopping deportation proceedings',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: 'Citizenship & Naturalization',
    desc: 'Becoming a U.S. citizen',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'DACA',
    desc: 'Deferred Action for Childhood Arrivals',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: 'Deportation Defense',
    desc: 'Fighting removal from the U.S.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Green Cards',
    desc: 'Adjustment of Status applications',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
  },
  {
    title: 'I-601A Waivers',
    desc: 'Provisional unlawful presence waivers',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9.75m0 0l2.25 2.25M9.75 14.25l2.25-2.25M6 3.75v16.5h12V8.25L13.5 3.75H6z" />
      </svg>
    ),
  },
  {
    title: 'K-1 Fiance Visas',
    desc: 'Bringing your fiance to the U.S.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'TPS',
    desc: 'Temporary Protected Status',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'U-Visa',
    desc: 'Protection for crime victims',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: 'Family Immigration',
    desc: 'Reuniting families in the U.S.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const awards = [
  { name: 'Three Best Rated', year: '2024' },
  { name: '10 Best Immigration Attorneys', year: 'AIOLA' },
  { name: 'AVVO Top Rated', year: '10.0 Rating' },
  { name: '21 Best by Expertise', year: 'Los Angeles' },
];

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Los Angeles Immigration Lawyers | Law Office of Todd Becraft"
        description="Expert immigration attorneys in Los Angeles. Asylum, deportation defense, green cards, citizenship, DACA, and more. Free consultation: (213) 388-1821."
        canonical="/"
        schema={{ "@context": "https://schema.org", "@type": "LegalService", "name": "Law Office of Todd Becraft", "url": "https://becraftimmigrationlaw.com" }}
        hreflang={[
          { lang: 'en', path: '/' },
          { lang: 'es', path: '/es' },
          { lang: 'x-default', path: '/' },
        ]}
      />
      {/* Hero */}
      <section className="relative bg-[#1B2A4A] overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,168,83,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="gold-line mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6">
              Defending Your Right to a{' '}
              <span className="text-[#D4A853]">Better Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
              For over 20 years, the Law Office of Todd Becraft has fought tirelessly
              for immigrants and their families in Los Angeles and throughout the United States.
            </p>
            <p className="text-gray-400 mb-10">
              Immigration law is all we do — and we do it exceptionally well.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:2133881821" className="btn-gold">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Free Consultation
              </a>
              <button
                onClick={() => navigate('/services')}
                className="btn-outline"
              >
                Our Practice Areas
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

        {/* Decorative gold bar at bottom */}
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Trust Bar / Awards */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {awards.map((award) => (
              <div key={award.name} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4A853]/30 mb-3 group-hover:border-[#D4A853] transition-colors">
                  <svg className="w-7 h-7 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-4.27 1.772 6.003 6.003 0 01-4.27-1.772" />
                  </svg>
                </div>
                <p className="font-serif font-bold text-[#1B2A4A] text-sm">{award.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-line mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-6">
                Committed to Defending{' '}
                <span className="text-[#D4A853]">Immigrants' Rights</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For over 20 years, the Law Office of Todd Becraft has defended the rights
                of immigrants from around the world. Based in Los Angeles, our firm is
                dedicated exclusively to immigration law — it is all we do.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We understand that every immigration case represents a family's future.
                That is why we provide personalized, compassionate legal representation
                to each of our clients, treating every case with the urgency and dedication
                it deserves.
              </p>
              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase hover:text-[#C49A48] transition-colors group"
              >
                Learn About Our Firm
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <div className="rounded-sm overflow-hidden">
                <img
                  src="https://becraftimmigrationlaw.com/wp-content/uploads/2025/10/todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp"
                  alt="Todd Becraft, Founding Attorney"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="bg-[#1B2A4A] p-6">
                  <p className="text-white font-serif font-bold">Todd Becraft</p>
                  <p className="text-[#D4A853] text-xs tracking-wider uppercase mt-1">Founding Attorney</p>
                </div>
              </div>
              {/* Hidden stats for reference — moved to about page */}
              <div className="hidden bg-[#1B2A4A] rounded-sm p-10 md:p-12">
                <div className="gold-line mb-6" />
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-serif text-[#D4A853] font-bold">20+</p>
                    <p className="text-gray-300 text-sm mt-1">Years of Experience</p>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-4xl font-serif text-[#D4A853] font-bold">1000s</p>
                    <p className="text-gray-300 text-sm mt-1">Families Reunited</p>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-4xl font-serif text-[#D4A853] font-bold">100%</p>
                    <p className="text-gray-300 text-sm mt-1">Focused on Immigration</p>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-lg font-serif text-white font-semibold">Se Habla Espanol</p>
                    <p className="text-gray-400 text-sm mt-1">Bilingual Legal Services</p>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4A853]/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
              Our Practice Areas
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We handle the full spectrum of immigration matters, from family-based
              petitions to complex deportation defense and federal court appeals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <button
                key={service.title}
                onClick={() => navigate('/services')}
                className="text-left p-6 bg-[#FAFAF8] rounded-sm border border-gray-100 card-hover group"
              >
                <div className="text-[#D4A853] mb-4 group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="font-serif font-bold text-[#1B2A4A] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </button>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate('/services')} className="btn-gold">
              View All Practice Areas
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-warm-gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold">
              What Our Clients Say
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Results Banner */}
      <section className="bg-[#1B2A4A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">
              Thousands of Families <span className="text-[#D4A853]">Reunited</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Years of Practice' },
              { number: '12', label: 'Practice Areas' },
              { number: '4', label: 'Dedicated Attorneys & Staff' },
              { number: '2', label: 'Languages Spoken' },
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

      {/* CTA */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
            Schedule Your Free Consultation Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Take the first step toward securing your future. Our experienced immigration
            attorneys are ready to evaluate your case and discuss your options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2133881821" className="btn-gold">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call (213) 388-1821
            </a>
            <button onClick={() => navigate('/contact')} className="btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
              Send Us a Message
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Toll Free: <a href="tel:8552016898" className="text-[#D4A853] hover:underline">(855) 201-6898</a>
            <span className="mx-3 text-gray-300">|</span>
            <span className="text-[#D4A853] font-semibold">Se Habla Espanol</span>
          </p>
        </div>
      </section>
    </div>
  );
}
