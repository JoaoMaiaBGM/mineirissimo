import ContactForm from 'components/Contact/_components';
import { Seo } from 'components/Seo';
import { Header } from 'layout/Header';
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

        <section className="section-p bg-mine-gray-150">
          <div className="container flex flex-col items-center justify-center">
            <div className="relative mb-4 w-full overflow-hidden">
              <div className="relative aspect-21/7 w-full min-h-[140px]">
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

            <div className="flex flex-col items-center justify-center md:flex-row">
              <ContactForm />
              <div>
                <h1 className="h2">
                  Entre em contato conosco. Teremos o maior prazer em te atender
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
