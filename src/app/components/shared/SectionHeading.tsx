import Image from 'next/image';
import React from 'react';

interface SectionHeadingProps {
    subHeading: string;
    heading: string;
  }
const SectionHeading: React.FC <SectionHeadingProps> = ({subHeading, heading}) => {
    return (
        <section>
            <div className='flex gap-3 items-center'>
                <Image src='/icons/serviceIcon.png' alt='service icon' width={24} height={24} />
                <p className='subHeading font-montserrat'>{subHeading}</p>
            </div>
            <h1 className='heading mt-6 font-montserrat'>{heading}</h1>
        </section>
    );
};

export default SectionHeading;
