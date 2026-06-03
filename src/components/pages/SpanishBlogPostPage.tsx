import { useParams, Link } from 'react-router-dom';
import SEO from '../SEO';
import { esBlogPosts } from '../../data/es-blog-posts';

export default function SpanishBlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = esBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <Link to="/es/blog" className="text-[#C5A572] hover:underline">
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | Bufete de Abogados de Todd Becraft`}
        description={post.excerpt}
        canonical={`/es/blog/${post.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "datePublished": post.date,
          "description": post.excerpt
        }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/es" className="hover:text-[#C5A572] transition-colors">
              Inicio
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <Link to="/es/blog" className="hover:text-[#C5A572] transition-colors">
              Blog
            </Link>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-gray-900">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-1 w-20 bg-gradient-to-r from-[#C5A572] to-[#D4B881] mb-6"></div>
          
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1B2A4A] mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <time>{post.date}</time>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-[#1B2A4A] prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#C5A572] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#1B2A4A] prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-2
              prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1B2A4A] to-[#243554] rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl font-serif font-bold mb-4">
              ¿Necesita ayuda con su caso de inmigración?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Comuníquese con el Bufete de Abogados de Todd Becraft para una consulta confidencial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/es/contactenos"
                className="inline-block bg-[#C5A572] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#B39560] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C5A572]/30"
              >
                Programe una Consulta
              </Link>
              <a
                href="tel:213-388-1821"
                className="inline-block bg-white text-[#1B2A4A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Llame al 213-388-1821
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/es/blog"
          className="inline-flex items-center gap-2 text-[#C5A572] hover:gap-3 transition-all font-medium"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span>Volver al Blog</span>
        </Link>
      </div>
    </>
  );
}
