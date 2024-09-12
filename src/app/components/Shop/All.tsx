import React from 'react';
import ShopCard from '../card/ShopCard';

const products = [
    { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' },
    { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' },
    { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' },
    { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' },
    { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' },
    { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' },
    { status: 'Sold Out', rate: 4, name: 'whey protine', price: 30.67, image: '/images/ShopCard/shopCardImage.png' },
    { status: 'Sale Now', rate: 4, name: 'whey protine', price: 80.89, image: '/images/ShopCard/shopCardImage.png' },
   
];

const All: React.FC = () => {
    return (
        <section className='max-w-[1320px] mx-auto mt-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {products.map((product, index) => (
                    <ShopCard
                        key={index}
                        status={product.status}
                        rate={product.rate}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default All;
