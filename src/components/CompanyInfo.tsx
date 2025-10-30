import { useContext } from 'react';
import { LanguageContext } from '@/contexts/languageContext';
import { motion } from 'framer-motion';

export default function CompanyInfo() {
  const { t } = useContext(LanguageContext);
  
  // 公司形象图片URL - 使用系统提供的API生成
  const companyImage = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20office%20building%2C%20business%20district%2C%20daytime%2C%20sunny%20weather%2C%20blue%20sky&sign=a27a8e4fe005210c587d779b99ec402f";
  
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="md:w-1/2 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={companyImage} 
              alt={t('companyName')} 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
          
          <div className="md:w-1/2">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('companyName')}
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-4 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('companyDescription')}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <i className="fa-solid fa-users"></i>
                </div>
                <span className="text-gray-700">专业团队</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <i className="fa-solid fa-lightbulb"></i>
                </div>
                <span className="text-gray-700">创新思维</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <span className="text-gray-700">优质服务</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}