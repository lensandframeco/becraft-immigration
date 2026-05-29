import { useParams, Link } from 'react-router-dom';
import SEO from '../SEO';
import { blogPosts } from '../../data/blog-posts';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-warm-white px-4">
        <h1 className="text-2xl font-serif font-bold text-[#1B2A4A] mb-4">Post not found</h1>
        <Link to="/blog" className="text-[#D4A853] font-semibold hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const paragraphs = post.content.split('\n').filter((line) => line.trim() !== '');

  return (
    <div>
      <SEO
        title={`${post.title} | Becraft Immigration Law`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'Law Office of Todd Becraft' },
        }}
      />

      {/* Hero */}
      <section className="bg-[#1B2A4A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] via-[#1F3056] to-[#162240]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-[#D4A853] text-sm font-semibold mb-6 hover:text-[#E8C97A] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="gold-line mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-[#D4A853] font-semibold text-sm">{post.date}</p>
        </div>
        <div className="h-1 bg-gradient-to-r from-[#D4A853] via-[#E8C97A] to-[#D4A853]" />
      </section>

      {/* Content */}
      <section className="section-padding bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-sm border border-gray-100 p-8 md:p-12 space-y-4 text-gray-700 leading-relaxed">
            {paragraphs.map((para, i) => {
              const isHeading =
                para.length < 90 &&
                !para.endsWith('.') &&
                !para.endsWith(',') &&
                !para.endsWith(':') &&
                i !== 0;
              if (isHeading) {
                return (
                  <h2 key={i} className="text-lg font-serif font-bold text-[#1B2A4A] pt-4 first:pt-0">
                    {para}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-base leading-relaxed">
                  {para}
                </p>
              );
            })}
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
            <Link to="/contact" className="btn-outline">
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
