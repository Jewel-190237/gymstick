'use client'
import React, { useState } from 'react';
import ExpartCard from './card/ExpartCard';
const ExpertTeam: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [shareIconHoveredIndex, setShareIconHoveredIndex] = useState<number | null>(null);
    const banners = [{ title: "Alan Bagham", description: "Gym Instructor" }, { title: "Alan Bagham", description: "Gym Instructor" }, { title: "Alan Bagham", description: "Gym Instructor" }, { title: "Alan Bagham", description: "Gym Instructor" }, { title: "Alan Bagham", description: "Gym Instructor" },];
    const itemsToShow = 3;
    const itemsCount = banners.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        if (currentIndex < itemsCount - itemsToShow) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };
    return (
        <div className='max-w-[1320px] mx-auto my-20 relative'>
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }} >
                    {banners.map((banner, index) => (
                        <div key={index} className="w-[31.8%] flex-shrink-0 mr-6 " onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                            <ExpartCard title={banner.title} description={banner.description} hoveredIndex={hoveredIndex} shareIconHoveredIndex={shareIconHoveredIndex} setShareIconHoveredIndex={setShareIconHoveredIndex} index={index} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-4 p-5">
                <button onClick={handlePrev} className="bg-transparent border-2 border-[#E67529] px-5 py-3 hover:bg-[#E67529] text-[#E67529] hover:text-white rounded-full p-2 flex justify-center items-center transition-transform duration-300 hover:scale-110"> ❮</button>
                <button onClick={handleNext} className="hover:bg-[#E67529] hover:text-white text-[#E67529] border-[#E67529]  border-2 rounded-full px-5 py-3 flex justify-center items-center transition-transform duration-300 hover:scale-110"> ❯</button>
            </div>
        </div>
    );
};
export default ExpertTeam;
