import { Stamp, Lock, Zap, Cloud, Users, FileCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Stamp,
      title: t('features.custom.title'),
      description: t('features.custom.desc'),
    },
    {
      icon: Zap,
      title: t('features.instant.title'),
      description: t('features.instant.desc'),
    },
    {
      icon: Lock,
      title: t('features.secure.title'),
      description: t('features.secure.desc'),
    },
    {
      icon: Cloud,
      title: t('features.cloud.title'),
      description: t('features.cloud.desc'),
    },
    {
      icon: Users,
      title: t('features.team.title'),
      description: t('features.team.desc'),
    },
    {
      icon: FileCheck,
      title: t('features.formats.title'),
      description: t('features.formats.desc'),
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-gray-200 hover:border-orange-600 hover:shadow-lg transition-all"
            >
              <div className="bg-orange-100 rounded-lg p-2 w-fit mb-2">
                <feature.icon className="text-orange-600" size={20} />
              </div>
              <h3 className="text-gray-900 mb-1.5">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}