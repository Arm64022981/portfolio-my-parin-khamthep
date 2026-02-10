'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Header from '@/app/components/Header';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Award, FileText } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  slug: string;
  isPublished?: boolean;
  researchUrl?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const texts = ["Code with Heart", "Building Tomorrow", "One Commit at a Time"];

const projects: Project[] = [
  {
    title: "Multimodal AI Framework for Sign Language Recognition and Medical Informatics in Hearing-Impaired Patients",
    description: "Revolutionizing healthcare communication through real-time AI-powered sign language translation, bridging the gap between doctors and hearing-impaired patients.",
    image: "/icons/Project 1.png",
    tags: ["Next.js", "TypeScript", "Python", "YOLOv10", "Tailwind CSS"],
    slug: "/portfolio/projectwork/project1",
    isPublished: true,
    researchUrl: "https://bright-journal.org/Journal/index.php/JADS/article/view/1096",
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
  {
    title: "Promotion Tools Hub",
    description: "A comprehensive web-based platform designed to support and streamline telecommunications operations, featuring integrated system management, data analysis, and operational monitoring tools.",
    image: "/icons/Project 4.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    slug: "/portfolio/projectwork/project4",
    demoUrl: "https://promotion-tools-hub-siv9.vercel.app/mainocs",
  },
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Arm64022981?tab=repositories' },
  { name: 'Instagram', url: 'https://www.instagram.com/pxrin_k/' },
  { name: 'Facebook', url: 'https://web.facebook.com/arm.parin.2024' },
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
    await controls.set({ opacity: 0, y: 20 });

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
    emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        Swal.fire({ icon: 'success', title: 'Message sent!', background: '#1f2937', color: '#fff' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        Swal.fire({ icon: 'error', title: 'Error', text: error.text, background: '#1f2937', color: '#fff' });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div className="w-full lg:w-1/2 relative h-[50vh] sm:h-[60vh] lg:h-[80vh] rounded-3xl overflow-hidden" style={{ y: y1 }}>
            {isLoading ? (
              <div className="w-full h-full bg-gradient-to-br from-gray-800/20 to-blue-800/20 animate-pulse rounded-3xl" />
            ) : (
              <div className="relative w-full h-full group">
                <Image src="/Armprofile.png" alt="Profile" fill style={{ objectFit: 'cover' }} className="rounded-3xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />
              </div>
            )}
          </motion.div>

          <motion.div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-8" style={{ y: y2 }}>
            <AnimatePresence mode="wait">
              <motion.div key={currentTextIndex} className="flex flex-wrap justify-center lg:justify-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                {texts[currentTextIndex].split("").map((char, index) => (
                  <motion.span key={index} animate={controls} custom={index}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>

            <p className="text-base sm:text-lg text-gray-300 text-center lg:text-left max-w-md">
              Crafting innovative web solutions with passion and precision. Let&apos;s build the future together! 🚀
            </p>

            <div className="flex gap-6">
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl font-semibold shadow-lg hover:shadow-blue-500/25">
                View Projects ✨
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 border-2 border-blue-600 rounded-2xl font-semibold backdrop-blur-sm">
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} className="transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />
                  {project.isPublished && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-2 z-20 shadow-lg">
                      <Award size={12} /> Scopus Q3 Published
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <Link href={project.slug}><h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">{project.title}</h3></Link>
                    <div className="flex gap-2 shrink-0">
                      {project.isPublished && project.researchUrl && (
                        <motion.a href={project.researchUrl} target="_blank" whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-xl text-sm font-medium text-blue-300 flex items-center gap-1">
                          <FileText size={14} /> Paper
                        </motion.a>
                      )}
                      {project.demoUrl && (
                        <motion.a href={project.demoUrl} target="_blank" whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-xl text-sm font-medium text-blue-300">
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-500/30">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-center mb-8">Let&apos;s Connect</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/30 rounded-2xl text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-2xl text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Email" required />
              </div>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 bg-gray-800/50 border border-blue-500/30 rounded-2xl text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="Your message..." required />
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl font-bold shadow-lg hover:shadow-blue-500/25">
                Send Message
              </motion.button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center border-t border-blue-500/20 bg-gray-900/80 backdrop-blur-sm">
        <p className="text-gray-400 mb-6">© {new Date().getFullYear()} ByArm. All rights reserved.</p>
        <div className="flex justify-center gap-8">
          {socialLinks.map((social, i) => (
            <motion.a key={i} href={social.url} target="_blank" whileHover={{ scale: 1.1, y: -2 }} className="text-gray-400 hover:text-blue-400 transition-colors font-medium">
              {social.name}
            </motion.a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Home;