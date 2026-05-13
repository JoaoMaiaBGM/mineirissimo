import { SectionTitle } from 'layout/SectionTitle';
import { NumberCards, WhoWeAre } from './_components';

export function About() {
  return (
    <section className="section-p container flex flex-col items-center justify-center" id="sobre">
      <SectionTitle title="Sobre nós" />

      <div className="w-full flex flex-col items-stretch justify-center gap-12 lg:flex-row">
        <div className="w-full flex flex-col items-center justify-start text-left gap-4">
          <h2 className="h2 text-primary text-center mb-6">
            Entenda quem somos e porque existimos
          </h2>
          <WhoWeAre />
        </div>

        <div className="w-full flex flex-col items-center justify-between gap-4">
          <h2 className="h2 text-primary text-center mb-6">Números que contam nossa história</h2>
          <NumberCards />
        </div>
      </div>
    </section>
  );
}
