const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do transportador de email usando as credenciais do .env
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'webmail.assistweb.com.br',
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_USE_TLS === 'True', // true para 465, false para outras portas
  auth: {
    user: process.env.EMAIL_HOST_USER || 'suporte@assistweb.com.br',
    pass: process.env.EMAIL_HOST_PASSWORD || '',
  },
});

// Endpoint para enviar email
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Validação básica
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Todos os campos obrigatórios devem ser preenchidos' });
    }

    // Configuração do email
    const mailOptions = {
      from: process.env.EMAIL_HOST_USER || 'suporte@assistweb.com.br',
      to: process.env.EMAIL_HOST_USER || 'suporte@assistweb.com.br',
      subject: `Contato via Site - ${name}`,
      html: `
        <h2>Novo contato via site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email enviado com sucesso' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ error: 'Erro ao enviar email', details: error.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Endpoint de email: http://localhost:${PORT}/api/send-email`);
});
