import { SectionHeader } from './SectionHeader';
import ProjectItem from './ProjectItem';
import { getProjects } from '../utils/data';
import {
  DEFAULT_PROJECT_LIST_IMAGE_HEIGHT,
  DEFAULT_PROJECT_LIST_IMAGE_WIDTH,
} from '../utils/constants';

export const Projects = () => {
  const projects = getProjects();

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <SectionHeader title="Projects" tagline="What I have built" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectItem
              key={p.id}
              name={p.name}
              backgroundImage={p.imageName}
              type={p.type}
              url={`/${p.id}`}
              imgHeight={p.imgHeigth || DEFAULT_PROJECT_LIST_IMAGE_HEIGHT}
              imgWidth={p.imgWidth || DEFAULT_PROJECT_LIST_IMAGE_WIDTH}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
