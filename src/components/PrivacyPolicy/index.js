import styles from './privacyPolicy.module.scss';

export function _PrivacyPolicy({ content }) {
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
