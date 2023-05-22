import { SectionHeader } from './SectionHeader';
import SkillItem from './SkillItem';

export const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <SectionHeader title="Skills" tagline="What I can do" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem skillName="React" />
          <SkillItem skillName="NextJS" />
          <SkillItem skillName="Tailwind" />
          <SkillItem skillName="Node" />
          <SkillItem skillName="Typescript" />
          <SkillItem skillName="GraphQL" />
          <SkillItem skillName="PostgreSQL" />
          <SkillItem skillName="Prisma" />
          <SkillItem skillName="T3 Stack" />
          <SkillItem skillName="HTML" />
          <SkillItem skillName="CSS" />
          <SkillItem skillName="Javascript" />
          <SkillItem skillName="Material-UI" />
          <SkillItem skillName="Solidity" />
          <SkillItem skillName="Hardhat" />
          <SkillItem skillName="Github" />
        </div>
      </div>
    </div>
  );
};
