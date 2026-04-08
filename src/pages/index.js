import { About } from 'components/About';
import { ScrollToTopButton } from 'components/Buttons/scrollToTopButton';
import { Contact } from 'components/Contact';
import { CookieBanner } from 'components/Cookies';
import { Events } from 'components/Events';
import { Features } from 'components/Features';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Innovations } from 'components/Innovations';
import { Products } from 'components/Products';
import { Seo } from 'components/Seo';
import { Testimonials } from 'components/Testimonials';
import { getPublicAssets } from 'lib/cms';

export async function getStaticProps() {
  let ogImage = null;
  try {
    ({ ogImage } = await getPublicAssets());
  } catch {
    // Sem token Dato, API indisponível no build, etc.
  }

  return {
    props: {
      ogImage: ogImage ?? null,
    },
    revalidate: 60,
  };
}

export default function Home({ ogImage }) {
  return (
    <>
      <Seo
        title="Mineiríssimo"
        description="Mineiríssimo - O legítimo sabor do pão de queijo"
        canonicalPath="/"
        ogImageFromCms={ogImage}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <About />
        <Testimonials />
        <Innovations />
        <Events />
        <Contact />
        <Footer />
        <CookieBanner />
        <ScrollToTopButton />
      </main>
    </>
  );
}
