import ContactForm from 'components/Contact/_components';
import { Seo } from 'components/Seo';
import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import { SectionTitle } from 'layout/SectionTitle';
import { usePublicAssets } from 'lib/cms/usePublicAssets';
import Image from 'next/image';

export default function ContactPage() {
  const { data } = usePublicAssets();
  const contactHero = data?.contactHero;

  return (
    <>
      <Seo
        title="Contato | Mineiríssimo"
        description="Entre em contato com a Mineiríssimo."
        canonicalPath="/contato"
      />
      <main>
        <Header />

        <section className="bg-mine-gray-150">
          <div className="relative w-full overflow-hidden">
            <div className="relative w-full lg:min-h-[375px]">
              {contactHero?.url ? (
                <Image
                  src={contactHero.url}
                  alt={
                    contactHero.alt ??
                    'Cesta com pães de queijo, uma xícara branca com a fachada da loja ao fundo.'
                  }
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 960px"
                  className="object-cover object-center"
                />
              ) : null}
            </div>
          </div>

          <div className="container section-p flex flex-col items-center justify-center">
            <SectionTitle title="Entre em contato" />

            <div className="flex flex-col-reverse w-full gap-12 items-start justify-center text-justify lg:flex-row">
              <div className="flex flex-col w-full lg:max-w-2/5">
                <p className="p-medium mb-6">
                  Para dúvidas, elogios, reclamações, sugestões ou qualquer outro assunto, entre em
                  contato. Se preferir, pode ser por email ou por WhatsApp. Nosso horário de
                  atendimento é de segunda a sexta-feira das 9h às 17h.
                </p>

                <span className="p-medium mb-2">email: mineirissimoartesanal@gmail.com</span>
                <span className="p-medium">WhatsApp: (81) 9.9627-2423</span>
              </div>

              <ContactForm className="w-full" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
