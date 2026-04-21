"use client";

import type { Project } from '@/lib/data';
import { projectCategories } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const image: ImagePlaceholder | undefined = PlaceHolderImages.find(p => p.id === project.imagePlaceholderId);
  const CategoryIcon = projectCategories[project.category].icon;

  return (
    <Card className="group flex h-full flex-col overflow-hidden shadow-none transition-colors duration-300 hover:border-primary">
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
            <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
            <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
              <CategoryIcon className={`h-4 w-4 ${projectCategories[project.category].color}`} />
              <span>{project.category}</span>
            </div>
        </div>
        <CardDescription>{project.role} &bull; {project.year}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex-wrap justify-end gap-2 pt-4">
        <Button variant="ghost" size="sm" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
