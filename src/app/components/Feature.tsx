"use client";
import React, { useState, useEffect } from 'react';
import FeatureCard from './card/FeatureCard';
const featureData = [
    { image: "1.png", title: "Scheduling", description: "Book your favorite classes online" },
    { image: "2.png", title: "Personal Training", description: "Get personalized training plans" },
    { image: "3.png", title: "Group Training", description: "Join a variety of group classes" },
    { image: "4.png", title: "Flexibility", description: "Flexible class schedules for you" },
    { image: "1.png", title: "Scheduling", description: "Book your favorite classes online" },
    { image: "2.png", title: "Tracking", description: "Monitor your progress easily" },
    { image: "3.png", title: "Support", description: "24/7 customer support available" },
    { image: "4.png", title: "Flexibility", description: "Flexible class schedules for you" },
];
const Feature: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4); // Initially 4 cards for large screens
    const itemsCount = featureData.length;
    const updateItemsToShow = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
            setItemsToShow(1);  // Small screen (mobile) - show 1 card
        } else if (screenWidth >= 640 && screenWidth < 1024) {
            setItemsToShow(3);  // Medium screen (tablet) - show 2 cards
        } else {
            setItemsToShow(4);  // Large screen (desktop) - show 4 cards
        }
    };
    useEffect(() => {
        // Update itemsToShow on mount and when the window is resized
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        return () => {
            window.removeEventListener('resize', updateItemsToShow);
        };
    }, []);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (itemsCount - itemsToShow + 1));
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (itemsCount - itemsToShow + 1)) % (itemsCount - itemsToShow + 1));
    };
    return (
        <div className='relative max-w-[1320px] mx-auto my-20'>
            <div className='overflow-hidden'>
                <div
                    className='flex transition-transform duration-300'
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {featureData.map((feature, index) => (
                        <div key={index} className={`w-[100%] sm:w-[33%] lg:w-[25%] p-2 flex-shrink-0`}>
                            <FeatureCard
                                image={feature.image}
                                title={feature.title}
                                description={feature.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-4 p-5">
                <button
                    onClick={handlePrev}
                    className="border-2 border-primary p-[4px] rounded-full hover:bg-[#E67529] text-[#E67529]"
                >                
                </button>
                <button
                    onClick={handleNext}
                    className="border-2 border-primary p-[4px] rounded-full hover:bg-[#E67529] text-[#E67529]"
                >
                </button>
                <button
                    onClick={handleNext}
                    className="border-2 border-primary p-[4px] rounded-full hover:bg-[#E67529] text-[#E67529]"
                >
                </button>
            </div>
       </div>
    );
};
export default Feature;

