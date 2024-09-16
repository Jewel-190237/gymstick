
'use client'
import React, { useState } from 'react';
import BasicHeader from '../shared/BasicHeader';
import Image from 'next/image';
import { Rate, Pagination, Modal } from 'antd';
import { BsCartPlus } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import { FaXTwitter } from 'react-icons/fa6';
import Review from '../Review';
import ShopCard from '../card/ShopCard';
import { BsHandbag } from "react-icons/bs";
const products = [{ status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' }, { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' },]

const Wheyprotein: React.FC = () => {
    const [activeTab, setActiveTab] = useState('description');
    const tabs = ['description', 'review']
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
    const totalProduct = products.length;
    const paginatedProducts = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <section>
            <BasicHeader heading='Whey Protein' subHeading='Home' />
            <div className='max-w-[1320px] mx-auto mt-[140px] text1'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='flex-1'>
                        <Image src='/images/ShopCard/shopCardImage.png' alt="shop" width={648} height={640} className="" />
                    </div>
                    <div className='flex-1'>
                        <div className='flex items-center justify-between'>
                            <p className='font-normal text-[18px]'>Protein Provider</p>
                            <div className='flex items-center gap-5'>
                                <Rate className='text-primary' defaultValue={5} />
                                <p className='text-[16px] font-normal'>Review(3)</p>
                            </div>
                        </div>
                        <h2 className='mt-6 font-semibold text-[28px] capitalize'>impact whey protein</h2>
                        <div className='mt-6 flex items-center space-x-6 text-[18px] font-semibold'>
                            <p className='text-primary'> <del>$120.99</del> </p>
                            <p>$80.99</p>
                            <p className='text-[16px] font-normal capitalize '>(In stock)</p>
                        </div>
                        <p className='mt-[40px] text-[18px] font-normal'>Description</p>
                        <p className='mt-6 shop-style'>Impact Whey Protein is a high-quality, fast-absorbing protein powder that supports muscle growth and recovery. Packed with essential amino acids, it is perfect for post-workout nutrition or boosting daily protein intake. Ideal for athletes and fitness enthusiasts looking to build strength and improve performance. Impact Whey Protein is a high-quality, fast-absorbing protein powder that supports muscle growth and recovery.</p>
                        <p className='mt-10 text-[18px] font-medium'>Size:</p>
                        <div className='mt-4 flex items-center space-x-6'>
                            <button className='product-button'>1.5 KG</button>
                            <button className='product-button'>2.5 KG</button>
                            <button className='product-button'>5 KG</button>
                        </div>
                        <div className='mt-10 flex items-center space-x-6'>
                            <button className='product-button flex items-center space-x-[10px]'><span>Buy Now</span> <BsHandbag /> </button>
                            <button className='product-button flex items-center space-x-[10px]' onClick={showModal}><span>Add to Cart</span> <BsCartPlus size={20} /></button>
                        </div>
                        <p className='mt-6 text-secondary text-[16px] font-normal capitalize'>is it sold out? <span className='text-primary underline'>join the waiting list.</span></p>
                        <div className='mt-12 flex items-center space-x-5'>
                            <p className='text-[18px] font-medium'>Share:</p>
                            <button className='share-button ml-1 shadow-custom-light'> <TbBrandYoutube size={24} /> </button>
                            <button className='share-button shadow-custom-light'> <FaFacebookF size={24} /> </button>
                            <button className='share-button shadow-custom-light'> <FaXTwitter size={24} /> </button>
                            <button className='share-button shadow-custom-light'> <FaLinkedinIn size={24} /> </button>
                        </div>
                    </div>
                </div>
                <div className='mt-[140px]'>
                    <div className="flex space-x-[35px] ">
                        {tabs.map(tab => (
                            <button key={tab} className={`px-7 rounded py-3 ${activeTab === tab ? 'bg-[#E67529] text-white' : 'text-black border border-[#D9D9D9] bg-white'}`} onClick={() => setActiveTab(tab)}>
                                <div className=''> {tab.charAt(0).toUpperCase() + tab.slice(1)} </div>
                            </button>
                        ))}
                    </div>
                    <div className="mt-10">
                        {activeTab === 'description' && <p className='shop-style border border-[#D9D9D9] py-10 px-7 rounded'>Description It is a long established to fact that is one reader will be the distracted by the readable content of the page when this looking at its layout. The point of using Lorem Ipsum is that it is has normal distribution of letters, as opposed to using contents here. Lorem is an long established to fact that is one reader will be the distracted by the readable content.Description It is a long established to fact that is one reader will be the distracted by the readable content of the page when this looking at its layout. The point of using Lorem Ipsum is that it is has normal distribution of letters, as opposed to using contents here. Lorem is an long established to fact that is one reader will be the distracted by the readable content. </p>}
                        {activeTab === 'review' && <Review />}
                    </div>
                    <div className='mt-[140px]'>
                        <p className='text-[28px] font-semibold'>Related Product</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                            {paginatedProducts.map((product, index) => (
                                <ShopCard key={index} status={product.status} rate={product.rate} name={product.name} price={product.price} image={product.image} />
                            ))}
                        </div>
                        <Pagination current={currentPage} pageSize={pageSize} total={totalProduct} onChange={(page) => setCurrentPage(page)} className='!mt-12' align='center' defaultCurrent={1} />
                    </div>
                </div>
            </div>
            <Modal
                title="Success"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div className="flex items-center justify-center flex-col w-full">
                    <p className="text-primary text-3xl mb-4">✔</p>
                    <p>impact whey protein has been added to your cart.</p>
                    <button className='product-button mt-3'>View Cart</button>
                </div>
            </Modal>
        </section>
    );
};

export default Wheyprotein;
