"use client";

import React, { useState, useTransition } from 'react';
import type { Project } from '@/lib/data';
import { projectCategories } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Loader2 } from 'lucide-react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { getProjectSummaryAction } from '@/app/actions';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";


interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isPending, startTransition] = useTransition();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const { toast } = useToast();

  const image: ImagePlaceholder | undefined = PlaceHolderImages.find(p => p.id === project.imagePlaceholderId);
  const CategoryIcon = projectCategories[project.category].icon;

  const handleGetSummary = () => {
    setIsDialogOpen(true);
    setSummary(null);
    startTransition(async () => {
      const result = await getProjectSummaryAction(project.description);
      if (result.summary) {
        setSummary(result.summary);
      } else {
        setIsDialogOpen(false);
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || 'An unknown error occurred.',
        });
      }
    });
  };

  return (
    <>
      <Card className="group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
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
        <CardFooter className="flex-wrap justify-between gap-2 pt-4">
          <Button variant="outline" size="sm" onClick={handleGetSummary} disabled={isPending && isDialogOpen}>
            {isPending && isDialogOpen ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Sparkles className="mr-2 h-4 w-4" />
            )}
            AI Summary
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-headline flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              AI Summary: {project.title}
            </DialogTitle>
          </DialogHeader>
            {isPending ? (
              <div className="flex min-h-[100px] items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
                summary && <p className="py-4 leading-relaxed text-muted-foreground">{summary}</p>
            )}
        </DialogContent>
      </Dialog>
    </>
  );
}
