import data from '../data/projects.json';

export const getProjects = () => {
  return data;
};

export const getProjectData = (projectId) => {
  return data.find((p) => p.id === projectId);
};

export const getProjectsIdList = () => {
  return data.map((p) => p.id);
};
