"use client";

import { experiences } from "@/data/staticData";
import { motion, useScroll } from "framer-motion";

import { useRef } from "react";

import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <div className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </div>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-2 left-9 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experiences.map((item) => (
            <ExperienceItem key={item.company} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
