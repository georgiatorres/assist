import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '5585999576605';
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os sistemas da Assist Sistemas.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
