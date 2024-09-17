
'use client';
import React, { useState, useEffect } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import { Input, Dropdown, Space, Pagination } from 'antd';
import type { MenuProps } from 'antd';
import BasicHeader from '../shared/BasicHeader';
import ShopCard from '../card/ShopCard';

const items: MenuProps['items'] = [ { label: 'All Categories', key: 'All' },{ label: 'Dumbbel', key: 'Dumbbel' },{ label: 'whey protine', key: 'whey protine' },{ label: 'Bags', key: 'Bags' }, { label: 'Shoe', key: 'Shoe' },];
const products = [ { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'Dumbbel', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'Dumbbel', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'Shoe', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'Dumbbel', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'Shoe', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'Dumbbel', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'Dumbbel', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'Bags', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'Bags', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'Bags', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'Bags', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'Shoe', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, ];
const Shop: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Select Category');
    const pageSize = 8;

    useEffect(() => {
        setCurrentPage(1);
        setSelectedCategory('Select Category');
    }, [searchQuery]);

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === 'Select Category' || selectedCategory === 'All' || product.name === selectedCategory)
    );

    const paginatedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        setSelectedCategory(key === 'All' ? 'Select Category' : key);
        setCurrentPage(1);
    };
    return (
        <section className='my-10'>
            <BasicHeader heading='Shop' subHeading='Home' />
            <div className='max-w-[1320px] mx-auto mt-[140px] mb-14'>
                <div className='grid grid-cols-1 md:grid-cols-4 border rounded'>
                    <div className='flex gap-6 py-[22px] rounded text-white items-center bg-primary'>
                        <RiMenu2Fill className='ml-6' />
                        <p className='capitalize md:text-[10px] lg:text-[16px] font-medium'>browse all categories</p>
                    </div>
                    <div className='col-span-2 border-none'>
                        <Input className='py-[22px] text-[20px]' placeholder="search all brand and product" prefix={<SearchOutlined className='ml-12 mr-4 text-2xl' />}   value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  />
                    </div>
                    <div className='flex items-center h-[68px] pt-5'>
                        <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={['hover']} overlayClassName='category-dropdown' >
                            <Space className='ml-10 text-[16px] gap-4 cursor-pointer'>
                                <span className="capitalize">{selectedCategory}</span>
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14'>
                    {paginatedProducts.length ? (
                        paginatedProducts.map((product, index) => (
                            <ShopCard key={index} {...product} />
                        ))
                    ) : (
                        <div className='col-span-full text-center'>No products found</div>
                    )}
                </div>
                <Pagination className='!mt-12' align='center' current={currentPage} pageSize={pageSize} total={filteredProducts.length} onChange={setCurrentPage} />
            </div>
        </section>
    );
};
export default Shop;
