import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import ContactIcons from './ContactIcons';
import { SectionHeader } from './SectionHeader';

export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <SectionHeader title="About" tagline="Who I Am" />
          <p className="py-2 ">
            I built my first website with one of those horrible WYSISWYG tools
            in the web 1.0 era and later realized when I took a computer science
            degree how much I loved coding. I built and manged few community
            sites since then, but eventually ended up in a less technical
            career.
          </p>
          <p>
            Over the years I kept coming back to coding and web development and
            I have now descided to take this more seriously and try to turn an
            enjoyable pass-time into a job I can be passionate about.
          </p>
          <p className="py-2">
            Most recently I have been learning as much as I can about blockchain
            and web3 development while getting involved with some commnuity
            driven projects.
          </p>
          <Link href="/#projects">
            <p className="py-2  underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-md shadow-black rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};
