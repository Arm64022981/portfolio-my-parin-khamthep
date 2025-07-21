'use client';

import React, { useState, useEffect, useMemo } from 'react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const navItems = useMemo(() => [
        { name: 'Home', href: '/portfolio/homepage' },
        { name: 'My Profile', href: '/portfolio/profile' },
        { name: 'Blog', href: '/portfolio/blog' },
        { name: 'Contact', href: '/portfolio/contact' }
    ], []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const currentPath = window.location.pathname;
        const currentPage = navItems.find(item => item.href === currentPath);
        if (currentPage) {
            setActiveLink(currentPage.name);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 h-16 px-8 flex justify-between items-center transition-all duration-500 ease-out bg-black ${
                isScrolled
                    ? 'backdrop-blur-xl bg-black/90 border-b border-white/10 shadow-2xl'
                    : 'bg-black'
            }`}
        >
            <div className="relative group">
                <h1 className="text-4xl font-black text-white relative z-10 tracking-tight">
                    ByArm
                </h1>
                <div className="absolute -inset-2 bg-white/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <nav className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`relative text-sm uppercase font-black tracking-wider transition-all duration-300 group ${
                            activeLink === item.name
                                ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] font-black'
                                : 'text-gray-300'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <span className="relative z-10 px-4 py-2 block">
                            {item.name}
                        </span>

                        <div
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                                activeLink === item.name
                                    ? 'scale-x-100 drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]'
                                    : 'scale-x-0 group-hover:scale-x-100'
                            } origin-left`}
                        ></div>

                        <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                        {activeLink === item.name && (
                            <>
                                <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse"></div>
                                <div className="absolute -inset-2 bg-white/30 rounded-lg blur-lg animate-pulse"></div>
                            </>
                        )}
                    </a>
                ))}
            </nav>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${2 + i * 0.5}s`,
                        }}
                    ></div>
                ))}
            </div>
        </header>
    );
};

export default Header;