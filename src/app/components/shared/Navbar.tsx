/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IoMdCloseCircle } from 'react-icons/io';
import ThemeControler from './ThemeControler';
const links = [
  { name: 'Home', dropdownItems: [{ name: 'Home 1', href: '/home1' }, { name: 'Home 2', href: '/home2' }] },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Shop', path: '/shop' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'More', dropdownItems: [{ name: 'More 1', href: '/home1' }, { name: 'More 2', href: '/home2' }] },
];
const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleLinkClick = (linkName: string, path?: string) => {
    setActiveLink(linkName);
    setIsOpen(false);
    if (path) {
      router.push(path);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

const renderLinks = (isMobile: boolean = false) =>
  links.map((link, index) => (
    <div key={index}>
      {link.dropdownItems ? (
        <Dropdown
          menu={{ items: link.dropdownItems.map(({ name, href }) => ({ label: <a href={href}>{name}</a>, key: name })) }}
        >
          <a
            onClick={(e) => e.preventDefault()}
            className={`flex items-center space-x-1 ${activeLink === link.name ? 'text-[#E67529]' : 'text-[#2B2B2B] dark:text-white'}`}
          >
            <Space>{link.name}<DownOutlined /></Space>
          </a>
        </Dropdown>
      ) : (
        <a
          href={link.path}
          className={`font-noto text-[18px] font-medium ${activeLink === link.name ? 'text-[#E67529]' : 'text-[#2B2B2B] dark:text-white'}`}
          onClick={() => handleLinkClick(link.name, link.path)}
        >
          {link.name}
        </a>
      )}
    </div>
  ));

  return (
    <nav className="bg-white dark:bg-[#2B2B2B] shadow-md">
      <div className="max-w-[1320px] mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="lg:mr-80">
          <Image src="/images/Logo.png" height={77} width={218} alt="logoImage" className='w-56 h-12' />
        </a>

        <div className="lg:hidden relative left-10">
          <button onClick={toggleMenu} className="text-gray-600 dark:text-white focus:outline-none">
            {isOpen ? <IoMdCloseCircle className="text-3xl" /> : <GiHamburgerMenu className="text-3xl" />}
          </button>
        </div>

        <div className="hidden lg:flex items-center text-gray-600 text-[18px] font-medium dark:text-white space-x-10">
          {renderLinks()}
        </div>
        <ThemeControler></ThemeControler>
        <div className="">
          <button className="border-2 border-[#E67529] px-4 md:px-8 py-4 rounded-[4px] hover:bg-[#E67529] hover:text-white text-[#2B2B2B] dark:text-white transition">
            Join Us
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden flex flex-col text-[18px] font-medium bg-white dark:bg-[#2B2B2B] px-4 space-y-4 text-white">
          {renderLinks(true)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
