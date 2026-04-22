import Image from 'next/image';
import Logo from '../../assets/icons/logo.png';
import { Navbar } from './navbar';

export function DesktopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-border hidden md:block">
      <div className="container flex items-center justify-between">
        <a href="/" className="w-[130px] h-[90px] relative flex items-center justify-center">
          <Image
            src={Logo}
            alt="Logo Mineiríssimo"
            width={100}
            height={60}
            className="object-contain w-auto h-auto"
            priority
          />
        </a>

        <Navbar />

        <a
          href="https://web.whatsapp.com/send?phone=5581996272423"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="shadow-[2px_2px_8px_0_rgba(0,0,0,0.75)] btn-primary border border-accent">
            Faça Pedido
          </button>
        </a>
      </div>
    </header>
  );
}
