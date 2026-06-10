import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Stethoscope, CheckCircle2, ArrowRight, Calendar, FileText, BarChart3, Users, Heart, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Calendar,
    title: 'Agendamento',
    description: 'Sistema de agendamento com confirmação.',
  },
  {
    icon: FileText,
    title: 'Prontuário Eletrônico',
    description: 'Prontuário digital completo com histórico do paciente.',
  },
    {
    icon: Users,
    title: 'Cadastro de Pacientes',
    description: 'Cadastro completo com histórico de atendimentos e documentos.',
  },
  {
    icon: Heart,
    title: 'Prescrições',
    description: 'Prescrição digital de medicamentos e solicitação de exames.',
  },
  {
    icon: ClipboardList,
    title: 'Relatórios',
    description: 'Relatórios gerenciais de atendimentos, faturamento e produtividade.',
  },
{
    icon: BarChart3,
    title: 'Gestão Financeira',
    description: 'Controle de convênios, faturamento, caixa e contas a receber.',
  },

];

const benefits = [
  'Controle de Agendamento',
  'Prontuário eletrônico seguro',
  'Controle de convênios',
  'Conformidade com LGPD',
];

const SegmentoClinicas = () => {
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
                <Stethoscope className="w-8 h-8 text-secondary-foreground" />
              </div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                Segmento CLÍNICA MÉDICA
              </span>
            </div>
            <h1 className="heading-primary text-primary mb-6">
              Sistema GCLINICAS
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Solução completa para clínicas médicas e consultórios com agendamento, confirmação, 
              prontuário eletrônico, atendimento ao paciente, gestão financeira.
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
              Funcionalidades GCLINICAS
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Tudo que sua clínica precisa para oferecer o melhor atendimento
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
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
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
                Benefícios para sua <span className="text-secondary">Clínica</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                O GCLINICAS foi desenvolvido para clínicas e consultórios que buscam 
                modernizar o atendimento e otimizar a gestão.
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
                <Stethoscope className="w-16 h-16 text-secondary mx-auto" />
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  GCLINICAS
                </h3>
                <p className="text-muted-foreground">
                  O sistema completo para clínicas que buscam excelência 
                  no atendimento e eficiência na gestão.
                </p>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-2">Clínicas atendidas</p>
                  <p className="font-heading font-bold text-3xl text-secondary">50+</p>
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

export default SegmentoClinicas;
