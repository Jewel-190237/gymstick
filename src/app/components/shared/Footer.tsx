import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaEnvelope, FaYoutube } from 'react-icons/fa';
const Footer: React.FC = () => {
    return (
        <footer className=" py-10 mt-40 ">
            <div className="max-w-[1320px] mx-auto text-[#534C4C] font-poppins">
                <div className='flex gap-40'>
                    <div className='w-[33%]'>
                        <div className="flex items-center">
                            <Image src='/images/Logo.png' alt='logo' height={47} width={218}></Image>
                        </div>
                        <p className='mt-[60px] uppercase font-bold text-[16px] text-black'>Contact Us</p>
                        <div className="flex gap-6 mt-[42px]">
                            <a href="#" className="text-black hover:text-[#E67529]">
                                <FaYoutube size={20} />
                            </a>
                            <a href="#" className="text-black hover:text-[#E67529]">
                                <FaFacebook size={20} />
                            </a>
                            <a href="" className="text-black hover:text-[#E67529]">
                                <FaEnvelope size={20} />
                            </a>
                            <a href="tel:+1234567890" className="text-black hover:text-[#E67529]">
                                <FaPhoneAlt size={20} />
                            </a>
                            <a href="#" className="text-black hover:text-[#E67529]">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2 md:grid-cols-3 ">
                        <div>
                            <h3 className="text-[16px] font-bold flex items-center gap-2">
                                <p className='w-3 h-3 rounded-full bg-[#E67529]'></p>
                                <p>Quick Links</p>
                            </h3>
                            <ul className="mt-7 space-y-4">
                                <li><a href="#" className="">Contact Us</a></li>
                                <li><a href="#" className="">Terms and Conditions</a></li>
                                <li><a href="#" className="">Private and Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[16px] font-bold flex items-center gap-2">
                                <p className='w-3 h-3 rounded-full bg-[#E67529]'></p>
                                <p>Useful Links</p>
                            </h3>
                            <ul className="mt-7 space-y-4">
                                <li><a href="#" className="">About Us</a></li>
                                <li><a href="#" className="">Blogs</a></li>
                                <li><a href="#" className="">FAQs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[16px] font-bold flex items-center gap-2">
                                <p className='w-3 h-3 rounded-full bg-[#E67529]'></p>
                                <p>Address</p>
                            </h3>
                            <ul className="mt-7 space-y-4">
                                4th floor ds building <br />
                                road : #kDA 83 <br />
                                sonadanga, khulna <br />
                                bangladesh
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mx-auto w-[60%] mt-10'>
                    <form className="mt-4 sm:w-full">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border-[#D9D9D9] py-5 border-b-2 w-full text-gray-900 focus:outline-none"
                        />
                        <div className='mx-auto text-center mt-6 '>
                            <button className="mx-auto rounded bg-[#E67529] text-[18px] font-medium text-white px-8 py-4">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-12 pt-5 border-t border-[#D9D9D9] text-center">
                <p className="text-[#534C4C] font-bold text-[16px]">
                    CopyRights{new Date().getFullYear()} All rights reserved.<span className='text-[#FF0000]'>GymStick</span>
                </p>
            </div>
        </footer>
    );
};
export default Footer;