import React from 'react';
import { SiOpenaigym } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

const SidebarHeader = () => {
    return (
        <main className='flex items-center mb-4 gap-4 px-4'>
            <SiOpenaigym className='w-10 h-10 text-primary' />
            <h2 className='font-extrabold text-xl text-primary mr-auto'>
                GTPGenius
            </h2>
            <ThemeToggle />
        </main>
    );
};

export default SidebarHeader;
