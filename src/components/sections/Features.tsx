import { 
  FileText, 
  BarChart3, 
  Package, 
  Calculator, 
  Users, 
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FileText,
    title: 'NF-e / NFC-e',
    description: 'Emissão de notas fiscais eletrônicas integrada ao sistema.',
  },
  {
    icon: BarChart3,
    title: 'Gestão Financeira',
    description: 'Controle completo de contas a pagar e receber.',
  },
  {
    icon: Package,
    title: 'Controle de Estoque',
    description: 'Gerenciamento de produtos, entradas e saídas.',
  },
  {
    icon: Calculator,
    title: 'PDV Integrado',
    description: 'Ponto de venda com integração total ao sistema.',
  },
  {
    icon: Users,
    title: 'Gestão de Clientes',
    description: 'Cadastro completo e histórico de relacionamento.',
  },
  {
    icon: Shield,
    title: 'Backup em Nuvem',
    description: 'Seus dados seguros com criptografia AWS.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

const Features = () => {
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
            Funcionalidades
          </motion.span>
          <motion.h2 
            className="heading-secondary text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Recursos Completos para Sua Empresa
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Nossos sistemas contam com módulos integrados para atender todas 
            as necessidades da sua gestão empresarial.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              variants={item}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-colors ${
                  index % 2 === 0 
                    ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground' 
                    : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground'
                }`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
