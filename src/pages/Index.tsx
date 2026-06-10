import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ProductsCarousel from '@/components/sections/ProductsCarousel';
import Segments from '@/components/sections/Segments';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProductsCarousel />
      <Segments />
      <About />
      <Features />
      <CTA />
    </Layout>
  );
};

export default Index;
