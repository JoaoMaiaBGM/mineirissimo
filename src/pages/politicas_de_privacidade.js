import { _PrivacyPolicy } from 'components/PrivacyPolicy';
import { Seo } from 'components/Seo';
import { Header } from 'layout/Header';

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Política de privacidade | Mineiríssimo"
        description="Política de privacidade do site Mineiríssimo."
        canonicalPath="/politicas_de_privacidade"
      />
      <main>
        <Header dark={'active'} size={'large'} />
        <_PrivacyPolicy />
      </main>
    </>
  );
}
