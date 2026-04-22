import Image from 'next/image';

import Logo from '../../assets/icons/logo.png';
import { Navbar } from './navbar';

export function MobileHeader({ isMenuOpen, onOpenMenu, onCloseMenu }) {
  const menuOverlay = (
    <div
      className={`fixed inset-0 z-2147483647 md:hidden ${
        isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div
        className={`absolute inset-0 bg-[#e6e6e6] transition-transform duration-500 ease-out will-change-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      />

      <div
        className={`relative h-full w-full transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 delay-150' : 'opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={onCloseMenu}
          className="absolute top-14 right-12 text-[56px] leading-none text-black/85"
          aria-label="Close menu"
        >
          <span className="block translate-y-[-2px]">&times;</span>
        </button>

        <Navbar isMobile={true} onNavigate={onCloseMenu} />
      </div>
    </div>
  );

  return (
    <div className="relative z-50 mx-auto flex w-full items-center md:hidden">
      <a href="/" className="w-[90px] h-[60px] relative flex items-center justify-center">
        <Image
          src={Logo}
          alt="Logo Mineiríssimo"
          width={80}
          height={50}
          className="object-contain w-auto h-auto"
          priority
        />
      </a>

      <button
        type="button"
        onClick={onOpenMenu}
        className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
        aria-label="Open menu"
      >
        <span className="w-6 h-1 bg-primary-foreground"></span>
        <span className="w-6 h-1 bg-primary-foreground"></span>
        <span className="w-6 h-1 bg-primary-foreground"></span>
      </button>

      {menuOverlay}
    </div>
  );
}
