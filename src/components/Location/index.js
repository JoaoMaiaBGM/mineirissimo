import Image from 'next/image';
import Link from 'next/link';

import { usePublicAssets } from 'lib/cms/usePublicAssets';
import { BsWhatsapp } from 'react-icons/bs';
import Logo from '../../assets/icons/logo.png';

export function Location() {
  const { data } = usePublicAssets();
  const facade = data?.storeFront;

  return (
    <section className="section-p bg-mine-gray-150 text-center" id="localization">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="h1 text-primary mb-8">Onde estamos</h2>

        <div className="h-full flex flex-col items-center justify-between text-center md:flex-row">
          <div className="w-3/4">
            {facade?.url ? (
              <Image
                className="w-full h-full object-cover rounded-2xl"
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
          <h3 className="h3 text-primary whitespace-pre-line max-w-sm py-4">
            A felicidade em cada produto. Prove o melhor!
          </h3>
          <Link
            href="https://web.whatsapp.com/send?phone=5581996272423"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary px-4 py-2 rounded-full flex items-center gap-2">
              <BsWhatsapp />
              Peça agora
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
