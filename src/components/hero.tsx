import { profile } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="flex flex-col-reverse items-center gap-12 pt-8 text-center md:flex-row md:text-left">
      <div className="flex-1 space-y-6">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-xl">
          {profile.bio}
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Button size="lg" asChild className="font-bold">
            <a href="#projects">
              View My Work <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <div className="flex gap-4">
            {profile.contactLinks.map((link) => {
              const isMail = link.href.startsWith('mailto:');
              return (
                <Button key={link.label} variant="ghost" size="icon" asChild>
                  <a
                    href={link.href}
                    target={isMail ? '_self' : '_blank'}
                    rel={isMail ? '' : 'noopener noreferrer'}
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
