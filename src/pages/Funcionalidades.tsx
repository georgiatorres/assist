import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  BarChart3, 
  Package, 
  Calculator, 
  Users, 
  Shield, 
  Cloud,
  Smartphone,
  CreditCard,
  Truck,
  PieChart,
  Settings,
  Bell,
  Lock,
  Zap,
  Database,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FileText,
    title: 'NF-e / NFS-e / NFC-e',
    description: 'Emita suas notas fiscais, de forma rápida e integrada ao sistema, totalmente adequada a reforma tributária e com validação automática.',
    category: 'Fiscal',
  },
  {
    icon: Calculator,
    title: 'PDV Integrado',
    description: 'Ponto de venda completo com integração ao estoque, financeiro e emissão de documentos fiscais.',
    category: 'Vendas',
  },
  {
    icon: Package,
    title: 'Controle de Estoque',
    description: 'Gerenciamento completo de produtos, entradas, saídas, inventário e curva ABC.',
    category: 'Estoque',
  },
  {
    icon: BarChart3,
    title: 'Gestão Financeira',
    description: 'Controle de contas a pagar, receber, fluxo de caixa, conciliação bancária e DRE.',
    category: 'Financeiro',
  },
  {
    icon: Users,
    title: 'Cadastro de Clientes',
    description: 'Cadastro completo com histórico de compras, crédito, limites e relacionamento.',
    category: 'CRM',
  },
  {
    icon: CreditCard,
    title: 'Controle de Caixa',
    description: 'Abertura, fechamento, sangria e suprimento de caixa com relatórios detalhados.',
    category: 'Vendas',
  },
  {
    icon: Truck,
    title: 'Gestão de Compras',
    description: 'Cotações, pedidos de compra, recebimento e importação de xmls.',
    category: 'Compras',
  },
  {
    icon: Settings,
    title: 'Orçamentos',
    description: 'Criação de orçamentos personalizados com aprovação e conversão em vendas.',
    category: 'Vendas',
  },
  {
    icon: Lock,
    title: 'Controle de Acesso',
    description: 'Perfis de usuário com permissões granulares por módulo e funcionalidade.',
    category: 'Segurança',
  },
  {
    icon: Cloud,
    title: 'Backup em Nuvem',
    description: 'Backup automático em servidores AWS com criptografia e acesso seguro.',
    category: 'Segurança',
  },
  {
    icon: Database,
    title: 'Integração Bancária',
    description: 'Importação de extratos, conciliação automática e pagamentos via boleto.',
    category: 'Financeiro',
  },
  {
    icon: Shield,
    title: 'LGPD Compliance',
    description: 'Sistema em conformidade com a Lei Geral de Proteção de Dados.',
    category: 'Segurança',
  },
];

const categories = ['Todos', 'Fiscal', 'Vendas', 'Estoque', 'Financeiro', 'CRM', 'Compras', 'BI', 'Segurança', 'Sistema'];

const Funcionalidades = () => {
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
              Funcionalidades
            </span>
            <h1 className="heading-primary text-primary mb-6">
              Recursos Completos para sua Gestão
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Nossos sistemas contam com módulos integrados que cobrem todas as áreas
              da gestão empresarial, desde vendas até o controle financeiro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    index % 2 === 0 
                      ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                      : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground'
                  }`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {feature.category}
                  </span>
                </div>
                
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Backup Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider">
                Compliance Backup
              </span>
              <h2 className="heading-secondary text-foreground">
                Backup em Nuvem com <span className="text-primary">Segurança AWS</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nossa solução de backup em nuvem garante a segurança dos seus dados 
                com criptografia de ponta a ponta e armazenamento nos servidores Amazon Web Services.
              </p>
              <ul className="space-y-3">
                {[
                  'Criptografia AES-256 de nível militar',
                  'Backup automático programável',
                  'Restauração rápida e confiável',
                  'Armazenamento em múltiplas regiões',
                  'Monitoramento 24/7',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                      <svg className="w-3 h-3 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-primary-foreground">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                    <Cloud className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl">Compliance Backup</h3>
                    <p className="text-primary-foreground/80">Powered by AWS</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-primary-foreground/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Último backup</span>
                      <span className="text-sm font-medium">Há 2 minutos</span>
                    </div>
                    <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full w-full" />
                    </div>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Espaço utilizado</span>
                      <span className="text-sm font-medium">2.4 GB / 10 GB</span>
                    </div>
                  </div>
                </div>

                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contato">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-light/30 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center text-foreground space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-primary mb-4">
              Quer conhecer todas as funcionalidades na prática?
            </h2>
            <p className="text-lg text-foreground/90 mb-8">
              Agende uma demonstração gratuita e descubra como nossos sistemas 
              podem transformar a gestão da sua empresa.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contato" className="group">
                Solicite uma Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Funcionalidades;
