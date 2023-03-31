import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
const Navbar = () => {
  return (
    <div className=" text-[#7a7a7a] pt-12 text-xl">
      <div className="flex flex-row items-center justify-between">
        <h5 className=" font-normal lg:text- text-3xl text-[#61ce70]">
          <Link href="/">Ehsan.</Link>
        </h5>
        {/* <div className='md:hidden text-4xl'><HiOutlineMenuAlt3/></div> */}
        <div className="flex flex-row items-center ">
          <ul className="hidden md:flex flex-row items-center space-x-8">
            <li className="hover:text-[#61ce70]">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-[#61ce70]">
              <Link href="#resume">Resume</Link>
            </li>
            <li className="hover:text-[#61ce70]">
              <Link href="#work">Work</Link>
            </li>
            <li className="hover:text-[#61ce70]">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div className="ml-9 flex flex-row items-center space-x-6 text-white ">
            <Link href="https://twitter.com/ehsanellahii">
              <FaTwitter className="hover:cursor-pointer hover:text-blue-600" />
            </Link>
            <FaLinkedin className="hover:cursor-pointer hover:text-blue-600" />
            <FaGithub className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
