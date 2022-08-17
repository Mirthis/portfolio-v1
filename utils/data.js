import data from '../data/projects.json';

export const getProjectData = (projectName) => {
  return data.find((p) => p.name === projectName);
};

export const getProjectsNameList = () => {
  return data.map((p) => p.name);
};
