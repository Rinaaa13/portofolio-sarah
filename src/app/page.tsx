import { Hero } from '@/components/hero';
import { Education } from '@/components/education';
import { Projects } from '@/components/projects';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-8 md:py-16">
        <div className="flex flex-col gap-16 md:gap-24">
          <Hero />
          <Projects />
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  );
}
