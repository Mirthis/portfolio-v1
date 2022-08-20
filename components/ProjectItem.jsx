import Image from 'next/image';
import Link from 'next/link';
import { PROJECT_IMAGE_PATH } from '../utils/constants';

const ProjectItem = ({
  name,
  backgroundImage,
  type,
  id,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-sky-600 to-sky-400 ">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={`${PROJECT_IMAGE_PATH}${backgroundImage}`}
        alt={name}
        width={imgWidth}
        height={imgHeight}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-slate-200 tracking-wider text-center">
          {name}
        </h3>
        <p className="pb-4 pt-2 text-slate-200 text-center">{type}</p>
        <Link href={`/projects/${id}`}>
          <p className="text-center py-3 rounded-lg bg-slate-900  font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
