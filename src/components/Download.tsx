import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export function Download() {
  const { t, language } = useLanguage();

  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* Animated Background Elements - same as HowItWorks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-gray-900 mb-4">
              {t('download.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'pt' 
                ? 'Comece a selar documentos digitalmente onde quer que esteja'
                : 'Start stamping documents digitally wherever you are'}
            </p>
          </motion.div>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* iOS Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-b from-white via-orange-50 to-white rounded-3xl shadow-xl p-8 border-2 border-orange-200"
          >
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
          </motion.div>

          {/* Android Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-b from-white via-orange-50 to-white rounded-3xl shadow-xl p-8 border-2 border-orange-200"
          >
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
          </motion.div>
        </div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600">
            {language === 'pt' ? 'Precisa de ajuda? ' : 'Need help? '}
            <a href="/contact" className="text-orange-600 hover:text-orange-700 transition-colors">
              {language === 'pt' ? 'Entre em contacto' : 'Get in touch'}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}