import Skill from "./skills.model";
import { TSkills } from "./skills.types";

export const createSkillService = async (payload: TSkills) => {
  const skill = await Skill.create(payload);
  return skill;
}

export const getAllSkillService = async () => {
  const skills = await Skill.find({});
  return skills;
}

export const getSkillService = async (id: string) => {
  const skill = await Skill.findById(id);
  return skill;
}

export const updateSkillService = async (id: string, payload: Partial<TSkills>) => {
  const skill = await Skill.findByIdAndUpdate(id, payload, { new: true });
  return skill;
}

export const deleteSkillService = async (id: string) => {
  const skill = await Skill.findByIdAndDelete(id);
  return skill;
}