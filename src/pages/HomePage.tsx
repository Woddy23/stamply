import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Download } from '../components/Download';
import { HowItWorks } from '../components/HowItWorks';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Download />
    </main>
  );
}