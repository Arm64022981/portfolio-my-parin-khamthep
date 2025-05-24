'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/app/components/Header';

const texts = ["Code with Heart", "Debug Mode: ON", "Build the Future with Code"];

const Home: React.FC = () => {
    const controls = useAnimation();
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const animateText = async () => {
            const text = texts[currentTextIndex];

            await controls.set((index) => ({
                opacity: 0,
                y: 20,
            }));

            for (let i = 0; i <= text.length; i++) {
                if (!isMounted) return;

                await controls.start((index) => ({
                    opacity: index < i ? 1 : 0,
                    y: index < i ? 0 : 20,
                    transition: { duration: 0.15, ease: 'easeOut' },
                }));

                await new Promise((res) => setTimeout(res, 50));
            }

            await new Promise((res) => setTimeout(res, 2000));

            if (!isMounted) return;

            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        };

        animateText();

        // จำลองการโหลดรูปภาพ
        setTimeout(() => setIsLoading(false), 1000);

        return () => {
            isMounted = false;
        };
    }, [currentTextIndex, controls]);

    const text = texts[currentTextIndex];

    return (
        <>
            <Head>
                <title>ByArm Portfolio</title>
                <meta name="description" content="พอร์ตโฟลิโอของ ByArm แสดงผลงานการพัฒนาเว็บและทักษะด้านโค้ด" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="portfolio, developer, react, next.js, web development" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white">
                <Header />

                <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    {/* Hero Section */}
                    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="w-full lg:w-1/2 relative h-[50vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
                            {isLoading ? (
                                <div className="w-full h-full bg-gray-800 animate-pulse rounded-2xl" />
                            ) : (
                                <>
                                    <Image
                                        src="/Armprofile.png"
                                        alt="โปรไฟล์ ByArm"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-2xl transition-transform duration-500 hover:scale-105"
                                        priority
                                        onError={() => setIsLoading(false)}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </>
                            )}
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-6">
                            <motion.div
                                key={currentTextIndex}
                                className="flex flex-wrap justify-center lg:justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {text.split("").map((char, index) => (
                                    <motion.span
                                        key={`${currentTextIndex}-${index}`}
                                        custom={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={controls}
                                        className="inline-block"
                                        aria-hidden={char === " "}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.div>
                            <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center lg:text-left max-w-md">
                                Create innovative solutions with code. Explore my work and let's build something amazing together!
                            </p>
                            <div className="flex gap-4">
                                <motion.a
                                    href="#projects"
                                    className="px-6 py-3 bg-blue-600 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View my work
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    className="px-6 py-3 bg-transparent border border-blue-600 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-600/20 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact
                                </motion.a>
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me </h2>
                        <div className="max-w-3xl mx-auto text-center text-gray-300 space-y-4">
                            <p className="text-base sm:text-lg">
                                I'm a junior software developer with a strong passion for building modern web applications using technologies like React and Next.js. Although I'm at the beginning of my professional journey, I’m continuously learning and growing through hands-on experience and real-world projects.
                            </p>
                            <p className="text-base sm:text-lg">
                                I focus on creating clean, user-friendly, and efficient web applications. Outside of coding, I enjoy exploring new technology trends and occasionally contribute to open source projects to improve my skills and collaborate with the developer community.
                            </p>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Project</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                { title: "Project 1", desc: "", img: "/project-1.png" },
                                { title: "Project 2", desc: "", img: "/project-2.png" },
                                { title: "Project 3", desc: "", img: "/project-3.png" },
                            ].map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="relative h-48">
                                        {isLoading ? (
                                            <div className="w-full h-full bg-gray-700 animate-pulse" />
                                        ) : (
                                            <Image
                                                src={project.img}
                                                alt={project.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                                className="transition-transform duration-500 hover:scale-105"
                                            />
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <p className="text-gray-400 mb-4">{project.desc}</p>
                                        <a href="#" className="text-blue-400 hover:text-blue-300">
                                            Learn More
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Me</h2>
                        <div className="max-w-lg mx-auto">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        rows={4}
                                        placeholder="Your message"
                                        required
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>

                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 py-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} ByArm. All rights reserved.</p>
                    <div className="mt-4 flex justify-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-blue-400">GitHub</a>
                        <a href="#" className="text-gray-400 hover:text-blue-400">Instagram</a>
                        <a href="#" className="text-gray-400 hover:text-blue-400">Facebook</a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;