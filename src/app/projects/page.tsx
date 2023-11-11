import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import TransitionEffect from "@/components/TransitionEffect";
import { projectsData } from "@/data/staticData";
import { getPageMetadata } from "@/lib/utils";

import { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("PRojects");

const ProjectsPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16">
        {/* TODO: Review purpose and use of container */}
        <Container className="pt-16">
          {/* TODO: Update text and image */}
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject {...projectsData["smartapply"]} />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project {...projectsData["coverletterai"]} />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project {...projectsData["perfi"]} />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project {...projectsData["poknft"]} />
            </div>
            <div className="col-span-6 sm:col-span-12 ">
              <Project {...projectsData["cryptoverse"]} />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default ProjectsPage;
