import Image from 'next/image';
import { SKILLS_ICON_PATH } from '../utils/constants';

const SkillItem = ({ skillName }) => {
  return (
    <div className="p-6 shadow-md shadow-black rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={`${SKILLS_ICON_PATH}${skillName}.png`}
            alt={skillName}
            width="64"
            height="64"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{skillName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
