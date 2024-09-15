import React from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import { SearchOutlined } from '@ant-design/icons';
import { Input, } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Pagination } from 'antd';
import All from '../Shop/All';
import BasicHeader from '../shared/BasicHeader';
const items: MenuProps['items'] = [
    { label: (<a target="_blank" rel="noopener noreferrer" href=""> Dumbbel </a>), key: '0' },
    { label: (<a target="_blank" rel="noopener noreferrer" href=""> Protine </a>), key: '1' },
    { label: (<a target="_blank" rel="noopener noreferrer" href=""> Bags </a>), key: '2' },
];
const Shop: React.FC = () => {
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
                        <Input className='py-[22px] text-[20px]' placeholder="search all brand and product" prefix={<SearchOutlined className='ml-12 mr-4 text-2xl' />} />
                    </div>
                    <div className='flex items-center h-[68px] pt-5'>
                        <Dropdown menu={{ items }}>
                            <Space className='ml-10 text-[16px] gap-4'>
                                All Catagories
                                <DownOutlined classID='text-xl' />
                            </Space>
                        </Dropdown>
                    </div>
                </div>
                <All />
                <Pagination className='!mt-12' align='center' defaultCurrent={1} total={30} />;
            </div>
        </section>
    );
};
export default Shop;
