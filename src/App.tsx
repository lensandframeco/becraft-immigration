import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ServiceDetailPage from './components/pages/ServiceDetailPage';
import ResourcesIndexPage from './components/pages/ResourcesIndexPage';
import ResourcePage from './components/pages/ResourcePage';
import SuccessStoriesPage from './components/pages/SuccessStoriesPage';
import ContactPage from './components/pages/ContactPage';
import BlogPage from './components/pages/BlogPage';
import SpanishHomePage from './components/pages/SpanishHomePage';
import SpanishServicesIndexPage from './components/pages/SpanishServicesIndexPage';
import SpanishServiceDetailPage from './components/pages/SpanishServiceDetailPage';
import SpanishResourcesIndexPage from './components/pages/SpanishResourcesIndexPage';
import SpanishResourcePage from './components/pages/SpanishResourcePage';
import SpanishSuccessStoriesPage from './components/pages/SpanishSuccessStoriesPage';
import SpanishAboutPage from './components/pages/SpanishAboutPage';
import SpanishContactPage from './components/pages/SpanishContactPage';

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:area" element={<ServiceDetailPage />} />
            <Route path="/resources" element={<ResourcesIndexPage />} />
            <Route path="/resources/:slug" element={<ResourcePage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/es" element={<SpanishHomePage />} />
            <Route path="/es/servicios" element={<SpanishServicesIndexPage />} />
            <Route path="/es/servicios/:area" element={<SpanishServiceDetailPage />} />
            <Route path="/es/recursos" element={<SpanishResourcesIndexPage />} />
            <Route path="/es/recursos/:slug" element={<SpanishResourcePage />} />
            <Route path="/es/sobre-nosotros" element={<SpanishAboutPage />} />
            <Route path="/es/contactenos" element={<SpanishContactPage />} />
            <Route path="/es/historias-de-exito" element={<SpanishSuccessStoriesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
}
