import Link from 'next/link';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className="font-Roboto text-[#7a7a7a] pt-12 text-xl">
      <div className="flex flex-row items-center justify-between">
        <h5 className=" font-normal text-3xl">
          <Link href="/">Ehsan.</Link>
        </h5>
        <div className=" hidden md:flex flex-row items-center ">
          <ul className="flex flex-row items-center space-x-8">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#resume">Resume</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
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
