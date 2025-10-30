import { useContext } from 'react';
import { LanguageContext } from '@/contexts/languageContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { language, setLanguage, t } = useContext(LanguageContext);
  
  // 导航链接
  const navLinks = [
    { id: 'home', label: t('home'), href: '#' },
    { id: 'about', label: t('about'), href: '#about' },
    { id: 'services', label: t('services'), href: '#services' },
    { id: 'contact', label: t('contact'), href: '#contact' }
  ];
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('companyName')}
        </motion.h1>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
          
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={() => setLanguage('zh')}
              className={`px-3 py-1 rounded-full text-sm ${
                language === 'zh' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              中文
            </button>
            <button
              onClick={() => setLanguage('ja')}
              className={`px-3 py-1 rounded-full text-sm ${
                language === 'ja' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              日本語
            </button>
          </div>
        </div>
        
        {/* 移动端菜单按钮 */}
        <div className="md:hidden flex items-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('zh')}
              className={`px-2 py-1 rounded text-xs ${
                language === 'zh' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              中
            </button>
            <button
              onClick={() => setLanguage('ja')}
              className={`px-2 py-1 rounded text-xs ${
                language === 'ja' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              日
            </button>
          </div>
          <button className="ml-4 text-gray-700">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
}