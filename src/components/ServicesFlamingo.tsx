import Flamingo from '../images/flamingo-services.png';

import Image from 'next/image';

export default function ServicesFlamingo() {
    return (
      <section id='about' className="bg-accent-color py-14 md:py-16 lg:py-28 relative">
        <div className="flex flex-wrap h-full">
          <div className="hidden lg:flex lg:w-1/2 px-4 absolute top-0 bottom-0 items-center justify-center z-10">
            <Image src={Flamingo.src} alt="Logistics" className="w-full h-auto" width={1000} height={500}/>
          </div>
          <div className="w-full px-4 mb-8">
            <div className="p-6 rounded-lg text-center md:text-left md:pr-12 lg:pl-[50%]">
              <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-8">no need to stand on one leg. with us, <span className="font-extrabold">ship is effortless.</span></h3>
              <p className='text-white font-bold mb-4 md:mb-8'>Over the last seven years, we have grown from being the epicentre of eCommerce in the Middle East to expanding our reach globally. Farfill now proudly serves the UAE, Ireland, and the UK, providing top-notch fulfilment services.</p>
              <button className="bg-white text-accent-color font-bold py-2 px-4 rounded-lg w-full h-15 text-[26px] font-extrabold leading-[33.8px] text-center md:w-[270px] lg:w-[300px] lg:h-[70px]">
                <a href="#join">Get in <span className="font-extrabold">touch</span></a>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}
