'use client';

import { useActionState, useEffect, useMemo, useRef } from 'react';

import { sendContactForm } from '../_action';
import { SuccessMessage } from './success-message';

const INITIAL_FORM_STATE = {
  success: false,
  errors: [],
};

export default function ContactForm({ className }) {
  const formRef = useRef(null);
  const [state, formAction, isPending] = useActionState(sendContactForm, INITIAL_FORM_STATE);
  const stateErrors = state?.errors;
  const errors = useMemo(() => stateErrors ?? [], [stateErrors]);
  const success = state?.success ?? false;

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

  if (success) {
    return <SuccessMessage />;
  }

  const nameError = getErrorByField('name');
  const emailError = getErrorByField('email');
  const phoneError = getErrorByField('phone');
  const messageError = getErrorByField('message');
  const formError = getErrorByField('_form');

  return (
    <form
      action={formAction}
      ref={formRef}
      className={`grid gap-3 md:grid-cols-[1fr_1.15fr] md:gap-2 ${className || ''}`}
    >
      <div className="space-y-3 md:space-y-2">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full rounded-md border border-white/40 bg-[#e6e6e6] px-4 py-3 text-xl text-black placeholder:text-black/75 focus:outline-none md:py-2 md:text-base"
          />
          {nameError && (
            <p data-error className="pt-1 text-sm text-red-300" maxLength={100}>
              {nameError}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md border border-white/40 bg-[#e6e6e6] px-4 py-3 text-xl text-black placeholder:text-black/75 focus:outline-none md:py-2 md:text-base"
          />
          {emailError && (
            <p data-error className="pt-1 text-sm text-red-300" maxLength={100}>
              {emailError}
            </p>
          )}
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Telefone"
            className="w-full rounded-md border border-white/40 bg-[#e6e6e6] px-4 py-3 text-xl text-black placeholder:text-black/75 focus:outline-none md:py-2 md:text-base"
          />
          {phoneError && (
            <p data-error className="pt-1 text-sm text-red-300" maxLength={15}>
              {phoneError}
            </p>
          )}
        </div>
      </div>

      <div className="flex min-h-0 flex-col md:col-start-2 md:row-start-1 md:h-full">
        <div className="flex min-h-48 flex-1 flex-col md:min-h-0">
          <textarea
            name="message"
            rows={4}
            placeholder="Digite sua mensagem aqui..."
            className="h-full min-h-48 w-full flex-1 resize-none rounded-md border border-white/40 bg-[#e6e6e6] px-4 py-3 text-xl text-black placeholder:text-black/75 focus:outline-none md:min-h-0 md:py-2 md:text-base"
            maxLength={500}
          />
          {messageError && (
            <p data-error className="pt-1 text-sm text-red-300">
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
          <p data-error className="text-center text-sm text-red-300 md:text-right">
            {formError}
          </p>
        )}
      </div>
    </form>
  );
}
