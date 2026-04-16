import { useNavigate } from 'react-router-dom';
import SEO from '../SEO';

interface TeamMember {
  name: string;
  title: string;
  bio: string[];
  photo: string;
  highlight?: string;
}

const team: TeamMember[] = [
  {
    name: 'Todd Becraft',
    title: 'Founding Attorney',
    photo: 'https://images.makeitglow.co/projects/becraft-immigration/c2debc6ca78f9ac4-todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp',
    highlight: '20+ Years in Immigration Law',
    bio: [
      'Todd Becraft is the founding attorney of the Law Office of Todd Becraft, where he has dedicated his career exclusively to immigration law for over 20 years. He is the current Vice Chair of the AILA SoCal Chapter and former Chair of the Los Angeles County Bar Immigration Section.',
      'In 2009, Todd assumed the immigration practice of Immigration Judge Timothy Everett after Judge Everett left private practice to work for Immigration and Customs Enforcement. Prior to that, Mr. Becraft worked closely with Judy Wood, widely known as "Saint Judy," whose remarkable advocacy was portrayed in the motion picture of the same name.',
      'Mr. Becraft has successfully represented thousands of clients in asylum, deportation defense, cancellation of removal, family-based immigration, and federal court appeals before the Board of Immigration Appeals and the Ninth Circuit Court of Appeals.',
    ],
  },
  {
    name: 'Dennis Escobar',
    title: 'Lead Paralegal & Office Manager',
    photo: 'https://images.makeitglow.co/projects/becraft-immigration/8f93bc42d26b873e-dennis-escobar-portrait-becraft-immigration-law-980x1337.webp',
    highlight: '25+ Years in Immigration Law',
    bio: [
      'For more than 25 years, Dennis Escobar has dedicated his career to immigration law. As the Lead Paralegal and Office Manager, Dennis manages the daily operations of the office while working closely with attorneys and clients on nearly every stage of a case.',
      'As an immigrant himself, Dennis knows firsthand the challenges families face. He is admired for his patience, dedication, and compassion, always taking the time to listen and address client concerns with care.',
    ],
  },
  {
    name: 'Gianina Haro',
    title: 'Paralegal',
    highlight: '30+ Years in Immigration Law',
    photo: 'https://images.makeitglow.co/projects/becraft-immigration/4baa423944dd3952-gianina-haro-portrait-becraft-immigration-law-980x1337.webp',
    bio: [
      'With over thirty years of experience in immigration law, Gianina Haro is a cornerstone of client support at the Law Office of Todd Becraft. She specializes in preparing filings, gathering evidence, and managing the details that keep cases moving forward seamlessly.',
      'Fluent in both English and Spanish, Gianina bridges communication gaps, helping clients feel comfortable and understood. She works across a wide range of immigration matters, including asylum applications, family-based petitions, waivers, and naturalization.',
    ],
  },
  {
    name: 'Imani Machado',
    title: 'Marketing Director & Client Specialist',
    photo: 'https://images.makeitglow.co/projects/becraft-immigration/c309104b568a8ee4-imani-machado-portrait-becraft-immigration-law-980x1337.webp',
    bio: [
      'Imani Machado brings creativity, strategy, and compassion to her role as Marketing Director and Client Specialist. With over a decade of experience in legal marketing and client relations, she ensures that the firm\'s mission of advocacy extends beyond the courtroom and into every interaction with clients and the broader community.',
      'Imani manages outreach efforts, develops educational resources, and works directly with clients to provide support and guidance throughout their immigration journey. Her dedication extends into the broader community, where she partners with organizations and initiatives that serve immigrant families across Southern California.',
    ],
  },
];

const whyChooseUs = [
  { title: '20+ Years of Experience', desc: 'Two decades of dedicated immigration law practice means we have seen and successfully handled virtually every type of case.', icon: 'clock' },
  { title: 'Immigration Law Exclusively', desc: 'We do not dabble in other areas. Immigration is our sole focus, giving us unmatched depth of knowledge.', icon: 'focus' },
  { title: 'Personalized Attention', desc: 'Every case is personally handled by our attorneys. You work directly with experienced lawyers, not junior staff.', icon: 'person' },
  { title: 'Bilingual Services', desc: 'Our team is fully bilingual in English and Spanish. Nothing is lost in translation when your future is on the line.', icon: 'language' },
  { title: 'Proven Track Record', desc: 'Thousands of successful cases, including complex asylum claims and deportation defenses other firms turned away.', icon: 'check' },
  { title: 'Compassionate Advocacy', desc: 'We understand the emotional toll of immigration proceedings. Our team provides genuine empathy and support.', icon: 'heart' },
];

