import Link from 'next/link';

import { IoLogoInstagram, IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5';
const informationLinks = [
  {
    label: 'Políticas de privacidade',
    href: '/politicas_de_privacidade',
  },
  {
    label: 'Termos e condições',
    href: '/termos_e_condicoes',
  },
];

const contactLinks = [
  {
    label: 'mineirissimoartesanal@gmail.com',
    href: null,
    icon: <IoMailOutline size={18} />,
  },
  {
    label: '(81) 9.9627-2423',
    href: 'https://wa.me/5581996272423',
    icon: <IoLogoWhatsapp size={18} />,
  },
];

const socialLinks = [
  {
    label: '@mineirissimo.recife',
    href: 'http://instagram.com/mineirissimo.recife',
    icon: <IoLogoInstagram size={18} />,
  },
];

export function Footer() {
  return (
    <footer className="section-p bg-primary text-center">
      <div className="container pb-8 flex flex-col items-start justify-center gap-6 lg:gap-8 md:flex-row">
        <div className="flex flex-col items-start justify-center gap-2">
          <h4 className="h4 text-mine-white">Informações</h4>

          {informationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-small text-mine-white gap-2"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <h4 className="h4 text-mine-white">Contato</h4>

          {contactLinks.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-small text-mine-white flex flex-row items-center gap-2"
              >
                {link.icon}
                {link.label}
              </Link>
            ) : (
              <div
                key={link.label}
                className="p-small text-mine-white flex flex-row items-center gap-2"
              >
                {link.icon}
                {link.label}
              </div>
            )
          )}
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <h4 className="h4 text-mine-white">Redes Sociais</h4>

          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-small text-mine-white flex flex-row items-center gap-2"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container text-mine-white border-t border-mine-gray-2 pt-4">
        <p className="p-small">©2010 Mineirissimo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
