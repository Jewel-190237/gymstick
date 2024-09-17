import React from 'react';
import BasicHeader from '../components/shared/BasicHeader';
import ProductCard from '../components/card/ProductCard';
const products = [{ image: '/images/ShopCard/shopCardImage.png', name: 'impact whey protein', price: 80.89, size: 1, quantity: 3 }, { image: '/images/ShopCard/shopCardImage.png', name: 'impact whey protein', price: 80.89, size: 1, quantity: 3 }];
const Page: React.FC = () => {
    return (
        <section>
            <BasicHeader heading='shopping cart' subHeading='Home' />
            <div className='max-w-[1320px] mx-auto'>
                <p className='shop-heading font-montserrat'>shopping cart</p>
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-[90px] lg:space-x-[136px] mt-14'>
                    <div className='w-2/3'>
                        {
                            products.map((product, index) => (
                                <ProductCard
                                    key={index}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    size={product.size}
                                    quantity={product.quantity}
                                />
                            ))
                        }
                        <div className='border-[#D9D9D9] border-t pt-10'>
                            <p className='font-medium text-[16px] text1'>Apply Coupon</p>
                            <div className='flex items-center space-x-3 justify-between mt-6'>
                                <div className='flex space-x-6'>
                                    <input className='p-[20px] border rounded' placeholder='enter your coupon code *' type="text" />
                                    <button className='card-button'>Apply</button>
                                </div>
                                <button className='card-button'>Update card</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 '>
                        <div className='max-h-[365px] rounded p-6 border border-[#D9D9D9]'>
                            <p className='text-1 font-bold text-[28px]'>Total Card</p>
                            <div className='mt-14 text-[18px] font-light text-[#534C4C]'>
                                <div className='flex justify-between pb-[18px] border-[#D9D9D9] border-b'>
                                    <p>SubTotal</p>
                                    <p>&161.78</p>
                                </div>
                                <div className='flex justify-between py-[18px] border-[#D9D9D9] border-b'>
                                    <p>Tax</p>
                                    <p>&10.00</p>
                                </div>
                                <div className='flex justify-between py-[18px] border-[#D9D9D9] border-b'>
                                    <p className='font-semibold text1'>Total</p>
                                    <p>&171.78</p>
                                </div>
                                <p className='mt-4'>shopping cost calculate at checkout *</p>
                            </div>
                        </div>
                        <button className='process-button'> Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;