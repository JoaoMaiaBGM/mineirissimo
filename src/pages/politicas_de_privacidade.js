import { Header } from "components/Header";
import { Seo } from "components/Seo";
import { _PrivacyPolicy } from "components/PrivacyPolicy";

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Política de privacidade | Mineiríssimo"
        description="Política de privacidade do site Mineiríssimo."
        canonicalPath="/politicas_de_privacidade"
      />
      <main>
        <Header dark={"active"} size={"large"} />
        <_PrivacyPolicy />
      </main>
    </>
  );
}
