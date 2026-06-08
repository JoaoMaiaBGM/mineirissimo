import { sendContactForm } from 'components/Contact/_action';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, errors: [] });
  }

  try {
    const formData = {
      get: (field) => String(req.body?.[field] ?? ''),
    };

    const result = await sendContactForm(null, formData);

    if (result.success) {
      return res.status(200).json(result);
    }

    return res.status(400).json(result);
  } catch (err) {
    console.error('[api/contact] Failed to send contact message', err);

    return res.status(500).json({
      success: false,
      errors: [
        {
          field: '_form',
          message: 'Nao foi possivel enviar sua mensagem. Tente novamente em alguns minutos.',
        },
      ],
    });
  }
}
