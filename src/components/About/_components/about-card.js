import Image from 'next/image';

import paoDeQueijo from '../_assets/pao-de-queijo-icon.png';

const Divider = () => {
  return <div className="w-[2px] h-30 bg-accent" />;
};

const cardContent = [
  {
    title: '30.000+',
    subtitle: 'Pães de queijo por mês',
    description: 'Levamos sempre o melhor até você',
    icon: paoDeQueijo,
  },
  {
    title: '15',
    subtitle: 'Anos de história',
    description: 'Tradição, carinho, e dedicação que se renovam todos os dias',
  },
  {
    title: '15+',
    subtitle: 'Produtos',
    description: 'Opções deliciosas para todos os momentos do seu dia',
  },
  {
    title: '100%',
    subtitle: 'Sem glúten',
    description: 'Compromisso com sua saúde, sem abrir mão do sabor',
  },
];

export function AboutCards() {
  return cardContent.map((item) => (
    <div
      key={item.title}
      className="px-8 py-6 min-h-20 w-full flex flex-row items-center justify-between gap-4 shadow-md rounded-lg bg-mine-gray-150"
    >
      <div className="w-20 h-20 rounded-full border-2 border-accent p-2">
        <Image
          src={item.icon}
          alt={item.title}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>

      <Divider />

      <div className="flex flex-col items-start justify-center gap-1">
        <h2 className="h1 text-accent">{item.title}</h2>
        <p className="p-large-bld text-primary">{item.subtitle}</p>
        <p className="p-medium text-card-foreground">{item.description}</p>
      </div>
    </div>
  ));
}
