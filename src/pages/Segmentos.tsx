import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Factory, Store, Shield, Stethoscope, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const segments = [
  {
    icon: Smartphone,
    title: 'App Web',
    description: 'App web para orçamentos e pedidos com exportação para sistema local.',
    href: '/segmentos/sgcom',
    features: ['Orçamentos Rápidos', 'Pedidos via WhatsApp', 'Exportação Automática'],
    color: 'primary',
  },
  {
    icon: Store,
    title: 'Gráficas e Comércio',
    description: 'Sistema CALCEXPRESS para Indústria Gráfica, Gráficas Rápidas, Comunicação Visual e Comércio.',
    href: '/segmentos/comercio',
    features: ['PDV Integrado', 'Gestão Financeira'],
    color: 'secondary',
  },
  {
    icon: Shield,
    title: 'Corretoras de Seguros',
    description: 'Sistema PILATIS para gestão completa de corretoras.',
    href: '/segmentos/corretoras',
    features: ['Controle de Produção', 'Gestão de Comissões', 'Sinistros', 'Relatórios'],
    color: 'primary',
  },
  {
    icon: Stethoscope,
    title: 'Clínicas Médicas',
    description: 'Sistema GCLINICAS para gestão de clínicas e consultórios.',
    href: '/segmentos/clinicas',
    features: ['Agendamento', 'Prontuário Eletrônico', 'Financeiro', 'Relatórios'],
    color: 'secondary',
  },
];

const Segmentos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-32 gradient-hero relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Segmentos
            </span>
            <h1 className="heading-primary text-primary mb-6">
              Soluções Especializadas para Cada Setor
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Desenvolvemos sistemas personalizados que atendem às necessidades específicas 
              de cada segmento de mercado, garantindo eficiência e resultados.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45.8C96 41.7 192 33.3 288 35.3C384 37.3 480 49.7 576 54.2C672 58.7 768 55.3 864 48.3C960 41.3 1056 30.7 1152 28.5C1248 26.3 1344 32.7 1392 35.8L1440 39V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((segment, index) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={segment.href}
                  className="block bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 flex flex-col h-full group"
                >
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                    segment.color === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    <segment.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {segment.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {segment.description}
                  </p>

                  <span className={`inline-flex items-center gap-2 text-sm font-medium ${
                    segment.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}>
                    Saiba mais 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-12 text-center text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl mb-4">
              Não encontrou seu segmento?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Desenvolvemos soluções personalizadas para diversos outros segmentos. 
              Entre em contato e conte-nos sobre seu negócio.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contato" className="group">
                Fale Conosco
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Segmentos;
