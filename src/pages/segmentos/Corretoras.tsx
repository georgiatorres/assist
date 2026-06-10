import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ArrowRight, FileText, BarChart3, Users, AlertTriangle, DollarSign, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FileText,
    title: 'Controle de Apólices',
    description: 'Gestão completa de apólices, endossos, renovações e cancelamentos.',
  },
  {
    icon: DollarSign,
    title: 'Gestão de Comissões',
    description: 'Controle de comissões por corretor, seguradora e ramo de seguro.',
  },
  {
    icon: AlertTriangle,
    title: 'Sinistros',
    description: 'Acompanhamento de sinistros, documentação e status de cada processo.',
  },
  {
    icon: BarChart3,
    title: 'Produção',
    description: 'Controle de produção por corretor, seguradora e período.',
  },
  {
    icon: Users,
    title: 'Gestão de Clientes',
    description: 'Cadastro completo com histórico de apólices e renovações.',
  },
  {
    icon: PieChart,
    title: 'Relatórios',
    description: 'Relatórios gerenciais para tomada de decisão.',
  },
];

const benefits = [
  'Controle total da produção',
  'Gestão eficiente de comissões',
  'Acompanhamento de sinistros',
  'Renovações automáticas',
  'Relatórios por seguradora e ramo',
];

const SegmentoCorretoras = () => {
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                <Shield className="w-8 h-8 text-secondary-foreground" />
              </div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Segmento Corretora
              </span>
            </div>
            <h1 className="heading-primary text-primary mb-6">
              Sistema PILATIS
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Solução especializada para corretoras de seguros com controle de apólices, 
              gestão de comissões, sinistros e relatórios gerenciais completos.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45.8C96 41.7 192 33.3 288 35.3C384 37.3 480 49.7 576 54.2C672 58.7 768 55.3 864 48.3C960 41.3 1056 30.7 1152 28.5C1248 26.3 1344 32.7 1392 35.8L1440 39V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="heading-secondary text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Funcionalidades PILATIS
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Módulos especializados para a gestão completa de corretoras de seguros
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-card rounded-2xl p-6 shadow-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-secondary text-foreground">
                Benefícios para sua <span className="text-primary">Corretora</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                O PILATIS foi desenvolvido especialmente para corretoras de seguros, 
                com funcionalidades que atendem às demandas específicas do setor.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contato" className="group">
                  Solicite uma Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="bg-card rounded-3xl p-8 shadow-xl border border-border"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center space-y-6">
                <Shield className="w-16 h-16 text-primary mx-auto" />
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  PILATIS
                </h3>
                <p className="text-muted-foreground">
                  O sistema ideal para corretoras de seguros que buscam 
                  eficiência e controle total da operação.
                </p>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-2">Corretoras atendidas</p>
                  <p className="font-heading font-bold text-3xl text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">em todo Brasil</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SegmentoCorretoras;