function WhyIcon({ type }: { type: string }) {
  const cls = "w-6 h-6";
  switch (type) {
    case 'clock': return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'focus': return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>;
    case 'person': return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>;
    case 'language': return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" /></svg>;
    case 'check': return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>;
    case 'heart': return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>;
    default: return null;
  }
}

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="About | Law Office of Todd Becraft"
        description="Meet Attorney Todd Becraft — decades of immigration law experience in Los Angeles helping families, DACA recipients, asylum seekers, and more."
        canonical="/about"
        schema={{ "@context": "https://schema.org", "@type": "AboutPage", "name": "About Todd Becraft" }}
      />
      {/* Hero with Group Photo */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Desktop: landscape original */}
          <img
            src="https://images.makeitglow.co/projects/becraft-immigration/d4f20bfcce771e9e-unnamed-10-scaled.webp"
            alt="The Becraft Immigration Law team"
            className="hidden md:block w-full h-full object-cover"
          />
          {/* Mobile: portrait outpainted version showing all team members */}
          <img
            src="https://images.makeitglow.co/projects/becraft-immigration/team-9x16.jpg"
            alt="The Becraft Immigration Law team"
            className="block md:hidden w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/95 via-[#1B2A4A]/80 to-[#1B2A4A]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6 leading-tight">
              The People Behind <span className="text-[#D4A853]">Your Case</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              A team that has dedicated their careers — over 50 combined years — exclusively to immigration law. We don't just handle cases. We change lives.
            </p>
            <button onClick={() => navigate('/contact')} className="btn-gold">
              Meet With Us Today
            </button>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Firm Story — editorial style */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="gold-line mb-6" />
                <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4 leading-tight">
                  Two Decades of Fighting for What's Right
                </h2>
                <div className="flex items-center gap-4 mt-8">
                  <div className="text-center">
                    <p className="text-3xl font-serif font-bold text-[#D4A853]">20+</p>
                    <p className="text-xs text-gray-400 mt-1">Years</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-3xl font-serif font-bold text-[#D4A853]">1000s</p>
                    <p className="text-xs text-gray-400 mt-1">Cases Won</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-3xl font-serif font-bold text-[#D4A853]">100%</p>
                    <p className="text-xs text-gray-400 mt-1">Immigration</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                The Law Office of Todd Becraft was founded with a clear mission: to provide
                exceptional legal representation to immigrants and their families. Over the past
                two decades, that mission has never wavered.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our offices on Wilshire Boulevard in the heart of Los Angeles, we have helped
                thousands of individuals navigate the complex U.S. immigration system. Whether our
                clients are seeking asylum from persecution, fighting deportation, reuniting with
                family members, or pursuing the dream of U.S. citizenship, we bring the same level
                of dedication, expertise, and personal attention to every case.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What sets us apart is our exclusive focus on immigration law. While many firms
                spread their attention across multiple practice areas, we have chosen to dedicate
                our entire practice to immigration. This singular focus means we stay at the
                forefront of constantly changing immigration law and policy, giving our clients
                a critical advantage.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team members come from diverse backgrounds, and several are immigrants
                themselves. We understand the challenges our clients face — not just legally,
                but personally. That lived experience shapes our empathy, our urgency, and our
                unwavering commitment to every person who walks through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Attorney — Todd */}
      <section className="bg-[#1B2A4A] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            {/* Photo side */}
            <div className="relative h-[500px] lg:h-auto">
              <img
                src={team[0].photo}
                alt={team[0].name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B2A4A]/30" />
            </div>
            {/* Content side */}
            <div className="px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
              <p className="text-[#D4A853] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                {team[0].title}
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-2">
                {team[0].name}
              </h2>
              {team[0].highlight && (
                <p className="text-[#D4A853]/70 text-sm mb-8 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {team[0].highlight}
                </p>
              )}
              <div className="w-12 h-px bg-[#D4A853]/40 mb-8" />
              <div className="space-y-4">
                {team[0].bio.map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed text-[15px]">{p}</p>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <span className="text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full">AILA SoCal Vice Chair</span>
                <span className="text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full">Three Best Rated</span>
                <span className="text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full">AVVO 10.0</span>
                <span className="text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full">Pro Bono Award</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of Team — Card Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
              Our Team
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every member of our team shares the same commitment: fighting for our clients' futures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.slice(1).map((member) => (
              <div key={member.name} className="group">
                {/* Photo with overlay on hover */}
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#D4A853] text-xs tracking-[0.15em] uppercase mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {member.title}
                    </p>
                    <h3 className="text-xl font-serif text-white font-bold">
                      {member.name}
                    </h3>
                    {member.highlight && (
                      <p className="text-white/50 text-xs mt-1">{member.highlight}</p>
                    )}
                  </div>
                </div>
                {/* Bio below */}
                <div className="space-y-3">
                  {member.bio.map((p, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Strip */}
      <section className="bg-[#1B2A4A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#D4A853] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Recognition</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Three Best Rated', detail: 'Best Immigration Lawyers in Los Angeles' },
              { name: '10 Best', detail: 'American Institute of Legal Counsel' },
              { name: 'AVVO 10.0', detail: 'Superb Rating — Top Attorney' },
              { name: 'Expertise', detail: '21 Best Immigration Lawyers in LA' },
            ].map((award) => (
              <div key={award.name} className="text-center py-6 border border-white/5 rounded-sm hover:border-[#D4A853]/20 transition-colors">
                <svg className="w-6 h-6 text-[#D4A853] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <h3 className="text-white font-serif font-bold text-sm">{award.name}</h3>
                <p className="text-gray-500 text-xs mt-1">{award.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[#D4A853]">
                  <WhyIcon type={item.icon} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#1B2A4A] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white font-bold mb-4">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us today for a free, confidential consultation with an experienced immigration attorney.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2133881821" className="btn-gold">
              Call (213) 388-1821
            </a>
            <button onClick={() => navigate('/contact')} className="btn-outline">
              Send a Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
