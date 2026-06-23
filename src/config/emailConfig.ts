// Configurações de Email
// Este arquivo centraliza todas as configurações relacionadas ao envio de emails

export const emailConfig = {
  // Email de contato da empresa
  contactEmail: 'suporte@assistweb.com.br',

  // Configurações do backend customizado (usando credenciais SMTP do .env)
  customBackend: {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001',
    emailEndpoint: '/api/send-email',
  },

  // Configurações do EmailJS (opcional - frontend)
  emailJS: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },

  // Configurações do Formspree (opcional - frontend)
  formSpree: {
    formId: import.meta.env.VITE_FORMSPREE_FORM_ID || '',
  },

  // WhatsApp
  whatsapp: {
    number: '5585999576605',
    defaultMessage: 'Olá! Gostaria de saber mais sobre os produtos da Assist Sistemas.',
  },
};

export default emailConfig;
