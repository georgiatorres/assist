import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Smartphone, Zap, ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const AppWebRevolutionary = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Glow */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-white">NOVIDADE REVOLUCIONÁRIA</span>
            </motion.div>

            <h2 className="heading-primary">
              App Web: A <span className="text-secondary">Revolução</span> nos Orçamentos
            </h2>

            <p className="text-lg text-white/90 leading-relaxed">
              Gere orçamentos e pedidos em segundos, envie via WhatsApp e exporte automaticamente para seu sistema.
              Funciona de qualquer lugar, a qualquer momento. A liberdade que seu negócio precisa.
            </p>

            <div className="space-y-4">
              {[
                'Orçamentos em segundos, não em minutos',
                'Envio direto via WhatsApp para clientes',
                'Exportação automática para seu sistema',
                'Funciona offline e online',
                'Acesso de qualquer dispositivo',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Zap className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button
              variant="hero"
              size="xl"
              asChild
              className="group"
            >
              <Link to="/segmentos/sgcom" className="group">
                Conheça o App Web
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
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

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 35.3C384 37.3 480 49.7 576 54.2C672 58.7 768 55.3 864 48.3C960 41.3 1056 30.7 1152 28.5C1248 26.3 1344 32.7 1392 35.8L1440 39V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default AppWebRevolutionary;
