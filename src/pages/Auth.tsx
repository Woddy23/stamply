import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';

export function Auth() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show loading animation
    setIsLoading(true);
    // After 2 seconds, redirect to select plan
    setTimeout(() => {
      navigate('/select-plan');
    }, 2000);
  };

  return (
    <>
      <SEO 
        title={language === 'pt' ? 'Iniciar Sessão - Stamply' : 'Login - Stamply'}
        description={language === 'pt' ? 'Aceda à sua conta Stamply' : 'Access your Stamply account'}
        noindex={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-gray-900 mb-2">
              {isLogin ? t('auth.login') : t('auth.createAccount')}
            </h1>
            <p className="text-gray-600">
              {isLogin ? t('auth.welcomeBack') : t('auth.getStarted')}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field - only for signup */}
            {!isLogin && (
              <div>
                <label className="block text-gray-700 mb-2 text-sm">
                  {t('auth.fullName')}
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder={t('auth.enterName')}
                    className="w-full bg-white border-2 border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2 text-sm">
                {t('auth.email')}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder={t('auth.enterEmail')}
                  className="w-full bg-white border-2 border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-2 text-sm">
                {t('auth.password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('auth.enterPassword')}
                  className="w-full bg-white border-2 border-gray-200 rounded-xl pl-12 pr-12 py-3 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password - only for login */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-orange-500 hover:text-orange-600 text-sm transition-colors"
                >
                  {t('auth.forgotPassword')}
                </button>
              </div>
            )}

            {/* Terms - only for signup */}
            {!isLogin && (
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-5 h-5 rounded border-2 border-gray-300 bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none cursor-pointer mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                  {t('auth.agreeTerms')}
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isLogin ? t('auth.loginButton') : t('auth.createAccountButton')}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-sm">{t('auth.or')}</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              {t('auth.continueWithGoogle')}
            </button>
            <button
              type="button"
              className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              {t('auth.continueWithApple')}
            </button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isLogin ? t('auth.noAccount') : t('auth.haveAccount')}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                {isLogin ? t('auth.signUpLink') : t('auth.loginLink')}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center"
          >
            <div className="bg-gradient-to-b from-white via-orange-50 to-white rounded-2xl shadow-xl p-8 border-2 border-orange-100 text-center relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute top-1/3 -right-10 w-40 h-40 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              <div className="relative z-10">
              {/* Stamp Animation */}
              <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                {/* Stamp - appears and stamps down repeatedly */}
                <motion.div
                  animate={{ 
                    y: [-20, 15, -20],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute"
                >
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Handle - large sphere on top */}
                    <circle cx="35" cy="12" r="9" fill="#ea580c" />
                    {/* Handle - narrow waist */}
                    <path
                      d="M 26 12 Q 35 16 35 16 Q 35 16 44 12"
                      stroke="#ea580c"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Handle - flares out */}
                    <path
                      d="M 24 16 Q 35 22 35 22 Q 35 22 46 16"
                      stroke="#ea580c"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Base - main rectangle */}
                    <rect
                      x="18"
                      y="26"
                      width="34"
                      height="16"
                      rx="2"
                      fill="#ea580c"
                    />
                    {/* Base - thin bar below */}
                    <rect
                      x="20"
                      y="45"
                      width="30"
                      height="2.5"
                      rx="1"
                      fill="#ea580c"
                    />
                  </svg>
                </motion.div>
              </div>
              <h2 className="text-gray-900 mb-2">{t('auth.loading')}</h2>
              <p className="text-gray-600">{t('auth.loadingMessage')}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}