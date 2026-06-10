import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Smartphone, Factory, Store, Shield, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'sgcom',
    name: 'App Web',
    tagline: 'Novo App Web',
    description: 'Orçamentos e pedidos na palma da mão. Exporte para seu sistema.',
    icon: Smartphone,
    isNew: true,
    href: '/segmentos/sgcom',
    color: 'secondary',
  },
  {
    id: 'pilatis',
    name: 'PILATIS',
    tagline: 'Corretoras',
    description: 'Gestão completa para corretoras de seguros.',
    icon: Shield,
    isNew: false,
    href: '/segmentos/corretoras',
    color: 'primary',
  },
  {
    id: 'calcexpress',
    name: 'CALCEXPRESS',
    tagline: 'Comércio',
    description: 'PDV, estoque e financeiro integrados.',
    icon: Store,
    isNew: false,
    href: '/segmentos/comercio',
    color: 'secondary',
  },
  {
    id: 'gclinicas',
    name: 'GCLINICAS',
    tagline: 'Clínicas',
    description: 'Agenda, prontuário e faturamento TISS.',
    icon: Stethoscope,
    isNew: false,
    href: '/segmentos/clinicas',
    color: 'primary',
  },
];

const HeroProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="relative">
      {/* Main Card */}
      <div className="bg-card/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-primary-foreground/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  currentProduct.color === 'secondary' 
                    ? 'bg-secondary/10 text-secondary' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  <currentProduct.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      {currentProduct.name}
                    </h3>
                    {currentProduct.isNew && (
                      <span className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3" />
                        NOVO
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {currentProduct.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-foreground/90 text-sm leading-relaxed">
              {currentProduct.description}
            </p>

            {/* CTA */}
            <Button
              variant={currentProduct.color === 'secondary' ? 'hero' : 'cta'}
              size="sm"
              asChild
              className="w-full"
            >
              <Link to={currentProduct.href} className="group">
                Conhecer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <button
            onClick={prevSlide}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Produto anterior"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-6 bg-secondary'
                    : 'w-1.5 bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Próximo produto"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Floating Card */}
      <motion.div 
        className="absolute -left-6 top-1/4 bg-card rounded-xl shadow-xl p-3 border border-border"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-primary text-lg">📱</span>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">App Mobile</p>
            <p className="text-[10px] text-muted-foreground">Disponível</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute -right-4 bottom-16 bg-card rounded-xl shadow-xl p-3 border border-border"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
            <span className="text-secondary text-lg">⚡</span>
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">Integrado</p>
            <p className="text-[10px] text-muted-foreground">Em tempo real</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroProductsCarousel;
