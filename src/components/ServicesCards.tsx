import React from 'react';
import Car from '../images/car.svg';
import Boxes from '../images/boxes.svg';
import Plane from '../images/plane.svg';

import Image from 'next/image';

const servicesData = [
  {
    src: Car.src,
    alt: "Car",
    title: (
      <>
        <span className="font-extrabold block">direct to consumer</span> fulfilment
      </>
    ),
    description: (
      <>
        Launching a D2C brand? We’ve got your back! Our onboarding team will walk you through our system and help you get your first products shipped to us.
        <br/><br/>
        Your items are carefully scanned at every step, from arrival at our warehouse to delivery to your customers, ensuring a smooth and efficient process.
      </>
    )
  },
  {
    src: Boxes.src,
    alt: "Boxes",
    title: (
      <>
        <span className="font-extrabold lg:block">b2b</span> fulfilment
      </>
    ),
    description: (
      <>
        We understand the challenges of working with retailers and marketplaces for B2B fulfilment. Whether it’s preparing for Amazon, Asda, Boots, or other partners, we’ve got you covered.
        <br/><br/>
        From Amazon Prep to palletising for brick-and-mortar stores, we’re here to ensure your products are ready for all your business needs.
      </>
    )
  },
  {
    src: Plane.src,
    alt: "Plane",
    title: (
      <>
        <span className="font-extrabold">freight</span> fulfilment
      </>
    ),
    description: (
      <>
        At Farfill, we handle all your freight needs with expertise and efficiency. Whether it’s air freight, road freight, or sea freight, we’ve got you covered.
        <br/><br/>
        Our comprehensive services ensure your shipments are managed smoothly and delivered on time, every time.
      </>
    )
  }
];

export default function ServicesCards() {
  return (
    <>
      <section id='services' className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tablet:mb-7 lg:mb-14 text-center text-accent-color">why <span className="font-extrabold">farfill?</span></h2>
          <div className="flex flex-col max-w-[1300px] mx-auto lg:grid lg:grid-cols-2 lg:grid-rows-2 flex-wrap justify-center -mx-4 lg:px-22">
            {servicesData.map((service, index) => (
              <div key={index} className="w-full px-4 mb-8 transition-transform transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="p-6 bg-white h-full shadow-lg rounded-lg flex flex-col justify-center items-start tablet:flex-row tablet:gap-6">
                  <Image 
                    src={service.src} 
                    alt={service.alt} 
                    className="mb-4 w-[70px] h-[70px] tablet:w-[78.5px] tablet:h-[78.5px] lg:w-[100px] lg:h-[100px]" 
                    width={100}
                    height={100}
                  />
                  <div className='services-text-left'>
                  <h3 className="text-2xl tablet:text-4xl font-bold mb-2.5 tablet:mb-4 text-left text-accent-color">
                    {service.title}
                  </h3>
                    <p className="text-left font-bold">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="w-full text-center flex flex-col justify-center items-center tablet:flex-row tablet:gap-6">
              <button className="py-2 bg-accent-color text-white font-bold px-4 rounded-lg w-full h-15 text-[26px] font-extrabold leading-[33.8px] text-center tablet:w-[270px] lg:w-[300px] lg:h-[70px]">
                <a href="#join">Get in <span className="font-extrabold">touch</span></a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
