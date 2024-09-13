import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { GiCycling } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GrYoga } from "react-icons/gr";
import { TbSwimming } from "react-icons/tb";
import { FaHandRock } from "react-icons/fa";

import BasicComponent from './shared/BasicComponent';
import Image from 'next/image';
const serviceData = [
    { icon: FaHandRock, title: "Gym and Fitness Class", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/service/service1.png' },
    { icon: GiWeightLiftingUp, title: "Power Lifting", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/service/1.png' },
    { icon: CgGym, title: "Body Building", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/service/2.png' },
    { icon: GiCycling, title: "Cycling", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/service/5.png' },
    { icon: GrYoga, title: "Yoga and Motivation", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/service/4.png' },
    { icon: TbSwimming, title: "Swimming", description: "Information on personalized nutrition plans and counseling sessions.", button: 'Read More', iconRight: GoArrowRight, image: '/images/service/3.png' },
];
const Service2: React.FC = () => {
    return (
        <section className='max-w-[1320px] mx-auto my-10'>
            <BasicComponent subHeading='Service' heading='Services We are Offering' />
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-8 md:mx-0'>
                {serviceData.map((service, index) => (
                    <div key={index} className='hover:scale-105 transition-all duration-500 shadow-custom-light bg-white hover:bg-primary group rounded'>
                        <div className=''>
                            <Image  src={service.image} alt='service' width={424} height={230} />
                        </div>
                        <div className='relative bottom-8 mx-auto rounded-full w-16 bg-primary p-4 group-hover:bg-white'>
                            <service.icon className='text-white text-3xl group-hover:text-primary' />
                        </div>
                        <h4 className='text-center service-heading group-hover:text-white'>{service.title}</h4>
                        <p className='text-center mt-4 service-description group-hover:text-white'>{service.description}</p>
                        <div className='my-8 flex gap-2 items-center justify-center'>
                            <p className='text-center service-description group-hover:text-white'>{service.button}</p>
                            <service.iconRight className='text-xl group-hover:text-white' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Service2;
