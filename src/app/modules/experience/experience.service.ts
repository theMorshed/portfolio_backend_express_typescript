import Experience from "./experience.model";
import { TExperience } from "./experience.types";

export const createExperienceService = async (payload: TExperience) => {
  const experience = await Experience.create(payload);
  return experience;
}

export const getAllExperienceService = async () => {
  const experiences = await Experience.find({});
  return experiences;
}

export const getExperienceService = async (id: string) => {
  const experience = await Experience.findById(id);
  return experience;
}

export const updateExperienceService = async (id: string, payload: Partial<TExperience>) => {
  const experience = await Experience.findByIdAndUpdate(id, payload, { new: true });
  return experience;
}

export const deleteExperienceService = async (id: string) => {
  const experience = await Experience.findByIdAndDelete(id);
  return experience;
}

