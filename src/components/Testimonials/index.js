import { TestimonialsCards } from 'components/Testimonials/_components/TestimonialsCards';

export function Testimonials() {
  return (
    <section className="section-p bg-primary-dark" id="depoimentos">
      <h4 className="p-medium uppercase text-white mb-3 text-center tracking-wide">depoimentos</h4>
      <h2 className="h2 mb-12 text-center text-white md:mb-14">Veja quem já passou por aqui</h2>

      <TestimonialsCards id="testimonialslist" />
    </section>
  );
}
