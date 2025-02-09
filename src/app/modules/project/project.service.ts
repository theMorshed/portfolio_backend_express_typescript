import Project from "./project.model";
import { TProject } from "./project.type";

export const createProjectService = async (payload: TProject) => {
  const project = await Project.create(payload);
  return project;
}

export const getAllProjectService = async () => {
  const projects = await Project.find({});
  return projects;
}

export const getProjectService = async (id: string) => {
  const project = await Project.findById(id);
  return project;
}

export const updateProjectService = async (id: string, payload: Partial<TProject>) => {
  const project = await Project.findByIdAndUpdate(id, payload, { new: true });
  return project;
}

export const deleteProjectService = async (id: string) => {
  const project = await Project.findByIdAndDelete(id);
  return project;
}

