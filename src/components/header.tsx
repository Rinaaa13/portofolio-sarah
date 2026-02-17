"use client";

import React from 'react';
import { BrainCircuit } from 'lucide-react';

const NavLink = ({ id, children }: { id: string, children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <a href={`#${id}`} onClick={handleClick} className="transition-colors hover:text-primary">
      {children}
    </a>
  );
};

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all ${isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : ''}`}>
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-headline text-lg font-bold">
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span>Sarah Desmarina</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLink id="hero">About</NavLink>
          <NavLink id="projects">Projects</NavLink>
          <NavLink id="education">Education</NavLink>
        </nav>
      </div>
    </header>
  );
}
