import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Users, Clock, Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Clock, value: '25+', label: 'Anos de Experiência' },
  { icon: Users, value: '100+', label: 'empresas' },
  { icon: Award, value: '100', label: 'Projetos Realizados' },
];

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Desenvolver soluções tecnológicas inovadoras que otimizem a gestão empresarial de nossos clientes, contribuindo para o crescimento sustentável de seus negócios.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser reconhecida como a principal parceira tecnológica para empresas que buscam excelência em gestão, oferecendo sistemas que transformam dados em resultados.',
  },
  {
    icon: Heart,
    title: 'Valores',
    description: 'Comprometimento com a qualidade, inovação constante, atendimento personalizado e transparência em todas as relações com nossos clientes e parceiros.',
  },
];

const differentials = [
  'Implantação assistida e personalizada para cada cliente',
  'Treinamento completo da equipe de usuários',
  'Suporte técnico especializado e ágil',
  'Atualizações constantes e gratuitas do sistema',
  'Consultoria em processos de gestão',
  'Backup em nuvem com criptografia AWS',
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-32 gradient-hero relative overflow-hidden">
        {/* Background Pattern - mais visível */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394a3b8' fill-opacity='0.6'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Animated Shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Quem Somos
            </span>
            <h1 className="heading-primary text-primary mb-6">
              Transformando Empresas com Tecnologia há mais de 25 Anos
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed">
              A Assist Sistemas é uma empresa especializada no desenvolvimento de soluções 
              em software para gestão empresarial. Desde 1999, ajudamos empresas de diversos 
              segmentos a otimizarem seus processos e alcançarem melhores resultados.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45.8C96 41.7 192 33.3 288 35.3C384 37.3 480 49.7 576 54.2C672 58.7 768 55.3 864 48.3C960 41.3 1056 30.7 1152 28.5C1248 26.3 1344 32.7 1392 35.8L1440 39V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-heading font-bold text-4xl text-foreground mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="heading-secondary text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nossos Pilares
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Os valores que guiam nossa empresa e orientam todas as nossas ações
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                className="bg-card rounded-2xl p-8 shadow-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${
                  index === 0 ? 'bg-primary text-primary-foreground' : 
                  index === 1 ? 'bg-secondary text-secondary-foreground' : 
                  'bg-gradient-to-br from-primary to-secondary text-primary-foreground'
                }`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                  Diferenciais
                </span>
                <h2 className="heading-secondary text-foreground mb-4">
                  Por que escolher a <span className="text-primary">Assist Sistemas</span>?
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Oferecemos muito mais que software. Nossa proposta é ser um parceiro 
                  estratégico para o crescimento da sua empresa.
                </p>
              </div>

              <div className="space-y-4">
                {differentials.map((item, index) => (
                  <motion.div 
                    key={item}
                    className="flex items-start gap-3 bg-muted rounded-xl p-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button variant="default" size="lg" asChild>
                <Link to="/contato" className="group">
                  Fale Conosco
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
              <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto">
                    <Award className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                      Excelência Comprovada
                    </h3>
                    <p className="text-muted-foreground">
                      Mais de 100 empresas confiam em nossas soluções para gerenciar seus negócios
                    </p>
                  </div>
                  <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Avaliação média de nossos clientes
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
