import Image from "next/image";
import Link from "next/link";

import { GithubIcon } from "./Icons";

const FeaturedProject = ({
  type,
  title,
  summary,
  image,
  url,
  githubUrl,
}: {
  type: string;
  title: string;
  summary: string;
  image: string;
  url: string;
  githubUrl?: string;
}) => {
  return (
    <article className="p-12 w-full flex lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl  items-center justify-between xs:p-4 rounded-3xl border rounded-br-2xl border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl relative">
      <div className="absolute top-0 -right-3 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light   rounded-br-3xl  " />

      <Link
        href={url}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={`/images/projects/${image}`}
          alt={title}
          className="w-full h-auto"
          width={1280}
          height={720}
          priority
          sizes="(max-width: 768px) 100vw, (max-wdith: 1280px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col space-y-2 items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={url}
          target="_blank"
          className="hover:undeline underline-offset-2"
        >
          <h2 className=" w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="font-medium sm:text-sm">{summary}</p>
        <div className=" flex items-center space-x-4">
          {githubUrl && (
            <Link href={githubUrl} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
          <Link
            href={url}
            target="_blank"
            className="sm:px-4 sm:text-base rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold"
          >
            Visit the project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
