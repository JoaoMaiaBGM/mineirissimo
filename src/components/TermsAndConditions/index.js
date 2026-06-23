import styles from './termsAndConditions.module.scss';

export function _TermsAndConditions({ content }) {
  return (
    <div className="container section-p">
      <h1 className="h1 mb-8">{content?.title}</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content?.contentHtml ?? '' }}
      />
    </div>
  );
}
