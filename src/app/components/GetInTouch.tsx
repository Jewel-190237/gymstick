'use client';
import React from 'react';
import { Form, Input } from 'antd';
import Image from 'next/image';
const GetInTouch: React.FC = () => {
    return (
        <section className='flex flex-col lg:flex-row items-center bg-black justify-center'>
            <div className="flex-1 ">
                <Image src='/images/GetInTouch.png' alt='Get In Touch' width={660} height={1010}/>
            </div>
            <div className='flex-1 text-white py-10 pl-6'>
                <p className='font-bold text-[20px] capitalize'>Get In Touch</p>
                <p className='mt-6 font-bold text-[32px] md:text-[48px] text-primary capitalize'>Join Today!</p>
                <Form className='mt-9 lg:w-[620px] w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <Form.Item className='md:pr-4 w-full' name="fName" rules={[{ required: true, message: "Please input your First Name" }]}>
                            <label className='text-white text-[16px] md:text-[20px] font-medium' htmlFor="fName">First Name</label>
                            <Input className='p-3 bg-black text-white' placeholder='Input Your First Name' type='text' />
                        </Form.Item>
                        <Form.Item className='md:pl-4 w-full' name="lName" rules={[{ required: true, message: "Please input your Last Name" }]}>
                            <label className='text-white text-[16px] md:text-[20px] font-medium' htmlFor="lName">Last Name</label>
                            <Input className='p-3 bg-black text-white' placeholder='Input Your Last Name' type='text' />
                        </Form.Item>
                        <Form.Item className='md:pr-4 w-full' name="email" rules={[{ required: true, message: "Please input your Email" }]}>
                            <label className='text-white text-[16px] md:text-[20px] font-medium' htmlFor="email">Email</label>
                            <Input className='p-3 bg-black text-white' placeholder='Input your Email' type='email' />
                        </Form.Item>
                        <Form.Item className='md:pl-4 w-full' name="phoneNumber" rules={[{ required: true, message: "Please input your Phone Number" }]}>
                            <label className='text-white text-[16px] md:text-[20px] font-medium' htmlFor="phoneNumber">Phone Number</label>
                            <Input className='p-3 bg-black text-white' placeholder='Input Your Phone Number' type='number' />
                        </Form.Item>
                    </div>
                    <Form.Item className='w-full' name="message" rules={[{ required: true, message: "Write your message" }]}>
                        <label className='text-white text-[16px] md:text-[20px] font-medium' htmlFor="message">Message</label>
                        <Input.TextArea className='p-3 bg-black text-white' placeholder='Write your message' rows={4} />
                    </Form.Item>
                    <button className="mt-7 button">Submit</button>
                </Form>
            </div>
        </section>
    );
};

export default GetInTouch;
