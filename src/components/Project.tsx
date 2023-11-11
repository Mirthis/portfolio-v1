import Image from "next/image";
import Link from "next/link";

import { GithubIcon } from "./Icons";

const Project = ({
  type,
  title,
  image,
  url,
  githubUrl,
}: {
  type: string;
  title: string;
  image: string;
  url: string;
  githubUrl: string;
}) => {
  return (
    <article className="p-6 w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark relative xs:p-4">
      <div className="absolute top-0 -right-3 md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem] -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl " />

      <Link
        href={url}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={`/images/projects/${image}`}
          alt={title}
          className="w-full h-auto"
          width={1280}
          height={720}
        />
      </Link>
      <div className="w-full flex flex-col space-y-2 items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={url}
          target="_blank"
          className="hover:undeline underline-offset-2"
        >
          <h2 className=" w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className=" flex items-center space-x-4 justify-between w-full">
          <Link
            href={url}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={githubUrl} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
