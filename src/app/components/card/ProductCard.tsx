'use client';
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
    { label: '1', key: '1' },
    { label: '2', key: '2' },
    { label: '3', key: '3' },
    { label: '4', key: '4' },
    { label: '5', key: '5' },
];

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    size: number;
    quantity: number;
}
const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, size, quantity }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('1');

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setSelectedCategory(e.key);
    };
    return (
        <div className='flex space-x-6 pt-10 border-t border-[#D9D9D9] mb-10'>
            <div className=''><Image src={image} alt="shop" width={200} height={200} /></div>
            <div className='flex-1'>
                <div className='product-description flex justify-between items-center text-[18px] text-1 font-semibold'>
                    <p>{name}</p>
                    <p>${price.toFixed(2)}</p>
                </div>
                <div className='product-description mt-6 space-y-[10px]'>
                    <p>Size: {size} KG</p>
                    <p>Quantity: {quantity} pcs</p>
                </div>
                <div className='flex justify-between mt-12'>
                    <Dropdown className='border rounded p-1' menu={{ items, onClick: handleMenuClick }}overlayClassName='category-dropdown'>
                        <Space className='text-[16px] gap-4 cursor-pointer'>
                            <span className="font-medium"> {selectedCategory} </span>
                            <DownOutlined />
                        </Space>
                    </Dropdown>
                    <button className='product-description'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
