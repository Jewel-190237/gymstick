import React from 'react';

interface PricingCardProps {
    name: string;
    price: number;
    deadLine: string;
    plan: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, deadLine, plan }) => {
    return (
        <section className='hover:scale-105 transition-all duration-500 group bg-white hover:bg-primary border rounded'>
            <div className='text-center font-montserrat text-2xl border font-bold text-primary py-8 capitalize group-hover:text-white'>{name}</div>
            <div className='py-6 border border-t-0 font-montserrat mx-auto text-center group-hover:text-white'>
                <p className='font-bold text-[32px] '>{price}</p>
                <p className='capitalize mt-4'>/ {deadLine}</p>
            </div>
            <div className='py-10 border border-t-0'>
                <ul className='group-hover:text-white text-[20px] font-normal capitalize list-none pl-12 md:pl-20'>
                    {plan.map((item, index) => (
                        <li key={index} className='flex items-center space-x-2'>
                            <span className='w-2 h-2 bg-black group-hover:bg-white rounded-full'></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className='my-10 mx-auto text-center'>
                    <button className=' px-8 py-4 rounded text-white bg-primary group-hover:bg-white group-hover:text-primary'>Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default PricingCard;
