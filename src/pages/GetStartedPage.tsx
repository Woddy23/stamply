import { useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Users, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SEO } from '../components/SEO';
import { useSEO } from '../hooks/useSEO';

export function GetStartedPage() {
  const { t } = useLanguage();
  const seo = useSEO();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    teamSize: '',
    useCase: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('getstarted.form.subtitle'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const steps = [
    {
      number: '1',
      title: t('getstarted.step1.title'),
      description: t('getstarted.step1.desc'),
    },
    {
      number: '2',
      title: t('getstarted.step2.title'),
      description: t('getstarted.step2.desc'),
    },
    {
      number: '3',
      title: t('getstarted.step3.title'),
      description: t('getstarted.step3.desc'),
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: t('getstarted.benefit1.title'),
      description: t('getstarted.benefit1.desc'),
    },
    {
      icon: Users,
      title: t('getstarted.benefit2.title'),
      description: t('getstarted.benefit2.desc'),
    },
    {
      icon: Shield,
      title: t('getstarted.benefit3.title'),
      description: t('getstarted.benefit3.desc'),
    },
  ];

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6">
            {t('getstarted.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('getstarted.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
                <benefit.icon className="text-orange-600" size={24} />
                <div className="text-left">
                  <div className="text-gray-900">{benefit.title}</div>
                  <div className="text-sm text-gray-600">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">
            {t('getstarted.steps.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 text-orange-300" size={32} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-3xl text-gray-900 mb-2">
                {t('getstarted.form.title')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('getstarted.form.subtitle')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 mb-2">
                    {t('getstarted.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    {t('getstarted.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2">
                    {t('getstarted.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-gray-700 mb-2">
                    {t('getstarted.form.teamSize')}
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    <option value="">{t('getstarted.form.teamSize.select')}</option>
                    <option value="1">{t('getstarted.form.teamSize.1')}</option>
                    <option value="2-10">{t('getstarted.form.teamSize.2-10')}</option>
                    <option value="11-50">{t('getstarted.form.teamSize.11-50')}</option>
                    <option value="51-200">{t('getstarted.form.teamSize.51-200')}</option>
                    <option value="200+">{t('getstarted.form.teamSize.200+')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-gray-700 mb-2">
                    {t('getstarted.form.useCase')}
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    <option value="">{t('getstarted.form.useCase.select')}</option>
                    <option value="contracts">{t('getstarted.form.useCase.contracts')}</option>
                    <option value="invoices">{t('getstarted.form.useCase.invoices')}</option>
                    <option value="legal">{t('getstarted.form.useCase.legal')}</option>
                    <option value="hr">{t('getstarted.form.useCase.hr')}</option>
                    <option value="general">{t('getstarted.form.useCase.general')}</option>
                    <option value="other">{t('getstarted.form.useCase.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 mb-2">
                    {t('getstarted.form.password')} *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                    placeholder={t('getstarted.form.passwordPlaceholder')}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {t('getstarted.form.passwordHint')}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  {t('getstarted.form.cta')}
                  <ArrowRight size={20} />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  {t('getstarted.form.terms')}{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-700">
                    {t('getstarted.form.termsLink')}
                  </a>{' '}
                  {t('getstarted.form.and')}{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-700">
                    {t('getstarted.form.privacyLink')}
                  </a>
                </p>
              </form>
            </div>

            {/* Benefits List */}
            <div>
              <h3 className="text-3xl text-gray-900 mb-8">
                {t('getstarted.included.title')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl text-gray-900 mb-2">{t('getstarted.included.1.title')}</h4>
                    <p className="text-gray-600">
                      {t('getstarted.included.1.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl text-gray-900 mb-2">{t('getstarted.included.2.title')}</h4>
                    <p className="text-gray-600">
                      {t('getstarted.included.2.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl text-gray-900 mb-2">{t('getstarted.included.3.title')}</h4>
                    <p className="text-gray-600">
                      {t('getstarted.included.3.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl text-gray-900 mb-2">{t('getstarted.included.4.title')}</h4>
                    <p className="text-gray-600">
                      {t('getstarted.included.4.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl text-gray-900 mb-2">{t('getstarted.included.5.title')}</h4>
                    <p className="text-gray-600">
                      {t('getstarted.included.5.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl text-gray-900 mb-2">{t('getstarted.included.6.title')}</h4>
                    <p className="text-gray-600">
                      {t('getstarted.included.6.desc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
                <h4 className="text-lg text-gray-900 mb-2">{t('getstarted.help.title')}</h4>
                <p className="text-gray-600 mb-4">
                  {t('getstarted.help.desc')}
                </p>
                <button className="text-orange-600 hover:text-orange-700 flex items-center gap-2">
                  {t('getstarted.help.cta')}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl text-gray-900 mb-12">
            {t('getstarted.trusted')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            <div className="text-4xl">TechCorp</div>
            <div className="text-4xl">FinanceInc</div>
            <div className="text-4xl">LegalPro</div>
            <div className="text-4xl">MediCare</div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center border border-gray-200">
            <div className="text-orange-600 text-6xl mb-6">"</div>
            <p className="text-2xl text-gray-700 mb-8">
              {t('getstarted.testimonial')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl">
                JD
              </div>
              <div className="text-left">
                <div className="text-gray-900">Jennifer Davis</div>
                <div className="text-gray-600">Operations Manager, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
