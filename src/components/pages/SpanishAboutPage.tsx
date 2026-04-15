import { useNavigate } from 'react-router-dom';
import SEO from '../SEO';

const team = [
  {
    name: 'Todd Becraft',
    title: 'Abogado Fundador',
    photo: 'https://becraftimmigrationlaw.com/wp-content/uploads/2025/10/todd-becraft-portrait-01-becraft-immigration-law-980x1337.webp',
    highlight: 'Más de 20 Años en Derecho Migratorio',
    bio: [
      'Todd Becraft es el abogado fundador de la Law Office of Todd Becraft, donde ha dedicado su carrera exclusivamente al derecho migratorio durante más de 20 años. Es el actual Vicepresidente del Capítulo SoCal de AILA y ex Presidente de la Sección de Inmigración del Colegio de Abogados del Condado de Los Ángeles.',
      'En 2009, Todd asumió la práctica migratoria del Juez de Inmigración Timothy Everett tras el retiro de éste a la práctica privada. Antes de eso, el Sr. Becraft trabajó estrechamente con Judy Wood, conocida como "Saint Judy", cuya notable labor de defensa fue retratada en la película del mismo nombre.',
      'El Sr. Becraft ha representado con éxito a miles de clientes en casos de asilo, defensa contra deportación, cancelación de remoción, inmigración familiar y apelaciones ante la Junta de Apelaciones de Inmigración y el Tribunal de Apelaciones del Noveno Circuito.',
    ],
  },
  {
    name: 'Dennis Escobar',
    title: 'Paralegal Principal y Gerente de Oficina',
    photo: 'https://becraftimmigrationlaw.com/wp-content/uploads/2025/10/dennis-escobar-portrait-becraft-immigration-law-980x1337.webp',
    highlight: 'Más de 25 Años en Derecho Migratorio',
    bio: [
      'Durante más de 25 años, Dennis Escobar ha dedicado su carrera al derecho migratorio. Como Paralegal Principal y Gerente de Oficina, Dennis administra las operaciones diarias de la oficina mientras trabaja estrechamente con abogados y clientes en prácticamente todas las etapas de un caso.',
      'Como inmigrante él mismo, Dennis conoce de primera mano los desafíos que enfrentan las familias. Es admirado por su paciencia, dedicación y compasión, siempre tomándose el tiempo para escuchar y atender las preocupaciones de los clientes con cuidado.',
    ],
  },
  {
    name: 'Gianina Haro',
    title: 'Paralegal',
    highlight: 'Más de 30 Años en Derecho Migratorio',
    photo: 'https://becraftimmigrationlaw.com/wp-content/uploads/2025/10/gianina-haro-portrait-becraft-immigration-law-980x1337.webp',
    bio: [
      'Con más de treinta años de experiencia en derecho migratorio, Gianina Haro es un pilar fundamental de apoyo al cliente en la Law Office of Todd Becraft. Se especializa en preparar trámites, recopilar evidencia y gestionar los detalles que mantienen los casos en movimiento.',
      'Bilingüe en inglés y español, Gianina tiende puentes de comunicación, ayudando a los clientes a sentirse cómodos y comprendidos. Trabaja en una amplia gama de asuntos migratorios, incluyendo solicitudes de asilo, peticiones familiares, exenciones y naturalización.',
    ],
  },
  {
    name: 'Imani Machado',
    title: 'Directora de Marketing y Especialista en Clientes',
    photo: 'https://becraftimmigrationlaw.com/wp-content/uploads/2025/10/imani-machado-portrait-becraft-immigration-law-980x1337.webp',
    bio: [
      'Imani Machado aporta creatividad, estrategia y compasión a su rol como Directora de Marketing y Especialista en Clientes. Con más de una década de experiencia en marketing legal y relaciones con clientes, asegura que la misión de defensa del despacho se extienda más allá de la sala de audiencias.',
      'Imani gestiona los esfuerzos de alcance comunitario, desarrolla recursos educativos y trabaja directamente con los clientes para brindarles apoyo y orientación a lo largo de su proceso migratorio. Su dedicación se extiende a la comunidad en general, donde colabora con organizaciones que sirven a familias inmigrantes en todo el sur de California.',
    ],
  },
];

