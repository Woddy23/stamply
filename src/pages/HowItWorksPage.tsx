import { BusinessSteps } from '../components/BusinessSteps';
import { CustomerSteps } from '../components/CustomerSteps';

export function HowItWorksPage() {
  return (
    <main className="pt-24">
      <BusinessSteps />
      <CustomerSteps />
    </main>
  );
}
