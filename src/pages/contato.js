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
            <div className="relative aspect-21/9 min-h-[200px] w-full md:max-h-[280px] lg:max-h-[350px] 2xl:max-h-[500px]">
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
                  loading="eager"
                />
              ) : null}
            </div>
          </div>

          <div className="container section-p flex flex-col items-center justify-center">
            <SectionTitle title="Entre em contato" />

            <ContactForm className="w-full" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
