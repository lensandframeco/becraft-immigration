import { useNavigate } from 'react-router-dom';
import SEO from '../SEO';

const caseStudies = [
  {
    category: 'Asilo y Convención Contra la Tortura',
    title: 'Asilo y Protección Bajo la Convención Contra la Tortura',
    description: 'Representamos a clientes que huyen de persecución por actividades políticas, creencias religiosas o membresía en grupos sociales específicos — incluyendo casos que otros abogados han rechazado.',
    outcome: 'A través de evidencia exhaustiva de condiciones del país, testimonios de expertos y declaraciones personales convincentes, hemos obtenido asilo exitosamente para clientes que enfrentaban deportación, brindándoles protección permanente en los Estados Unidos.',
    tag: 'Asilo Concedido',
  },
  {
    category: 'Cancelación de Remoción',
    title: 'Cancelación de Remoción para No Residentes Permanentes',
    description: 'Defendemos a residentes de largo plazo que enfrentan deportación y tienen familiares ciudadanos o residentes permanentes en EE. UU., demostrando el sufrimiento excepcional y extremadamente inusual que causaría su remoción.',
    outcome: 'Con evidencia médica, expedientes escolares, testimonios de expertos y documentación financiera, hemos persuadido a jueces de inmigración para cancelar la remoción y otorgar residencia permanente legal a nuestros clientes.',
    tag: 'Remoción Cancelada',
  },
  {
    category: 'Visa O-1 de Habilidad Extraordinaria',
    title: 'Visa O-1 de Habilidad Extraordinaria',
    description: 'Preparamos peticiones O-1 para profesionales con habilidades o logros extraordinarios, reuniendo la evidencia necesaria para demostrar reconocimiento nacional o internacional sostenido.',
    outcome: 'Nuestros paquetes de petición incluyen cartas de recomendación de expertos, evidencia de premios y publicaciones, cobertura mediática y documentación de contribuciones significativas al campo.',
    tag: 'O-1 Aprobada',
  },
  {
    category: 'Visa P-3 para Artistas',
    title: 'Visa P-3 para Artistas o Entretenedores Culturalmente Únicos',
    description: 'Representamos a artistas y entretenedores que realizan formas de arte tradicionales o culturalmente únicas, preparando peticiones P-3 que establecen el mérito cultural de su trabajo.',
    outcome: 'Nuestras peticiones documentan la singularidad cultural de la forma artística, las credenciales del artista y su reconocimiento internacional, y el valor cultural de las actuaciones planeadas en EE. UU.',
    tag: 'P-3 Aprobada',
  },
  {
    category: 'Visa U para Víctimas de Crimen',
    title: 'Visa U para Víctimas de Crimen',
    description: 'Ayudamos a víctimas de crímenes calificados que han cooperado con las autoridades a obtener protección mediante la Visa U, incluso cuando enfrentan la posibilidad de deportación.',
    outcome: 'Trabajamos con las autoridades para obtener la certificación requerida, preparamos declaraciones completas y presentamos evidencia del impacto físico y psicológico para asegurar estatus legal, autorización de trabajo y un camino hacia la residencia permanente.',
    tag: 'Visa U Aprobada',
  },
];

const testimonials = [
  {
    quote: 'El Abogado Todd Becraft es un caballero único en su clase. Desde que manejó mis problemas de inmigración, todo ha ido en la dirección correcta. Se puede sentir que te trata como un miembro de la familia.',
    author: 'Rolando G.',
    service: 'vía Yelp',
  },
  {
    quote: 'La recepción fue fantástica y muy profesional. Me mostró mucho cuidado al preguntar cómo está mi familia. Lo veo como un experto por la manera en que hace y responde preguntas.',
    author: 'John',
    service: 'vía Avvo',
  },
  {
    quote: 'El Abogado Todd Becraft es un abogado de inmigración excepcional y conocedor. Manejó mi caso con tal clase y dignidad — gané mi caso. Excelente personal, excelente servicio al cliente.',
    author: 'Joseph M.',
    service: 'vía Yelp',
  },
  {
    quote: 'Siempre recordaré los servicios legales profesionales que recibí. Todo el personal es atento y siempre trabaja según las instrucciones de su cliente. Los servicios que recibí fueron mucho más de lo que me cobraron.',
    author: 'Tiwa Bob',
    service: 'vía Google',
  },
];

export default function SpanishSuccessStoriesPage() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Historias de Éxito | Abogados de Inmigración Los Ángeles"
        description="Historias reales de éxito de clientes del Law Office of Todd Becraft — asilo concedido, tarjetas verdes, ciudadanía y casos de deportación ganados."
        canonical="/es/historias-de-exito"
        schema={{ "@context": "https://schema.org", "@type": "WebPage", "name": "Historias de Éxito | Law Office of Todd Becraft" }}
        hreflang={[
          { lang: 'en', path: '/success-stories' },
          { lang: 'es', path: '/es/historias-de-exito' },
          { lang: 'x-default', path: '/success-stories' },
        ]}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
              Historias de <span className="text-[#D4A853]">Éxito</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Cada caso que tomamos representa el futuro de una familia. Aquí presentamos
              algunos de los resultados que hemos logrado para nuestros clientes. Si bien
              cada caso es diferente, estas historias reflejan nuestro compromiso de luchar
              por el mejor resultado posible.
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
              Resultados Representativos
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Los siguientes son representativos de los tipos de casos que manejamos y los resultados que hemos
              logrado. Los resultados pasados no garantizan resultados futuros, ya que cada caso depende de sus
              circunstancias únicas.
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
                        El Desafío
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-400 mb-2">
                        El Resultado
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
              Testimonios de Clientes
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Escuche a las familias que hemos ayudado.
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
            * Los testimonios son representativos de las experiencias de los clientes. Los resultados pasados no garantizan resultados futuros.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gold-line-center mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
            Permítanos Luchar por Su Futuro
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Todo caso exitoso comienza con una conversación. Contáctenos hoy para una
            consulta gratuita sobre su situación migratoria.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2133881821" className="btn-gold">
              Llame al (213) 388-1821
            </a>
            <button onClick={() => navigate('/es/contactenos')} className="btn-outline border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white">
              Programar una Consulta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
