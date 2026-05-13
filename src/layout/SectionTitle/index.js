import Image from 'next/image';

import ornamentalDivider from './_assets/ornamental-divider.png';

export function SectionTitle({ className, title }) {
  return (
    <div className={`${className} w-5/6 mb-12 lg:w-1/2`}>
      {title && <h2 className="h1 text-primary text-center">{title}</h2>}
      <Image
        src={ornamentalDivider}
        alt="Divisor ornamental"
        className="w-full h-20 object-cover"
        width={2000}
        height={2000}
      />
    </div>
  );
}
