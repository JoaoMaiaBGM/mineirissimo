/**
 * EmailTemplate is a simple email template React component
 * to render the contact email with styled HTML.
 *
 * @param {Object} props - Email template props
 * @param {string} props.name - Sender's name
 * @param {string} props.email - Sender's email
 * @param {string} props.phone - Sender's phone number
 * @param {string} props.message - The message content
 */
export function EmailTemplate({ name, email, phone, message }) {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: 'var(--color-background)',
        color: 'var(--color-text)',
        borderRadius: 'var(--radius)',
        padding: 'var(--spacing-4)',
        maxWidth: 'var(--max-width-md)',
        margin: 'auto',
        border: '1px solid var(--color-border)',
      }}
    >
      <h2 style={{ color: 'var(--color-primary)', marginTop: 0 }}>
        Novo contato pelo site Mineiríssimo
      </h2>
      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid var(--color-border)',
          margin: 'var(--spacing-4) 0',
        }}
      />
      <div>
        <strong>Nome:</strong> {name || '-'}
      </div>
      <div>
        <strong>Email:</strong> <a href={`mailto:${email}`}>{email || '-'}</a>
      </div>
      <div>
        <strong>Telefone:</strong> {phone || '-'}
      </div>
      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid var(--color-border)',
          margin: 'var(--spacing-4) 0',
        }}
      />
      <div style={{ marginTop: 'var(--spacing-3)', marginBottom: 'var(--spacing-2)' }}>
        <strong>Mensagem:</strong>
      </div>
      <div
        style={{
          whiteSpace: 'pre-line',
          background: 'var(--color-background)',
          padding: 'var(--spacing-4)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--color-border)',
        }}
      >
        {message || '-'}
      </div>
      <hr
        style={{
          border: 'none',
          borderBottom: '1px solid var(--color-border)',
          margin: 'var(--spacing-6) 0 var(--spacing-3)',
        }}
      />
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-muted-foreground)' }}>
        Atenciosamente {name || '-'}
      </div>
    </div>
  );
}

export default EmailTemplate;
