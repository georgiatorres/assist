import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-light/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-foreground space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-primary">
            Pronto para Transformar sua{' '}
            <span className="text-secondary">Gestão Empresarial</span>?
          </h2>
          
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos sistemas podem 
            otimizar os processos da sua empresa. Solicite uma demonstração gratuita!
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contato" className="group">
                Solicite uma Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <a href="tel:+5585999576605" className="group">
                <Phone className="w-5 h-5" />
                (85) 99957-6605
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
