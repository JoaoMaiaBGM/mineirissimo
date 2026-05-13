import Image from 'next/image';

import ornamentalDivider from './_assets/ornamental-divider.png';
import { NumberCards, WhoWeAre } from './_components';

export function About() {
  return (
    <section className="section-p container flex flex-col items-center justify-center" id="sobre">
      <div className="w-5/6 mb-12 lg:w-1/2">
        <h2 className="h1 text-primary text-center">Sobre nós</h2>
        <Image
          src={ornamentalDivider}
          alt="Divisor ornamental"
          className="w-full h-20 object-cover"
          width={2000}
          height={2000}
        />
      </div>

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
