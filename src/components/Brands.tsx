import React from 'react';
import Image from 'next/image';
import HumantraImage from '../images/brands/humantra.png';
import KappaImage from '../images/brands/kappa.png';
import MillieImage from '../images/brands/millie.png';
import PippetaImage from '../images/brands/pippeta.png';
import RevlonImage from '../images/brands/revlon.png';
import SkullImage from '../images/brands/skull.png';
import ValuchiImage from '../images/brands/valuchi.png';

export default function Brands() {
  const brands = [
    { src: PippetaImage, alt: 'Pippeta' },
    { src: KappaImage, alt: 'Kappa' },
    { src: HumantraImage, alt: 'Humantra' },
    { src: SkullImage, alt: 'Skull' },
    { src: MillieImage, alt: 'Millie Modelli' },
    { src: RevlonImage, alt: 'Revlon' },
    { src: ValuchiImage, alt: 'Valuchi' }
  ];

  return (
    <section className="bg-accent-color py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-2 text-center">
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-7 lg:mb-14">
          brands that love working <span className="font-extrabold">with farfill</span>
        </h2>
        <div className="flex flex-col gap-7 lg:flex-row">
          <div className='grid grid-cols-4 gap-7'>
          {brands.slice(0, 4).map((brand, index) => (
            <div key={index} className="flex justify-center items-center w-full mb-4 hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className='w-full'>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  layout="responsive"
                  className="object-contain w-full rounded-lg"
                />
              </div>
            </div>
          ))}</div>
          <div className='grid grid-cols-3 gap-7'>
          {brands.slice(4).map((brand, index) => (
            <div key={index + 4} className="flex justify-center w-full items-center mb-4 hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className='w-full'>
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  layout="responsive"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
