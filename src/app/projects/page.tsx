import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import { getMetaDescription, getPageTitle } from "@/lib/utils";

import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: getPageTitle("Projects"),
  description: getMetaDescription(),
};

const ProjectsPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full mb-16">
      {/* TODO: Review purpose and use of container */}
      <Container className="pt-16">
        {/* TODO: Update text and image */}
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
        <div className="grid grid-cols-12 gap-24 gap-y-32">
          <div className="col-span-12">
            <FeaturedProject
              image="crypto-screener-cover-image.jpg"
              title="Crypto Screener Application"
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
          It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
          local currency."
              type="Featured Project"
              url="/"
              githubUrl="/"
            />
          </div>
          <div className="col-span-6">
            <Project
              image="crypto-screener-cover-image.jpg"
              title="Crypto Screener Application"
              type="Featured Project"
              url="/"
              githubUrl="/"
            />
          </div>
          <div className="col-span-6">
            <Project
              image="crypto-screener-cover-image.jpg"
              title="Crypto Screener Application"
              type="Featured Project"
              url="/"
              githubUrl="/"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ProjectsPage;
