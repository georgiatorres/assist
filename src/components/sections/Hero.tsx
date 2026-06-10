import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle2, Smartphone, Zap, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const benefits = [
    "25+ anos de experiência",
    "Suporte especializado",
    "Implantação assistida",
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
      {/* Cross Pattern */}
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

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-primary text-balance text-white">
              Soluções em <span className="text-secondary">Software</span> para
              Gestão Empresarial
            </h1>

            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              Há mais de 25 anos no mercado, a Assist Sistemas desenvolve sistemas personalizados
              para indústria, comércio, corretoras de seguros e clínicas médicas.
            </p>

            <div className="flex flex-wrap gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contato" className="group">
                  Solicite uma Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Visual Element - Phone Mockup */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Revolutionary Badge */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  <span>NOVIDADE REVOLUCIONÁRIA</span>
                </div>
              </motion.div>

              {/* Phone Mockup */}
              <motion.div
                className="relative mx-auto w-72 h-[500px] bg-white rounded-[3rem] shadow-2xl border-8 border-white/20 p-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Phone Screen */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-primary-light rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                    <Smartphone className="w-16 h-16 mb-4 text-secondary" />
                    <h3 className="text-2xl font-bold mb-2">App Web</h3>
                    <p className="text-sm opacity-90">Orçamentos Rápidos</p>

                    {/* Animated Stats */}
                    <motion.div
                      className="mt-8 space-y-3 w-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-white/20 backdrop-blur-md rounded-xl p-3">
                        <p className="text-xs opacity-80">Orçamentos</p>
                        <p className="text-xl font-bold">50% mais rápido</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-xl p-3">
                        <p className="text-xs opacity-80">Tempo</p>
                        <p className="text-xl font-bold">Segundos</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-8 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    NOVO
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -left-8 top-20 bg-white rounded-2xl shadow-xl p-4 border border-white/20"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Orçamento</p>
                    <p className="text-xs text-muted-foreground">Enviado via WhatsApp</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-32 bg-white rounded-2xl shadow-xl p-4 border border-white/20"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Exportação</p>
                    <p className="text-xs text-muted-foreground">Automática</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
