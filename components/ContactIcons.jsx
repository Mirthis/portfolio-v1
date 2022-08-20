import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactIcons = ({ size = 'normal' }) => {
  const iconList = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Mirthis',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/andrea-cardinale-fullstack/',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/Mirthis',
    },
    {
      name: 'Mail',
      icon: <AiOutlineMail />,
      url: '/#contact',
      internal: true,
    },
  ];

  let classNames = `rounded-full cursor-pointer ease-in duration-300 ${
    size === 'normal' ? ' hover:scale-110 p-6' : ' hover:scale-105 p-3'
  }`;

  return (
    <>
      {iconList.map((icon) => (
        <div
          key={icon.name}
          className="rounded-full cursor-pointer ease-in duration-300 hover:scale-105 p-3 shadow-md shadow-black"
        >
          <Link href={icon.url}>
            <a target={icon.internal ? '' : '_blank'}>{icon.icon}</a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ContactIcons;
