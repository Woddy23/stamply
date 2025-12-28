import { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles, BookOpen } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Import logo image
import stamplyLogo from '../assets/stamply-logo.png.png';
import bubblegumFont from '../assets/fonts/bubblegum/Bubblegum.ttf';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Load font dynamically
  useEffect(() => {
    const font = new FontFace('Bubblegum', `url(${bubblegumFont})`, {
      weight: 'normal',
      style: 'normal'
    });
    
    font.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
    }).catch((error) => {
      console.error('Error loading font:', error);
    });
  }, []);
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    
    // Se for navegar para business steps, fazer scroll após navegação
    if (path === '/how-it-works#business-steps') {
      setTimeout(() => {
        const element = document.getElementById('business-steps');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <nav className="fixed top-4 left-4 right-4 bg-[#FAE6D6] backdrop-blur-md shadow-lg border border-orange-100/50 z-50 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
              <img 
                src={stamplyLogo} 
                alt="STAMPLY Logo" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span 
                className="text-2xl" 
                style={{ 
                  fontFamily: '"Bubblegum", sans-serif', 
                  color: '#FF914D', 
                  letterSpacing: '0.5px',
                  fontWeight: 'normal'
                }}
              >
                STAMPLY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleNavigation('/how-it-works')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium flex items-center gap-2 ${
                isActive('/how-it-works')
                  ? 'text-orange-600 bg-orange-50 border-2 border-orange-200'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <BookOpen size={18} />
              {t('nav.guide')}
            </button>
            <button
              onClick={() => handleNavigation('/pricing')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActive('/pricing')
                  ? 'text-orange-600 bg-orange-50 border-2 border-orange-200'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              {t('nav.pricing')}
            </button>
            <button
              onClick={() => handleNavigation('/blog')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActive('/blog')
                  ? 'text-orange-600 bg-orange-50 border-2 border-orange-200'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              {t('nav.blog')}
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                isActive('/contact')
                  ? 'text-orange-600 bg-orange-50 border-2 border-orange-200'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              {t('nav.contact')}
            </button>
            
            <div className="w-px h-8 bg-gray-300 mx-2"></div>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
              title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <Globe size={18} />
              <span className="text-sm font-semibold">{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
            
            <button
              onClick={() => handleNavigation('/download')}
              className={`ml-2 px-4 py-2 transition-all duration-200 font-medium border-2 rounded-lg ${
                isActive('/download')
                  ? 'text-orange-600 bg-orange-50 border-orange-500'
                  : 'text-orange-600 hover:text-orange-700 hover:bg-orange-50 border-orange-500'
              }`}
            >
              {t('nav.download')}
            </button>
            
            <button
              onClick={() => handleNavigation('/auth')}
              className="ml-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold"
            >
              <Sparkles size={18} />
              {t('nav.getStarted')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-orange-600 hover:bg-orange-50 p-2 rounded-lg transition-all"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-orange-100/50">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNavigation('/how-it-works')}
                className={`transition-all text-left px-4 py-3 rounded-lg font-medium flex items-center gap-3 ${
                  isActive('/how-it-works')
                    ? 'text-orange-600 bg-orange-50 border-2 border-orange-200'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <BookOpen size={20} />
                {t('nav.guide')}
              </button>
              <button
                onClick={() => handleNavigation('/pricing')}
                className={`transition-all text-left px-4 py-3 rounded-lg font-medium ${
                  isActive('/pricing')
                    ? 'text-orange-600 bg-orange-50 border-2 border-orange-200'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {t('nav.pricing')}
              </button>
              <button
                onClick={() => handleNavigation('/blog')}
                className={`transition-all text-left px-4 py-3 rounded-lg font-medium ${
                  isActive('/blog')
                    ? 'text-orange-600 bg-orange-50 border-2 border-orange-200'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {t('nav.blog')}
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className={`transition-all text-left px-4 py-3 rounded-lg font-medium ${
                  isActive('/contact')
                    ? 'text-orange-600 bg-orange-50 border-2 border-orange-200'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {t('nav.contact')}
              </button>
              
              <div className="h-px bg-gray-200 my-2"></div>
              
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all text-left px-4 py-3 rounded-lg font-medium"
              >
                <Globe size={20} />
                <span>{language === 'pt' ? 'English' : 'Português'}</span>
              </button>
              
              <button
                onClick={() => handleNavigation('/download')}
                className="ml-2 px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 font-medium border-2 border-orange-500 rounded-lg"
              >
                {t('nav.download')}
              </button>
              
              <button
                onClick={() => handleNavigation('/auth')}
                className="mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all text-center font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles size={18} />
                {t('nav.getStarted')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}