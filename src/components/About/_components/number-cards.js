import Image from 'next/image';

import cheeseBreadIcon from '../_assets/cheese-bread-icon.png';
import cheeseIcon from '../_assets/cheese-icon.png';
import glutenFreeIcon from '../_assets/gluten-free-icon.png';
import heartIcon from '../_assets/heart-icon.png';

const Divider = () => {
  return <div className="w-px h-24 bg-accent" />;
};

const cardContent = [
  {
    title: '30.000+',
    subtitle: 'Pães de queijo por mês',
    description: 'Levamos sempre o melhor até você',
    icon: cheeseBreadIcon,
  },
  {
    title: '15+',
    subtitle: 'Produtos',
    description: 'Opções deliciosas para todos os momentos do seu dia',
    icon: cheeseIcon,
  },
  {
    title: '15',
    subtitle: 'Anos de história',
    description: 'Tradição, carinho, e dedicação que se renovam todos os dias',
    icon: heartIcon,
  },
  {
    title: '100%',
    subtitle: 'Sem glúten',
    description: 'Compromisso com sua saúde, sem abrir mão do sabor',
    icon: glutenFreeIcon,
  },
];

export function NumberCards() {
  return cardContent.map((item) => (
    <div
      key={item.title}
      className="min-h-40 w-full flex flex-row items-center justify-start gap-6 shadow-md rounded-lg bg-mine-gray-150 md:p-2"
    >
      <div className="w-28 h-28 flex items-center justify-center lg:w-28 lg:h-28">
        <Image
          src={item.icon}
          alt={item.title}
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>

      <Divider />

      <div className="flex flex-col max-w-52 items-start justify-center md:max-w-full lg:max-w-60 xl:max-w-[350px]">
        <h2 className="h1 text-accent">{item.title}</h2>
        <p className="p-large-bold text-primary">{item.subtitle}</p>
        <span className="p-small text-mine-gray-300 md:p-caption">{item.description}</span>
      </div>
    </div>
  ));
}
