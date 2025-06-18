'use client';

import React from 'react';
import Link from 'next/link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md px-8 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">ByArm</h1>
                <nav className="space-x-4 md:space-x-8 text-sm md:text-base uppercase font-bold text-white">
                    <Link href="/portfolio/homepage" className="group relative inline-block">
                        <span className="transition duration-300 group-hover:text-gray-300">
                            Home
                        </span>
                        <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Link>

                    <Link href="/portfolio/profile" className="hover:text-gray-300 transition duration-300">
                        My Profile
                    </Link>

                    <Link href="/portfolio/blog" className="hover:text-gray-300 transition duration-300">
                        Blog
                    </Link>

                    <Link href="/portfolio/contact" className="hover:text-gray-300 transition duration-300">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
