'use client';
import React from 'react';
import Image from 'next/image';
const GetInTouch: React.FC = () => {

    return (
        <section className='flex flex-col lg:flex-row items-center bg-black justify-center max-w-[1920px] mx-auto'>
            <div className="flex-1 ">
                <Image src='/images/GetInTouch.png' alt='Get In Touch' width={948} height={1010} />
            </div>
            <div className='flex-1 text-white py-10 pl-6'>
                <p className='font-bold text-[20px] capitalize'>Get In Touch</p>
                <p className='mt-6 font-bold text-[32px] md:text-[48px] text-primary capitalize'>Join Today!</p>
                <form className='max-w-[630px] mt-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="">
                            <label className="input-label font-montserrat">First Name</label>
                            <input placeholder='Enter Your First Name' type="text" id="fName" name="fName" className=" block w-full px-4 py-5 bg-black input-placeholder border rounded" required />
                        </div>
                        <div className="">
                            <label className="input-label ont-montserrat">Last Name</label>
                            <input placeholder='Enter Your Last Name' type="text" id="lName" name="lName" className=" block w-full px-4 py-5 bg-black input-placeholder border rounded" required />
                        </div>
                        <div className="">
                            <label className="input-label ont-montserrat">Email</label>
                            <input placeholder='Enter Your Email' type="email" id="email" name="email" className=" block w-full px-4 py-5 bg-black input-placeholder border rounded" required />
                        </div>
                        <div className="">
                            <label className="input-label ont-montserrat">Phone Number</label>
                            <input placeholder='Enter Your Phone Number' type="text" id="phone" name="phone" className=" block w-full px-4 py-5 bg-black input-placeholder border rounded" required />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <label className="input-label ont-montserrat">Message</label>
                        <textarea placeholder='Write Your Message' id="lName" name="lName" className="h-[150px] w-full px-4 py-5 bg-black input-placeholder border rounded" required></textarea>
                    </div>
                    <button type="submit" className="button mt-12"> Submit </button>
                </form>
            </div>
        </section>
    );
};

export default GetInTouch;
