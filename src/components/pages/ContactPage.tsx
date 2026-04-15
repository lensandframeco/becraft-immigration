import { useState } from 'react';
import SEO from '../SEO';
import { trackLeadSubmission, trackPhoneClick } from '../../utils/analytics';

export default function ContactPage() {
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
        trackLeadSubmission({ language: 'en', service: formData.service });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setError('There was an error submitting your message. Please try again or call us directly.');
      }
    } catch {
      setError('There was an error submitting your message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SEO
        title="Contact Us | Law Office of Todd Becraft"
        description="Contact the Law Office of Todd Becraft for a free immigration consultation. Call (213) 388-1821 or fill out our online form."
        canonical="/contact"
        schema={{ "@context": "https://schema.org", "@type": "ContactPage", "name": "Contact Law Office of Todd Becraft" }}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
              Contact <span className="text-[#D4A853]">Us</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ready to take the next step? Reach out for a free, confidential consultation
              with an experienced immigration attorney.
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
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form below and we will get back to you promptly. All consultations are confidential.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1B2A4A] mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for contacting us. We will review your message and respond as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[#D4A853] font-semibold text-sm hover:text-[#C49A48] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
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
                          Service Needed
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
                          <option value="">Select a service...</option>
                          <option value="asylum">Asylum</option>
                          <option value="appeals">BIA & 9th Circuit Appeals</option>
                          <option value="cancellation">Cancellation of Removal</option>
                          <option value="citizenship">Citizenship & Naturalization</option>
                          <option value="daca">DACA</option>
                          <option value="deportation">Deportation Defense</option>
                          <option value="green-card">Green Card / Adjustment of Status</option>
                          <option value="waiver">I-601A Provisional Waiver</option>
                          <option value="k1-visa">K-1 Fiance Visa</option>
                          <option value="tps">Temporary Protected Status (TPS)</option>
                          <option value="u-visa">U-Visa</option>
                          <option value="family">Family Immigration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell Us About Your Case *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm text-sm text-gray-800 placeholder-gray-400 transition-colors resize-none"
                        placeholder="Please briefly describe your immigration matter..."
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
                          Sending...
                        </span>
                      ) : (
                        'Submit Message'
                      )}
                    </button>

                    <p className="text-xs text-gray-400">
                      By submitting this form, you agree that we may contact you regarding your inquiry.
                      Submitting this form does not create an attorney-client relationship.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phone */}
              <div className="bg-[#1B2A4A] rounded-sm p-8">
                <h3 className="text-white font-serif font-bold text-lg mb-6">Call Us Today</h3>
                {/* Phone tracking handled on each anchor below */}
                <div className="gold-line mb-6" />
                <div className="space-y-4">
                  <a
                    href="tel:2133881821"
                    onClick={() => trackPhoneClick({ phone_number: '2133881821', location: 'contact_page', language: 'en' })}
                    className="flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group"
                  >
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
                  <a
                    href="tel:8552016898"
                    onClick={() => trackPhoneClick({ phone_number: '8552016898', location: 'contact_page', language: 'en' })}
                    className="flex items-center gap-4 text-white hover:text-[#D4A853] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full border border-[#D4A853]/30 flex items-center justify-center group-hover:border-[#D4A853] transition-colors">
                      <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Toll Free</p>
                      <p className="text-lg font-semibold">(855) 201-6898</p>
                    </div>
                  </a>
                </div>
                <div className="mt-6 bg-[#D4A853] text-[#1B2A4A] px-4 py-2 rounded-full text-sm font-bold tracking-wide text-center">
                  Se Habla Espanol
                </div>
              </div>

              {/* Office Info */}
              <div className="bg-white rounded-sm border border-gray-100 p-8">
                <h3 className="font-serif font-bold text-[#1B2A4A] text-lg mb-6">Office Information</h3>
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
                      <h4 className="font-semibold text-[#1B2A4A] text-sm">Location</h4>
                      <p className="text-gray-500 text-sm mt-1">Los Angeles, California</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B2A4A] text-sm">Office Hours</h4>
                      <div className="text-gray-500 text-sm mt-1 space-y-1">
                        <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                        <p>Saturday: By Appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#D4A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B2A4A] text-sm">Languages</h4>
                      <p className="text-gray-500 text-sm mt-1">English & Spanish</p>
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
                  Free Consultation
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  We offer free initial consultations to evaluate your immigration case.
                  There is no obligation and all communications are strictly confidential.
                </p>
                <a href="tel:2133881821" className="btn-gold text-xs px-6">
                  Call Now
                </a>
              </div>

              {/* Map Placeholder */}
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
                    <p className="text-gray-300 font-serif font-bold">Los Angeles, California</p>
                    <p className="text-gray-500 text-sm mt-1">Serving clients throughout Southern California</p>
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
