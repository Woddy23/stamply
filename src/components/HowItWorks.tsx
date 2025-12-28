import { Link, useNavigate } from 'react-router-dom';
import { Play, ArrowRight, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export function HowItWorks() {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-gray-900 mb-4 sm:mb-5 md:mb-6">
            {language === 'pt' ? 'Como Funciona?' : 'How Does It Work?'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            {language === 'pt' 
              ? 'Em apenas alguns passos simples, transforme a experiência de fidelidade dos seus clientes'
              : 'In just a few simple steps, transform your customers\' loyalty experience'}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Video Section */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center">
                {!isPlaying ? (
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="group/play relative"
                  >
                    {/* Pulsing Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-white opacity-20 animate-ping"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center" style={{ animationDelay: '1s' }}>
                      <div className="w-28 h-28 rounded-full bg-white opacity-20 animate-ping"></div>
                    </div>
                    
                    {/* Play Button */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform duration-300">
                      <Play className="text-orange-600 ml-1 w-7 h-7 sm:w-10 sm:h-10 md:w-10 md:h-10" fill="currentColor" />
                    </div>
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    {/* Simulated Video */}
                    <div className="text-center p-4 sm:p-6 md:p-8">
                      <p className="text-base sm:text-lg md:text-xl">
                        {language === 'pt' ? 'Vídeo de Demonstração' : 'Demo Video'}
                      </p>
                      <p className="text-xs sm:text-sm opacity-75 mt-2">
                        {language === 'pt' ? 'Stamply em Ação' : 'Stamply in Action'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Video Info Bar */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs sm:text-sm opacity-75">{language === 'pt' ? 'Duração' : 'Duration'}</p>
                    <p className="text-sm sm:text-base">2:30 min</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs sm:text-sm opacity-75">{language === 'pt' ? 'Idioma' : 'Language'}</p>
                    <p className="text-sm sm:text-base">{language === 'pt' ? 'Português' : 'English'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Cards */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 order-1 lg:order-2">
            {/* Business Card */}
            <Link to="/how-it-works" className="block group">
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-400 overflow-hidden">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <div className="relative flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white border-2 border-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Briefcase className="text-orange-600 w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <h3 className="text-lg sm:text-xl md:text-xl text-gray-900">
                        {language === 'pt' ? 'Para Empresas' : 'For Business'}
                      </h3>
                      <ArrowRight className="text-orange-600 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                    </div>
                    <p className="text-gray-600 mb-2 sm:mb-2.5 md:mb-3 text-xs sm:text-sm">
                      {language === 'pt' 
                        ? 'Configure o seu programa de fidelidade em 4 passos simples'
                        : 'Set up your loyalty program in 4 simple steps'}
                    </p>
                    <div className="flex items-center gap-2 text-orange-600">
                      <span className="text-xs">{language === 'pt' ? 'Ver guia completo' : 'See full guide'}</span>
                      <div className="w-8 sm:w-10 h-0.5 bg-orange-600 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Customer Card */}
            <div 
              onClick={() => {
                navigate('/how-it-works');
                setTimeout(() => {
                  const target = document.getElementById('customer-steps-header');
                  if (target) {
                    const yOffset = -100; // Offset para rolar mais para cima
                    const y = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="block group cursor-pointer"
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-400 overflow-hidden">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                
                <div className="relative flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white border-2 border-orange-400 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Users className="text-orange-600 w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <h3 className="text-lg sm:text-xl md:text-xl text-gray-900">
                        {language === 'pt' ? 'Para Clientes' : 'For Customers'}
                      </h3>
                      <ArrowRight className="text-orange-600 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                    </div>
                    <p className="text-gray-600 mb-2 sm:mb-2.5 md:mb-3 text-xs sm:text-sm">
                      {language === 'pt' 
                        ? 'Descubra como os seus clientes usam a aplicação'
                        : 'Discover how your customers use the app'}
                    </p>
                    <div className="flex items-center gap-2 text-orange-600">
                      <span className="text-xs">{language === 'pt' ? 'Ver guia completo' : 'See full guide'}</span>
                      <div className="w-8 sm:w-10 h-0.5 bg-orange-600 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
