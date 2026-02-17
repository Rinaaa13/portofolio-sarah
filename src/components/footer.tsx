import { profile } from '@/lib/data';
import { BrainCircuit } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
        <a href="#" className="flex items-center gap-2 font-headline text-sm font-bold">
          <BrainCircuit className="h-5 w-5 text-primary" />
          <span>Sarah Desmarina</span>
        </a>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
