import Image from 'next/image';

import { AboutCards } from './_components/about-card';

import ornamentalDivider from './_assets/ornamental-divider.png';

export function About() {
  return (
    <section className="section-p container flex flex-col items-center justify-center" id="sobre">
      <div className="flex flex-col items-stretch justify-center gap-10 md:flex-row">
        <div className="w-1/2 flex flex-col items-center justify-between text-left gap-4">
          <div className="w-full">
            <h2 className="h2 text-primary text-center mb-3">Sobre nós</h2>
            <Image
              src={ornamentalDivider}
              alt="Divisor ornamental"
              className="w-full h-20 object-cover"
              width={2000}
              height={2000}
            />
          </div>
          <h2 className="h1 text-primary text-center mb-6">
            Entenda quem somos e porque existimos
          </h2>

          <div className="flex flex-col items-start justify-center gap-6">
            <p className="h4">
              A Mineiríssimo é uma empresa artesanal especializada em pão de queijo, com mais de 15
              anos de história. Nascemos do amor pela culinária mineira e goiana e do desejo de
              compartilhar sabores autênticos, preparados como antigamente, com cuidado, tradição e
              ingredientes selecionados.
            </p>

            <p className="h4">
              Nossas receitas não utilizam ingredientes químicos nem realçadores artificiais de
              sabor, garantindo um produto mais natural, nutritivo e cheio de personalidade. Cada
              pão de queijo é preparado com um processo de cocção lento e gradual, resultando em uma
              textura única: macio por dentro e crocante por fora.
            </p>

            <p className="h4">
              Existimos para oferecer uma verdadeira alternativa aos produtos industrializados,
              levando até nossos clientes o sabor caseiro e genuíno do autêntico pão de queijo
              artesanal.
            </p>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center justify-center gap-4">
          <h2 className="h1 text-primary text-center mb-6">Números que contam nossa história</h2>
          <AboutCards />
        </div>
      </div>
    </section>
  );
}
