import { FaBottleWater, FaBowlRice } from 'react-icons/fa6';
import { GiSpring } from 'react-icons/gi';
import { LiaCheeseSolid, LiaCubeSolid } from 'react-icons/lia';
import { LuMilk, LuWheat } from 'react-icons/lu';
import { MdOutlineEgg, MdOutlineLocalFireDepartment, MdOutlineWaterDrop } from 'react-icons/md';
import { TbSalt } from 'react-icons/tb';

export const ingredients = [
  {
    id: 1,
    name: 'Queijo',
    icon: <LiaCheeseSolid className="size-4 text-white" />,
  },
  {
    id: 2,
    name: 'Polvilho',
    icon: <FaBowlRice className="size-4 text-white" />,
  },
  {
    id: 3,
    name: 'Leite',
    icon: <LuMilk className="size-4 text-white" />,
  },
  {
    id: 4,
    name: 'Ovos',
    icon: <MdOutlineEgg className="size-4 text-white" />,
  },
  {
    id: 5,
    name: 'Óleo',
    icon: <FaBottleWater className="size-4 text-white" />,
  },
  {
    id: 6,
    name: 'Sal',
    icon: <TbSalt className="size-4 text-white" />,
  },
];

export const nutritionalInformation = [
  {
    id: 1,
    name: 'Valor energético',
    icon: <MdOutlineLocalFireDepartment className="size-4 text-white" />,
    value: '100 kcal',
  },
  {
    id: 2,
    name: 'Proteínas',
    icon: <GiSpring className="size-4 text-white" />,
    value: '10 g',
  },
  {
    id: 3,
    name: 'Gorduras totais',
    icon: <MdOutlineWaterDrop className="size-4 text-white" />,
    value: '10 g',
  },
  {
    id: 4,
    name: 'Carboidratos',
    icon: <LuWheat className="size-4 text-white" />,
    value: '10 g',
  },
  {
    id: 5,
    name: 'Sódio',
    icon: <LiaCubeSolid className="size-4 text-white" />,
    value: '10 g',
  },
];
