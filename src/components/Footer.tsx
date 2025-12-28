import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}