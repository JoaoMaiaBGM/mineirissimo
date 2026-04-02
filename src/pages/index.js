import { Header } from "components/Header";
import { Seo } from "components/Seo";
import { Features } from "components/Features";
import { Hero } from "components/Hero";
import { Products } from "components/Products";
import { About } from "components/About";
import { Testimonials } from "components/Testimonials";
import { Innovations } from "components/Innovations";
import { Events } from "components/Events";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";
import { CookieBanner } from "components/Cookies";
import { ScrollToTopButton } from "components/Buttons/scrollToTopButton";

export default function Home() {
  return (
    <>
      <Seo
        title="Mineiríssimo - O legítimo sabor do pão de queijo"
        description="O legítimo sabor do pão de queijo"
        canonicalPath="/"
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
