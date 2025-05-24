'use client';

import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header
            className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center"
            style={{ backgroundColor: 'transparent' }} // ไม่มีสีพื้นหลัง
        >
            <h1 className="text-4xl font-bold text-white">ByArm</h1>
            <nav className="space-x-6 text-sm uppercase font-medium">
                <a
                    href="#"
                    className="relative text-white after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left transition"
                >
                    Home
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition">My Profile</a>
                <a href="#" className="text-white hover:text-gray-300 transition">Portfolio</a>
                <a href="#" className="text-white hover:text-gray-300 transition">Blog</a>
                <a href="#" className="text-white hover:text-gray-300 transition">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
