import { TestimonialsCards } from 'components/TestimonialsCards';
import { AnimatedElement } from 'utils/animations';

export function Testimonials() {
  return (
    <AnimatedElement element="section" className="section-p container" id="depoimentos">
      <h4 className="p-medium uppercase text-primary mb-3 text-center tracking-wide">
        depoimentos
      </h4>
      <h2 className="h2 mb-12 text-center text-primary md:mb-14">Veja quem já passou por aqui</h2>

      <TestimonialsCards id="testimonialslist" />
    </AnimatedElement>
  );
}
