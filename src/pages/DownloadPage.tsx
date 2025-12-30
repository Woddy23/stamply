import { Apple, Smartphone, Download, CheckCircle, Briefcase, User, Sparkles, Zap, Shield, Cloud, ChevronDown, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { useSEO } from '../hooks/useSEO';

export function DownloadPage() {
  const { t, language } = useLanguage();
  const seo = useSEO();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const platforms = [
    {
      icon: Apple,
      name: 'iOS Business',
      typeIcon: Briefcase,
      description: language === 'pt' ? 'Versão profissional para empresas no iOS' : 'Professional version for iOS businesses',
      version: '2.4.8',
      size: '32 MB',
      buttonText: t('download.cta.appstore'),
      color: 'from-orange-500 to-orange-600',
      features: language === 'pt' 
        ? ['Suporte ao Apple Pencil', 'Desbloqueio Face ID', 'Suporte a Widgets']
        : ['Apple Pencil Support', 'Face ID Unlock', 'Widget Support'],
    },
    {
      icon: Smartphone,
      name: 'Android Business',
      typeIcon: Briefcase,
      description: language === 'pt' ? 'Versão profissional para empresas no Android' : 'Professional version for Android businesses',
      version: '2.4.6',
      size: '28 MB',
      buttonText: t('download.cta.playstore'),
      color: 'from-orange-500 to-orange-600',
      features: language === 'pt'
        ? ['Material Design', 'Login biométrico', 'Armazenamento no cartão SD']
        : ['Material Design', 'Biometric Login', 'SD Card Storage'],
    },
    {
      icon: Apple,
      name: 'iOS Cliente',
      typeIcon: User,
      description: language === 'pt' ? 'Versão para uso pessoal no iOS' : 'Personal version for iOS',
      version: '2.4.8',
      size: '25 MB',
      buttonText: t('download.cta.appstore'),
      color: 'from-orange-500 to-orange-600',
      features: language === 'pt' 
        ? ['Suporte ao Apple Pencil', 'Desbloqueio Face ID', 'Suporte a Widgets']
        : ['Apple Pencil Support', 'Face ID Unlock', 'Widget Support'],
    },
    {
      icon: Smartphone,
      name: 'Android Cliente',
      typeIcon: User,
      description: language === 'pt' ? 'Versão para uso pessoal no Android' : 'Personal version for Android',
      version: '2.4.6',
      size: '22 MB',
      buttonText: t('download.cta.playstore'),
      color: 'from-orange-500 to-orange-600',
      features: language === 'pt'
        ? ['Material Design', 'Login biométrico', 'Armazenamento no cartão SD']
        : ['Material Design', 'Biometric Login', 'SD Card Storage'],
    },
  ];

  const faqs = [
    {
      question: language === 'pt' ? 'O Stamply é grátis para baixar?' : 'Is Stamply free to download?',
      answer: language === 'pt'
        ? 'Sim! O aplicativo é gratuito para baixar em todas as plataformas. Você pode começar com uma conta gratuita ou fazer upgrade para um plano pago para recursos adicionais.'
        : 'Yes! The app is free to download on all platforms. You can start with a free account or upgrade to a paid plan for additional features.',
    },
    {
      question: language === 'pt' ? 'Preciso baixar em todos os dispositivos?' : 'Do I need to download on all devices?',
      answer: language === 'pt'
        ? 'Sim, você precisará instalar o Stamply em cada dispositivo. No entanto, todos os seus dados sincronizam automaticamente pela nuvem, então você pode continuar de onde parou.'
        : 'Yes, you\'ll need to install Stamply on each device. However, all your data syncs automatically via the cloud, so you can pick up where you left off.',
    },
    {
      question: language === 'pt' ? 'Como faço para atualizar o Stamply?' : 'How do I update Stamply?',
      answer: language === 'pt'
        ? 'O aplicativo verifica atualizações automaticamente. Você será notificado quando uma nova versão estiver disponível. Apps móveis atualizam através da loja de aplicativos.'
        : 'The app checks for updates automatically. You\'ll be notified when a new version is available. Mobile apps update through the app store.',
    },
    {
      question: language === 'pt' ? 'Posso usar o Stamply offline?' : 'Can I use Stamply offline?',
      answer: language === 'pt'
        ? 'Sim! Apps móveis funcionam offline. Quaisquer alterações que você fizer sincronizarão automaticamente quando você se reconectar à internet.'
        : 'Yes! Mobile apps work offline. Any changes you make will automatically sync when you reconnect to the internet.',
    },
  ];

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
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
              <Download size={18} className="text-orange-500" />
              <span className="text-sm">{language === 'pt' ? 'Disponível em Todas as Plataformas' : 'Available on All Platforms'}</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 leading-[1.1] tracking-tight">
                {t('download.title')}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4"
            >
              {language === 'pt' 
                ? 'Escolha a plataforma que funciona melhor para você. Sincronização perfeita em todos os seus dispositivos.'
                : 'Choose the platform that works best for you. Seamless sync across all your devices.'}
            </motion.p>

            {/* Benefits Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4"
            >
              {/* Sync Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 bg-transparent">
                  <Cloud className="text-orange-500" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">{language === 'pt' ? 'Sincronização em nuvem' : 'Cloud sync'}</p>
                </div>
              </div>

              {/* Secure Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 bg-transparent">
                  <Shield className="text-orange-500" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">{language === 'pt' ? '100% seguro' : '100% secure'}</p>
                </div>
              </div>

              {/* Fast Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 bg-transparent">
                  <Zap className="text-orange-500" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">{language === 'pt' ? 'Instalação rápida' : 'Quick install'}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="pt-0 pb-20 px-4 sm:px-6 lg:px-8 bg-white -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full mb-6 shadow-lg">
              <Download size={20} />
              <span>{language === 'pt' ? 'Baixar Stamply' : 'Download Stamply'}</span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'pt' 
                ? 'Comece a carimbar documentos digitalmente onde quer que esteja'
                : 'Start stamping documents digitally wherever you are'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* iOS Card */}
            <div className="bg-gradient-to-b from-white via-orange-50 to-white rounded-3xl shadow-xl p-8 border-2 border-orange-200">
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#FEF3E2] rounded-2xl p-4 shadow-lg flex items-center justify-center group cursor-pointer">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-900 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                  >
                    <path 
                      d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-1">iOS Apps</h3>
                  <p className="text-sm text-gray-500">
                    {language === 'pt' ? 'Disponível na loja oficial' : 'Available on official store'}
                  </p>
                </div>
              </div>

              {/* Business Section */}
              <div className="bg-gray-50 rounded-2xl p-5 mb-4">
                <h4 className="text-gray-900 mb-4 font-semibold">Business</h4>
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                  {language === 'pt' ? 'Download na App Store' : 'Download on App Store'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Cliente Section */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <h4 className="text-gray-900 mb-4 font-semibold">Cliente</h4>
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                  {language === 'pt' ? 'Download na App Store' : 'Download on App Store'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Android Card */}
            <div className="bg-gradient-to-b from-white via-orange-50 to-white rounded-3xl shadow-xl p-8 border-2 border-orange-200">
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#FEF3E2] rounded-2xl p-4 shadow-lg flex items-center justify-center group cursor-pointer">
                  <svg 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-900 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"
                  >
                    <path 
                      d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5506 0 .9986.4486.9986.9993s-.448.9997-.9986.9997m-11.046 0c-.5506 0-.9993-.4486-.9993-.9997s.4486-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.2297L4.8429 5.5773a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.186.8535 12.9144.8535 15.3056v3.0897c0 .4142.3358.75.75.75h20.793c.4142 0 .75-.3358.75-.75v-3.0897c0-2.3912-1.8354-4.1196-4.1705-4.9843" 
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl text-gray-900 mb-1">Android Apps</h3>
                  <p className="text-sm text-gray-500">
                    {language === 'pt' ? 'Disponível na loja oficial' : 'Available on official store'}
                  </p>
                </div>
              </div>

              {/* Business Section */}
              <div className="bg-gray-50 rounded-2xl p-5 mb-4">
                <h4 className="text-gray-900 mb-4 font-semibold">Business</h4>
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                  {language === 'pt' ? 'Download na Play Store' : 'Download on Google Play'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Cliente Section */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <h4 className="text-gray-900 mb-4 font-semibold">Cliente</h4>
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                  {language === 'pt' ? 'Download na Play Store' : 'Download on Google Play'}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              {language === 'pt' ? 'Precisa de ajuda? ' : 'Need help? '}
              <a href="/contact" className="text-orange-600 hover:text-orange-700 transition-colors">
                {language === 'pt' ? 'Entre em contacto' : 'Get in touch'}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
                <Sparkles size={18} />
                <span className="text-sm">{language === 'pt' ? 'Funcionalidades' : 'Features'}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight">
                {language === 'pt' ? 'Funciona em Qualquer Lugar' : 'Works Anywhere'}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-orange-100">
                  <div className="bg-orange-100 rounded-xl p-3 mt-1 flex-shrink-0">
                    <Zap className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">
                      {language === 'pt' ? 'Sincronização em Tempo Real' : 'Real-Time Sync'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'pt' 
                        ? 'As alterações sincronizam instantaneamente em todos os seus dispositivos'
                        : 'Changes sync instantly across all your devices'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-orange-100">
                  <div className="bg-orange-100 rounded-xl p-3 mt-1 flex-shrink-0">
                    <Cloud className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">
                      {language === 'pt' ? 'Modo Offline' : 'Offline Mode'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'pt'
                        ? 'Trabalhe sem internet, sincronize quando estiver online novamente'
                        : 'Work without internet, sync when back online'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md border border-orange-100">
                  <div className="bg-orange-100 rounded-xl p-3 mt-1 flex-shrink-0">
                    <Shield className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-2">
                      {language === 'pt' ? 'Armazenamento Seguro' : 'Secure Storage'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'pt'
                        ? 'Criptografia de nível militar mantém seus documentos seguros'
                        : 'Military-grade encryption keeps your documents safe'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDY5MTY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cross-platform sync"
                className="w-full object-cover h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              {language === 'pt' ? 'Perguntas Frequentes' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-gray-600">
              {language === 'pt' 
                ? 'Tire suas dúvidas sobre download e instalação'
                : 'Get answers about download and installation'}
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
    </>
  );
}