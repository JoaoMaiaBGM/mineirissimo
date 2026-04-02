import { Header } from "components/Header";
import { Seo } from "components/Seo";
import { _TermsAndConditions } from "components/TermsAndConditions";

export default function TermsAndConditions() {
  return (
    <>
      <Seo
        title="Termos e condições | Mineiríssimo"
        description="Termos e condições de uso do site Mineiríssimo."
        canonicalPath="/termos_e_condicoes"
      />
      <main>
        <Header dark={"active"} size={"large"} />
        <_TermsAndConditions />
      </main>
    </>
  );
}
