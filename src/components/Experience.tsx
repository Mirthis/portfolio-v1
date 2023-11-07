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
      <div className="font-bold text-8xl mb-32 w-full text-center">
        {" "}
        Experience
      </div>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-2 left-9 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {experiences.map((item) => (
            <ExperienceItem key={item.company} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
