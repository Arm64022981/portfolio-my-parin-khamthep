'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/app/components/Header';

const ResumePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Resume - ByArm</title>
        <meta name="description" content="Professional resume of ByArm, Junior Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-gray-900 font-inter print:bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 print:py-6">
          {/* Header Section */}
          <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12 print:mb-6 mt-8">
            <motion.div
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md border-2 border-gray-300 print:border-gray-400 group"
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
            <div className="text-center lg:text-left space-y-3">
              <motion.h1
                className="text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-gray-900"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                ByArm
              </motion.h1>
              <p className="text-lg font-medium text-gray-300 print:text-gray-700">Junior Developer (Computer Science Graduate)</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-blue-400 print:text-gray-600">
                <p>Phone: +66 (0) 9-2524-7059</p>
                <p>Email: parinkhamthep21@gmail.com</p>
                <a
                  href="https://github.com/Arm64022981"
                  className="hover:text-blue-300 transition-all duration-200 hover:underline print:text-gray-600"
                  aria-label="GitHub Profile"
                >
                  github.com/byarm
                </a>
              </div>
              <p className="text-sm text-gray-400 print:text-gray-600">Address: 29/2 Moo 2 Ruam Chit, Tha Pla, Uttaradit</p>
            </div>
          </section>

          <section className="mb-12 print:mb-6">
            <motion.h2
              className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-white print:text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Summary
            </motion.h2>
            <p className="text-gray-300 text-base leading-relaxed print:text-gray-700">
              Computer Science graduate with experience in full-stack development and a 4-month internship as a Software Developer. Built a real-time sign language recognition app using Next.js, TypeScript, Flask, and PostgreSQL. Experienced in responsive UI design with Tailwind CSS, version control with Git/GitHub, and deploying apps with Docker, Vercel, and Render.</p>
          </section>

          {/* Skills Section */}
          <section className="mb-12 print:mb-6">
            <motion.h2
              className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-white print:text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Programming Languages
            </motion.h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 print:text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full print:bg-gray-600"></span> Java: Good understanding of OOP and Java application development.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full print:bg-gray-600"></span> JavaScript: Good understanding of JavaScript for building interactive web content.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full print:bg-gray-600"></span> Python: Familiar with using Python for basic scripting and automation tasks.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full print:bg-gray-600"></span> SQL: Good understanding of SQL for writing and managing database queries.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full print:bg-gray-600"></span> TypeScript: Good understanding of TypeScript for building scalable web applications.
              </li>
            </ul>
          </section>

          <section className="mb-12 print:mb-6">
            <motion.h2
              className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-white print:text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Web Development
            </motion.h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 print:text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full print:bg-gray-600"></span> HTML & CSS: Proficient in creating simple, responsive web pages.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full print:bg-gray-600"></span> Responsive Web Design: Able to design web pages that function well across various devices.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full print:bg-gray-600"></span> Front-End Frameworks: Familiar with utility-first CSS framework Tailwind CSS for rapid and flexible UI development.
              </li>
            </ul>
          </section>

          <section className="mb-12 print:mb-6">
            <motion.h2
              className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-white print:text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Internship Experience
            </motion.h2>
            <motion.div
              className="bg-gray-800/80 p-6 rounded-lg shadow-sm print:bg-white print:shadow-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-400 print:text-gray-900">Junior Software Developer (Intern)</h3>
              <p className="text-gray-300 font-medium print:text-gray-700">Tech Company, Bangkok</p>
              <p className="text-sm text-gray-400 mb-3 print:text-gray-600">28 October 2024 – 14 February 2025</p>
              <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-2 print:text-gray-700">
                <li>Developed and maintained full-stack web applications using Next.js and TypeScript for frontend, styled with CSS.</li>
                <li>Built real-time hand gesture recognition and admin dashboard for user & role management.</li>
                <li>Designed and optimized database schema to support application features and data integrity.</li>
                <li>Collaborated with the team to deliver features in an agile workflow and performed code reviews</li>
              </ul>
            </motion.div>
          </section>

          <section className="mb-12 print:mb-6">
            <motion.h2
              className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-white print:text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Education
            </motion.h2>
            <motion.div
              className="bg-gray-800/80 p-6 rounded-lg shadow-sm print:bg-white print:shadow-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-400 print:text-gray-900">Bachelor of Computer Science</h3>
              <p className="text-gray-300 font-medium print:text-gray-700">School of Information and Communication Technology, University of Phayao</p>
              <p className="text-sm text-gray-400 mb-3 print:text-gray-600">2021 – 2025</p>
              <p className="text-gray-300 text-base leading-relaxed print:text-gray-700">
                Specialized in web development, artificial intelligence, and software engineering. Completed projects in sign language translation and healthcare system development.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-800/80 p-6 rounded-lg shadow-sm mt-4 print:bg-white print:shadow-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-400 print:text-gray-900">High School – Science-Mathematics Program</h3>
              <p className="text-gray-300 font-medium print:text-gray-700">Triam Udom Suksa Nomklao Uttaradit School</p>
              <p className="text-sm text-gray-400 mb-3 print:text-gray-600">2017 – 2020</p>
              <p className="text-gray-300 text-base leading-relaxed print:text-gray-700">
                Graduated with a strong foundation in mathematics and computer skills, fostering a passion for technology.
              </p>
            </motion.div>
          </section>

          <section className="mb-12 print:mb-6">
            <motion.h2
              className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-white print:text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>
            <motion.div
              className="bg-gray-800/80 p-6 rounded-lg shadow-sm print:bg-white print:shadow-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-400 print:text-gray-900">Real-Time Sign Language Recognition Web App</h3>
              <p className="text-gray-300 font-medium print:text-gray-700">Final Year Project</p>
              <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-2 print:text-gray-700">
                <li>Developed full-stack web app with Next.js TypeScript frontend and Python YOLOv5, Flask backend.</li>
                <li>Built real-time hand gesture recognition and admin dashboard for user & role management.</li>
                <li>Designed responsive UI with Tailwind CSS based on user needs.</li>
                <li>Managed PostgreSQL database and deployed app using Docker.</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-gray-800/80 p-6 rounded-lg shadow-sm mt-4 print:bg-white print:shadow-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-400 print:text-gray-900">Healthcare System Dashboard</h3>
              <p className="text-gray-300 font-medium print:text-gray-700">Final Year Project</p>
              <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-2 print:text-gray-700">
                <li>Built a responsive dashboard using Next.js and Tailwind CSS to visualize patient data.</li>
                <li>Integrated MongoDB for data storage and retrieval, ensuring secure data handling.</li>
                <li>Designed intuitive UI/UX, improving accessibility for healthcare professionals.</li>
                <li>Deployed web applications on Vercel and Render platforms to ensure reliable production hosting and continuous delivery.</li>
              </ul>
            </motion.div>
          </section>

          <section className="mb-12 print:mb-6">
            <motion.h2
              className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-white print:text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Software Development Skills
            </motion.h2>
            <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-2 print:text-gray-700">
              <li>Software Design and Development: Understanding the fundamental principles of software design and development.</li>
              <li>Software Testing and Debugging: Learning to test and debug software to ensure proper functionality.</li>
              <li>Development Tools: Familiar with tools such as Git and Visual Studio Code for software development.</li>
            </ul>
          </section>

          <section className="mb-12 print:mb-6">
            <motion.h2
              className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-white print:text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Database Management Skills
            </motion.h2>
            <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-2 print:text-gray-700">
              <li>Database Design: Basic understanding of database schema design.</li>
              <li>SQL Database Management: Familiar with managing and manipulating SQL databases such as PostgreSQL.</li>
            </ul>
          </section>

          <section className="mb-12 print:mb-6">
            <motion.h2
              className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4 text-white print:text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Management & Soft Skills
            </motion.h2>
            <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-2 print:text-gray-700">
              <li>Strong team collaboration skills gained from project-based and internship experiences.</li>
              <li>Effective time management and task prioritization during multi-phase software development.</li>
              <li>Leadership experience in coordinating team roles and deadlines in academic projects.</li>
              <li>Excellent communication and presentation skills, including remote meetings via Google Meet.</li>
              <li>Highly adaptable with a strong interest in learning organizational operations and management.</li>
            </ul>
          </section>
        </main>

        <footer className="bg-gray-900 py-4 text-center text-gray-500 print:bg-white print:text-gray-600">
          <p className="text-sm print:text-gray-600">© {new Date().getFullYear()} ByArm. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default ResumePage;