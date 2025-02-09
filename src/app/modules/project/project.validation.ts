import { z } from 'zod';

export const createProjectSchema = z.object({
    title: z.string().min(1, 'title is required'), 
    description: z.string().min(1, 'description is required'),
    liveLink: z.string().min(1, 'Live link is required'),
    image: z.string().min(1, 'image is required'),
});

export const updateProjectSchema = createProjectSchema.partial();