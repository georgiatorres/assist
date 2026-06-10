import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Factory, CheckCircle2, ArrowRight, Settings, Package, BarChart3, FileText, Users, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Settings,
    title: 'Gestão de Produção',
    description: 'Controle completo do processo produtivo, ordens de produção, apontamentos e custos.',
  },
  {
    icon: Package,
    title: 'Controle de Estoque',
    description: 'Gerenciamento de matérias-primas, produtos acabados, inventário e rastreabilidade.',
  },
  {
    icon: BarChart3,
    title: 'Gestão Financeira',
    description: 'Contas a pagar/receber, fluxo de caixa, DRE e análise de custos por produto.',
  },
  {
    icon: FileText,
    title: 'Emissão Fiscal',
    description: 'NF-e, NFC-e, CT-e e todos os documentos fiscais integrados ao sistema.',
  },
  {
    icon: Users,
    title: 'Gestão Comercial',
    description: 'Pedidos, orçamentos, comissões e acompanhamento de vendas em tempo real.',
  },
  {
    icon: Truck,
    title: 'Logística',
    description: 'Controle de expedição, romaneios e integração com transportadoras.',
  },
];

const benefits = [
  'Redução de custos operacionais',
  'Aumento da produtividade',
  'Controle total do processo produtivo',
  'Tomada de decisão baseada em dados',
  'Conformidade fiscal garantida',
  'Integração entre todos os setores',
];

const SegmentoIndustria = () => {
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
                <Factory className="w-8 h-8 text-secondary-foreground" />
              </div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Segmento Indústria Gráfica
              </span>
            </div>
            <h1 className="heading-primary text-primary mb-6">
              Sistema CALCEXPRESS
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Solução completa para gestão industrial com módulos integrados de produção, 
              estoque, comercial e financeiro. Controle total da sua operação em um único sistema.
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
              Funcionalidades para Indústria
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Módulos especializados para atender todas as necessidades da gestão industrial
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
                Benefícios para sua <span className="text-primary">Indústria</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Nosso sistema foi desenvolvido especialmente para atender às demandas 
                do setor industrial, garantindo eficiência e competitividade.
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
                <Factory className="w-16 h-16 text-primary mx-auto" />
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  Transforme sua Indústria
                </h3>
                <p className="text-muted-foreground">
                  Agende uma demonstração gratuita e veja como nosso sistema pode 
                  otimizar seus processos industriais.
                </p>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-2">Empresas que confiam em nós</p>
                  <p className="font-heading font-bold text-3xl text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">indústrias atendidas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SegmentoIndustria;
