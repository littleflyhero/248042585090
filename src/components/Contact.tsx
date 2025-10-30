import { useContext } from 'react';
import { LanguageContext } from '@/contexts/languageContext';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useContext(LanguageContext);
  
  // 联系信息
  const contactInfo = [
    {
      type: 'phone',
      label: t('phone'),
      value: '+86 123 4567 8910',
      icon: 'fa-phone'
    },
    {
      type: 'email',
      label: t('email'),
      value: 'contact@example.com',
      icon: 'fa-envelope'
    },
    {
      type: 'address',
      label: t('address'),
      value: '中国上海市浦东新区科技园区88号',
      icon: 'fa-map-marker-alt'
    }
  ];
  
  // 联系表单图片
  const contactImage = "https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Contact%20form%2C%20customer%20service%2C%20communication%20concept&sign=865f0dc61df776377267b71ad837f056";
  
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('contactTitle')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {t('contactTitle')}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.type} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.label}</h4>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <i className="fa-brands fa-weixin"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                  <i className="fa-brands fa-weibo"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-full rounded-xl overflow-hidden shadow-md">
              <img 
                src={contactImage} 
                alt={t('contactTitle')} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}