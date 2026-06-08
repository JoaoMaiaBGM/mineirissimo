import { Resend } from 'resend';

const getConfig = () => {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey) {
    return {
      success: false,
      error:
        'Serviço de envio temporariamente indisponível. Configure RESEND_API_KEY para ativar o formulário.',
    };
  }

  return {
    success: true,
    resend: new Resend(apiKey),
    toEmail,
    fromEmail,
  };
};

const buildMessage = (data) => {
  return `
Novo contato pelo site Mineiríssimo

Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone}

Mensagem:
${data.message}
  `.trim();
};

export const sendContactEmail = async (data) => {
  const config = getConfig();
  if (!config.success) {
    return config;
  }

  try {
    const { error } = await config.resend.emails.send({
      from: config.fromEmail,
      to: config.toEmail,
      replyTo: data.email,
      subject: `Novo contato do site Mineiríssimo - ${data.name}`,
      text: buildMessage(data),
    });

    if (error) {
      return {
        success: false,
        error: 'Nao foi possivel enviar sua mensagem. Tente novamente em alguns minutos.',
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: 'Nao foi possivel enviar sua mensagem. Tente novamente em alguns minutos.',
    };
  }
};
