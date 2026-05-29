import { useNavigate } from 'react-router-dom';
import SEO from '../SEO';

const caseStudies = [
  {
    category: 'Asylum & Convention Against Torture',
    title: 'Asylum & Relief Under the Convention Against Torture',
    description: 'We represent clients fleeing persecution due to political activities, religious beliefs, or membership in targeted social groups — including cases other attorneys have turned down.',
    outcome: 'Through comprehensive country condition evidence, expert testimony, and compelling personal declarations, we have successfully obtained asylum for clients facing removal, providing them with permanent protection in the United States.',
    tag: 'Asylum Granted',
  },
  {
    category: 'Cancellation of Removal',
    title: 'Cancellation of Removal for Non-Permanent Residents',
    description: 'We defend long-term residents facing deportation who have U.S. citizen or permanent resident family members, demonstrating the exceptional and extremely unusual hardship removal would cause.',
    outcome: 'Through medical evidence, school records, expert testimony, and financial documentation, we have persuaded immigration judges to cancel removal and grant our clients lawful permanent residence.',
    tag: 'Removal Cancelled',
  },
  {
    category: 'O-1 Extraordinary Ability Visa',
    title: 'O-1 Extraordinary Ability Visa',
    description: 'We prepare O-1 petitions for professionals with extraordinary ability or achievement, assembling the evidence needed to demonstrate sustained national or international acclaim.',
    outcome: 'Our petition packages include expert recommendation letters, evidence of awards and publications, media coverage, and documentation of significant contributions to the field.',
    tag: 'O-1 Approved',
  },
  {
    category: 'P-3 Culturally Unique Artist Visa',
    title: 'P-3 Culturally Unique Artist or Entertainer Visa',
    description: 'We represent artists and entertainers performing traditional or culturally unique art forms, preparing P-3 petitions that establish the cultural merit of their work.',
    outcome: 'Our petitions document the cultural uniqueness of the art form, the artist\'s credentials and international recognition, and the cultural value of planned U.S. performances.',
    tag: 'P-3 Approved',
  },
  {
    category: 'U-Visa for Crime Victims',
    title: 'U-Visa for Victims of Crime',
    description: 'We help victims of qualifying crimes who have cooperated with law enforcement obtain U-Visa protection, even when they face the prospect of deportation.',
    outcome: 'We work with law enforcement to obtain the required certification, prepare comprehensive declarations, and submit evidence of physical and psychological impact to secure lawful status, work authorization, and a path to permanent residence.',
    tag: 'U-Visa Approved',
  },
];

const testimonials = [
  {
    quote: 'Atty. Todd Becraft is one of a kind gentleman. Ever since he handled my immigration issues, everything just went to the right direction. You can feel that he treats you like a member of the family.',
    author: 'Rolando G.',
    service: 'via Yelp',
  },
  {
    quote: 'The reception was fantastic and very professional. He showed me a lot of care by asking how my family is doing. I see him as an expert because of the way he asks questions and answers questions.',
    author: 'John',
    service: 'via Avvo',
  },
  {
    quote: 'Attorney Todd Becraft is an exceptional and knowledgeable immigration attorney. He handled my case with such class and dignity — I won my case. Excellent staff, excellent customer service.',
    author: 'Joseph M.',
    service: 'via Yelp',
  },
  {
    quote: 'I will always remember the professional legal services I received. All staff are caring and always work according to the instructions of their client. The services I received were far more than what I was charged.',
    author: 'Tiwa Bob',
    service: 'via Google',
  },
];

export default function SuccessStoriesPage() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Client Success Stories | Law Office of Todd Becraft"
        description="Real immigration success stories from clients of the Law Office of Todd Becraft — asylum grants, green cards, citizenship, and deportation cases won."
        canonical="/success-stories"
        schema={{ "@context": "https://schema.org", "@type": "WebPage", "name": "Client Success Stories | Law Office of Todd Becraft" }}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
              Success <span className="text-[#D4A853]">Stories</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every case we take on represents a family's future. Here are some of the
              outcomes we have achieved for our clients. While every case is different,
              these stories reflect our commitment to fighting for the best possible result.
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
              Representative Case Results
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              The following are representative of the types of cases we handle and outcomes we have achieved.
              Past results do not guarantee future outcomes, as every case depends on its unique facts and circumstances.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-sm border border-gray-100 overflow-hidden card-hover"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#D4A853]">
                      {study.category}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-200">
                      <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {study.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1B2A4A] mb-4">
                    {study.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                        The Challenge
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                        The Outcome
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-[#D4A853]/0 via-[#D4A853]/30 to-[#D4A853]/0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#1B2A4A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Hear from the families we have helped.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-sm p-8 hover:border-[#D4A853]/30 transition-colors"
              >
                <svg className="w-8 h-8 text-[#D4A853]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <blockquote className="text-gray-200 leading-relaxed mb-6 italic font-serif">
                  "{testimonial.quote}"
                </blockquote>
                <div className="gold-line mb-3" />
                <p className="text-[#D4A853] font-semibold text-sm">{testimonial.author}</p>
                <p className="text-gray-500 text-xs mt-0.5">{testimonial.service}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs mt-10">
            * Testimonials are representative of client experiences. Past results do not guarantee future outcomes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
            Let Us Fight for Your Future
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Every successful case starts with a conversation. Contact us today for a free
            consultation to discuss your immigration matter.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2133881821" className="btn-gold">
              Call (213) 388-1821
            </a>
            <button onClick={() => navigate('/contact')} className="btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
