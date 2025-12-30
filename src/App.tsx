import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { DownloadPage } from './pages/DownloadPage';
import { ContactPage } from './pages/ContactPage';
import { GetStartedPage } from './pages/GetStartedPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { SelectPlan } from './pages/SelectPlan';
import { Checkout } from './pages/Checkout';
import { Auth } from './pages/Auth';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LanguageUpdater() {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-PT' : 'en-US';
  }, [language]);
  
  return null;
}

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/select-plan' || location.pathname.startsWith('/checkout');

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/select-plan" element={<SelectPlan />} />
        <Route path="/checkout/:planId" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <LanguageUpdater />
          <ScrollToTop />
          <div className="min-h-screen bg-white">
            <Layout />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}