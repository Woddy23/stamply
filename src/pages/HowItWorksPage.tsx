import { BusinessSteps } from '../components/BusinessSteps';
import { CustomerSteps } from '../components/CustomerSteps';
import { SEO } from '../components/SEO';
import { useSEO } from '../hooks/useSEO';

export function HowItWorksPage() {
  const seo = useSEO();
  
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <main className="pt-24">
        <BusinessSteps />
        <CustomerSteps />
      </main>
    </>
  );
}
