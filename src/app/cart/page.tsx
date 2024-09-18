import React from 'react';
import BasicHeader from '../components/shared/BasicHeader';
import ProductCard from '../components/card/ProductCard';
import Link from 'next/link';
const products = [{ image: '/images/ShopCard/shopCardImage.png', name: 'impact whey protein', price: 80.89, size: 1 }, { image: '/images/ShopCard/shopCardImage.png', name: 'impact whey protein', price: 80.89, size: 1 }];
const Page: React.FC = () => {
    return (
        <section className='px-8 lg:px-0'>
            <BasicHeader heading='shopping cart' subHeading='Home' />
            <div className='max-w-[1320px] mx-auto'>
                <p className='shop-heading mt-[140px] font-montserrat'>shopping cart</p>
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-[20px] lg:space-x-[136px] mt-14'>
                    <div className='w-full md:w-2/3'>
                        {
                            products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    size={product.size}
                                    
                                />
                            ))
                        }
                        <div className='border-[#D9D9D9] border-t pt-10'>
                            <p className='font-medium text-[16px] text1'>Apply Coupon</p>
                            <div className='flex flex-col w-full md:flex-row items-center space-x-0 lg:space-x-3 md:justify-between mt-6'>
                                <div className='flex w-full flex-col md:flex-row items-center space-x-0 md:space-x-6'>
                                    <input className='px-5 py-4 w-full md:w-[50%] lg:w-[40%] border rounded' placeholder='enter your coupon code *' type="text" />
                                    <button className='mt-3 md:mt-0 card-button w-full md:w-[35%] lg:w-[20%]'>Apply</button>
                                </div>
                                <button className='mt-3 md:mt-0 card-button w-full md:w-[25%] lg:w-[20%]'>Update</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8 md:mt-0 w-full md:w-1/3 '>
                        <div className='rounded p-6 border border-[#D9D9D9]'>
                            <p className='text-1 font-bold text-[28px]'>Total Card</p>
                            <div className='mt-14 text-[18px] font-light text-[#534C4C]'>
                                <div className='flex justify-between pb-[18px] border-[#D9D9D9] border-b'>
                                    <p>SubTotal</p>
                                    <p>$161.78</p>
                                </div>
                                <div className='flex justify-between py-[18px] border-[#D9D9D9] border-b'>
                                    <p>Tax</p>
                                    <p>$10.00</p>
                                </div>
                                <div className='flex justify-between py-[18px] border-[#D9D9D9] border-b'>
                                    <p className='font-semibold text1'>Total</p>
                                    <p>$171.78</p>
                                </div>
                                <p className='mt-4'>shopping cost calculate at checkout *</p>
                            </div>
                        </div>
                       <Link href='/checkout'> <button className='process-button'> Proceed to checkout</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;