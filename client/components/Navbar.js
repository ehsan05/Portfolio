import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { NavLinks, NavIcons } from '@/JSON/Data';
import { useEffect, useState } from 'react';
import { handleClientScriptLoad } from 'next/script';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      scroll > 100 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  });

  const router = useRouter();
  return (
    <div
      className={`${
        scroll ? 'bg-black' : 'bg-transparent'
      } h-[10vh] w-full  text-xl fixed top-0 left-0 z-20 `}
    >
      <div className="w-full flex flex-row items-center justify-between p-4 lg:p-8 ">
        <h5 className=" font-bold text-3xl text-[#61ce70] ">
          <Link href="/">Ehsan Dev | Portfolio</Link>
        </h5>
        <div className="flex flex-row items-center ">
          <ul className="font-medium hidden md:flex items-center gap-10">
            {NavLinks.map(({ id, name, link }) => {
              return (
                <li>
                  <Link
                    key={id}
                    href={link}
                    onClick={() => {
                      setActive(name);
                    }}
                    className={`hover:text-[#61ce70] ${
                      active === name ? 'text-[#61ce70]' : 'text-[#7a7a7a]'
                    } `}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="ml-9 flex flex-row items-center gap-6">
            <Link href="https://twitter.com/ehsanellahii">
              <FaTwitter className="hover:cursor-pointer hover:text-blue-600" />
            </Link>
            <Link href="https://github.com/ehsan05">
              <FaLinkedin className="hover:cursor-pointer hover:text-blue-600" />
            </Link>
            <Link href="https://twitter.com/ehsanellahii">
              <FaGithub className="hover:cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
