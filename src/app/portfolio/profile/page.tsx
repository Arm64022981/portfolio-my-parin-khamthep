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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white font-inter">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Profile Section */}
          <section className="flex flex-col lg:flex-row items-center gap-12 mb-20 mt-8">
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-600 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/Armprofile.png"
                alt="Profile Picture"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
            <div className="text-center lg:text-left space-y-5">
              <motion.h1
                className="text-4xl sm:text-5xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                ByArm
              </motion.h1>
              <p className="text-lg text-gray-300 font-medium">Junior Software Developer</p>
              <p className="text-base text-gray-400 max-w-xl leading-relaxed">
                Completed a 4-month internship as a Junior Software Developer, working on both frontend and backend of web applications using Next.js. Responsibilities included developing responsive UI/UX and integrating APIs with backend services and databases.
              </p>
              <div className="flex gap-6 justify-center lg:justify-start">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-all duration-200 hover:underline"
                  aria-label="Visit ByArm's GitHub profile"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-all duration-200 hover:underline"
                  aria-label="Visit ByArm's LinkedIn profile"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-all duration-200 hover:underline"
                  aria-label="Visit ByArm's Portfolio"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mt-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-10 text-center tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Education
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gray-800/80 p-6 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Bachelor of Computer Science</h3>
                <p className="text-gray-300 font-medium">University of Phayao</p>
                <p className="text-sm text-gray-400 mb-3">Academic Years: 2021 – 2025</p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Focused on web development, artificial intelligence, and software engineering. Participated in projects related to sign language translation and healthcare systems.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-800/80 p-6 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">High School – Science-Mathematics Program</h3>
                <p className="text-gray-300 font-medium">Triam Udom Suksa Nomklao Uttaradit School</p>
                <p className="text-sm text-gray-400 mb-3">2017 – 2020</p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Graduated from the Science-Mathematics program with a strong foundation in computer skills and mathematics. Developed a passion for computers, preparing for further studies in computer science.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 py-6 text-center text-gray-500">
          <p className="text-sm transition-all duration-200 hover:text-gray-400">
            © {new Date().getFullYear()} ByArm. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default ProfilePage;