import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin, FaShareAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
interface ExpartCardProps {
  title: string;
  description: string;
  hoveredIndex: number | null;
  shareIconHoveredIndex: number | null;
  setShareIconHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
}
const ExpartCard: React.FC<ExpartCardProps> = ({
  title,
  description,
  hoveredIndex,
  shareIconHoveredIndex,
  setShareIconHoveredIndex,
  index,
}) => {
  return (
    <div className='w-[420px] rounded shadow-custom-light border-b-2 border-b-slate-200'> {/* Adjusted to shadow-lg */}
      <div className="relative w-[420px] h-full image-shape">
        <Image
          src={`/images/expertTeam/${index + 1}.png`}
          alt="team"
          width={420}
          height={464}
          className="h-full w-full object-cover transition-all duration-300" // Changed object-fill to object-cover
        />
        <div
          className={`absolute bottom-0 left-0 w-full h-[50%] transition-all duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
            } bg-gradient-to-t from-[#E67529] to-transparent`}
          style={{ zIndex: 1 }}
        />
      </div>
      <div className="flex flex-col justify-between relative p-6">
        <div className="flex items-center justify-between">
          <div className="pt-10 pb-12 px-8">
            <p
              className={`text-xl font-bold font-poppins transition-colors duration-300 ${hoveredIndex === index ? 'text-[#E67529]' : 'text-black'
                }`}
            >
              {title}
            </p>
            <p className="mt-6 text-[16px] font-normal font-poppins transition-colors duration-300 text-black">
              {description}
            </p>
          </div>
          <button className="text-2xl rounded-lg"> <GoArrowRight /> </button>
        </div>
        <div className="relative flex items-center justify-center rounded-lg">
          {shareIconHoveredIndex !== index ? (
            <div className="absolute left-[60px] bottom-44 bg-[#333333] rotate-180 rounded-full text-white text-2xl p-5 cursor-pointer" onMouseEnter={() => setShareIconHoveredIndex(index)} onMouseLeave={() => setShareIconHoveredIndex(null)}>
              <FaShareAlt />
            </div>
          ) : (
            <div className="absolute left-[50px] bottom-44 flex flex-col rounded-3xl items-end space-y-7 bg-[#333333] py-5 px-7 text-white" onMouseEnter={() => setShareIconHoveredIndex(index)} onMouseLeave={() => setShareIconHoveredIndex(null)}>
              <a href="#" className="hover:text-[#E67529] transition-colors"><FaYoutube size={30} /></a>
              <a href="#" className="hover:text-[#E67529] transition-colors"><FaLinkedin size={30} /> </a>
              <a href="#" className="hover:text-[#E67529] transition-colors"> <FaXTwitter size={30} /></a>
              <a href="#" className="hover:text-[#E67529] transition-colors"> <FaFacebook size={30} /></a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpartCard;
