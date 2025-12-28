import { Check, X, Sparkles, Zap, Crown, Building2, ArrowRight, ChevronDown, Rocket, Shield, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const plans = [
    {
      name: t('pricing.plan.starter'),
      icon: Zap,
      monthlyPrice: '7.99',
      yearlyPrice: '76.70',
      description: t('pricing.starter.desc'),
      features: [
        { name: t('pricing.feature.location1'), included: true },
        { name: t('pricing.feature.unlimitedAll'), included: true },
        { name: t('pricing.feature.emails1000'), included: true },
        { name: t('pricing.feature.pushUnlimited'), included: true },
        { name: t('pricing.feature.groupNone'), included: true },
      ],
      cta: t('pricing.cta.trial'),
      highlighted: false,
      gradient: 'from-orange-400 to-orange-500',
      isEnterprise: false,
    },
    {
      name: t('pricing.plan.growth'),
      icon: Crown,
      monthlyPrice: '15.99',
      yearlyPrice: '153.50',
      description: t('pricing.growth.desc'),
      features: [
        { name: t('pricing.feature.locations3'), included: true },
        { name: t('pricing.feature.unlimitedAll'), included: true },
        { name: t('pricing.feature.emails3000'), included: true },
        { name: t('pricing.feature.pushUnlimited'), included: true },
        { name: t('pricing.feature.group1'), included: true },
      ],
      cta: t('pricing.cta.trial'),
      highlighted: true,
      gradient: 'from-orange-500 to-orange-600',
      isEnterprise: false,
    },
    {
      name: t('pricing.plan.pro'),
      icon: Building2,
      monthlyPrice: '24.99',
      yearlyPrice: '239.90',
      description: t('pricing.pro.desc'),
      features: [
        { name: t('pricing.feature.locations10'), included: true },
        { name: t('pricing.feature.unlimitedAll'), included: true },
        { name: t('pricing.feature.emails10000'), included: true },
        { name: t('pricing.feature.pushUnlimited'), included: true },
        { name: t('pricing.feature.groupUnlimited'), included: true },
      ],
      cta: t('pricing.cta.trial'),
      highlighted: false,
      gradient: 'from-orange-600 to-orange-700',
      isEnterprise: false,
    },
    {
      name: t('pricing.plan.enterprise'),
      icon: Rocket,
      monthlyPrice: t('pricing.custom'),
      yearlyPrice: t('pricing.custom'),
      description: t('pricing.enterprise.desc'),
      features: [
        { name: t('pricing.feature.locationsUnlimited'), included: true },
        { name: t('pricing.feature.unlimitedAll'), included: true },
        { name: t('pricing.feature.emailsNegotiated'), included: true },
        { name: t('pricing.feature.pushUnlimited'), included: true },
        { name: t('pricing.feature.groupUnlimited'), included: true },
      ],
      cta: t('pricing.cta.sales'),
      highlighted: false,
      gradient: 'from-orange-700 to-orange-800',
      isEnterprise: true,
    },
  ];

  const faqs = [
    {
      question: t('pricing.faq.q1'),
      answer: t('pricing.faq.a1'),
    },
    {
      question: t('pricing.faq.q2'),
      answer: t('pricing.faq.a2'),
    },
    {
      question: t('pricing.faq.q3'),
      answer: t('pricing.faq.a3'),
    },
    {
      question: t('pricing.faq.q4'),
      answer: t('pricing.faq.a4'),
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-200 text-orange-700 px-6 py-3 rounded-full shadow-sm"
            >
              <Sparkles size={18} className="text-orange-500" />
              <span className="text-sm">{t('pricing.flexiblePlans')}</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 leading-[1.1] tracking-tight">
                {t('pricing.title')}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
            >
              {t('pricing.subtitle')}
            </motion.p>

            {/* Benefits Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4"
            >
              {/* Cancel Anytime Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 bg-transparent">
                  <X className="text-orange-500" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">{t('pricing.benefit.cancel')}</p>
                </div>
              </div>

              {/* Secure Payment Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 bg-transparent">
                  <Shield className="text-orange-500" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">{t('pricing.benefit.secure')}</p>
                </div>
              </div>

              {/* No Setup Fee Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 bg-transparent">
                  <CreditCard className="text-orange-500" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">{t('pricing.benefit.noFee')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pt-0 pb-24 px-4 sm:px-6 lg:px-8 bg-white -mt-8">
        <div className="max-w-7xl mx-auto">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-white rounded-2xl p-1.5 shadow-lg border border-orange-100">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-xl transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t('pricing.annual')}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  billingCycle === 'yearly' 
                    ? 'bg-white/20 text-white' 
                    : 'bg-orange-100 text-orange-600'
                }`}>
                  -20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative group h-full"
              >
                {/* Glow effect */}
                {plan.highlighted && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                )}
                
                <div
                  className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 h-full flex flex-col scale-[0.85] sm:scale-90 md:scale-95 lg:scale-100 ${
                    plan.highlighted
                      ? 'border-2 border-orange-500 shadow-2xl'
                      : 'border-2 border-gray-200 hover:border-orange-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Popular badge - mantém espaço mesmo quando não visível */}
                  <div className={`${plan.highlighted ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'bg-transparent'} text-center py-1.5 px-3 text-xs min-h-[32px] flex items-center justify-center`}>
                    {plan.highlighted && (
                      <>
                        <Sparkles className="inline mr-1.5" size={14} />
                        {t('pricing.mostPopular')}
                      </>
                    )}
                  </div>
                  
                  <div className="p-4 flex-1 flex flex-col">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${plan.gradient} mb-3 shadow-lg`}>
                      <plan.icon className="text-white" size={20} />
                    </div>

                    {/* Plan name */}
                    <h3 className="text-lg text-gray-900 mb-1.5">{plan.name}</h3>
                    
                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 mb-1.5">
                      <span className="text-3xl text-gray-900">
                        €{billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600 text-xs">
                        /{billingCycle === 'monthly' ? t('pricing.month') : t('pricing.year')}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-xs mb-4 leading-relaxed">{plan.description}</p>

                    {/* CTA Button */}
                    <button
                      onClick={() => navigate(plan.isEnterprise ? '/contact' : '/auth')}
                      className={`w-full py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-xl hover:scale-105'
                          : 'bg-orange-50 text-orange-600 hover:bg-orange-100 border border-orange-200'
                      }`}
                    >
                      {plan.isEnterprise ? t('selectPlan.contact') : plan.cta}
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    {/* Features */}
                    <div className="mt-4 space-y-2 flex-1">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{t('pricing.featuresIncluded')}</div>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-1.5">
                          {feature.included ? (
                            <div className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                              <Check className="text-green-600" size={10} />
                            </div>
                          ) : (
                            <div className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                              <X className="text-gray-400" size={10} />
                            </div>
                          )}
                          <span className={`text-xs leading-relaxed ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              {t('pricing.faq.title')}
            </h2>
            <p className="text-gray-600">
              {t('pricing.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-orange-50 transition-colors"
                >
                  <h3 className="text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    size={24}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFaq === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}