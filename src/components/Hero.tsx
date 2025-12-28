import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

// Animated stamp SVG component
function AnimatedStamp({ delay, index }: { delay: number; index: number }) {
  const colors = ['#fb923c', '#f97316', '#ea580c', '#fdba74', '#fed7aa'];
  const sizes = [120, 100, 140, 110, 130];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: [0, 0.4, 0.4, 0],
        scale: [0, 1, 1.2, 0],
        rotate: [0, 180, 360],
        y: [0, -50, -100, -150]
      }}
      transition={{
        duration: 6,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut"
      }}
      className="absolute"
      style={{ 
        left: `${10 + index * 15}%`,
        bottom: '-10%'
      }}
    >
      <svg width={sizes[index % 5]} height={sizes[index % 5]} viewBox="0 0 100 100">
        <defs>
          <filter id={`glow-${index}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          fill="none" 
          stroke={colors[index % colors.length]}
          strokeWidth="3"
          strokeDasharray="8,4"
          filter={`url(#glow-${index})`}
        />
        <circle 
          cx="50" 
          cy="50" 
          r="30" 
          fill="none" 
          stroke={colors[index % colors.length]}
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);

  const titleWords = t('hero.title').split(' ');

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Organic shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-orange-200/40 to-orange-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-orange-200/40 to-yellow-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-300/30 to-orange-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating stamps */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <AnimatedStamp key={i} delay={i * 1.2} index={i} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 mb-12"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Sparkles className="text-orange-500" size={24} />
              </motion.div>
              <span className="text-orange-600 tracking-wide uppercase text-sm">
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Main Title with creative typography */}
            <div className="mb-8 max-w-5xl mx-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6">
                {titleWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    onHoverStart={() => setHoveredWord(index)}
                    onHoverEnd={() => setHoveredWord(null)}
                    className="inline-block mx-2 sm:mx-3 relative cursor-pointer"
                  >
                    <motion.span
                      animate={hoveredWord === index ? {
                        y: [-5, -10, -5],
                        rotate: [-2, 2, -2]
                      } : {
                        y: 0,
                        rotate: 0
                      }}
                      transition={{ duration: 0.5 }}
                      className="relative inline-block"
                    >
                      {/* Text with gradient */}
                      <span className={`
                        relative z-10 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 
                        bg-clip-text text-transparent
                        ${hoveredWord === index ? 'from-orange-500 via-orange-400 to-orange-500' : ''}
                      `}>
                        {word}
                      </span>
                      
                      {/* Underline animation */}
                      {hoveredWord === index && (
                        <motion.div
                          layoutId="underline"
                          className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.span>
                  </motion.span>
                ))}
              </h1>

              {/* Subtitle with typewriter effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"
              >
                <p className="leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </motion.div>
            </div>

            {/* CTAs with creative hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            >
              {/* Primary CTA */}
              <motion.button
                onClick={() => navigate('/auth')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-lg overflow-hidden shadow-lg shadow-orange-500/30"
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Content */}
                <span className="relative z-10 flex items-center gap-3">
                  {t('hero.cta.start')}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={22} />
                  </motion.div>
                </span>

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-full"
                  initial={{ scale: 0, opacity: 0.5 }}
                  whileHover={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={() => navigate('/download')}
                whileHover={{ scale: 1.05, borderColor: 'rgb(249, 115, 22)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-gray-700 border-2 border-gray-300 rounded-full text-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {t('hero.cta.download')}
              </motion.button>
            </motion.div>

            {/* Large visual stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 1, type: "spring", stiffness: 100 }}
              className="relative max-w-3xl mx-auto"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                {/* Main stamp illustration */}
                <svg viewBox="0 0 800 400" className="w-full h-auto drop-shadow-2xl">
                  <defs>
                    <linearGradient id="stamp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fb923c" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#f97316" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  
                  {/* Document */}
                  <motion.rect
                    x="100"
                    y="50"
                    width="300"
                    height="300"
                    rx="15"
                    fill="white"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                    filter="url(#shadow)"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 100, opacity: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                  />
                  
                  {/* Document lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.line
                      key={i}
                      x1="140"
                      y1={100 + i * 40}
                      x2="360"
                      y2={100 + i * 40}
                      stroke="#d1d5db"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 2.2 + i * 0.1, duration: 0.4 }}
                    />
                  ))}

                  {/* Stamp circle */}
                  <motion.g
                    initial={{ scale: 0, x: 600, y: 200 }}
                    animate={{ scale: 1, x: 500, y: 200 }}
                    transition={{ delay: 2.5, duration: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <circle
                      cx="0"
                      cy="0"
                      r="120"
                      fill="url(#stamp-gradient)"
                      opacity="0.15"
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="100"
                      fill="none"
                      stroke="url(#stamp-gradient)"
                      strokeWidth="6"
                      strokeDasharray="12,8"
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="75"
                      fill="none"
                      stroke="url(#stamp-gradient)"
                      strokeWidth="4"
                      opacity="0.6"
                    />
                    <text
                      x="0"
                      y="10"
                      textAnchor="middle"
                      fill="#ea580c"
                      fontSize="36"
                      fontWeight="bold"
                    >
                      STAMPLY
                    </text>
                  </motion.g>

                  {/* Sparkles around stamp */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * Math.PI * 2) / 8;
                    const x = 500 + Math.cos(angle) * 140;
                    const y = 200 + Math.sin(angle) * 140;
                    return (
                      <motion.circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="#fb923c"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{ 
                          delay: 2.8 + i * 0.1,
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-orange-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-10, -30, -10],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}