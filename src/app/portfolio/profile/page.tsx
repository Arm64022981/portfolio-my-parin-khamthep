'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

const ProfilePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Profile - ByArm</title>
                <meta name="description" content="หน้าโปรไฟล์ส่วนตัวของ ByArm" />
            </Head>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white">
                <Header />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white">
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Profile Section */}
                    <section className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-600">
                            <Image
                                src="/Armprofile.png"
                                alt="Profile Picture"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                        <div className="text-center lg:text-left space-y-4">
                            <h1 className="text-4xl font-extrabold">ByArm</h1>
                            <p className="text-lg text-gray-300">Junior Software Developer</p>
                            <p className="text-base text-gray-400 max-w-xl">
                                Passionate about building modern web applications with clean and scalable code. Skilled in React, Next.js, and UI/UX design.
                            </p>
                            <div className="flex gap-4 justify-center lg:justify-start">
                                <a href="#" className="text-blue-400 hover:underline">GitHub</a>
                                <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>
                                <a href="#" className="text-blue-400 hover:underline">Portfolio</a>
                            </div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                className="bg-gray-800 p-6 rounded-xl shadow-md"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold text-blue-400">Bachelor of Computer Science</h3>
                                <p className="text-gray-300">ABC University</p>
                                <p className="text-sm text-gray-400">2019 - 2023</p>
                                <p className="mt-2 text-gray-400">
                                    Focused on web development, AI, and software engineering. Participated in projects related to sign language translation and healthcare systems.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-gray-800 p-6 rounded-xl shadow-md"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold text-blue-400">High School - Science Program</h3>
                                <p className="text-gray-300">XYZ High School</p>
                                <p className="text-sm text-gray-400">2016 - 2019</p>
                                <p className="mt-2 text-gray-400">
                                    Strong academic background in mathematics and computer fundamentals, preparing for university-level computer science.
                                </p>
                            </motion.div>
                        </div>
                    </section>
                </main>

                <footer className="bg-gray-900 py-6 text-center text-gray-500">
                    © {new Date().getFullYear()} ByArm. All rights reserved.
                </footer>
            </div>
        </div>

        </>
    );
};

export default ProfilePage;
