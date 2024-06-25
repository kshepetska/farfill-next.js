import React from 'react';
import Bus from '../images/bus.png';

export default function ServicesBus() {
  return (
    <section 
      className="relative bg-white py-14 md:py-16 lg:py-28 absolute bottom-0 right-0 w-full h-full bg-no-repeat bg-contain" 
      style={{ 
        backgroundImage: `url(${Bus.src})`, 
        backgroundPosition: 'right bottom', 
        backgroundSize: '50%' 
      }}
    >
      <div className="container lg:mx-auto lg:px-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 px-4 mb-8">
            <div className="p-6 rounded-lg text-left">
              <h3 className="text-4xl md:text-5xl lg:text-6xl block font-bold leading-tight mb-6 md:mb-7 lg:mb-14 text-accent-color">
                ship that actually <span className="font-extrabold block">happens</span>
              </h3>
              <p className="text-text-color font-bold text-left max-w-lg mb-4 md:mb-6">
              Our team turns shipping stress into a breeze, supporting your eCommerce needs with precision and care. Experience seamless, dependable logistics with Farfill, where ‘ship happens’ effortlessly.
              </p>
              <button className="py-2 bg-accent-color text-white font-bold px-4 rounded-lg w-full h-15 text-[26px] font-extrabold leading-[33.8px] text-center md:w-[270px] lg:w-[300px] lg:h-[70px]">
                <a href="#join">Get in <span className="font-extrabold">touch</span></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
