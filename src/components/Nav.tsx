import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../images/logo.png';
import Map from '../images/map.svg';

const navLinks = [
  { href: '#about', label: 'about us' },
  { label: 'use cases' },
  { label: 'pricing' },
  { label: 'technology' },
  { href: '#services', label: 'services' },
  { label: 'faqs' },
  { href: '#join', label: 'join the flock' },
  { label: 'filbert wingrove' },
];

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="relative w-[140px] h-[45px] md:w-[180px] md:h-[58px]">
          <div className="w-full h-full transition-transform transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src={logo}
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="block lg:hidden rounded-sm bg-blue-800 text-white flex items-center justify-center h-14 w-14 cursor-pointer"
        >
          <div className="relative">
            <div className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white rounded-full my-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
        <nav className={`lg:flex w-full justify-end lg:space-x-4 ${isMenuOpen ? 'fixed top-20 left-0 right-0 bottom-0 bg-white z-50 flex flex-col justify-center items-center' : 'hidden'}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`relative text-gray-800 hover:text-blue-800 transition-colors duration-300 ease-in-out ${isMenuOpen ? 'text-center pt-4' : ''} after:block after:h-[2px] after:bg-blue-800 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
