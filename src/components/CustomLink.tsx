"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathName = usePathname();

  return (
    <Link href={href} className={`relative group ${className}`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0  bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
