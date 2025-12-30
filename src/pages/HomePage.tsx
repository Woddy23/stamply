import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Download } from '../components/Download';
import { HowItWorks } from '../components/HowItWorks';
import { SEO } from '../components/SEO';
import { useSEO } from '../hooks/useSEO';

export function HomePage() {
  const seo = useSEO();
  
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Download />
      </main>
    </>
  );
}