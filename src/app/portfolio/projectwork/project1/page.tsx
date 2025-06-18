'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
    Target,
    Code,
    Palette,
    Bot,
    Flame,
    Zap,
    Building2,
    Users,
    Video,
    Hand,
    MessageSquare,
    ArrowLeft,
    Award
} from 'lucide-react';

export default function Project1Page() {
    const router = useRouter();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const technologies = [
        { name: "Next.js + TypeScript", icon: Code, color: "from-blue-500 to-cyan-500" },
        { name: "Tailwind CSS", icon: Palette, color: "from-cyan-500 to-teal-500" },
        { name: "YOLOv5 Detection", icon: Bot, color: "from-purple-500 to-pink-500" },
        { name: "Flask + WebSocket", icon: Flame, color: "from-orange-500 to-red-500" },
        { name: "Flask API", icon: Zap, color: "from-green-500 to-emerald-500" },
        { name: "PostgreSQL Database", icon: Building2, color: "from-indigo-500 to-blue-500" }
    ];

    const features = [
        {
            title: "Real-time Translation",
            description: "Instant sign language to text conversion using advanced AI",
            icon: Zap
        },
        {
            title: "Medical Terminology",
            description: "Specialized healthcare vocabulary for accurate communication",
            icon: Building2
        },
        {
            title: "User-Friendly Interface",
            description: "Intuitive design optimized for accessibility",
            icon: Users
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#0d1129] to-[#111827] text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 px-6 md:px-10 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto"
                >
                    {/* Hero Section */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mb-20"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-block mb-6"
                        >
                            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm flex items-center gap-2 text-white">
                                <Award className="w-4 h-4" />
                                Healthcare Innovation Project
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
                        >
                            Sign Language Medical History System for the Hearing Impaired
                            <br />
                            <span className="text-white">
                                Medical System
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-white leading-relaxed max-w-3xl mx-auto font-light"
                        >
                            Revolutionizing healthcare communication through real-time AI-powered
                            sign language translation, bridging the gap between doctors and
                            hearing-impaired patients.
                        </motion.p>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        variants={itemVariants}
                        className="relative mb-24 group"
                    >
                        <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/icons/Project 1.png"
                                alt="AI Sign Language System"
                                fill
                                className="object-fill transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20"></div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
                        >
                            <Hand className="w-8 h-8 text-white" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center text-xl shadow-xl"
                        >
                            <Building2 className="w-6 h-6 text-white" />
                        </motion.div>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.section
                        variants={itemVariants}
                        className="mb-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                            Key Features
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="h-full p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <feature.icon className="w-10 h-10 text-blue-400 mx-auto" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Objectives Section */}
                    <motion.section
                        variants={itemVariants}
                        className="mb-24"
                    >
                        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                                <Target className="w-8 h-8 text-blue-400" />
                                Project Objectives
                            </h2>

                            <div className="space-y-6">
                                {[
                                    "Design and develop a comprehensive healthcare service system through a web application for the hearing impaired community",
                                    "Create an advanced health-related sign language recognition model for real-time translation capabilities",
                                    "Enhance user satisfaction and accessibility through intuitive interface design"
                                ].map((objective, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-transform duration-300"
                                    >
                                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mt-1 group-hover:scale-110 transition-transform">
                                            {index + 1}
                                        </div>
                                        <p className="text-white leading-relaxed flex-1">
                                            {objective}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Technology Stack */}
                    <motion.section
                        variants={itemVariants}
                        className="mb-24"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">
                            Technology Stack
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group cursor-pointer"
                                >
                                    <div className="h-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 group-hover:transform group-hover:scale-105">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                                            <tech.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-white group-hover:text-white transition-colors">
                                            {tech.name}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* How It Works */}
                    <motion.section
                        variants={itemVariants}
                        className="mb-24"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-white">
                                How It Works
                            </h2>
                            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                                Our system seamlessly integrates computer vision and natural language processing
                                to provide real-time sign language translation in healthcare settings.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                            <div className="relative p-8 md:p-12">
                                <div className="grid md:grid-cols-3 gap-8 text-center">
                                    {[
                                        { step: "01", title: "Patient Interview", desc: "ผู้บกพร่องทางการได้ยินซักประวัติกับพยาบาลโดยใช้กล้องตรวจจับในการสื่อสาร", icon: Video },
                                        { step: "02", title: "Data Recording", desc: "พยาบาลกดบันทึกข้อมูลที่ซักประวัติได้จากการสื่อสาร", icon: Hand },
                                        { step: "03", title: "Medical Diagnosis", desc: "หมอวินิจฉัยอาการของผู้ป่วยและบันทึกข้อมูลการรักษา", icon: MessageSquare }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.2 }}
                                            viewport={{ once: true }}
                                            className="group"
                                        >
                                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <item.icon className="w-12 h-12 text-blue-400 mx-auto" />
                                            </div>
                                            <div className="text-sm font-bold text-blue-400 mb-2">
                                                STEP {item.step}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-white">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Back Button */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center"
                    >
                        <motion.button
                            onClick={() => router.back()}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 font-semibold text-white bg-white/10 hover:bg-white/20 rounded-2xl shadow-xl transition-all duration-500 border border-white/20"
                        >
                            <span className="flex items-center gap-2">
                                <motion.span
                                    animate={{ x: [-2, 2, -2] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                </motion.span>
                                Back to Projects
                            </span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}