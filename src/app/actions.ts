'use server';

import { generateProjectSummary } from '@/ai/flows/ai-project-summary-generation-flow';

export async function getProjectSummaryAction(projectDescription: string) {
  try {
    const result = await generateProjectSummary({ projectDescription });
    return { summary: result.summary };
  } catch (error) {
    console.error('AI summary generation failed:', error);
    return { error: 'Failed to generate summary. Please try again.' };
  }
}
