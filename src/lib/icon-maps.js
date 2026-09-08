'use client';

import { FaBottleWater, FaBowlRice } from 'react-icons/fa6';
import { GiChickenOven, GiSpring, GiTomato, GiWheat } from 'react-icons/gi';
import { LiaCheeseSolid, LiaCubeSolid } from 'react-icons/lia';
import { LuMilk, LuMilkOff, LuWheat } from 'react-icons/lu';
import {
  MdGrain,
  MdOutlineEgg,
  MdOutlineLocalFireDepartment,
  MdOutlineWaterDrop,
} from 'react-icons/md';
import { PiChartPieSliceLight, PiGrains } from 'react-icons/pi';
import { TbSalt, TbSausage } from 'react-icons/tb';

const iconClass = 'size-4 text-mine-yellow-50';

export const ingredientIconMap = {
  amaranth: <GiWheat className={iconClass} />,
  cheese: <LiaCheeseSolid className={iconClass} />,
  starch: <FaBowlRice className={iconClass} />,
  milk: <LuMilk className={iconClass} />,
  zero_lactose_milk: <LuMilkOff className={iconClass} />,
  eggs: <MdOutlineEgg className={iconClass} />,
  oil: <FaBottleWater className={iconClass} />,
  salt: <TbSalt className={iconClass} />,
  guava_paste: <PiChartPieSliceLight className={iconClass} />,
  pepperoni: <TbSausage className={iconClass} />,
  chicken: <GiChickenOven className={iconClass} />,
  tomato: <GiTomato className={iconClass} />,
};

export const nutritionalIconMap = {
  energy: <MdOutlineLocalFireDepartment className={iconClass} />,
  protein: <GiSpring className={iconClass} />,
  fat: <MdOutlineWaterDrop className={iconClass} />,
  carbs: <LuWheat className={iconClass} />,
  sodium: <LiaCubeSolid className={iconClass} />,
  sugar: <MdGrain className={iconClass} />,
  fibers: <PiGrains className={iconClass} />,
};
