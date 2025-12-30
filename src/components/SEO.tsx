import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

const getSiteUrl = (): string => {
  if (typeof window !== 'undefined') {
    return import.meta.env.VITE_SITE_URL || window.location.origin;
  }
  return import.meta.env.VITE_SITE_URL || 'https://getstamply.vercel.app';
};

export function SEO({ title, description, image, noindex = false }: SEOProps) {
  const siteUrl = getSiteUrl();
  const currentUrl = typeof window !== 'undefined' 
    ? `${siteUrl}${window.location.pathname}` 
    : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      
      {noindex && (
        <>
          <meta name="robots" content="noindex,nofollow" />
          <meta name="googlebot" content="noindex,nofollow" />
        </>
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Stamply" />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

