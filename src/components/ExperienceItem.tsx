"use client";

import { motion } from "framer-motion";

import { useRef } from "react";

import Link from "next/link";

import { LiIcon } from "./LiIcon";

const ExperienceItem = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitaliza font-bold text-2xl">
          {position}&nbsp;
          {companyLink ? (
            <Link
              href={companyLink}
              target="_blank"
              className="text-primary dark:text-primaryDark capitalize"
            >
              @{company}
            </Link>
          ) : (
            `@${company}`
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time}
          {address && ` | ${address}`}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export default ExperienceItem;
