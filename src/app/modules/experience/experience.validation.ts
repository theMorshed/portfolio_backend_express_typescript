import { z } from 'zod';

export const createExperienceSchema = z.object({
    designation: z.string().min(1, 'Designation is required'),
    company: z.string().min(1, 'Company name is required'),
    description: z.string().min(1, 'Description is required'),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().optional(), 
});

export const updateExperienceSchema = createExperienceSchema.partial();
