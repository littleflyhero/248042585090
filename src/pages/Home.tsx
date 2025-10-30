import Header from '@/components/Header';
import CompanyInfo from '@/components/CompanyInfo';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* 主视觉区域 */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">欢迎访问我们的公司</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            我们提供专业的技术解决方案，助力企业数字化转型
          </p>
          <a 
            href="#services" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            了解我们的服务 <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>
      
      <main className="flex-grow">
        <CompanyInfo />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}