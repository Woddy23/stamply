import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

export function Pricing() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const plans = [
    {
      name: t('pricing.plan.starter'),
      price: '7.99',
      description: t('pricing.starter.desc'),
      features: [
        t('pricing.feature.location1'),
        t('pricing.feature.unlimitedAll'),
        t('pricing.feature.emails1000'),
        t('pricing.feature.pushUnlimited'),
        t('pricing.feature.groupNone'),
      ],
      cta: t('pricing.cta.trial'),
      highlighted: false,
      isEnterprise: false,
    },
    {
      name: t('pricing.plan.growth'),
      price: '15.99',
      description: t('pricing.growth.desc'),
      features: [
        t('pricing.feature.locations3'),
        t('pricing.feature.unlimitedAll'),
        t('pricing.feature.emails3000'),
        t('pricing.feature.pushUnlimited'),
        t('pricing.feature.group1'),
      ],
      cta: t('pricing.cta.trial'),
      highlighted: true,
      isEnterprise: false,
    },
    {
      name: t('pricing.plan.pro'),
      price: '24.99',
      description: t('pricing.pro.desc'),
      features: [
        t('pricing.feature.locations10'),
        t('pricing.feature.unlimitedAll'),
        t('pricing.feature.emails10000'),
        t('pricing.feature.pushUnlimited'),
        t('pricing.feature.groupUnlimited'),
      ],
      cta: t('pricing.cta.trial'),
      highlighted: false,
      isEnterprise: false,
    },
    {
      name: t('pricing.plan.enterprise'),
      price: t('pricing.custom'),
      description: t('pricing.enterprise.desc'),
      features: [
        t('pricing.feature.locationsUnlimited'),
        t('pricing.feature.unlimitedAll'),
        t('pricing.feature.emailsNegotiated'),
        t('pricing.feature.pushUnlimited'),
        t('pricing.feature.groupUnlimited'),
      ],
      cta: t('pricing.cta.sales'),
      highlighted: false,
      isEnterprise: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-4 flex flex-col h-full ${
                plan.highlighted
                  ? 'ring-2 ring-orange-600 shadow-xl lg:scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-orange-600 text-white text-center py-1.5 px-3 rounded-lg mb-3 text-xs">
                  {t('pricing.mostPopular')}
                </div>
              )}
              
              <div className="mb-4">
                <h3 className="text-lg text-gray-900 mb-1.5">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1.5">
                  <span className="text-3xl text-gray-900">€{plan.price}</span>
                  <span className="text-gray-600 text-sm">/{t('pricing.month')}</span>
                </div>
                <p className="text-gray-600 text-xs">{plan.description}</p>
              </div>

              <button
                className={`w-full py-2 rounded-lg mb-4 transition-colors text-sm ${
                  plan.highlighted
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                onClick={() => navigate(plan.isEnterprise ? '/contact' : '/auth')}
              >
                {plan.cta}
              </button>

              <div className="space-y-2 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <Check className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-xs text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}