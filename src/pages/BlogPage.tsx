import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, ArrowRight, User, Clock, Search, TrendingUp, Sparkles, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export function BlogPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(language === 'pt' ? 'Todos' : 'All');

  // Reset selected category when language changes
  useEffect(() => {
    setSelectedCategory(language === 'pt' ? 'Todos' : 'All');
  }, [language]);

  const categories = language === 'pt' 
    ? ['Todos', 'Insights da Indústria', 'Legal', 'Produtividade', 'Tutoriais', 'Notícias da Empresa']
    : ['All', 'Industry Insights', 'Legal', 'Productivity', 'Tutorials', 'Company News'];

  const blogPosts = language === 'pt' ? [
    {
      title: 'Como Carimbos Digitais Estão Revolucionando o Gerenciamento de Documentos',
      excerpt: 'Saiba como empresas estão economizando tempo e reduzindo custos ao mudar para soluções de carimbo digital. Descubra os principais benefícios e estratégias de implementação.',
      content: 'Carimbos digitais estão transformando a forma como as empresas lidam com aprovação e verificação de documentos...',
      date: '28 de Novembro, 2025',
      author: 'Sarah Johnson',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1758519288480-1489c17b1519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkb2N1bWVudCUyMHNpZ25pbmd8ZW58MXx8fHwxNzY0NzIxNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Insights da Indústria',
    },
    {
      title: 'Conformidade Legal: O Que Você Precisa Saber Sobre Carimbos Eletrônicos',
      excerpt: 'Um guia abrangente sobre regulamentações de carimbos eletrônicos e requisitos de conformidade em diferentes regiões. Leitura essencial para equipes jurídicas.',
      content: 'Compreender a estrutura legal para carimbos eletrônicos é crucial para empresas...',
      date: '25 de Novembro, 2025',
      author: 'Michael Chen',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDY5MTY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Legal',
    },
    {
      title: '5 Maneiras de Otimizar Seu Processo de Aprovação com Carimbos Digitais',
      excerpt: 'Descubra dicas práticas e melhores práticas para implementar carimbos digitais em sua organização. Aumente a eficiência e reduza os tempos de resposta.',
      content: 'Otimizar processos de aprovação é essencial para empresas modernas...',
      date: '22 de Novembro, 2025',
      author: 'Emily Rodriguez',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ2NTM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Produtividade',
    },
    {
      title: 'Começando com Stamply: Um Guia Completo para Iniciantes',
      excerpt: 'Novo em carimbos digitais? Este guia passo a passo ajudará você a criar seu primeiro carimbo personalizado e começar a carimbar documentos em minutos.',
      content: 'Começar com o Stamply é mais fácil do que você pensa...',
      date: '20 de Novembro, 2025',
      author: 'David Park',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1670852714979-f73d21652a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2lnbmF0dXJlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY0NjQxNjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Tutoriais',
    },
    {
      title: 'Estudo de Caso: Como a TechCorp Reduziu o Tempo de Processamento em 80%',
      excerpt: 'Leia como um de nossos clientes empresariais transformou seu fluxo de trabalho de documentos e alcançou ganhos de eficiência notáveis.',
      content: 'A TechCorp enfrentou desafios significativos com seu processo de carimbo manual...',
      date: '18 de Novembro, 2025',
      author: 'Jennifer Lee',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDY5MTY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Insights da Indústria',
    },
    {
      title: 'Melhores Práticas de Segurança para Carimbagem de Documentos Digitais',
      excerpt: 'Aprenda medidas de segurança essenciais para proteger seus documentos carimbados e manter conformidade com padrões da indústria.',
      content: 'Segurança é primordial ao lidar com carimbos digitais...',
      date: '15 de Novembro, 2025',
      author: 'Robert Thompson',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ2NTM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Legal',
    },
  ] : [
    {
      title: 'How Digital Stamps Are Revolutionizing Document Management',
      excerpt: 'Learn how businesses are saving time and reducing costs by switching to digital stamp solutions. Discover key benefits and implementation strategies.',
      content: 'Digital stamps are transforming how companies handle document approval and verification...',
      date: 'November 28, 2025',
      author: 'Sarah Johnson',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1758519288480-1489c17b1519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkb2N1bWVudCUyMHNpZ25pbmd8ZW58MXx8fHwxNzY0NzIxNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Industry Insights',
    },
    {
      title: 'Legal Compliance: What You Need to Know About Electronic Stamps',
      excerpt: 'A comprehensive guide to electronic stamp regulations and compliance requirements across different regions. Essential reading for legal teams.',
      content: 'Understanding the legal framework for electronic stamps is crucial for businesses...',
      date: 'November 25, 2025',
      author: 'Michael Chen',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDY5MTY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Legal',
    },
    {
      title: '5 Ways to Streamline Your Approval Process with Digital Stamps',
      excerpt: 'Discover practical tips and best practices for implementing digital stamps in your organization. Boost efficiency and reduce turnaround times.',
      content: 'Streamlining approval processes is essential for modern businesses...',
      date: 'November 22, 2025',
      author: 'Emily Rodriguez',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ2NTM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Productivity',
    },
    {
      title: 'Getting Started with Stamply: A Complete Beginner\'s Guide',
      excerpt: 'New to digital stamps? This step-by-step guide will help you create your first custom stamp and start stamping documents in minutes.',
      content: 'Getting started with Stamply is easier than you think...',
      date: 'November 20, 2025',
      author: 'David Park',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1670852714979-f73d21652a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2lnbmF0dXJlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY0NjQxNjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Tutorials',
    },
    {
      title: 'Case Study: How TechCorp Reduced Processing Time by 80%',
      excerpt: 'Read how one of our enterprise clients transformed their document workflow and achieved remarkable efficiency gains.',
      content: 'TechCorp faced significant challenges with their manual stamping process...',
      date: 'November 18, 2025',
      author: 'Jennifer Lee',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1621743018966-29194999d736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDY5MTY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Industry Insights',
    },
    {
      title: 'Security Best Practices for Digital Document Stamping',
      excerpt: 'Learn essential security measures to protect your stamped documents and maintain compliance with industry standards.',
      content: 'Security is paramount when dealing with digital stamps...',
      date: 'November 15, 2025',
      author: 'Robert Thompson',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjQ2NTM0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Legal',
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === (language === 'pt' ? 'Todos' : 'All') || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

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
              <BookOpen size={18} className="text-orange-500" />
              <span className="text-sm">Recursos & Insights</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 leading-[1.1] tracking-tight">
                {language === 'pt' ? 'Recursos Stamply' : 'Stamply Resources'}
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
                ? 'Artigos, guias e insights para ajudá-lo a aproveitar ao máximo os carimbos digitais'
                : 'Articles, guides, and insights to help you get the most out of digital stamps'}
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-2xl mx-auto relative"
            >
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t('blog.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg transition-all"
              />
            </motion.div>

            {/* Category Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-6"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 shadow-sm ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 hover:bg-orange-50 border-2 border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pt-2 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-orange-100 rounded-xl">
              <TrendingUp className="text-orange-600" size={24} />
            </div>
            <h2 className="text-3xl text-gray-900">
              {language === 'pt' ? 'Artigo em Destaque' : 'Featured Article'}
            </h2>
          </div>
          <article className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            <div className="relative grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-orange-200 hover:shadow-2xl transition-all duration-500">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm shadow-lg">
                    <Sparkles size={16} />
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h3 className="text-3xl text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span className="text-sm">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span className="text-sm">{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 w-fit group/btn">
                  {t('blog.readFull')}
                  <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-10">{t('blog.allArticles')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col scale-[0.85] sm:scale-90 md:scale-95 lg:scale-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-orange-600 shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 group-hover:gap-3 transition-all">
                    {t('blog.readMore')}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}