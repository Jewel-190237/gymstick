import React, { useEffect, useState } from 'react';
import { LuMoon } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
const ThemeControler: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false); // Type state as boolean
    const [mounted, setMounted] = useState<boolean>(false); // Type state as boolean
    useEffect(() => {
        setMounted(true);
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem("theme");
            setDarkMode(savedTheme === "dark");
        }
    }, []);
    useEffect(() => {
        if (mounted) {
            if (darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem("theme", "light");
            }
        }
    }, [darkMode, mounted]);
    if (!mounted) return null;
    return (
        <div className=" ml-12 mr-2 md:ml-10">
            {!darkMode && (
                <FiSun onClick={() => setDarkMode(true)} className='text-[#2B2B2B] dark:text-white text-2xl' />
            )}
            {darkMode && (
                <LuMoon onClick={() => setDarkMode(false)} className='text-[#2B2B2B] dark:text-white text-2xl' />
            )}
        </div>
    );
};
export default ThemeControler;
