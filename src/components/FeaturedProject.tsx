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
  githubUrl: string;
}) => {
  return (
    <article className="p-12 w-full flex items-center justify-between rounded-3xl border rounded-br-2xl border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light   rounded-br-3xl " />

      <Link
        href={url}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
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
      <div className="w-1/2 flex flex-col space-y-2 items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={url}
          target="_blank"
          className="hover:undeline underline-offset-2"
        >
          <h2 className=" w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="font-medium ">{summary}</p>
        <div className=" flex items-center space-x-4">
          <Link href={githubUrl} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={url}
            target="_blank"
            className="rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold"
          >
            Visit the project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
