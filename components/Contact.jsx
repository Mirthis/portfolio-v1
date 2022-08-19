import { SectionHeader } from './SectionHeader';
import ContactImg from '../public/assets/contact.jpg';
import Image from 'next/image';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import ContactIcons from './ContactIcons';

import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <SectionHeader title="Contact" tagline="Get in Touch" />
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="Contact"
                />
              </div>
              <div>
                <h2 className="py-2">Andrea Cardinale</h2>
                <p>Full-stack web engineer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <ContactIcons />
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/ ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#5651e5]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
