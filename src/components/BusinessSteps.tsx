import { Download, UserCheck, Settings, Rocket, Star, Smartphone, Apple } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export function BusinessSteps() {
  const { language } = useLanguage();

  const steps = [
    {
      number: '1',
      icon: Download,
      title: language === 'pt' ? 'Download Stamply Business' : 'Download Stamply Business',
      description: language === 'pt' 
        ? 'na App Store ou Play Store.' 
        : 'on the App Store or Play Store.',
      highlight: language === 'pt' ? 'Stamply Business' : 'Stamply Business',
      phoneContent: 'download',
    },
    {
      number: '2',
      icon: UserCheck,
      title: language === 'pt' ? 'Log in como proprietário da empresa' : 'Log in as a business owner',
      description: language === 'pt' 
        ? 'Registe-se inserindo os detalhes da sua empresa.' 
        : 'Register by entering your company details.',
      highlight: language === 'pt' ? 'proprietário da empresa' : 'business owner',
      phoneContent: 'company',
    },
    {
      number: '3',
      icon: Settings,
      title: language === 'pt' ? 'Crie o seu programa de fidelidade' : 'Create your loyalty program',
      description: language === 'pt' 
        ? 'Desenhe o seu cartão e defina a recompensa.' 
        : 'Design your card, and set the reward.',
      highlight: language === 'pt' ? 'programa de fidelidade' : 'loyalty program',
      phoneContent: 'loyalty',
    },
    {
      number: '4',
      icon: Rocket,
      title: language === 'pt' ? 'Agora está pronto!' : 'Now you are ready!',
      description: language === 'pt' 
        ? 'Distribua cartões de fidelidade e selos aos seus clientes!' 
        : 'Give loyalty cards and stamps to your customers!',
      highlight: language === 'pt' ? 'pronto' : 'ready',
      phoneContent: 'ready',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
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
            <div className="inline-flex items-center gap-2 bg-white border-2 border-orange-200 text-orange-700 px-6 py-3 rounded-full mb-6 shadow-lg">
              <Smartphone size={20} />
              <span>{language === 'pt' ? 'Para Empresas' : 'For Business'}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
              {language === 'pt' ? 'Como Começar com ' : 'How to Get Started with '}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Stamply Business
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'pt' 
                ? 'Configure o seu programa de fidelidade em apenas 4 passos simples'
                : 'Set up your loyalty program in just 4 simple steps'}
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Phone Mockup */}
              <div className="relative mb-6 max-w-[140px] mx-auto sm:max-w-[180px] md:max-w-[220px] lg:max-w-none lg:mx-0">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-900 scale-[0.6] sm:scale-[0.7] md:scale-90 lg:scale-100">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-xs z-20">
                      <span className="text-gray-900">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3 border border-gray-900 rounded-sm relative">
                          <div className="absolute inset-0.5 bg-gray-900 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* Screen Content */}
                    <div className="h-full flex flex-col items-center justify-center p-4 pt-14">
                      {/* Download Screen */}
                      {step.phoneContent === 'download' && (
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                            <span className="text-3xl">💼</span>
                          </div>
                          <h3 className="text-sm mb-1">Stamply</h3>
                          <h3 className="text-base mb-3">Business</h3>
                          <div className="flex gap-1 justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={12} fill="#fb923c" className="text-orange-400" />
                            ))}
                          </div>
                          <div className="text-xs mb-1">5.0</div>
                          <div className="space-y-2 mt-4">
                            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-xs">
                              <Apple size={14} />
                              <span>App Store</span>
                            </div>
                            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-xs">
                              <span>▶</span>
                              <span>Google Play</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Company Setup Screen */}
                      {step.phoneContent === 'company' && (
                        <div className="w-full space-y-3">
                          <div className="text-center mb-4">
                            <div className="w-16 h-16 border-4 border-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-2xl">🏢</span>
                            </div>
                            <div className="text-xs text-gray-500">Company</div>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                              <div className="text-gray-400 text-[10px] mb-1">📧 Email</div>
                              <div className="text-gray-900">empresa@email.com</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                              <div className="text-gray-400 text-[10px] mb-1">📱 Phone Number</div>
                              <div className="text-gray-900">+351 21 234 5678</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                              <div className="text-gray-400 text-[10px] mb-1">📍 Address</div>
                              <div className="text-gray-900">Lisboa, Portugal</div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2 border border-gray-200">
                              <div className="text-gray-400 text-[10px] mb-1">🏪 Industry</div>
                              <div className="text-gray-900">Retail</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Loyalty Program Screen */}
                      {step.phoneContent === 'loyalty' && (
                        <div className="w-full">
                          <div className="text-xs text-gray-500 mb-2 text-center">Company</div>
                          <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-4 mb-3 shadow-lg">
                            <div className="grid grid-cols-4 gap-2 mb-3">
                              {[...Array(8)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`aspect-square rounded-full ${i < 3 ? 'bg-white' : 'bg-white/30 border-2 border-white'}`}
                                ></div>
                              ))}
                            </div>
                            <div className="text-white text-[10px]">Número de Carimbos</div>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200">
                              <span className="text-gray-700">Stamp Online</span>
                              <div className="flex gap-2">
                                <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center text-gray-500">-</button>
                                <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center text-gray-500">+</button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200">
                              <span className="text-gray-700">Design Logo</span>
                              <button className="px-2 py-1 border border-gray-300 rounded text-[10px]">Edit</button>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200">
                              <span className="text-gray-700">Reward</span>
                              <button className="px-2 py-1 border border-gray-300 rounded text-[10px]">Set</button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Ready Screen */}
                      {step.phoneContent === 'ready' && (
                        <div className="w-full text-center">
                          <div className="text-xs text-gray-500 mb-2">Cards</div>
                          <h3 className="text-sm mb-4">Minha Loja</h3>
                          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl mb-4">
                            <div className="flex flex-col items-center justify-center h-32">
                              <div className="text-white text-3xl mb-2">🎁</div>
                              <div className="text-white text-xs">Ganhe Pontos de Cada</div>
                              <div className="text-white text-xs">Compra</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-4 text-gray-400">
                            <button className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                              <span>🏠</span>
                            </button>
                            <button className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                              <span>📊</span>
                            </button>
                            <button className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg relative">
                              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                              <span>💳</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 z-20">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white text-lg">{step.number}</span>
                </div>
              </div>

              {/* Step Content */}
              <div className="text-center">
                <h3 className="text-lg text-gray-900 mb-2">
                  {step.title.split(step.highlight)[0]}
                  <span className="text-orange-600">{step.highlight}</span>
                  {step.title.split(step.highlight)[1]}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 left-full w-8 h-0.5 bg-gradient-to-r from-orange-400 to-transparent -translate-x-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
