'use server';

import { sendContactEmail } from 'lib/contact/send-email';
import { validateFields } from './_validations';

const getFieldValue = (formData, field) => {
  const value = formData.get(field);
  return typeof value === 'string' ? value.trim() : '';
};

export const sendContactForm = async (_, formData) => {
  const data = {
    name: getFieldValue(formData, 'name'),
    email: getFieldValue(formData, 'email'),
    phone: getFieldValue(formData, 'phone'),
    message: getFieldValue(formData, 'message'),
  };

  const errors = validateFields(data);
  if (errors.length > 0) {
    return {
      success: false,
      errors,
    };
  }

  const result = await sendContactEmail(data);
  if (!result.success) {
    return {
      success: false,
      errors: [
        {
          field: '_form',
          message: result.error,
        },
      ],
    };
  }

  return {
    success: true,
    errors: [],
  };
};
