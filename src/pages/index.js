import { About } from 'components/About';
import { Hero } from 'components/Hero';
import { Location } from 'components/Location';
import { Products } from 'components/Products';
import { Seo } from 'components/Seo';
import { Testimonials } from 'components/Testimonials';
import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import { getPublicAssets } from 'lib/cms';
import { CMS_ISR_REVALIDATE_SECONDS } from 'lib/cms/revalidation';

export async function getStaticProps() {
  let ogImage = null;
  let products = [];

  try {
    const assets = await getPublicAssets();
    ogImage = assets.ogImage ?? null;
    products = assets.products ?? [];
  } catch (error) {
    console.log(`Public assets error: ${error}`);
  }

  return {
    props: {
      ogImage,
      products,
    },
    revalidate: CMS_ISR_REVALIDATE_SECONDS,
  };
}

export default function Home({ ogImage, products }) {
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
        <Products products={products} />
        <About />
        <Testimonials />
        <Location />
        <Footer />
      </main>
    </>
  );
}
