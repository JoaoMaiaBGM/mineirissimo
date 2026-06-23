import { Seo } from 'components/Seo';
import { _TermsAndConditions } from 'components/TermsAndConditions';
import { Header } from 'layout/Header';
import { getTermsAndConditions } from 'lib/cms';

export async function getStaticProps() {
  let termsAndConditions = null;

  try {
    termsAndConditions = await getTermsAndConditions();
  } catch (error) {
    console.log(`Terms and Conditions Error: ${error}`);
  }

  return {
    props: {
      termsAndConditions: termsAndConditions ?? null,
    },
    revalidate: 60,
  };
}

export default function TermsAndConditions({ termsAndConditions }) {
  return (
    <>
      <Seo
        title={termsAndConditions?.title ?? 'Termos e condições'}
        description={
          termsAndConditions?.description ?? 'Termos e condições de uso da Mineiríssimo.'
        }
        canonicalPath="/termos_e_condicoes"
      />
      <main>
        <Header dark={'active'} size={'large'} />
        <_TermsAndConditions content={termsAndConditions} />
      </main>
    </>
  );
}
