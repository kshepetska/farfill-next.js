import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import Flamingo from '../images/footer-flamingo.png';
import TagManager from 'react-gtm-module';
import Image from 'next/image';

const Modal = dynamic(() => import('./Modal'), { ssr: false });

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phoneNumber: string;
  ordersPerMonth: string;
}

const schema: ZodType<FormData> = z.object({
  fullName: z.string().nonempty({ message: 'Full name is required' }),
  businessName: z.string().nonempty({ message: 'Business name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z
    .string()
    .regex(/^\+[0-9]+$/, { message: 'Phone number must start with + and contain only numbers' })
    .min(11, { message: 'Phone number should be at least 11 characters' }),
  ordersPerMonth: z.string().nonempty({ message: 'Number of orders is required' }),
});

const formInputs: { name: keyof FormData; label: string; type: string }[] = [
  { name: 'fullName', label: 'Full Name', type: 'text' },
  { name: 'businessName', label: 'Business Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'phoneNumber', label: 'Phone Number', type: 'text' },
  { name: 'ordersPerMonth', label: 'How many orders do you ship in a month?', type: 'text' },
];

const ContactForm: React.FC = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      TagManager.initialize({ gtmId: 'GTM-XXXXXXX' });
    }
  }, []);

  const onSubmit: SubmitHandler<FormData> = () => {
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: 'formSubmission', formType: 'contactForm' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  if (!isClient) {
    return null;
  }

  return (
    <section id="join" className="py-20 bg-white relative">
      <div className="flex flex-col items-center px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-7 lg:mb-14 text-center text-accent-color mb-8">
          Contact <span className="font-extrabold">Us</span>
        </h2>
        <div className="flex flex-col lg:flex-row w-full lg:justify-center">
          <div className="lg:w-1/2 items-center self-center lg:self-start flex flex-col justify-center">
            <p className="text-center font-bold text-text-color font-raleway text-xs md:text-lg lg:text-xl lg:text-left max-w-xs md:max-w-sm lg:max-w-md mb-8 lg:mt-4 h-full flex items-center">
              We&lsquo;re here to make &apos;ship&apos; happen seamlessly. Led by the remarkable Filbert Wingrove, our team turns shipping worries into a breeze.
            </p>
          </div>
          <div className="lg:w-1/2">
            <form className="lg:max-w-lg w-full" onSubmit={handleSubmit(onSubmit)}>
              {formInputs.map((input, index) => (
                <div key={index} className="mb-4">
                  <label className="block font-raleway text-xs md:text-xl text-left text-text-color">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    {...register(input.name)}
                    className="w-full px-4 py-2 border rounded-lg transition duration-300 ease-in-out hover:border-blue-500 hover:shadow-md focus:outline-none focus:border-blue-500 focus:shadow-md"
                  />
                  {errors[input.name] && (
                    <span className="text-red-500">{errors[input.name]?.message}</span>
                  )}
                </div>
              ))}
              <button type="submit" className="w-full bg-accent-color text-white font-bold py-2 px-4 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden w-[40%] lg:block lg:absolute lg:bottom-0 lg:left-0 lg:mr-8">
        <Image
          src={Flamingo.src}
          alt="Flamingo"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default ContactForm;
