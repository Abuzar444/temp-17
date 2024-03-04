'use client';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useState } from 'react';

const themes = {
    corporate: 'corporate',
    luxury: 'luxury',
};

const ThemeToggle = () => {
    const [theme, setTheme] = useState(themes.corporate);

    const toggleTheme = () => {
        const newTheme =
            theme === themes.corporate ? themes.luxury : themes.corporate;
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    };
    return (
        <button
            className='btn btn-sm btn-outline border-none'
            onClick={toggleTheme}
        >
            {theme === 'corporate' ? (
                <BsMoonFill className='h-6 w-6' />
            ) : (
                <BsSunFill className='h-6 w-6' />
            )}
        </button>
    );
};

export default ThemeToggle;
