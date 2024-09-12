'use client';
import React, { useState } from 'react';
import BasicComponent from '../shared/BasicComponent';
import All from './All';
import Dumbbel from './Dumbbel';
import Outfit from './Outfit';
import Protine from './Protine';
import Bags from './Bags';
import Shoe from './Shoe';
import More from './More';

const componentMap: Record<string, React.ReactNode> = {
    all: <All/>,
    dumbbel: <Dumbbel/>,
    outfit: <Outfit/> ,
    protine: <Protine/>,
    bags: <Bags/>,
    shoe: <Shoe/>,
    more: <More/>
};

const Shop: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');
    const tabs = ['all', 'dumbbel', 'outfit', 'protine', 'bags', 'shoe', 'more'];

    return (
        <section className='max-w-[1320px] mx-auto my-10'>
            <BasicComponent subHeading='shop' heading='here you can buy any thing' />
            <div className="">
                <div className="flex justify-center mb-4 border w-[51.3%] mx-auto rounded">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`px-4 rounded py-4 ${activeTab === tab ? 'bg-[#E67529] text-white' : 'text-black bg-white'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <div className='px-3'>
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </div>
                        </button>
                    ))}
                </div>
                <div className="p-4">
                    {componentMap[activeTab]}
                </div>
            </div>
        </section>
    );
};

export default Shop;
