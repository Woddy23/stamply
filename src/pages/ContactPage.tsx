import { useState } from 'react';
import { Clock, Sparkles, Headphones, Shield, Share2, Facebook, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { useSEO } from '../hooks/useSEO';

export function ContactPage() {
  const { language } = useLanguage();
  const seo = useSEO();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <main className="pt-16">
      {/* Hero Section - Redesigned and Polished */}
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
              <span className="text-sm">{language === 'pt' ? 'Estamos Aqui Para Ajudar' : 'We\'re Here to Help'}</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 leading-[1.1] tracking-tight">
                {language === 'pt' ? (
                  <>
                    Entre em <span className="text-orange-500">Contacto</span>
                    <br />
                    <span className="text-3xl sm:text-4xl lg:text-5xl">com a Nossa Equipa</span>
                  </>
                ) : (
                  <>
                    Get in <span className="text-orange-500">Touch</span>
                    <br />
                    <span className="text-3xl sm:text-4xl lg:text-5xl">with Our Team</span>
                  </>
                )}
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
                ? 'Tem dúvidas sobre o Stamply? Estamos aqui para ajudar. Entre em contacto com a nossa equipa e responderemos o mais breve possível.'
                : 'Have questions about Stamply? We\'re here to help. Reach out to our team and we\'ll respond as soon as possible.'}
            </motion.p>

            {/* Info Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2"
            >
              {/* Response Time Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 bg-transparent">
                  <Clock className="text-orange-500" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">{language === 'pt' ? 'Resposta em 2h' : 'Response in 2h'}</p>
                </div>
              </div>

              {/* Support Badge */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 bg-transparent">
                  <Headphones className="text-orange-500" size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-900">{language === 'pt' ? 'Suporte 24/7' : 'Support 24/7'}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Redesigned like the image */}
      <section className="pt-0 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50/30 via-white to-orange-50/20 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pt-8"
            >
              {/* Main heading */}
              <h2 className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6">
                {language === 'pt' ? (
                  <>
                    Vamos começar uma{' '}
                    <span className="text-orange-500">conversa</span>
                  </>
                ) : (
                  <>
                    Let's start a{' '}
                    <span className="text-orange-500">conversation</span>
                  </>
                )}
              </h2>
              
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                {language === 'pt' 
                  ? 'Tem uma questão ou quer trabalhar connosco? Envie-nos uma mensagem e responderemos em breve.'
                  : 'Have a question or want to work with us? Send us a message and we\'ll respond soon.'}
              </p>

              {/* Info badges */}
              <div className="space-y-6">
                {/* Quick Response */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Headphones className="text-orange-500" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2 font-semibold">
                      {language === 'pt' ? 'Resposta Rápida' : 'Quick Response'}
                    </h3>
                    <a href="mailto:support@stamply.com" className="text-orange-500 hover:text-orange-600 transition-colors block mb-1">
                      support@stamply.com
                    </a>
                    <a href="tel:+351912345678" className="text-orange-500 hover:text-orange-600 transition-colors block">
                      +351 912 345 678
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Share2 className="text-orange-500" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2 font-semibold">
                      {language === 'pt' ? 'Social' : 'Social'}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {language === 'pt' 
                        ? 'Siga-nos nas redes sociais'
                        : 'Follow us on social media'}
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition-colors group"
                      >
                        <Facebook className="text-orange-500 group-hover:text-orange-600" size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition-colors group"
                      >
                        <Linkedin className="text-orange-500 group-hover:text-orange-600" size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition-colors group"
                      >
                        <Instagram className="text-orange-500 group-hover:text-orange-600" size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Secure and Private */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <Shield className="text-orange-500" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2 font-semibold">
                      {language === 'pt' ? 'Seguro e privado' : 'Secure and private'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'pt' 
                        ? 'As suas informações estão seguras connosco'
                        : 'Your information is secure with us'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      {language === 'pt' ? 'Nome completo' : 'Full name'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white transition-all text-gray-900 placeholder:text-gray-400 text-base"
                      placeholder={language === 'pt' ? 'João Silva' : 'John Doe'}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      {language === 'pt' ? 'Endereço de email' : 'Email address'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white transition-all text-gray-900 placeholder:text-gray-400 text-base"
                      placeholder={language === 'pt' ? 'joao@exemplo.com' : 'john@example.com'}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                      {language === 'pt' ? 'Mensagem' : 'Message'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white resize-none transition-all text-gray-900 placeholder:text-gray-400 text-base"
                      placeholder={language === 'pt' ? 'Conte-nos sobre o seu projeto ou questão...' : 'Tell us about your project or question...'}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base font-medium"
                  >
                    {isSubmitted 
                      ? (language === 'pt' ? 'Mensagem Enviada!' : 'Message Sent!')
                      : (language === 'pt' ? 'Enviar mensagem' : 'Send message')
                    }
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}