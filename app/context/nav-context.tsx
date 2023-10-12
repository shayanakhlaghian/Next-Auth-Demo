'use client';
import { createContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const NavContext = createContext<{
  isOpen: boolean;
  toggle: () => void;
}>({
  isOpen: false,
  toggle: () => {},
});

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <NavContext.Provider value={{ isOpen, toggle }}>
      {children}
    </NavContext.Provider>
  );
};
