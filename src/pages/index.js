import { CookieBanner } from 'components/Cookies';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Localization } from 'components/Localization';
import { Products } from 'components/Products';
import { Seo } from 'components/Seo';
import { Testimonials } from 'components/Testimonials';
import { getPublicAssets } from 'lib/cms';

export async function getStaticProps() {
  let ogImage = null;
  try {
    ({ ogImage } = await getPublicAssets());
  } catch (error) {
    console.log(`Images Error: ${error}`);
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
        <Products />
        {/* <About /> */}
        <Testimonials />
        {/* <Innovations /> */}
        {/* <Events /> */}
        <Localization />
        <Footer />
        <CookieBanner />
        {/*  <ScrollToTopButton /> */}
      </main>
    </>
  );
}
