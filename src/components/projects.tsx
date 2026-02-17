import { projects } from '@/lib/data';
import { ProjectCard } from './project-card';

export function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">A selection of my work across different domains.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
