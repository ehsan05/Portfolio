import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Work from './Work';
import Contact from './Contact';
const Home = () => {
  return (
    <>
      <div className="max-w-[1250px] mx-[3rem]">
        <Navbar />
        <About />
        <Resume />
        <Work />
        <Contact />
      </div>
    </>
  );
};

export default Home;
