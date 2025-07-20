'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
    Lock,
    Code,
    Palette,
    Shield,
    Zap,
    Key,
    ArrowLeft,
    Award,
    X,
} from 'lucide-react';

// Constants for animations
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

// Data constants
const TECHNOLOGIES = [
    { name: 'Next.js + TypeScript', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Tailwind CSS', icon: Palette, color: 'from-cyan-500 to-teal-500' },
    { name: 'Lucide Icons', icon: Shield, color: 'from-purple-500 to-pink-500' },
    { name: 'Crypto-JS', icon: Key, color: 'from-green-500 to-emerald-500' },
];

const FEATURES = [
    {
        title: 'Real-time Encryption',
        description: 'Instant AES encryption and decryption for secure message processing.',
        icon: Zap,
    },
    {
        title: 'User-Friendly Interface',
        description: 'Intuitive design for seamless encryption and decryption workflows.',
        icon: Palette,
    },
    {
        title: 'Secure Key Management',
        description: 'Robust key generation and management for enhanced security.',
        icon: Key,
    },
];

const FUNCTION_EXPLANATIONS = [
    {
        title: 'Encryption Interface',
        description: 'A clean interface for users to input text and encryption keys, with real-time AES encryption output.',
        image: '/icons/Encrypt Message.png',
        alt: 'Encryption interface',
    },
    {
        title: 'Decryption Interface',
        description: 'Easily decrypt messages using the provided key, with instant results displayed in a user-friendly format.',
        image: '/icons/Decrypt Message.png',
        alt: 'Decryption interface',
    },
    {
        title: 'Key Generator',
        description: 'Generate secure AES keys with customizable length and complexity for encryption purposes.',
        image: '/icons/Key Generator.png',
        alt: 'Key generator tool',
    },
];

const OBJECTIVES = [
    'Develop a secure and efficient web-based AES encryption and decryption tool.',
    'Create an intuitive and modern user interface for seamless user experience.',
    'Ensure robust security measures for real-time message protection.',
];

const WORKFLOW_STEPS = [
    {
        step: '01',
        title: 'Input Message',
        desc: 'Users enter the text they want to encrypt or decrypt along with a secure key.',
        icon: Lock,
    },
    {
        step: '02',
        title: 'Process Encryption/Decryption',
        desc: 'The system processes the input using AES algorithms to encrypt or decrypt the message.',
        icon: Zap,
    },
    {
        step: '03',
        title: 'Display Results',
        desc: 'Encrypted or decrypted results are displayed instantly for user review.',
        icon: Shield,
    },
];

// Reusable Components
const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <motion.section variants={itemVariants} className={className}>
        {children}
    </motion.section>
);

const HeroSection = () => (
    <motion.div variants={itemVariants} className="text-center mb-20">
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-block mb-6"
        >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm flex items-center gap-2 text-white">
                <Award className="w-4 h-4" />
                Secure Encryption Tool
            </span>
        </motion.div>
        <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
        >
            CryptoSecure
            <br />
            <span className="text-white">AES Encryption & Decryption</span>
        </motion.h1>
        <motion.p
            variants={itemVariants}
            className="text-xl text-white leading-relaxed max-w-3xl mx-auto font-light"
        >
            A secure AES encryption and decryption tool built for real-time message protection with a modern, user-friendly interface.
        </motion.p>
    </motion.div>
);

const HeroImage = () => (
    <motion.div variants={itemVariants} className="relative mb-24 group">
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
            <Image
                src="/icons/Project 3.png"
                alt="CryptoSecure System"
                fill
                className="object-fill transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20" />
        </div>
        <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
        >
            <Lock className="w-8 h-8 text-white" />
        </motion.div>
        <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center text-xl shadow-xl"
        >
            <Key className="w-6 h-6 text-white" />
        </motion.div>
    </motion.div>
);

