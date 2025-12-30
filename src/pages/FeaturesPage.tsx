import { Users, FileCheck, Palette, Sparkles, Shield, Layout, Database, Workflow, Globe, Smartphone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { SEO } from '../components/SEO';
import { useSEO } from '../hooks/useSEO';

export function FeaturesPage() {
  const { t } = useLanguage();
  const seo = useSEO();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const advancedFeatures = [
    {
      icon: Shield,
      title: 'Criptografia Avançada',
      description: 'Proteção de documentos com criptografia de nível empresarial',
    },
    {
      icon: Layout,
      title: 'Templates Personalizáveis',
      description: 'Crie e salve seus próprios modelos de carimbo',
    },
    {
      icon: Database,
      title: 'Armazenamento Ilimitado',
      description: 'Espaço em nuvem sem limites para seus documentos',
    },
    {
      icon: Workflow,
      title: 'Automação de Fluxo',
      description: 'Automatize processos de assinatura e aprovação',
    },
    {
      icon: Globe,
      title: 'Acesso Multi-plataforma',
      description: 'Use em qualquer dispositivo, em qualquer lugar',
    },
    {
      icon: Smartphone,
      title: 'App Mobile Nativo',
      description: 'Aplicativos nativos para iOS e Android',
    },
  ];

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <main className="pt-16">
      {/* Hero Section with Animated Background */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full mb-10 shadow-lg">
            <Sparkles size={20} />
            <span>{t('hero.badge')}</span>
          </div>
          <h1 className="text-3xl lg:text-5xl text-gray-900 mb-8 leading-tight">
            {t('featuresPage.hero.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {t('featuresPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">
              Recursos Avançados
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ferramentas profissionais para maximizar sua produtividade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="bg-orange-100 rounded-xl p-3 w-fit mb-4 group-hover:bg-orange-600 transition-colors">
                  <feature.icon className="text-orange-600 group-hover:text-white transition-colors" size={22} />
                </div>
                <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase - Design Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="relative z-10">
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
                <Palette className="inline mr-2" size={16} />
                Design Intuitivo
              </div>
              <h2 className="text-3xl text-gray-900 mb-4">
                {t('featuresPage.design.title')}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('featuresPage.design.subtitle')}
              </p>
              
              {/* Feature list with checkmarks */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FileCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-800">{t('featuresPage.design.feature1')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FileCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-800">{t('featuresPage.design.feature2')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FileCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-800">{t('featuresPage.design.feature3')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image with fancy frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDY5MTY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Interface de design de carimbo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image with fancy frame */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ2NTM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Colaboração em equipe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="relative z-10 order-1 lg:order-2">
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
                <Users className="inline mr-2" size={16} />
                Colaboração
              </div>
              <h2 className="text-3xl text-gray-900 mb-4">
                {t('featuresPage.collab.title')}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('featuresPage.collab.subtitle')}
              </p>
              
              {/* Feature list with checkmarks */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-800">{t('featuresPage.collab.feature1')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-800">{t('featuresPage.collab.feature2')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-800">{t('featuresPage.collab.feature3')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}