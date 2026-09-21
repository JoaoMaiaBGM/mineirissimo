import Image from 'next/image';
import Logo from '../../assets/icons/logo.png';
import { DesktopNavbar } from './navbar';
import { MdWhatsapp } from 'react-icons/md';

export function DesktopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-border py-2 hidden md:block">
      <div className="container flex items-center justify-between">
        <a href="/" className="w-25 h-full relative flex items-center justify-center lg:w-[130px]">
          <Image
            src={Logo}
            alt="Logo Mineiríssimo"
            width={100}
            height={60}
            className="object-contain w-auto h-auto"
            priority
          />
        </a>

        <DesktopNavbar />

        <a
          href="https://web.whatsapp.com/send?phone=5581996272423"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-primary shadow-[2px_2px_8px_0_rgba(0,0,0,0.75)] flex items-center justify-center gap-2 border border-accent md:px-3 md:py-2 lg:px-6 lg:py-3">
            <MdWhatsapp className="size-6" />
            Peça no WhatsApp
          </button>
        </a>
      </div>
    </header>
  );
}
