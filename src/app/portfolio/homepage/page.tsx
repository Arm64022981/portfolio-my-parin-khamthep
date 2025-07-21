'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Header from '@/app/components/Header';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  slug: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const texts = ["Code with Heart", "Debug Mode: ON", "Build the Future with Code"];

const projects: Project[] = [
  {
    title: "Sign Language Medical History System for the Hearing ImpairedMedical System",
    description: "Revolutionizing healthcare communication through real-time AI-powered sign language translation, bridging the gap between doctors and hearing-impaired patients.",
    image: "/icons/Project 1.png",
    tags: ["Next.js", "TypeScript", "Python", "Yolo11", "Tailwind CSS"],
    slug: "/portfolio/projectwork/project1",
  },
  {
    title: "Admin-dashboard-my-sign-language-project",
    description: "An admin system to easily manage doctors, nurses, and patients information, enabling efficient and streamlined personnel and patient data management..",
    image: "/icons/Project 2.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Python"],
    slug: "/portfolio/projectwork/project2",
    demoUrl: "https://admin-dashboard-my-sign-language-pr-eight.vercel.app/admin/profile",
  },
  {
    title: "CryptoSecure",
    description: "A secure AES encryption and decryption tool built for real-time message protection with a modern, user-friendly interface",
    image: "/icons/Project 3.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    slug: "/portfolio/projectwork/project3",
    demoUrl: "https://poc-encrypt-decrypt-aes-gcm.vercel.app/encrypt-decrypt",
  },
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Arm64022981?tab=repositories', icon: '/icons/github.png' },
  { name: 'Instagram', url: 'https://www.instagram.com/pxrin_k/', icon: '/icons/instagram.png' },
  { name: 'Facebook', url: 'https://web.facebook.com/arm.parin.2024', icon: '/icons/facebook.png' },
];

const Home: React.FC = () => {
  const controls = useAnimation();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const animateText = useCallback(async () => {
    const text = texts[currentTextIndex];
    controls.set({ opacity: 0, y: 20 });

    for (let i = 0; i <= text.length; i++) {
      await controls.start((index: number) => ({
        opacity: index < i ? 1 : 0,
        y: index < i ? 0 : 20,
        transition: { duration: 0.15, ease: 'easeOut' },
      }));
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
  }, [currentTextIndex, controls]);

  useEffect(() => {
    let isMounted = true;
    animateText();
    const timer = setTimeout(() => isMounted && setIsLoading(false), 1000);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [animateText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message sent successfully!',
          text: 'Thank you for reaching out to me.',
          confirmButtonText: 'Close',
          background: '#1f2937',
          color: '#ffffff'
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to send the message',
          text: error.text || 'An error has occurred',
          confirmButtonText: 'Close',
          background: '#1f2937',
          color: '#ffffff'
        });
      });
  };

  return (
    <>
      <Head>
        <title>ByArm Portfolio</title>
        <meta name="description" content="ByArm's portfolio showcasing web development skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="portfolio, developer, react, next.js, typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white relative overflow-hidden">

        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">

          {/* Hero Section */}
          <section className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="w-full lg:w-1/2 relative h-[50vh] sm:h-[60vh] lg:h-[80vh] rounded-3xl overflow-hidden"
              style={{ y: y1 }}
            >
              {isLoading ? (
                <div className="w-full h-full bg-gradient-to-br from-gray-800/20 to-blue-800/20 animate-pulse rounded-3xl backdrop-blur-sm" />
              ) : (
                <div className="relative w-full h-full group">
                  <Image
                    src="/Armprofile.png"
                    alt="ByArm Profile"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-3xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    priority
                    onError={() => setIsLoading(false)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-8"
              style={{ y: y2 }}
            >
              <motion.div
                key={currentTextIndex}
                className="flex flex-wrap justify-center lg:justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {texts[currentTextIndex].split("").map((char, index) => (
                  <motion.span
                    key={`${currentTextIndex}-${index}`}
                    custom={index}
                    animate={controls}
                    className="inline-block text-white"
                    aria-hidden={char === " "}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 text-center lg:text-left max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {"Crafting innovative web solutions with passion and precision. Let's build the future together with cutting-edge technology! 🚀"}
              </motion.p>

              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects ✨
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-4 border-2 border-blue-600 rounded-2xl font-semibold hover:bg-blue-600/20 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </section>

          <section id="about" className="py-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                About Me
              </h2>
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <motion.p
                  className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Passionate Computer Science graduate specializing in modern web development. I love creating beautiful, functional, and user-friendly applications that solve real-world problems using cutting-edge technologies.
                </motion.p>
                <motion.p
                  className="text-lg sm:text-xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Always exploring the latest tech trends and contributing to open-source projects to deliver innovative solutions that make a difference in people&apos;s lives. Let&apos;s collaborate to build something amazing!
                </motion.p>
              </div>
            </motion.div>
          </section>

          <section id="projects" className="py-24">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Link href={project.slug} passHref>
                    <div className="relative h-64 overflow-hidden">
                      {isLoading ? (
                        <div className="w-full h-full bg-gradient-to-br from-purple-800/20 to-pink-800/20 animate-pulse" />
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                  </Link>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <Link href={project.slug} passHref>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors cursor-pointer">
                          {project.title}
                        </h3>
                      </Link>
                      {project.demoUrl && index !== 0 && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-xl text-sm font-medium text-blue-300 hover:bg-blue-600/40 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Demo
                        </motion.a>
                      )}
                    </div>
                    <Link href={project.slug} passHref>
                      <p className="text-gray-400 text-sm leading-relaxed cursor-pointer">{project.description}</p>
                    </Link>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-4">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-xl text-sm font-medium text-blue-300 hover:bg-blue-600/40 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          GitHub
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-xl text-sm font-medium text-blue-300 hover:bg-blue-600/40 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Site
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/10 rounded-3xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="contact" className="py-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                Let&apos;s Connect
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your name"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                          required
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                        rows={5}
                        placeholder="Tell me about your project..."
                        required
                      />
                    </motion.div>
                    <motion.button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </section>
        </main>

        <footer className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm py-12 text-center border-t border-blue-500/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-lg">
              © {new Date().getFullYear()} ByArm. All rights reserved.
            </p>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </footer>
      </div>
    </>
  );
};

export default Home;