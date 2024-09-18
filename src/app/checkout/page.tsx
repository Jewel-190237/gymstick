import React from 'react';
import BasicHeader from '../components/shared/BasicHeader';
import Link from 'next/link';
import CheckOutCard from '../components/card/CheckOutCard';
const products = [{ image: '/images/ShopCard/shopCardImage.png', name: 'impact whey protein', price: 80.89, size: 1, quantity: 3 }, { image: '/images/ShopCard/shopCardImage.png', name: 'impact whey protein', price: 80.89, size: 1, quantity: 3 }];
const page: React.FC = () => {
    return (
        <section className='px-8 md:px-0'>
            <BasicHeader heading='check out' subHeading='home' />
            <div className='max-w-[1320px] mx-auto'>
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-[90px] lg:space-x-[136px] mt-[140px]'>
                    <div className='w-full md:w-2/3'>
                        <p className='shop-heading font-montserrat'>shopping cart</p>
                        <div className='mt-16 '>
                            <form className='space-y-6 '>
                                <div className='flex flex-col md:flex-row space-x-6'>
                                    <div className='w-full'>
                                        <label htmlFor="fName">First Name</label> <br />
                                        <input name='fName' className='w-full border border-[#D9D9D9] p-5 mt-3 rounded' placeholder='First Name' type="text" required />
                                    </div>
                                    <div className='w-full'>
                                        <label htmlFor="LName">Last Name</label> <br />
                                        <input name='fName' className='w-full border border-[#D9D9D9] p-5 mt-3 rounded' placeholder='Last Name' type="text" required />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="email">Email</label> <br />
                                    <input name='email' className='w-full border border-[#D9D9D9] p-5 mt-3 rounded' placeholder='Enter your email' type="email" required />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="phone">Phone Number</label> <br />
                                    <input name='phone' className='w-full border border-[#D9D9D9] p-5 mt-3 rounded' placeholder='Enter your phone number' type="number" required />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="location">Location</label> <br />
                                    <input name='location' className='w-full border border-[#D9D9D9] p-5 mt-3 rounded' placeholder='Enter your location' type="text" required />
                                </div>
                                <div className='flex flex-col md:flex-row space-x-6'>
                                    <div className='w-full'>
                                        <label htmlFor="tCity">Town/City</label> <br />
                                        <input name='tCity' className='w-full border border-[#D9D9D9] p-5 mt-3 rounded' placeholder='Enter Your Town/City' type="text" required />
                                    </div>
                                    <div className='w-full'>
                                        <label htmlFor="pCode">Postal Code</label> <br />
                                        <input name='pCode' className='w-full border border-[#D9D9D9] p-5 mt-3 rounded' placeholder='Enter Your Postal Code' type="number" required />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <p className='my-10 text-1 font-semibold text-[24px]'>Payment Method</p>
                        <div className='border rounded'>
                            <div className='p-5 border border-b flex text-[16px] font-medium space-x-2'>
                                <input className='text-3xl' type="radio" name="paymentMethod" id="creditCart" />
                                <label htmlFor="creditCart">Credit Card</label>
                            </div>
                            <div className='p-5 flex text-[16px] font-medium space-x-2'>
                                <input className='text-3xl text-primary bg-primary' type="radio" name="paymentMethod" id="payPal" />
                                <label htmlFor="payPal">Paypal</label>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 '>
                        <div className=''>
                            <p className='text-1 font-bold text-[28px]'>Order Summary</p>
                            <div className='mt-16'>
                                {
                                    products.map((product, index) => (
                                        <CheckOutCard
                                            key={index}
                                            image={product.image}
                                            name={product.name}
                                            price={product.price}
                                            quantity={product.quantity}
                                        />
                                    ))
                                }
                            </div>
                            <div className='p-6 mt-[45px] rounded text-[18px] font-light text-[#534C4C] border border-[#D9D9D9]'>
                                <div className='flex justify-between pb-[18px]'>
                                    <p>SubTotal</p>
                                    <p>$161.78</p>
                                </div>
                                <div className='flex justify-between py-[18px]'>
                                    <p>Tax</p>
                                    <p>$10.00</p>
                                </div>
                                <div className='flex justify-between py-[18px]'>
                                    <p className='font-semibold text1'>Total</p>
                                    <p>$171.78</p>
                                </div>
                                <p className='mt-4'>shopping cost calculate at checkout *</p>
                            </div>
                            <p className='mt-6 text-justify font-normal text-secondary text-[16px]'>
                                Your personal data helps us efficiently process and f
                                ulfill your order, ensuring a smooth and personalized shopping experience.
                            </p>
                        </div>
                        <Link href=''> <button className='process-button'>Place Order</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;