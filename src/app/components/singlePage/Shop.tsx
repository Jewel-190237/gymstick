import React from 'react';
import { RiMenu2Fill } from "react-icons/ri";


const Shop:React.FC = () => {
    return (
        <section className='my-10'>
            <div className='max-w-[1320px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 py-[22px] rounded'>
                    <div className='flex gap-6 text-white items-center bg-primary'>
                        <RiMenu2Fill className='ml-6' />
                        <p className='capitalize text-[16px] font-medium'>brows all categories</p>
                    </div>
                    <div className='col-span-2'></div>
                    <div></div>

                </div>
            </div>  
        </section>
    );
};

export default Shop;