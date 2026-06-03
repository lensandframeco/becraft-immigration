import { Link } from 'react-router-dom';
import SEO from '../SEO';
import { esBlogPosts } from '../../data/es-blog-posts';

export default function SpanishBlogPage() {
  return (
    <>
      <SEO
        title="Blog de Inmigración | Bufete de Abogados de Todd Becraft"
        description="Noticias, consejos y actualizaciones sobre inmigración de los expertos en derecho de inmigración de Los Ángeles."
        canonical="/es/blog"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Blog de Inmigración de Todd Becraft",
          "description": "Noticias, consejos y actualizaciones sobre inmigración"
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1B2A4A] to-[#243554] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6"></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
              Blog de Inmigración
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Noticias, consejos y actualizaciones sobre inmigración de nuestros expertos en derecho de inmigración.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {esBlogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/es/blog/${post.slug}`}
                className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <time>{post.date}</time>
                  </div>
                  
                  <h2 className="text-xl font-serif font-bold text-[#1B2A4A] mb-3 group-hover:text-[#C5A572] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-[#C5A572] font-medium group-hover:gap-2 transition-all">
                    <span>Leer más</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6 mx-auto"></div>
          <h2 className="text-3xl font-serif font-bold text-[#1B2A4A] mb-4">
            ¿Tiene preguntas sobre inmigración?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Comuníquese con nosotros para una consulta confidencial.
          </p>
          <Link
            to="/es/contactenos"
            className="inline-block bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39560] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C5A572]/30"
          >
            Programe una Consulta
          </Link>
        </div>
      </section>
    </>
  );
}
