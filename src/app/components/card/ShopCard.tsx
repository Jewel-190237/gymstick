import Image from 'next/image';
import React from 'react';
import { Rate } from "antd";
import { TbShoppingBag } from 'react-icons/tb';
import { PiHeartLight } from 'react-icons/pi';
import { CgEye } from 'react-icons/cg';
interface ShopCardProps {
    status: string;
    rate: number;
    name: string;
    price: number;
    image: string;
  }
const ShopCard: React.FC<ShopCardProps> = ({status, rate, name, price, image}) => {
    return ( 
        <div className="rounded hover:scale-105 transition-all duration-150 max-w-[310px] mx-auto border">
            <div className='relative  mx-auto h-294 max-w-[310px] border '>
                <Image src={image} alt="shop" width={310} height={294} className="" />
                <div className='absolute top-0 status bg-primary w-[115px] h-[115px]'> 
                    <p  className='text-white flex mt-2 items-center -rotate-45'>{status}</p> </div>
            </div>
            <div className="text-center flex flex-col gap-2 py-6">
                <h6 className="capitalize text-[16px] font">{name}</h6>
                <Rate className='text-primary' defaultValue={rate} />
                <h6 className="text-[16px] font-semibold">${price}</h6>
                <div className="flex gap-[14px] justify-center">
                    <button className="p-1 hover:bg-primary hover:text-white text-primary bg-white border border-primary rounded cursor-pointer">
                        <TbShoppingBag size={24} />
                    </button>
                    <button className="p-1 hover:bg-primary hover:text-white text-primary bg-white border border-primary rounded cursor-pointer">
                        <PiHeartLight size={24} />
                    </button>
                    <button className="p-1 hover:bg-primary hover:text-white text-primary bg-white border border-primary rounded cursor-pointer">
                        <CgEye size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;