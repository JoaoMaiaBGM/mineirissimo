const navItems = [
  {
    label: 'Início',
    href: '#',
  },
  {
    label: 'Produtos',
    href: '#produtos',
  },
  {
    label: 'Sobre',
    href: '#sobre',
  },
  {
    label: 'Depoimentos',
    href: '#depoimentos',
  },
  {
    label: 'Eventos',
    href: '#eventos',
  },
];

export function Navbar({ isMobile = false, onNavigate }) {

  if (isMobile) {
    return (
      <nav className="mx-auto flex w-[62%] max-w-[420px] flex-col pt-32!">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`block w-full border-b border-foreground py-3 text-center text-[20px] leading-none text-foreground hover:text-secondary ${
              item.isActive ? 'text-foreground/35' : 'text-foreground'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden gap-4 md:flex lg:gap-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-primary-foreground hover:text-secondary"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
