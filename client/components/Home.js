import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Resume from './Resume';
import Work from './Work';
import Contact from './Contact';
const Home = () => {
  return (
    <>
      <div className="max-w-[1280px] mx-[1rem] md:mx-[3rem] relative font-Roboto">
        <div className=''>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Resume />
        <Work />
        <Contact />
      </div>
    </>
  );
};

export default Home;
