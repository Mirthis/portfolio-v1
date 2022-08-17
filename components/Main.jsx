import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactIcons from './ContactIcons';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-wider text-gray-600">
            Let&apos;s build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Andrea</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            I&apos;m a Full-Stack Web Engineer
          </h1>
          <p className="py-5 text-gray-600 max-w-[70%] m-auto">
            I&apos;m focused on building responsive front-end web applications
            while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <ContactIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
