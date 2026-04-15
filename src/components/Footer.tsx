import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#131E35] text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Firm info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-serif text-xl font-bold mb-2">
              Law Office of <span className="text-[#D4A853]">Todd Becraft</span>
            </h3>
            <p className="text-gray-400 text-xs tracking-[0.15em] uppercase mb-6">
              Los Angeles Immigration Lawyers
            </p>
            <div className="gold-line mb-6" />
            <p className="text-sm leading-relaxed text-gray-400">
              Defending the rights of immigrants and their families for over 20 years.
              Dedicated exclusively to immigration law.
            </p>
            <div className="mt-6 inline-block bg-[#D4A853] text-[#1B2A4A] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
              Se Habla Español
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About the Firm', path: '/about' },
                { label: 'Practice Areas', path: '/services' },
                { label: 'Success Stories', path: '/success-stories' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#D4A853] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice areas */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {[
                'Asylum',
                'Deportation Defense',
                'Green Cards',
                'Family Immigration',
                'Citizenship',
                'DACA',
                'U-Visa',
              ].map((area) => (
                <li key={area}>
                  <Link to="/services" className="text-gray-400 hover:text-[#D4A853] transition-colors text-sm">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div className="text-sm">
                  <p className="text-gray-300">Los Angeles, California</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div className="text-sm">
                  <a href="tel:2133881821" className="text-gray-300 hover:text-[#D4A853] transition-colors block">
                    (213) 388-1821
                  </a>
                  <a href="tel:8552016898" className="text-gray-400 hover:text-[#D4A853] transition-colors block mt-1">
                    Toll Free: (855) 201-6898
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4A853] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-gray-400">
                  <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                  <p>Sat: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {['facebook', 'linkedin', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#D4A853] hover:text-[#D4A853] transition-colors"
                  aria-label={social}
                >
                  {social === 'facebook' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social === 'linkedin' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} Law Office of Todd Becraft. All rights reserved.
            </p>
            <p className="text-gray-600 text-[10px] text-center md:text-right max-w-2xl leading-relaxed">
              Disclaimer: The information on this website is for general information purposes only.
              Nothing on this site should be taken as legal advice for any individual case or situation.
              This information is not intended to create, and receipt or viewing does not constitute,
              an attorney-client relationship. Past results do not guarantee future outcomes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
