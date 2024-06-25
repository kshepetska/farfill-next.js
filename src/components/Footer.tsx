import React from 'react';
import Image from 'next/image';

import Facebook from '../images/social/facebook.png';
import Twitter from '../images/social/twiter.png';
import Instagram from '../images/social/instagram.png';
import LinkedIn from '../images/social/linkedin.png';
import TikTok from '../images/social/tiktok.png';

import Logo from '../images/logo-white.png';
import Background from '../images/map-footer.svg';

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

const socialLinks = [
  { href: 'https://www.facebook.com', imgSrc: Facebook, alt: 'Facebook' },
  { href: 'https://www.twitter.com', imgSrc: Twitter, alt: 'Twitter' },
  { href: 'https://www.instagram.com', imgSrc: Instagram, alt: 'Instagram' },
  { href: 'https://www.linkedin.com', imgSrc: LinkedIn, alt: 'LinkedIn' },
  { href: 'https://www.tiktok.com', imgSrc: TikTok, alt: 'TikTok' },
];

export default function Footer() {
  return (
    <footer className="bg-accent-color text-white py-12 md:py-16 lg:py-20" style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container flex flex-col items-center mx-auto px-6 text-center">
      <Image
        src={Logo.src}
        alt="Farfill Logo"
        width={240}
        height={60}
        className="w-36 md:w-44 lg:w-60 h-auto pb-5 md:py-10 lg:py-14 transition-transform transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out"
      />
        <div className="flex justify-center gap-y-5 space-x-4 flex-wrap mb-5 md:mb-10 lg:mb-14">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative inline-block text-gray-200 hover:text-white transition-colors duration-300 ease-in-out whitespace-nowrap before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white before:transform before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out hover:before:transform hover:before:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 p-2 rounded-lg border border-white mb-5 md:mb-10 lg:mb-14"
            >
              <Image
                src={social.imgSrc}
                alt={social.alt}
                width={32}
                height={32}
                className="w-3 md:w-3.5 lg:w-4"
              />
            </a>
          ))}
        </div>
        <p className="mt-4">© 2023 All Rights Reserved. Farfill (Fulfillment Partners LTD - Companies House: 13464361)</p>
      </div>
    </footer>
  );
}
