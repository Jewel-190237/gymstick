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
        <div className="rounded">
            <div className='relative status bg-primary w-[115px] h-[96px] flex items-center'> <p className='text-white pl-4 -rotate-45'>{status}</p> </div>
            <div className='bg-[#D9D9D9] -mt-24'>
                <Image src={image} alt="shop" width={270} height={294} className="mx-auto" />
            </div>
            <div className="shadow-custom-light text-center flex flex-col gap-2 py-6">
                <h6 className="capitalize text-[16px] font">{name}</h6>
                <Rate defaultValue={rate} />
                <h6 className="text-[16px] font-semibold">{price}</h6>
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