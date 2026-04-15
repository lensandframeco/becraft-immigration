import { useState } from 'react';
import SEO from '../SEO';
import { trackLeadSubmission, trackPhoneClick } from '../../utils/analytics';

export default function SpanishContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mgonlqll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        trackLeadSubmission({ language: 'es', service: formData.service });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setError('Hubo un error al enviar su mensaje. Por favor intente de nuevo o llámenos directamente.');
      }
    } catch {
      setError('Hubo un error al enviar su mensaje. Por favor intente de nuevo o llámenos directamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SEO
        title="Contáctenos | Abogados de Inmigración Los Ángeles"
        description="Contáctenos para una consulta de inmigración gratuita. Llame al (213) 388-1821 o llene nuestro formulario en línea. Se habla español."
        canonical="/es/contactenos"
        schema={{ "@context": "https://schema.org", "@type": "ContactPage", "name": "Contáctenos — Law Office of Todd Becraft" }}
        hreflang={[
          { lang: 'en', path: '/contact' },
          { lang: 'es', path: '/es/contactenos' },
          { lang: 'x-default', path: '/contact' },
        ]}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
              Contáctenos <span className="text-[#D4A853]">Hoy</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              ¿Listo para dar el siguiente paso? Comuníquese para una consulta gratuita y
              confidencial con un abogado de inmigración con experiencia.
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-sm border border-gray-100 p-8 md:p-10">
                <h2 className="text-2xl font-serif font-bold text-[#1B2A4A] mb-2">
                  Envíenos un Mensaje
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Complete el formulario y nos pondremos en contacto con usted a la brevedad. Todas las consultas son confidenciales.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1B2A4A] mb-2">
                      Mensaje Enviado con Éxito
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Gracias por contactarnos. Revisaremos su mensaje y responderemos a la brevedad posible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#D4A853] font-semibold text-sm hover:text-[#C49A48] transition-colors"
                    >
                      Enviar Otro Mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors"
                          placeholder="Su nombre completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors"
                          placeholder="su@correo.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Número de Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Servicio Requerido
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 bg-white transition-colors appearance-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: 'right 0.75rem center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '1.25em 1.25em',
                          }}
                        >
                          <option value="">Seleccione un servicio...</option>
                          <option value="asilo">Asilo</option>
                          <option value="cancelacion">Cancelación de Remoción</option>
                          <option value="ciudadania">Ciudadanía y Naturalización</option>
                          <option value="daca">DACA</option>
                          <option value="deportacion">Defensa contra Deportación</option>
                          <option value="tarjeta-verde">Tarjeta Verde / Ajuste de Estatus</option>
                          <option value="exencion">Exención Provisional I-601A</option>
                          <option value="visa-k1">Visa K-1 de Prometido(a)</option>
                          <option value="tps">Estado de Protección Temporal (TPS)</option>
                          <option value="visa-u">Visa U</option>
                          <option value="familia">Inmigración Familiar</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Cuéntenos Sobre Su Caso *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors resize-none"
                        placeholder="Describa brevemente su situación migratoria..."
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-sm p-4">
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        'Enviar Mensaje'
                      )}
                    </button>

                    <p className="text-xs text-gray-400">
                      Al enviar este formulario, acepta que podamos contactarle respecto a su consulta.
                      El envío de este formulario no crea una relación abogado-cliente.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phone */}
              <div className="bg-[#1B2A4A] rounded-sm p-8">
                <h3 className="text-white font-serif font-bold text-lg mb-6">Llámenos Hoy</h3>
                <div className="gold-line mb-6" />
                <div className="space-y-4">
                  <a href="tel:2133881821" onClick={() => trackPhoneClick({ phone_number: '2133881821', location: 'contact_page', language: 'es' })} className="flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group">
                    <div className="w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors">
                      <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Local</p>
                      <p className="text-lg font-semibold">(213) 388-1821</p>
                    </div>
                  </a>
                  <a href="tel:8552016898" onClick={() => trackPhoneClick({ phone_number: '8552016898', location: 'contact_page', language: 'es' })} className="flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group">
                    <div className="w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors">
                      <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Línea Gratuita</p>
                      <p className="text-lg font-semibold">(855) 201-6898</p>
                    </div>
                  </a>
                </div>
                <div className="mt-6 bg-[#D4A853] text-[#1B2A4A] px-4 py-2 rounded-full text-sm font-bold tracking-wide text-center">
                  Se Habla Español
                </div>
              </div>

              {/* Office Info */}
              <div className="bg-white rounded-sm border border-gray-100 p-8">
                <h3 className="font-serif font-bold text-[#1B2A4A] text-lg mb-6">Información de la Oficina</h3>
                <div className="gold-line mb-6" />
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B2A4A] text-sm">Ubicación</h4>
                      <p className="text-gray-500 text-sm mt-1">Los Ángeles, California</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B2A4A] text-sm">Horario de Atención</h4>
                      <div className="text-gray-500 text-sm mt-1 space-y-1">
                        <p>Lunes – Viernes: 9:00 AM – 6:00 PM</p>
                        <p>Sábado: Con Cita Previa</p>
                        <p>Domingo: Cerrado</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B2A4A] text-sm">Idiomas</h4>
                      <p className="text-gray-500 text-sm mt-1">Inglés y Español</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Consultation */}
              <div className="bg-[#D4A853]/10 border border-[#D4A853]/20 rounded-sm p-8 text-center">
                <svg className="w-10 h-10 mx-auto text-[#D4A853] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <h3 className="font-serif font-bold text-[#1B2A4A] text-lg mb-2">
                  Consulta Gratuita
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ofrecemos consultas iniciales gratuitas para evaluar su caso de inmigración.
                  Sin ningún compromiso y toda comunicación es estrictamente confidencial.
                </p>
                <a href="tel:2133881821" className="btn-gold text-xs px-6">
                  Llame Ahora
                </a>
              </div>

              {/* Location placeholder */}
              <div className="bg-[#1B2A4A] rounded-sm overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,168,83,0.5) 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }} />
                  <div className="text-center relative z-10">
                    <svg className="w-12 h-12 mx-auto text-[#D4A853]/40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-gray-300 font-serif font-bold">Los Ángeles, California</p>
                    <p className="text-gray-500 text-sm mt-1">Atendemos clientes en todo el sur de California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
