const whoWeAreContent = [
  {
    id: 1,
    description:
      'A Mineiríssimo é uma empresa artesanal especializada em pão de queijo, com mais de 15 anos de história. Nascemos do amor pela culinária mineira e goiana e do desejo de compartilhar sabores autênticos, preparados como antigamente, com cuidado, tradição e ingredientes selecionados.',
  },
  {
    id: 2,
    description:
      'Nossas receitas não utilizam ingredientes químicos nem realçadores artificiais de sabor, garantindo um produto mais natural, nutritivo e cheio de personalidade. Cada pão de queijo é preparado com um processo de cocção lento e gradual, resultando em uma textura única: macio por dentro e crocante por fora.',
  },
  {
    id: 3,
    description:
      'Existimos para oferecer uma verdadeira alternativa aos produtos industrializados, levando até nossos clientes o sabor caseiro e genuíno do autêntico pão de queijo artesanal.',
  },
];

export function WhoWeAre() {
  return (
    <div className="flex flex-col items-start justify-center gap-8">
      {whoWeAreContent.map((content) => {
        return (
          <p className="p-large" key={content.id}>
            {content.description}
          </p>
        );
      })}
    </div>
  );
}
