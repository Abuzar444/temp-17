import React from 'react';
import SidebarHeader from './SidebarHeader';
import NavLinks from './NavLinks';
import MemberProfile from './MemberProfile';

const Sidebar = () => {
    return (
        <main className='py-12 px-4 min-h-full w-80 bg-base-300 grid grid-rows-[auto,1fr,auto]'>
            {/* {first row} */}

            <SidebarHeader />
            {/* {second row} */}
            <NavLinks />
            {/* {third row} */}
            <MemberProfile />
        </main>
    );
};

export default Sidebar;
