import { z } from "zod";

export const createSkillSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
  icon: z.string().min(1, "Icon is required"),
  experience: z.string().optional(),
  projectsLink: z.string().optional(),
});

export const updateSkillSchema = createSkillSchema.partial();
