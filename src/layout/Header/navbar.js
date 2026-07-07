import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Produtos',
    href: '/#produtos',
  },
  {
    label: 'Sobre',
    href: '/#sobre',
  },
  {
    label: 'Depoimentos',
    href: '/#depoimentos',
  },
  {
    label: 'Loja',
    href: '/#loja',
  },
  {
    label: 'Contato',
    href: '/contato',
  },
];

function useAnchorNavigation() {
  const pathname = usePathname();

  return (event, href) => {
    if (href === '/' && pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/');
      return;
    }
    if (!href.startsWith('/#') || pathname !== '/') return;

    const target = document.getElementById(href.slice(2));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', href);
  };
}

export function MobileNavbar({ onNavigate }) {
  const handleAnchorNavigate = useAnchorNavigation();

  return (
    <nav className="mx-auto flex w-[62%] max-w-[420px] flex-col pt-32!">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(event) => {
            handleAnchorNavigate(event, item.href);
            onNavigate?.();
          }}
          className="block w-full border-b border-foreground py-3 text-center text-[20px] leading-none text-foreground hover:text-secondary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function DesktopNavbar() {
  const handleAnchorNavigate = useAnchorNavigation();
  return (
    <nav className="hidden gap-4 md:flex lg:gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(event) => handleAnchorNavigate(event, item.href)}
          className="text-primary-foreground hover:text-secondary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
