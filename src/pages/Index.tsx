
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import InsuranceCategories from '@/components/home/InsuranceCategories';
import QuickQuote from '@/components/home/QuickQuote';
import Partners from '@/components/home/Partners';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

// We'll need to add framer-motion for our animations
<lov-add-dependency>framer-motion@latest</lov-add-dependency>

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InsuranceCategories />
        <QuickQuote />
        <Partners />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
