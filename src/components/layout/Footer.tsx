import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground border-t border-border">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Assist Sistemas"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Há mais de 25 anos desenvolvendo soluções em software para gestão empresarial,
              ajudando empresas a crescerem com tecnologia de ponta.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-foreground/80 hover:text-secondary transition-colors text-sm">
                Home
              </Link>
              <Link to="/sobre" className="text-foreground/80 hover:text-secondary transition-colors text-sm">
                Quem Somos
              </Link>
              <Link to="/segmentos" className="text-foreground/80 hover:text-secondary transition-colors text-sm">
                Segmentos
              </Link>
              <Link to="/funcionalidades" className="text-foreground/80 hover:text-secondary transition-colors text-sm">
                Funcionalidades
              </Link>
              <Link to="/contato" className="text-foreground/80 hover:text-secondary transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          {/* Segments */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Segmentos</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/segmentos/comercio" className="text-foreground/80 hover:text-secondary transition-colors text-sm">
                Graficas / Comércio
              </Link>
              <Link to="/segmentos/corretoras" className="text-foreground/80 hover:text-secondary transition-colors text-sm">
                Corretoras de Seguros
              </Link>
              <Link to="/segmentos/clinicas" className="text-foreground/80 hover:text-secondary transition-colors text-sm">
                Clínicas Médicas
              </Link>
              <Link to="/segmentos/sgcom" className="text-foreground/80 hover:text-secondary transition-colors text-sm">
                App Web
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5585999576605"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                <MessageCircle className="w-5 h-5 text-secondary" />
                (85) 99957-6605
              </a>
              <a
                href="mailto:contato@assistweb.com.br"
                className="flex items-center gap-3 text-foreground/80 hover:text-secondary transition-colors text-sm"
              >
                <Mail className="w-5 h-5 text-secondary" />
                assist@assistweb.com.br
              </a>
              <div className="flex items-start gap-3 text-foreground/80 text-sm">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>
                  Rua Costa Barros, 915 - Centro<br />
                  Fortaleza - CE, CEP: 60160-280
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Assist Sistemas. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
