import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ContactIcons from './ContactIcons';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('bg-slate-900');
  const [linkColor, setLinkColor] = useState('text-slate-400');

  const router = useRouter();

  const setTransparentNavBar = (transparent) => {
    if (transparent) {
      setNavBg('bg-transparent');
      setLinkColor('text-slate-400');
    } else {
      setNavBg('bg-slate-900');
      setLinkColor('text-slate-400');
    }
  };

  useEffect(() => {
    setTransparentNavBar(router.asPath.startsWith('/project'));
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setTransparentNavBar(false);
      } else {
        setShadow(false);
        if (router.asPath.startsWith('/project')) {
          setTransparentNavBar(true);
        }
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const showNavBar = () => {
    setNav(true);
  };

  const hideNavBar = () => {
    setNav(false);
  };

  return (
    <div
      className={`${
        shadow
          ? 'fixed w-full h-20 shadow-md shadow-black z-[100]'
          : 'fixed w-full h-20 z-[100]'
      }  ${navBg}`}
    >
      <div className="flex justify-between items-center max-w-[1240px] h-full px-2 2xl:px-16 mx-auto">
        <Link href="/">
          <a>
            <Image
              src="/assets/navLogo.png"
              alt="logo"
              width="71"
              height="50"
            />
          </a>
        </Link>
        <div>
          <ul className={`hidden md:flex ${linkColor}`}>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-slate-400">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b border-slate-400">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-slate-400">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-slate-400">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-slate-400">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={showNavBar} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-900 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" passHref>
                <a>
                  <Image
                    src="/assets/navLogo.png"
                    alt="logo"
                    width="64"
                    height="45"
                  />
                </a>
              </Link>
              <div
                onClick={hideNavBar}
                className="rounded-full shadow-lg shadow-black p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-slate-400 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={hideNavBar} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={hideNavBar} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={hideNavBar} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={hideNavBar} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={hideNavBar} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-sky-400">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] ">
                <ContactIcons size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
