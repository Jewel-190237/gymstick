import React from 'react';
import BasicHeader from '../shared/BasicHeader';
import Image from 'next/image';
import { Rate } from 'antd';

const Wheyprotein: React.FC = () => {
    return (
        <section>
            <BasicHeader heading='Whey Protein' subHeading='Home' />
            <div className='max-w-[1320px] mx-auto mt-[140px] text1'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='flex-1'>
                        <Image src='/images/ShopCard/shopCardImage.png' alt="shop" width={648} height={640} className="" />
                    </div>
                    <div className='flex-1'>
                        <div className='flex items-center justify-between'>
                            <p className='font-normal text-[18px]'>Protine Provider</p>
                            <div className='flex items-center gap-5'>
                                <Rate className='text-primary' defaultValue={5} />
                                <p className='text-[16px] font-normal'>Review(3)</p>
                            </div>
                        </div>
                        <h2 className='mt-6 font-semibold text-[28px] capitalize'>impact whey protein</h2>
                        <div className='mt-6 flex items-center space-x-6 text-[18px] font-semibold'>
                            <p className='text-primary'> <del>$120.99</del> </p>
                            <p>$80.99</p>
                            <p className='text-[16px] font-normal capitalize'>In stock</p>
                        </div>
                        <p className='mt-[40px] text-[18px] font-normal'>Description</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Wheyprotein;