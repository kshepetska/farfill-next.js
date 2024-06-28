import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Pippeta from '../images/brands/pippeta-black.png';
import Millie from '../images/brands/millie-black.png';
import Humantra from '../images/brands/humantra-black.png';
import Image from 'next/image';

const testimonials = [
  {
    name: "Aimee Cestrone - Founder",
    text: "Very happy with the professional service from Farfill. We love the fact that they feel like an extension of the team, which was an important factor for us as a company. They go above and beyond to ensure that our needs are met and we are excited to watch the brand grow with them.",
    link: "https://pippeta.com/",
    linkText: "pippeta.com",
    logo: Pippeta,
  },
  {
    name: "Millie Modelli - CEO",
    text: "Delegating all the shipping and logistics has been a complete game changer for my business, a huge task for e-commerce companies like mine. Freeing up that time has allowed us to concentrate on other areas whilst giving us space to scale. Thanks farfill!",
    link: "https://milliemodelli.com/",
    linkText: "milliemodelli.com",
    logo: Millie,
  },
  {
    name: "Charlie Wright - Founder",
    text: "I've worked with Farfill across various brands for the last 5 years and I've continued to be impressed by the output, but more importantly the team. From when we started, doing 100's of orders a month, to now doing 10,000+ orders per month, the attention to detail and communication has been a crucial component in scaling Humantra.",
    link: "https://humantra.co.uk/",
    linkText: "humantra.co.uk",
    logo: Humantra,
  },
];

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    className="custom-next-button flex items-center justify-center -bottom-12 w-10 h-10 transform bg-transparent border border-white rounded-md shadow-lg z-10 hover:bg-white"
    onClick={onClick}
  >
    <span className="text-white text-lg transition-colors duration-300 hover:text-blue-800">{'>'}</span>
  </button>
);

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    className="custom-prev-button flex items-center justify-center -bottom-12 w-10 h-10 transform bg-transparent border border-white rounded-lg shadow-lg z-10 hover:bg-white"
    onClick={onClick}
  >
    <span className="text-white text-lg transition-colors duration-300 hover:text-blue-800">{'<'}</span>
  </button>
);

const Testimonials: React.FC = () => {

  return (
    <section className="bg-[#1D1D8F] py-20">
      <div className="container mx-auto px-6 text-center relative">
        <h2 className="text-white text-4xl font-bold mb-6">
          flap, don&apos;t flop, join the <span className="font-extrabold">farfill</span> <span className="text-orange-color underline font-bold">flock.</span>
        </h2>
        <div className="hidden wide:block">
          <div className="grid grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-left relative hover:scale-[1.05] transition-transform duration-300 ease-in-out">
                <h4 className="mt-4 mb-4 text-accent-color font-bold text-2xl">{testimonial.name}</h4>
                <p className="text-text-color font-bold font-raleway text-left text-base text-text-color mb-20 h-40">{testimonial.text}</p>
                <div className="flex items-center justify-between mb-4">
                  <a
                    href={testimonial.link}
                    className="text-blue-800 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {testimonial.linkText}
                  </a>
                  <Image
                    src={testimonial.logo.src}
                    alt={`${testimonial.name} logo`}
                    className="h-8 w-auto"
                    width={1000}
                    height={testimonial.logo.height}
                  />
                </div>
                <span className="absolute left-0 bottom-0 bg-[#FECB04] h-3 w-full block rounded-b-lg"></span>
              </div>
            ))}
          </div>
        </div>
        <div className="wide:hidden relative">
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: '.custom-next-button',
              prevEl: '.custom-prev-button',
            }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className='w-full' key={index}>
                <div className="pb-5">
                  <div className="bg-white mt-2.5 shadow-lg rounded-lg text-left p-5 relative mx-2 hover:scale-[1.05] transition-transform duration-300 ease-in-out">
                    <h4 className="mt-4 mb-2.5 md:mb-4 font-bold text-accent-color text-xl text-accent-color">{testimonial.name}</h4>
                    <p className="text-text-color font-bold font-raleway text-left text-xs text-text-color md:text-sm mb-20 md:h-28">{testimonial.text}</p>
                    <div className="flex items-center justify-between mb-6 md:mb-8">
                      <a
                        href={testimonial.link}
                        className="text-blue-800 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {testimonial.linkText}
                      </a>
                      <Image
                        src={testimonial.logo.src}
                        alt={`${testimonial.name} logo`}
                        className="h-8 w-auto"
                        width={1000}
                        height={testimonial.logo.height}
                      />
                    </div>
                    <span className="absolute left-0 bottom-0 bg-[#FECB04] h-3 w-full block rounded-b-lg"></span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='flex justify-center items-center gap-4'>
            <CustomPrevArrow />
            <CustomNextArrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
