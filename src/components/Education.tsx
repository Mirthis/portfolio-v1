"use client";

import { educations, experiences } from "@/data/staticData";
import { motion, useScroll } from "framer-motion";

import { useRef } from "react";

import EducationItem from "./EducationItem";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <div className="font-bold text-8xl mb-32 w-full text-center">
        {" "}
        Education
      </div>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute top-1 left-9 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {educations.map((item) => (
            <EducationItem key={item.type} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