const ObjectivesSection = () => (
    <Section className="mb-24">
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                <Lock className="w-8 h-8 text-blue-400" />
                Project Objectives
            </h2>
            <div className="space-y-6">
                {OBJECTIVES.map((objective, index) => (
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
                        <p className="text-white leading-relaxed flex-1">{objective}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </Section>
);

const FeaturesGrid = () => (
    <Section className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
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
                        <p className="text-white leading-relaxed">{feature.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

const FunctionExplanationsGrid = () => {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    const openPopup = (src: string, alt: string) => {
        setSelectedImage({ src, alt });
    };

    const closePopup = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Section className="mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">System Workflow</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {FUNCTION_EXPLANATIONS.map((func, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
                                <div className="relative w-full cursor-pointer" onClick={() => openPopup(func.image, func.alt)}>
                                    <Image
                                        src={func.image}
                                        alt={func.alt}
                                        width={600}
                                        height={450}
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-2xl w-full"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={100}
                                        priority={index < 3}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                                        {func.title}
                                    </h3>
                                    <p className="text-white leading-relaxed">{func.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Popup Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={closePopup}
                >
                    <div className="relative max-w-[80vw] max-h-[80vh] bg-white/5 rounded-2xl overflow-hidden">
                        <button
                            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                            onClick={closePopup}
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            width={1200}
                            height={900}
                            className="object-contain max-h-[80vh] w-auto"
                            quality={100}
                            priority
                        />
                    </div>
                </motion.div>
            )}
        </>
    );
};

const WorkflowDiagram = () => (
    <Section className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            System Workflow Diagram
        </h2>
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8"
        >
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
                <Image
                    src="/icons/CryptoSecure AES Encryption & Decryption.png"
                    alt="CryptoSecure Workflow Diagram"
                    fill
                    className="object-contain transition-transform duration-700 hover:scale-103"
                />
            </div>
            <p className="text-center text-white mt-6 max-w-3xl mx-auto leading-relaxed">
                This diagram illustrates the CryptoSecure workflow, starting with user input of a message and an AES key. The system then processes the input through either the AES Encryption or AES Decryption module, depending on the selected function. Finally, the output is displayed as either a secure encrypted message (Base64 format) or the original decrypted message, ensuring confidentiality and integrity of the data throughout the process.
            </p>
        </motion.div>
    </Section>
);

const TechnologyStack = () => (
    <Section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Technology Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECHNOLOGIES.map((tech, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                >
                    <div className="h-full p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 group-hover:transform group-hover:scale-105">
                        <div
                            className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-xl mb-4 group-hover:rotate-12 transition-transform duration-300`}
                        >
                            <tech.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-white transition-colors">
                            {tech.name}
                        </h3>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

const HowItWorks = () => (
    <Section className="mb-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">How It Works</h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                CryptoSecure leverages AES encryption to provide secure, real-time message protection with an intuitive interface.
            </p>
        </div>
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl" />
            <div className="relative p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {WORKFLOW_STEPS.map((item, index) => (
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
                            <div className="text-sm font-bold text-blue-400 mb-2">STEP {item.step}</div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-white">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

const BackButton = () => {
    const router = useRouter();
    return (
        <motion.div variants={itemVariants} className="text-center">
            <motion.button
                onClick={() => router.back()}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 font-semibold text-white bg-white/5 hover:bg-white/10 rounded-2xl shadow-xl transition-all duration-500 border border-white/20"
            >
                <span className="flex items-center gap-2">
                    <motion.span
                        animate={{ x: [-2, 2, -2] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </motion.span>
                    Back to Projects
                </span>
            </motion.button>
        </motion.div>
    );
};

// Main Component
export default function CryptoSecurePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#0d1129] to-[#111827] text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-6 md:px-10 py-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto"
                >
                    <HeroSection />
                    <HeroImage />
                    <ObjectivesSection />
                    <FeaturesGrid />
                    <FunctionExplanationsGrid />
                    <WorkflowDiagram />
                    <TechnologyStack />
                    <HowItWorks />
                    <BackButton />
                </motion.div>
            </div>
        </div>
    );
}