const whyChooseUs = [
  { title: 'Más de 20 Años de Experiencia', desc: 'Dos décadas de práctica dedicada al derecho migratorio significa que hemos visto y manejado exitosamente prácticamente todo tipo de caso.', icon: 'clock' },
  { title: 'Exclusivamente Derecho Migratorio', desc: 'No incursionamos en otras áreas. La inmigración es nuestro único enfoque, lo que nos otorga un conocimiento sin igual en la materia.', icon: 'focus' },
  { title: 'Atención Personalizada', desc: 'Cada caso es manejado personalmente por nuestros abogados. Usted trabaja directamente con abogados con experiencia, no con personal junior.', icon: 'person' },
  { title: 'Servicios Bilingües', desc: 'Nuestro equipo es completamente bilingüe en inglés y español. Nada se pierde en la traducción cuando su futuro está en juego.', icon: 'language' },
  { title: 'Trayectoria Comprobada', desc: 'Miles de casos exitosos, incluyendo complejas solicitudes de asilo y defensas contra deportación que otras firmas rechazaron.', icon: 'check' },
  { title: 'Defensa con Compasión', desc: 'Entendemos el impacto emocional de los procedimientos migratorios. Nuestro equipo ofrece empatía genuina y apoyo en cada paso del camino.', icon: 'heart' },
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

export default function SpanishAboutPage() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Sobre Nosotros | Abogados de Inmigración Los Ángeles"
        description="Conozca al Abogado Todd Becraft — décadas de experiencia en derecho migratorio en Los Ángeles ayudando a familias, beneficiarios de DACA, solicitantes de asilo y más."
        canonical="/es/sobre-nosotros"
        schema={{ "@context": "https://schema.org", "@type": "AboutPage", "name": "Sobre Nosotros — Law Office of Todd Becraft" }}
        hreflang={[
          { lang: 'en', path: '/about' },
          { lang: 'es', path: '/es/sobre-nosotros' },
          { lang: 'x-default', path: '/about' },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://becraftimmigrationlaw.com/wp-content/uploads/2025/10/unnamed-10-scaled.webp"
            alt="El equipo de Becraft Immigration Law"
            className="hidden md:block w-full h-full object-cover"
          />
          <img
            src="https://images.makeitglow.co/projects/becraft-immigration/team-9x16.jpg"
            alt="El equipo de Becraft Immigration Law"
            className="block md:hidden w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/95 via-[#1B2A4A]/80 to-[#1B2A4A]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold mb-6 leading-tight">
              Las Personas Detrás de <span className="text-[#D4A853]">Su Caso</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Un equipo que ha dedicado sus carreras — más de 50 años combinados — exclusivamente al derecho migratorio. No solo manejamos casos. Cambiamos vidas.
            </p>
            <button onClick={() => navigate('/es/contactenos')} className="btn-gold">
              Reúnase con Nosotros Hoy
            </button>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Firm Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="gold-line mb-6" />
                <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4 leading-tight">
                  Dos Décadas Luchando por lo Justo
                </h2>
                <div className="flex items-center gap-4 mt-8">
                  <div className="text-center">
                    <p className="text-3xl font-serif font-bold text-[#D4A853]">20+</p>
                    <p className="text-xs text-gray-400 mt-1">Años</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-3xl font-serif font-bold text-[#D4A853]">Miles</p>
                    <p className="text-xs text-gray-400 mt-1">Casos Ganados</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-3xl font-serif font-bold text-[#D4A853]">100%</p>
                    <p className="text-xs text-gray-400 mt-1">Inmigración</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                La Law Office of Todd Becraft fue fundada con una misión clara: brindar
                representación legal excepcional a inmigrantes y sus familias. A lo largo
                de las últimas dos décadas, esa misión nunca ha vacilado.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Desde nuestras oficinas en Wilshire Boulevard, en el corazón de Los Ángeles,
                hemos ayudado a miles de personas a navegar el complejo sistema migratorio
                de los Estados Unidos. Ya sea que nuestros clientes busquen asilo por
                persecución, luchen contra la deportación, se reúnan con familiares o
                persigan el sueño de la ciudadanía estadounidense, aportamos el mismo nivel
                de dedicación, experiencia y atención personal a cada caso.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lo que nos distingue es nuestro enfoque exclusivo en derecho migratorio.
                Mientras muchos despachos distribuyen su atención entre múltiples áreas de
                práctica, nosotros hemos elegido dedicar toda nuestra práctica a la
                inmigración. Este enfoque singular significa que nos mantenemos a la
                vanguardia de la ley y política migratoria en constante cambio, brindando
                a nuestros clientes una ventaja crítica.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Los miembros de nuestro equipo provienen de diversos orígenes, y varios son
                inmigrantes ellos mismos. Entendemos los desafíos que enfrentan nuestros
                clientes — no solo legalmente, sino personalmente. Esa experiencia vivida
                da forma a nuestra empatía, nuestra urgencia y nuestro compromiso
                inquebrantable con cada persona que cruza nuestras puertas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Attorney — Todd */}
      <section className="bg-[#1B2A4A] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[500px] lg:h-auto">
              <img
                src={team[0].photo}
                alt={team[0].name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1B2A4A]/30" />
            </div>
            <div className="px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
              <p className="text-[#D4A853] text-xs tracking-[0.2em] uppercase mb-3">
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
                <span className="text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full">Vicepresidente AILA SoCal</span>
                <span className="text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full">Three Best Rated</span>
                <span className="text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full">AVVO 10.0</span>
                <span className="text-xs px-3 py-1.5 border border-[#D4A853]/30 text-[#D4A853] rounded-full">Premio Pro Bono</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="gold-line-center mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Cada miembro de nuestro equipo comparte el mismo compromiso: luchar por el futuro de nuestros clientes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.slice(1).map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-sm mb-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#D4A853] text-xs tracking-[0.15em] uppercase mb-1">{member.title}</p>
                    <h3 className="text-xl font-serif text-white font-bold">{member.name}</h3>
                    {member.highlight && <p className="text-white/50 text-xs mt-1">{member.highlight}</p>}
                  </div>
                </div>
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
            <p className="text-[#D4A853] text-xs tracking-[0.2em] uppercase">Reconocimientos</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Three Best Rated', detail: 'Mejores Abogados de Inmigración en Los Ángeles' },
              { name: '10 Best', detail: 'Instituto Americano de Consejo Legal' },
              { name: 'AVVO 10.0', detail: 'Calificación Superior — Abogado Destacado' },
              { name: 'Expertise', detail: '21 Mejores Abogados de Inmigración en LA' },
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
              ¿Por Qué Elegirnos?
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
            ¿Listo para Hablar Sobre Su Caso?
          </h2>
          <p className="text-gray-300 mb-8">
            Contáctenos hoy para una consulta gratuita y confidencial con un abogado de inmigración con experiencia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2133881821" className="btn-gold">
              Llame al (213) 388-1821
            </a>
            <button onClick={() => navigate('/es/contactenos')} className="btn-outline">
              Envíenos un Mensaje
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
