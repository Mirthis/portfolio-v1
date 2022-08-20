import Head from 'next/head';
import Image from 'next/image';
import { About } from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andrea - Full-stack engineer</title>
        <meta
          name="description"
          content="Andrea Cardinale - Profile and Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
