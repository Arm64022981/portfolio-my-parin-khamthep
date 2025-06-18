'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/app/components/Header';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

interface Tech {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const texts = ["Code with Heart", "Debug Mode: ON", "Build the Future with Code"];
const techStack: Tech[] = [
  { name: 'Git', icon: '/icons/github.png' },
  { name: 'Next.js', icon: '/icons/next.png' },
  { name: 'TypeScript', icon: '/icons/ts.png' },
  { name: 'Python', icon: '/icons/python.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.png' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.png' },
];
const projects: Project[] = [
  { title: "Project 1", description: "Modern web app with Next.js", image: "/icons/Project 1.png" },
  { title: "Project 2", description: "Interactive dashboard with React", image: "/tailwindcss.png" },
  { title: "Project 3", description: "E-commerce platform", image: "/project-3.png" },
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
          title: 'ส่งข้อความสำเร็จ!',
          text: 'ขอบคุณที่ติดต่อมานะครับ',
          confirmButtonText: 'ปิด'
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'ส่งข้อความไม่สำเร็จ',
          text: error.text || 'เกิดข้อผิดพลาดบางอย่าง',
          confirmButtonText: 'ปิด'
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

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">

          {/* Hero Section */}
          <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-1/2 relative h-[50vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
              {isLoading ? (
                <div className="w-full h-full bg-gray-800 animate-pulse rounded-2xl" />
              ) : (
                <Image
                  src="/Armprofile.png"
                  alt="ByArm Profile"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl transition-transform duration-500 hover:scale-105"
                  priority
                  onError={() => setIsLoading(false)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
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
                    className="inline-block"
                    aria-hidden={char === " "}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center lg:text-left max-w-md">
                Crafting innovative web solutions with passion. Let's create something extraordinary!
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-3 border border-blue-600 rounded-lg font-semibold hover:bg-blue-600/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
            <div className="max-w-3xl mx-auto text-center text-gray-300 space-y-4">
              <p className="text-base sm:text-lg">
                Passionate Computer Science graduate specializing in modern web development with React, Next.js, and TypeScript.
              </p>
              <p className="text-base sm:text-lg">
                Exploring tech trends and contributing to open-source projects to deliver cutting-edge solutions.
              </p>
              <div className="flex justify-center gap-10 pt-6 overflow-x-auto">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 w-24">
                    <div className="w-16 h-16 relative">
                      <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                    </div>
                    <span className="text-sm text-white">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
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
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-500 hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <a href="#" className="text-blue-400 hover:text-blue-300">Learn More</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Me</h2>
            <div className="max-w-lg mx-auto space-y-6">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows={4}
                    placeholder="Your message"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
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
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} className="text-gray-400 hover:text-blue-400">
                {social.name}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
