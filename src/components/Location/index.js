import Image from 'next/image';
import Link from 'next/link';

import { usePublicAssets } from 'lib/cms/usePublicAssets';
import { FiClock, FiMapPin } from 'react-icons/fi';
import Logo from '../../assets/icons/logo.png';

const Divider = () => {
  return <div className="w-full h-[2px] bg-accent" />;
};

const openingHours = [
  { day: 'Segunda', hours: '09:00 - 18:00' },
  { day: 'Terça a sexta-feira', hours: '09:00 - 19:00' },
  { day: 'Sábado', hours: '09:00 - 13:00' },
];

export function Location() {
  const { data } = usePublicAssets();
  const facade = data?.storeFront;

  return (
    <section className="section-p bg-mine-gray-150 text-center" id="localization">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="h1 text-primary">Onde estamos</h2>

        <div className="h-full section-p flex flex-col items-center justify-center text-center gap-16 md:flex-row">
          <div className="w-1/2 md:w-1/3">
            {facade?.url ? (
              <Image
                className="w-full h-full object-contain rounded-2xl"
                src={facade.url}
                alt={facade.alt ?? 'Fachada da loja Mineiríssimo'}
                width={facade.width ?? 1200}
                height={facade.height ?? 800}
              />
            ) : (
              <Image
                className="w-full h-full object-contain"
                src={Logo}
                alt="Logomarca da Mineiríssimo"
              />
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-row text-primary items-start justify-center gap-2">
              <FiMapPin size={20} className="mt-1" />
              <p className="p-large text-primary whitespace-pre-line text-left max-w-3xs">
                Rua Manuel de Carvalho, 471, Aflitos, Recife-PE
              </p>
            </div>

            <Divider />

            <div className="flex flex-row text-primary items-center justify-center gap-2">
              <FiClock size={20} className="mt-1" />
              <ul className="p-small-bold text-primary whitespace-pre-line text-left">
                {openingHours.map((hour) => (
                  <li key={hour.day}>
                    {hour.day}: {hour.hours}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Mineir%C3%ADssimo%2C+Rua+Manuel+de+Carvalho%2C+471%2C+Aflitos%2C+Recife+-+PE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary p-small inline-flex items-center justify-center gap-2"
            >
              Ver no mapa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
