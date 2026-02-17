import { education } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="space-y-8">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">My academic journey and the knowledge I've acquired.</p>
      </div>
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="font-headline text-2xl">{education.university}</CardTitle>
              <p className="text-muted-foreground">{education.degree}</p>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span>{education.duration}</span>
                <span>&bull;</span>
                <span>GPA: {education.gpa}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="mb-3 font-semibold">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {education.courses.map((course) => (
              <Badge key={course} variant="secondary">
                {course}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
