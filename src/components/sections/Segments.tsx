import { Link } from 'react-router-dom';
import { Factory, Store, Shield, Stethoscope, ArrowRight, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const segments = [
  {
    icon: Smartphone,
    title: 'App Web',
    description: 'App web para geração de orçamentos e pedidos. Exporte dados diretamente para seu sistema de gestão local. Ideal para comércio de produtos acabados.',
    href: '/segmentos/sgcom',
    color: 'primary',
  },
  {
    icon: Store,
    title: 'Comércio/Varejo',
    description: 'Sistema CALCEXPRESS para Indústria Gráfica, Rápidas e Comércio.',
    href: '/segmentos/comercio',
    color: 'secondary',
  },
  {
    icon: Shield,
    title: 'Corretoras de Seguros',
    description: 'Sistema PILATIS com controle de produção, comissões, sinistros e gestão completa.',
    href: '/segmentos/corretoras',
    color: 'primary',
  },
  {
    icon: Stethoscope,
    title: 'Clínicas Médicas',
    description: 'Sistema GCLINICAS com agendamento, prontuário eletrônico e gestão financeira.',
    href: '/segmentos/clinicas',
    color: 'secondary',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Segments = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nossos Segmentos
          </motion.span>
          <motion.h2 
            className="heading-secondary text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Soluções Especializadas para Cada Setor
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Desenvolvemos sistemas personalizados para atender às necessidades específicas 
            de cada segmento de mercado.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {segments.map((segment) => (
            <motion.div key={segment.title} variants={item}>
              <Link 
                to={segment.href}
                className="group block bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border h-full"
              >
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-colors ${
                  segment.color === 'primary' 
                    ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                    : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground'
                }`}>
                  <segment.icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {segment.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {segment.description}
                </p>

                <div className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                  segment.color === 'primary' ? 'text-primary' : 'text-secondary'
                }`}>
                  Saiba mais 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Segments;
