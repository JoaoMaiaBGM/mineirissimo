import { _PrivacyPolicy } from 'components/PrivacyPolicy';
import { Seo } from 'components/Seo';
import { Header } from 'layout/Header';
import { getPrivacyPolicy } from 'lib/cms';

export async function getStaticProps() {
  let privacyPolicy = null;

  try {
    privacyPolicy = await getPrivacyPolicy();
  } catch (error) {
    console.log(`Privacy Policy Error: ${error}`);
  }

  return {
    props: {
      privacyPolicy: privacyPolicy ?? null,
    },
    revalidate: 60,
  };
}

export default function PrivacyPolicy({ privacyPolicy }) {
  return (
    <>
      <Seo
        title={privacyPolicy?.title ?? 'Política de privacidade'}
        description={privacyPolicy?.description ?? 'Política de privacidade da Mineiríssimo.'}
        canonicalPath="/politicas_de_privacidade"
      />
      <main>
        <Header dark={'active'} size={'large'} />
        <_PrivacyPolicy content={privacyPolicy} />
      </main>
    </>
  );
}
