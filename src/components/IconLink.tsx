"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import { IconType } from "./Icons";

const MotionLink = motion(Link);

const IconLink = ({
  href,
  Icon,
  className = "",
}: {
  href: string;
  Icon: IconType;
  className?: string;
}) => {
  return (
    <MotionLink
      href={href}
      className={`${className} `}
      whileHover={{ y: -2 }}
      target="_blank"
      whileTap={{ scale: 0.9 }}
    >
      <Icon />
    </MotionLink>
  );
};

export default IconLink;
