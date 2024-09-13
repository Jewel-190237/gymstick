'use client';
import React, { useState } from 'react';
import BasicComponent from '../shared/BasicComponent';
import Monthly from './Monthly';
import Yearly from './Yearly';
const componentMap: Record<string, React.ReactNode> = {
    monthly: <Monthly/>,
    yearly: <Yearly/>
};
const Pricing: React.FC = () => {
    const [activeTab, setActiveTab] = useState('monthly');
    const tabs = ['monthly', 'yearly'];
    return (
        <section className='max-w-[1320px] mx-auto my-10'>
            <BasicComponent subHeading='pricing' heading='chose the best plans' />
            <div className="">
                <div className="flex justify-center mb-4 border w-[215px] mx-auto rounded">
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

export default Pricing;
