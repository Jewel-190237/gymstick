import { Rate } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
const Review: React.FC = () => {
    const [like, setLike] = useState(4)
    const [dislike, setDisLike] = useState(1)
    return (
        <div className='flex gap-8 mt-10 border border-[#D9D9D9] rounded p-10'>
            <div className=''>
                <Image className='rounded-full' src='/images/ShopCard/person.png' alt='person' width={200} height={100} />
            </div>
            <div>
                <div className='flex items-center space-x-10'>
                    <Rate className='text-primary' defaultValue={5} />
                    <p className='shop-style'>logan edward, 9 sept 2024</p>
                </div>
                <p className='mt-10 text-[#2B2B2B] text-[16px] font-medium'>Awesome!</p>
                <p className='mt-4 shop-style'>Description It is a long established to fact that is one reader will be the distracted by the readable content of the page when this looking at its layout. The point of using Lorem Ipsum. Description It is a long established to fact that is one reader will be the distracted by the readable content of the page when this looking at its layout. The point of using Lorem Ipsum.</p>
                <div className='mt-6 flex items-center justify-between'>
                    <div className='flex space-x-6 items-center'>
                        <p className='shop-style text-[#2B2B2B]'>Was this review helpful?</p>
                        <button onClick={() => setLike(like + 1)} className='flex items-center space-x-2'><BiLike className='text-black hover:text-primary' size={24} /> <span>{like}</span></button>
                        <button onClick={() => setDisLike(dislike + 1)} className='flex items-center space-x-2'><BiDislike className='text-black hover:text-primary' size={24} /> <span>{dislike}</span></button>
                        <FaRegComment className='text-xl text-black hover:text-primary'/>
                    </div>
                    <button className='product-button'>Comment</button>
                </div>
            </div>
        </div>
    );
};

export default Review;