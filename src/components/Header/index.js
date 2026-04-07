import { useState } from 'react';

import { DesktopHeader } from './desktopHeader';
import { MobileHeader } from './mobileHeader';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-border">
      <DesktopHeader />
      <MobileHeader
        isMenuOpen={isMenuOpen}
        onOpenMenu={() => setIsMenuOpen(true)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
