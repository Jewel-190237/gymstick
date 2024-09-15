import React from 'react';
import { IoHome } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";

interface BasicHeaderProps {
    heading: string;
    subHeading: string;
}

const BasicHeader: React.FC<BasicHeaderProps> = ({ heading, subHeading }) => {
    return (
        <section
            className="relative w-full h-[420px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/bg.png)' }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            <div className="relative font-montserrat text-white text-5xl max-w-[1320px] mx-auto pt-[219px]">
                <h2 className="text-5xl font-bold">{heading}</h2>
                <div className="mt-[14.5px] flex items-center gap-2 text-[18px] font-semibold">
                    <IoHome className="text-primary" />
                    <p className="text-primary">{subHeading}</p>
                    <FaAngleRight />
                    <p>{heading}</p>
                </div>
            </div>
        </section>
    );
};

export default BasicHeader;
