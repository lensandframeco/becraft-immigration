import { Link, useNavigate } from 'react-router-dom';
import SEO from '../SEO';
import { blogPosts } from '../../data/blog-posts';

export default function BlogPage() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Immigration Blog | Law Office of Todd Becraft"
        description="Immigration law news, updates, and guidance from the Law Office of Todd Becraft in Los Angeles."
        canonical="/blog"
        schema={{ "@context": "https://schema.org", "@type": "Blog", "name": "Becraft Immigration Blog" }}
      />
      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="gold-line mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">
              Immigration Law <span className="text-[#D4A853]">Blog</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Stay informed about the latest developments in immigration law, policy changes,
              and practical advice from the Law Office of Todd Becraft.
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-white rounded-sm border border-gray-100 p-6 md:p-8 card-hover group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  <div className="flex-shrink-0 mb-3 md:mb-0 md:w-40">
                    <span className="text-sm text-[#D4A853] font-semibold">{post.date}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-serif font-bold text-[#1B2A4A] mb-3 group-hover:text-[#D4A853] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-[#D4A853] font-semibold text-sm tracking-wide uppercase group-hover:text-[#C49A48] transition-colors">
                      Read More
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2A4A] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-white font-bold mb-4">
            Have Questions About Your Immigration Case?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us for a free consultation. Our experienced immigration attorneys are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:2133881821" className="btn-gold">
              Call (213) 388-1821
            </a>
            <button onClick={() => navigate('/contact')} className="btn-outline">
              Contact Us Online
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
