'use client';

import { useEffect, useRef, useState } from 'react';

import { SuccessMessage } from './success-message';

const FORM_ERROR = {
  field: '_form',
  message: 'Nao foi possivel enviar sua mensagem. Tente novamente em alguns minutos.',
};

const inputsList = [
  {
    label: 'Nome',
    name: 'name',
    type: 'text',
    placeholder: 'Nome',
    length: 50,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    length: 100,
  },
  {
    label: 'Telefone',
    name: 'phone',
    type: 'tel',
    placeholder: 'Telefone',
    length: 15,
  },
];

export default function ContactForm({ className }) {
  const formRef = useRef(null);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const getErrorByField = (field) => {
    return errors.find((error) => error.field === field)?.message;
  };

  useEffect(() => {
    if (formRef.current && errors.length > 0) {
      const errorElement = formRef.current.querySelector('[data-error]');
      if (errorElement) {
        errorElement.parentElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [errors]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);
    setErrors([]);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        return;
      }

      setErrors(result.errors ?? [FORM_ERROR]);
    } catch {
      setErrors([FORM_ERROR]);
    } finally {
      setIsPending(false);
    }
  };

  if (success) {
    return <SuccessMessage />;
  }

  const messageError = getErrorByField('message');
  const formError = getErrorByField('_form');

  return (
    <>
      <div className="flex flex-col-reverse w-full gap-12 items-start justify-center text-justify lg:flex-row">
        <div className="flex flex-col w-full lg:max-w-2/5">
          <p className="p-medium mb-6">
            Para dúvidas, elogios, reclamações, sugestões ou qualquer outro assunto, entre em
            contato. Se preferir, pode ser por email ou por WhatsApp. Nosso horário de atendimento é
            de segunda a sexta-feira das 9h às 17h.
          </p>

          <span className="p-medium mb-2">email: mineirissimoartesanal@gmail.com</span>
          <span className="p-medium">WhatsApp: (81) 9.9627-2423</span>
        </div>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className={`grid gap-3 md:grid-cols-[1fr_1.15fr] ${className || ''}`}
        >
          <div className="space-y-3 md:space-y-2">
            {inputsList.map((input) => (
              <div key={input.name}>
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  className="w-full rounded-lg bg-mine-gray-100 px-3 py-2 p-small placeholder:text-mine-gray-300 focus:outline-none"
                  maxLength={input.length}
                />
                {getErrorByField(input.name) && (
                  <p data-error className="py-1 p-caption text-mine-error">
                    {getErrorByField(input.name)}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex min-h-0 flex-col md:col-start-2 md:row-start-1 md:h-full">
            <div className="flex min-h-48 flex-1 flex-col md:min-h-0">
              <textarea
                name="message"
                rows={4}
                placeholder="Digite sua mensagem aqui..."
                className="h-full min-h-48 w-full flex-1 resize-none rounded-lg bg-mine-gray-100 px-3 py-2 p-small placeholder:text-mine-gray-300 focus:outline-none md:min-h-0"
                maxLength={500}
              />
              {messageError && (
                <p data-error className="pt-1 p-caption text-mine-error">
                  {messageError}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:col-start-2 md:row-start-2 md:items-center md:gap-2">
            <button type="submit" disabled={isPending} className="btn-primary">
              {isPending ? 'Enviando...' : 'Enviar'}
            </button>

            {formError && (
              <p data-error className="text-center p-caption text-mine-error md:text-right">
                {formError}
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
