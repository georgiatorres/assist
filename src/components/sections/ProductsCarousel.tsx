import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Smartphone, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'sgcom',
    name: 'App Web',
    tagline: 'Novo App Web',
    description: 'Gere orçamentos e pedidos direto pelo celular ou computador. Exporte automaticamente para seu sistema de gestão. Ideal para comércio de produtos acabados como cimento, embalagens e materiais.',
    features: ['Orçamentos em segundos', 'Pedidos via WhatsApp', 'Exportação automática', 'Funciona offline'],
    icon: Smartphone,
    isNew: true,
    href: '/segmentos/sgcom',
    color: 'secondary',
  },
  {
    id: 'calcexpress',
    name: 'CALCEXPRESS',
    tagline: 'GRÁFICA/COMÉRCIO E VAREJO',
    description: 'Sistema completo com Orçamentos, PDV, Controle de Estoque, Gestão da Produção, Notas Eletrônicas e Controle Financeiro Completo. Ideal para gráfica, comunicação visual e comércio.',
    features: ['Orçamentos', 'PDV', 'Controle de estoque', 'Gestão da produção', 'Notas eletrônicas', 'Controle financeiro completo'],
    icon: null,
    isNew: false,
    href: '/segmentos/comercio',
    color: 'primary',
  },
  {
    id: 'pilatis',
    name: 'PILATIS',
    tagline: 'Corretoras de Seguros',
    description: 'Sistema especializado para corretoras de seguros com controle de produção, comissões, sinistros e gestão completa.',
    features: ['Controle de Produção', 'Gerenciamento do Recebimento e Repasse de Comissão', 'Acompanhamento de Sinistros', 'Emissão de Etiquetas', 'Relatórios Gerenciais', 'Gestão Financeira'],
    icon: null,
    isNew: false,
    href: '/segmentos/corretoras',
    color: 'secondary',
  },
  {
    id: 'gclinicas',
    name: 'GCLINICAS',
    tagline: 'Clínicas Médicas',
    description: 'Sistema completo para clínicas médicas e consultórios com agendamento online, prontuário eletrônico e gestão financeira.',
    features: ['Agendamento', 'Controle de Acolhimento', 'Atendimento ao Paciente', 'Receituário Médico, Atestado, Prontuário', 'Gestão Financeira'],
    icon: null,
    isNew: false,
    href: '/segmentos/clinicas',
    color: 'primary',
  },
];

const ProductsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            Nossos Produtos
          </motion.span>
          <motion.h2
            className="heading-secondary text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Soluções para Todos os Negócios
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Conheça nossa linha completa de sistemas, com destaque para o <strong>App Web</strong>,
            nosso novo app para geração de orçamentos e pedidos.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 rounded-full bg-card shadow-lg border border-border hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="Produto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 rounded-full bg-card shadow-lg border border-border hover:bg-primary hover:text-primary-foreground transition-all"
            aria-label="Próximo produto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Card Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left - Visual */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${
                    currentProduct.color === 'secondary' ? 'bg-secondary/5' : 'bg-primary/5'
                  }`}>
                    {currentProduct.isNew && (
                      <span className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-4">
                        <Sparkles className="w-3 h-3" />
                        NOVIDADE
                      </span>
                    )}
                    <span className={`inline-block font-semibold text-sm uppercase tracking-wider mb-2 ${
                      currentProduct.color === 'secondary' ? 'text-secondary' : 'text-primary'
                    }`}>
                      {currentProduct.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
                      {currentProduct.name}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {currentProduct.description}
                    </p>
                    <Button
                      variant={currentProduct.color === 'secondary' ? 'hero' : 'cta'}
                      size="lg"
                      asChild
                      className="w-fit"
                    >
                      <Link to={currentProduct.href} className="group">
                        Conheça o {currentProduct.name}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  {/* Right - Features */}
                  <div className="p-8 lg:p-12 bg-card">
                    <h4 className="font-heading font-semibold text-xl text-foreground mb-6">
                      Principais Funcionalidades
                    </h4>
                    <ul className="space-y-4">
                      {currentProduct.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            currentProduct.color === 'secondary'
                              ? 'bg-secondary/10 text-secondary'
                              : 'bg-primary/10 text-primary'
                          }`}>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? product.color === 'secondary'
                      ? 'w-8 bg-secondary'
                      : 'w-8 bg-primary'
                    : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir para ${product.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
