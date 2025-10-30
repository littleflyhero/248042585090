import { useContext } from 'react';
import { LanguageContext } from '@/contexts/languageContext';

export default function Footer() {
  const { t } = useContext(LanguageContext);
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">{t('companyName')}</h3>
            <p className="text-gray-400 text-sm mt-2">{t('companyDescription')}</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">{t('footer')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}