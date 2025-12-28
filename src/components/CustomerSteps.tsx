import { Download, QrCode, Scan, Gift, Star, Smartphone, Apple, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export function CustomerSteps() {
  const { language } = useLanguage();

  const steps = [
    {
      number: '1',
      icon: Download,
      title: language === 'pt' ? 'Download Stamply' : 'Download Stamply',
      description: language === 'pt' 
        ? 'na App Store ou Play Store.' 
        : 'on the App Store or Play Store.',
      highlight: language === 'pt' ? 'Stamply' : 'Stamply',
      phoneContent: 'download',
    },
    {
      number: '2',
      icon: QrCode,
      title: language === 'pt' ? 'Receber código QR instantâneo' : 'Get QR code instantly',
      description: language === 'pt' 
        ? 'assim que abrir a aplicação.' 
        : 'as soon as you open the app.',
      highlight: language === 'pt' ? 'código QR' : 'QR code',
      phoneContent: 'qrcode',
    },
    {
      number: '3',
      icon: Scan,
      title: language === 'pt' ? 'Apresentar o código ao negócio' : 'Show code to business',
      description: language === 'pt' 
        ? 'para receber selos.' 
        : 'to receive stamps.',
      highlight: language === 'pt' ? 'código' : 'code',
      phoneContent: 'scan',
    },
    {
      number: '4',
      icon: Gift,
      title: language === 'pt' ? 'Ver cartões e ganhar recompensas' : 'View cards and earn rewards',
      description: language === 'pt' 
        ? 'no seu telefone!' 
        : 'on your phone!',
      highlight: language === 'pt' ? 'recompensas' : 'rewards',
      phoneContent: 'rewards',
    },
  ];

  return (
    <section id="customer-steps" className="pt-6 pb-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" id="customer-steps-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Smartphone size={20} />
              <span>{language === 'pt' ? 'Para Clientes' : 'For Customers'}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">
              {language === 'pt' ? 'Como Funciona para ' : 'How It Works for '}
              <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                {language === 'pt' ? 'os Clientes' : 'Customers'}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'pt' 
                ? 'Um processo simples e intuitivo em apenas 4 passos'
                : 'A simple and intuitive process in just 4 steps'}
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
                <div className="absolute -inset-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                
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
                          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                            <span className="text-3xl">🎴</span>
                          </div>
                          <h3 className="text-sm mb-1">Stamply</h3>
                          <h3 className="text-base mb-3">Cliente</h3>
                          <div className="flex gap-1 justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={12} fill="#9333ea" className="text-purple-500" />
                            ))}
                          </div>
                          <div className="text-xs mb-1">4.9</div>
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

                      {/* QR Code Screen */}
                      {step.phoneContent === 'qrcode' && (
                        <div className="w-full text-center">
                          <div className="text-xs text-gray-500 mb-4">Meu QR Code</div>
                          <div className="bg-white border-4 border-gray-200 rounded-2xl p-4 mb-4 mx-auto w-40 h-40 flex items-center justify-center shadow-lg">
                            {/* QR Code simulation */}
                            <div className="grid grid-cols-8 gap-1">
                              {[...Array(64)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'}`}
                                ></div>
                              ))}
                            </div>
                          </div>
                          <div className="text-xs text-gray-700 mb-2">João Silva</div>
                          <div className="text-xs text-gray-500 mb-4">ID: #12345</div>
                          <div className="bg-purple-50 rounded-xl p-3 border-2 border-purple-200">
                            <p className="text-xs text-purple-700">✨ Apresente para ganhar carimbos</p>
                          </div>
                        </div>
                      )}

                      {/* Scan/Stamp Screen */}
                      {step.phoneContent === 'scan' && (
                        <div className="w-full">
                          <div className="text-xs text-gray-500 mb-3 text-center">Cafeteria Central</div>
                          <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-4 mb-3 shadow-lg">
                            <div className="grid grid-cols-4 gap-2 mb-3">
                              {[...Array(10)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`aspect-square rounded-full ${i < 5 ? 'bg-white flex items-center justify-center' : 'bg-white/30 border-2 border-white'}`}
                                >
                                  {i < 5 && <span className="text-amber-600 text-xs">✓</span>}
                                </div>
                              ))}
                            </div>
                            <div className="text-white text-[10px]">5 de 10 carimbos</div>
                          </div>
                          
                          {/* Scanning animation */}
                          <div className="relative bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-4 border-2 border-purple-300">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <p className="text-xs text-purple-700 text-center">Escaneando...</p>
                          </div>
                        </div>
                      )}

                      {/* Rewards Screen */}
                      {step.phoneContent === 'rewards' && (
                        <div className="w-full">
                          <div className="text-xs text-gray-500 mb-2 text-center">Meus Cartões</div>
                          <div className="space-y-3 mb-4">
                            {/* Completed Card */}
                            <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-4 shadow-lg relative overflow-hidden">
                              <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1">
                                <CheckCircle size={12} className="text-green-600 inline mr-1" />
                                <span className="text-[8px] text-green-700">Completo</span>
                              </div>
                              <div className="text-white text-xs mb-2">Pizzaria Roma</div>
                              <div className="grid grid-cols-4 gap-1">
                                {[...Array(8)].map((_, i) => (
                                  <div key={i} className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-green-600 text-[8px]">✓</span>
                                  </div>
                                ))}
                              </div>
                              <div className="text-white text-[10px] mt-2">🎁 Ganhe 1 pizza grátis!</div>
                            </div>

                            {/* Active Card */}
                            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-4 shadow-lg">
                              <div className="text-white text-xs mb-2">Livraria Silva</div>
                              <div className="grid grid-cols-5 gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <div 
                                    key={i} 
                                    className={`w-4 h-4 rounded-full ${i < 2 ? 'bg-white' : 'bg-white/30 border border-white'}`}
                                  ></div>
                                ))}
                              </div>
                              <div className="text-white text-[10px] mt-2">2 de 5 carimbos</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center gap-3">
                            <button className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                              <span>🏠</span>
                            </button>
                            <button className="w-10 h-10 bg-purple-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                              <span>💳</span>
                            </button>
                            <button className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                              <span>⚙️</span>
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white text-lg">{step.number}</span>
                </div>
              </div>

              {/* Step Content */}
              <div className="text-center">
                <h3 className="text-lg text-gray-900 mb-2">
                  {step.title.split(step.highlight)[0]}
                  <span className="text-purple-600">{step.highlight}</span>
                  {step.title.split(step.highlight)[1]}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 left-full w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent -translate-x-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
