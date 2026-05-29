import { Helmet } from 'react-helmet-async';

const SITE_ORIGIN = 'https://www.becraftimmigrationlaw.com';
const OG_IMAGE_BASE = 'https://www.makeitglow.co/api/og/becraft-immigration';

interface HreflangEntry {
  lang: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  hreflang?: HreflangEntry[];
}

export default function SEO({ title, description, canonical, ogImage, schema, hreflang }: SEOProps) {
  const url = canonical ? `${SITE_ORIGIN}${canonical}` : '';
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const ogImg = ogImage || `${OG_IMAGE_BASE}?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description.slice(0, 80))}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={ogImg} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />
      {hreflang?.map((entry) => (
        <link key={entry.lang} rel="alternate" hrefLang={entry.lang} href={`${SITE_ORIGIN}${entry.path}`} />
      ))}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
