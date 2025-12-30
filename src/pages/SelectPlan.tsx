import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, Rocket, TrendingUp, Crown, Sparkles, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/SEO';

export function SelectPlan() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      id: 'starter',
      name: t('selectPlan.starter'),
      monthlyPrice: 7.99,
      annualPrice: 6.87, // 14% discount
      icon: Rocket,
      iconColor: 'from-orange-400 to-orange-500',
      features: [
        t('pricing.feature.location1'),
        t('pricing.feature.unlimitedAll'),
        t('pricing.feature.emails1000'),
        t('pricing.feature.pushUnlimited'),
        t('pricing.feature.groupNone'),
      ],
    },
    {
      id: 'growth',
      name: t('selectPlan.growth'),
      monthlyPrice: 15.99,
      annualPrice: 13.75, // 14% discount
      icon: TrendingUp,
      iconColor: 'from-orange-500 to-orange-600',
      popular: true,
      features: [
        t('pricing.feature.locations3'),
        t('pricing.feature.unlimitedAll'),
        t('pricing.feature.emails3000'),
        t('pricing.feature.pushUnlimited'),
        t('pricing.feature.group1'),
      ],
    },
    {
      id: 'pro',
      name: t('selectPlan.pro'),
      monthlyPrice: 24.99,
      annualPrice: 21.49, // 14% discount
      icon: Crown,
      iconColor: 'from-orange-600 to-orange-700',
      features: [
        t('pricing.feature.locations10'),
        t('pricing.feature.unlimitedAll'),
        t('pricing.feature.emails10000'),
        t('pricing.feature.pushUnlimited'),
        t('pricing.feature.groupUnlimited'),
      ],
    },
    {
      id: 'enterprise',
      name: t('selectPlan.enterprise'),
      monthlyPrice: null,
      annualPrice: null,
      icon: Sparkles,
      iconColor: 'from-orange-500 to-orange-600',
      features: [
        t('pricing.feature.locationsUnlimited'),
        t('pricing.feature.unlimitedAll'),
        t('pricing.feature.emailsNegotiated'),
        t('pricing.feature.pushUnlimited'),
        t('pricing.feature.groupUnlimited'),
      ],
    },
  ];

  const getDisplayPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === null) {
      return t('selectPlan.priceOnRequest');
    }
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
    return `€${price?.toFixed(2)}`;
  };

  return (
    <>
      <SEO 
        title={language === 'pt' ? 'Selecione o Plano - Stamply' : 'Select Plan - Stamply'}
        description={language === 'pt' ? 'Escolha o plano perfeito para o seu negócio' : 'Choose the perfect plan for your business'}
        noindex={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span>{t('common.back') || 'Voltar'}</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-gray-900">
            {t('selectPlan.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {t('selectPlan.subtitle')}
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('selectPlan.monthly')}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('selectPlan.annual')}
              {billingCycle === 'annual' && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                  {t('selectPlan.saveUpTo')}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular ? 'ring-2 ring-orange-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 text-sm rounded-bl-lg">
                  {t('pricing.mostPopular')}
                </div>
              )}

              <div className="p-6">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.iconColor} mb-4`}>
                  <plan.icon className="text-white" size={28} />
                </div>

                {/* Plan Name */}
                <h3 className="mb-3 text-gray-900">{plan.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  <div>
                    <span className="text-gray-900">
                      {getDisplayPrice(plan)}
                    </span>
                    {plan.id !== 'enterprise' && (
                      <span className="text-gray-500">
                        {billingCycle === 'monthly'
                          ? t('selectPlan.perMonth')
                          : t('selectPlan.perYear')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    if (plan.id === 'enterprise') {
                      navigate('/contact');
                    } else {
                      navigate(`/checkout/${plan.id}?cycle=${billingCycle}`);
                    }
                  }}
                  className={`w-full py-3 rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.id === 'enterprise' ? t('selectPlan.contact') : t('selectPlan.selectPlan')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            {t('selectPlan.allPlansInclude')}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}