import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ContactIcons = ({ size = 'normal' }) => {
  const iconList = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://aaaa',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://aaaa',
    },
    {
      name: 'Mail',
      icon: <AiOutlineMail />,
      url: 'https://aaaa',
    },
    {
      name: 'Person',
      icon: <BsFillPersonLinesFill />,
      url: 'https://aaaa',
    },
  ];

  let classNames = `rounded-full shadow-lg shadow-gray-400 cursor-pointer  ease-in duration-300 ${
    size === 'normal' ? ' hover:scale-110 p-6' : ' hover:scale-105 p-3'
  }`;

  return (
    <>
      {iconList.map((icon) => (
        <div key={icon.name} className={classNames}>
          {icon.icon}
        </div>
      ))}
    </>
  );
};

export default ContactIcons;
