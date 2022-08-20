import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { getProjectData, getProjectsIdList } from '../../utils/data';
import { PROJECT_IMAGE_PATH } from '../../utils/constants';

const Project = ({ projectData }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-slate-500/50 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={`${PROJECT_IMAGE_PATH}${projectData.imageName}`}
          alt="property"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{projectData.name}</h2>
          <h3>{projectData.subTitle}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          {projectData.description.overview.map((d, i) => (
            <p key={`overview-${i}`}>{d}</p>
          ))}
          {projectData.description.features && (
            <>
              <h3 className="mt-2">Features</h3>
              <ul className="ml-6 list-disc">
                {projectData.description.features.map((f, i) => (
                  <li key={`features-${i}`} className="cursor-text">
                    {f}
                  </li>
                ))}
              </ul>
            </>
          )}
          {projectData.description.techFeatures && (
            <>
              <h3 className="mt-2">Tech Features</h3>
              <ul className="ml-6 list-disc">
                {projectData.description.techFeatures.map((f, i) => (
                  <li key={`tech-features-${i}`} className="cursor-text">
                    {f}
                  </li>
                ))}
              </ul>
            </>
          )}
          {projectData.demoUrl && (
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href={projectData.demoUrl}>
                <a target="_blank">Demo</a>
              </Link>
            </button>
          )}
          {projectData.codeUrl && (
            <button className="px-8 py-2 mt-4">
              <Link href={projectData.codeUrl} target="_blank">
                <a target="_blank">Code</a>
              </Link>
            </button>
          )}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-black rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {projectData.technologies.map((tech) => (
                <p key={tech} className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const list = getProjectsIdList();
  const paths = list.map((l) => ({ params: { projectId: l } }));
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const projectData = getProjectData(context.params.projectId);
  return {
    props: {
      projectData,
    },
  };
}

export default Project;
