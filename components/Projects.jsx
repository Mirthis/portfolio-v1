import { SectionHeader } from './SectionHeader';
import ProjectItem from './ProjectItem';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <SectionHeader title="Projects" tagline="What I have built" />
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImage={propertyImg}
            type="ReactJs"
            url="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImage={cryptoImg}
            type="ReactJs"
            url="/crypto"
          />
          <ProjectItem
            title="Netflix"
            backgroundImage={netflixImg}
            type="ReactJs"
            url="/netflix"
          />
          <ProjectItem
            title="Twitch"
            backgroundImage={twitchImg}
            type="ReactJs"
            url="/twitch"
          />
        </div>
      </div>
    </div>
  );
};
