'use server';
/**
 * @fileOverview An AI tool that generates concise summaries for project descriptions.
 *
 * - generateProjectSummary - A function that generates a summary for a given project description.
 * - ProjectSummaryInput - The input type for the generateProjectSummary function.
 * - ProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectSummaryInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The detailed description of the project.'),
});
export type ProjectSummaryInput = z.infer<typeof ProjectSummaryInputSchema>;

const ProjectSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary highlighting the project\'s key objectives, technologies used, and Sarah\'s contributions.'
    ),
});
export type ProjectSummaryOutput = z.infer<typeof ProjectSummaryOutputSchema>;

export async function generateProjectSummary(
  input: ProjectSummaryInput
): Promise<ProjectSummaryOutput> {
  return projectSummaryFlow(input);
}

const projectSummaryPrompt = ai.definePrompt({
  name: 'projectSummaryPrompt',
  input: {schema: ProjectSummaryInputSchema},
  output: {schema: ProjectSummaryOutputSchema},
  prompt: `You are an expert technical recruiter tasked with quickly understanding a candidate's project.
Given the following project description, generate a concise summary that highlights the project's key objectives,
the technologies used, and Sarah Desmarina's specific contributions to the project.
Ensure the summary is easy to read and directly addresses these three points in a brief paragraph.

Project Description: {{{projectDescription}}}`,
});

const projectSummaryFlow = ai.defineFlow(
  {
    name: 'projectSummaryFlow',
    inputSchema: ProjectSummaryInputSchema,
    outputSchema: ProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await projectSummaryPrompt(input);
    return output!;
  }
);
