import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { trackPhoneClick, trackLanguageSwitch } from '../utils/analytics';

const enNavItems: { label: string; path: string }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Practice Areas', path: '/services' },
  { label: 'Resources', path: '/resources' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];


const esNavItems: { label: string; path: string }[] = [
  { label: 'Inicio', path: '/es' },
  { label: 'Sobre Nosotros', path: '/es/sobre-nosotros' },
  { label: 'Servicios', path: '/es/servicios' },
  { label: 'Recursos', path: '/es/recursos' },
  { label: 'Historias de Éxito', path: '/es/historias-de-exito' },
  { label: 'Contáctenos', path: '/es/contactenos' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isSpanish = location.pathname.startsWith('/es');
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleLangToggle = () => {
    trackLanguageSwitch({ from: isSpanish ? 'es' : 'en', to: isSpanish ? 'en' : 'es' });
    navigate(isSpanish ? '/' : '/es');
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#131E35] text-gray-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:2133881821" onClick={() => trackPhoneClick({ phone_number: '2133881821', location: 'nav', language: isSpanish ? 'es' : 'en' })} className="hover:text-[#D4A853] transition-colors flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (213) 388-1821
            </a>
            <a href="tel:8552016898" onClick={() => trackPhoneClick({ phone_number: '8552016898', location: 'nav', language: isSpanish ? 'es' : 'en' })} className="hover:text-[#D4A853] transition-colors hidden sm:flex items-center gap-1.5">
              Toll Free: (855) 201-6898
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLangToggle}
              className="bg-[#D4A853] text-[#1B2A4A] px-3 py-0.5 rounded-full text-xs font-bold tracking-wide hover:bg-[#E8C97A] transition-colors cursor-pointer"
            >
              {isSpanish ? 'English' : 'Español'}
            </button>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline">
              {isSpanish ? 'Consulta Gratis' : 'Free Consultation'}
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1B2A4A]/98 backdrop-blur-md shadow-lg' : 'bg-[#1B2A4A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-start group">
              <span className="text-white font-serif text-xl md:text-2xl font-bold tracking-tight leading-tight">
                Law Office of <span className="text-[#D4A853]">Todd Becraft</span>
              </span>
              <span className="text-gray-400 text-[11px] tracking-[0.2em] uppercase mt-0.5">
                {isSpanish ? 'Abogados de Inmigración de Los Ángeles' : 'Los Angeles Immigration Lawyers'}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-5">
              {isSpanish ? esNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link relative pb-1 whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-[#D4A853] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4A853]'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              )) : enNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link relative pb-1 whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-[#D4A853] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#D4A853]'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:2133881821"
                className="btn-gold text-xs px-6 py-2.5"
              >
                {isSpanish ? 'Consulta Gratis' : 'Free Consultation'}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] border-t border-white/10' : 'max-h-0'
        }`}>
          <div className="px-4 py-4 space-y-1 bg-[#1B2A4A]">
            {isSpanish ? esNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm tracking-wide transition-colors ${
                  isActive(item.path)
                    ? 'text-[#D4A853] bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            )) : enNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm tracking-wide transition-colors ${
                  isActive(item.path)
                    ? 'text-[#D4A853] bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 px-4">
              <a href="tel:2133881821" className="btn-gold w-full text-center text-xs">
                Call (213) 388-1821
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
