import { useContext } from 'react';
import { LanguageContext } from '@/contexts/languageContext';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useContext(LanguageContext);
  
  // 服务数据
  const services = [
    {
      id: 1,
      title: t('service1Title'),
      description: t('service1Desc'),
      icon: 'fa-code',
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Software%20development%20team%2C%20programming%2C%20laptop%2C%20coding&sign=f48eb5314beea01d60c35050bff02636"
    },
    {
      id: 2,
      title: t('service2Title'),
      description: t('service2Desc'),
      icon: 'fa-chart-line',
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=Business%20consulting%2C%20meeting%2C%20team%20discussion%2C%20strategy&sign=aba5635e5d4fecb29f87da5bf2134aee"
    },
    {
      id: 3,
      title: t('service3Title'),
      description: t('service3Desc'),
      icon: 'fa-cogs',
      image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=System%20integration%2C%20technology%20infrastructure%2C%20network%20servers&sign=39ed34dbfe52d83eab72584d4a6193c6"
    }
  ];
  
  // 当语言切换时，更新服务数据的标题和描述
  const updatedServices = services.map(service => ({
    ...service,
    title: t(`service${service.id}Title`),
    description: t(`service${service.id}Desc`)
  }));
  
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {updatedServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  <i className={`fa-solid ${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}