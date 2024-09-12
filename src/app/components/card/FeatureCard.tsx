import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
  return (
    <div className='bg-white hover:bg-primary max-w-[312px] rounded-[4px] hover:text-white group shadow-custom-light'>
      <div className='py-12 flex flex-col text-center items-center'>
        <div className='mb-[30px] w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-custom-light bg-white'>
          <div className=' flex items-center justify-center p-3'>
            <Image
              src={`/images/features/${image}`}
              width={50}  // Set the image width explicitly
              height={50} // Set the image height explicitly
              alt={title}
              className='object-cover' // This will make the image respect the container size
            />
          </div>
        </div>

        <div className='space-y-6 pb-16'>
          <h1 className='text-xl font-semibold'>{title}</h1>
          <h3 className='text-[16px]'>{description}</h3>
        </div>
        <div className='p-4 rounded-full bg-primary group-hover:bg-white'>
          <FaArrowRight className='text-white group-hover:text-primary' />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
