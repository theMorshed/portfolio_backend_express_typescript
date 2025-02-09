import { z } from 'zod';

export const createBlogSchema = z.object({
    title: z.string().min(1, 'title is required'), 
    content: z.string().min(1, 'content is required'),
    image: z.string().min(1, 'image is required'),
    category: z.string().min(1, 'category is required'),
});

export const updateBlogSchema = createBlogSchema.partial();