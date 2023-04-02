import Image from 'next/image';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Contact from './Contact';
const Home = () => {
  return (
    <>
      <div className="max-w-[1280px] w-full px-[1rem] md:mx-[3rem] relative font-Roboto text-white">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Contact />
      </div>
    </>
  );
};

export default Home;
