import React from 'react';
import Background from '../images/map.svg';
import Flamingo from '../images/flamingo-header.png';

import Image from 'next/image';

export default function Header() {
  return (
    <section className="relative bg-white text-white text-center py-16 md:py-20 lg:py-24" style={{ backgroundImage: `url(${Background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container justify-center items-center flex flex-col mx-auto px-6 relative z-10">
        <h1 className="text-accent-color text-6xl md:text-7xl lg:text-9xl font-bold leading-tight mb-6 md:mb-8 lg:mb-12">
          where <span className="font-extrabold">ship</span> happens!
        </h1>
        <p className="text-text-color font-bold max-w-[440px] md:text-lg lg:text-xl font-semibold leading-normal mb-6 md:mb-8 lg:mb-10 max-w-screen-md mx-auto">
          We Magic E-commerce Orders into Unboxing Joy. We specialise in ecommerce fulfilment so that you can get on with running your business.
        </p>
        <button className="bg-accent-color text-white font-bold py-2 px-4 rounded-lg w-full md:w-[270px] lg:w-[300px] h-14 md:h-16 lg:h-18 text-xl md:text-2xl lg:text-3xl text-center">
          <a href="#join">Get in <span className="font-extrabold">touch</span></a>
        </button>
      </div>
      <Image
        src={Flamingo.src}
        alt="Flamingo"
        className="h-4/5 lg:h-[110%] w-auto translate-x-1/5 lg:translate-x-0 bottom-10 md:bottom-0 absolute right-0"
        width={1000}
        height={500}
      />
    </section>
  );
}
