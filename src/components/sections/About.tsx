import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, Users, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Clock, value: '25+', label: 'Anos de Mercado' },
  { icon: Users, value: '100+', label: 'empresas' },
  { icon: Award, value: '100%', label: 'Satisfação' },
];

const features = [
  'Implantação assistida e personalizada',
  'Treinamento completo da equipe',
  'Suporte técnico especializado',
  'Atualizações constantes do sistema',
];

const About = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Sobre Nós
              </span>
              <h2 className="heading-secondary text-foreground mb-4">
                Mais de 25 Anos de Experiência em{' '}
                <span className="text-primary">Desenvolvimento de Software</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A Assist Sistemas é uma empresa especializada no desenvolvimento de soluções 
                em software para gestão empresarial. Com mais de duas décadas de experiência, 
                oferecemos sistemas personalizados que atendem às necessidades específicas 
                de cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/sobre" className="group">
                Conheça Nossa História
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats & Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-3" />
            
            <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-heading font-bold text-2xl text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 text-primary-foreground">
                <p className="text-lg font-medium mb-4 italic">
                  "Nossa missão é transformar a gestão empresarial através de soluções 
                  tecnológicas inovadoras e personalizadas."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <span className="font-bold text-lg">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Assist Sistemas</p>
                    <p className="text-sm text-primary-foreground/80">Desde 1999</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
