"use client";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import Image from "next/image";
import logo from "../../asserts/logo.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName=usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Friends', path: '/friends' },
    { name: 'Woof Mail', path: '/' },
    { name: 'Fetch-Worthy Finds', path: '/fetch-worthy-finds' },
    { name: 'Featured Pups', path: '/fearured-pups' },
    { name: 'Our Pack', path: '/our-pack' },
    { name: 'Contact us', path: '/contract-us' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    // Navbar items Section
    <nav className="bg-[#FFFAF5] md:py-4 py-1  shadow-xl  fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center lg:flex-row flex-row-reverse">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden block text-right relative">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 
                      rounded-md text-gray-400 hover:text-white hover:bg-gray-700 
                      focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out "
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
          {isOpen && (
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right min-w-52 shadow-2xl rounded-2xl absolute right-0 p-1 bg-white z-20">
              <div className="relative mb-12">
                <button onClick={toggleMenu}>x</button>
                <IoPersonCircleOutline className="text-5xl text-right right-0 absolute" />
              </div>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={`${item?.path}`}
                  className="block px-3  rounded-md text-base font-medium text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                  aria-label={item.name}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Logo */}
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image alt="pic" src={logo} width={100} className="w-16 md:w-20" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex text-textPrimary font-inter font-bold leading-none text-fluid-base tracking-wide capitalize space-x-[17px] p-[10px]">
            {menuItems.map((item) => (
              <Link href={item?.path} key={item.name} className={`${pathName==item.path ? "text-[#F88D58]" :""} border-b-2 px-2 border-transparent hover:border-[#F88D58] duration-300`}>
                <li className="flex">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Profile Icon */}
        <div className="relative lg:block hidden">
          <IoPersonCircleOutline className="text-5xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
