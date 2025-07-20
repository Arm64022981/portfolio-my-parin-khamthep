'use client';

import Head from 'next/head';
import Header from '@/app/components/Header';
import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "October 28, 2024",
    summary: "Learn the basics of Next.js and how to create your first React app with server-side rendering.",
    slug: "getting-started-with-nextjs"
  },
  {
    id: 2,
    title: "How to Use Tailwind CSS",
    date: "April 1, 2025",
    summary: "A quick guide to using Tailwind CSS utility classes to rapidly build custom UI components.",
    slug: "how-to-use-tailwind-css"
  },
  {
    id: 3,
    title: "DBuilding a Simple REST API with Flask",
    date: " April 1, 2025",
    summary: "Learn how to build a simple RESTful API using Flask, including routing, JSON responses, and basic error handling.",
    slug: "building-rest-api-with-flask"
  },
  {
    id: 4,
    title: "Connecting Next.js Frontend to a Flask Backend API",
    date: " April 19, 2025",
    summary: "Step-by-step guide to connecting your Next.js frontend to a Flask backend API using fetch or Axios, with CORS setup.",
    slug: "connect-nextjs-to-flask-api"
  },
  {
    id: 5,
    title: "Securing Your Flask API with JWT Authentication",
    date: "April 5, 2025",
    summary: "Implement token-based authentication in your Flask API using JSON Web Tokens (JWT) to protect routes and user data.",
    slug: "flask-api-jwt-authentication"
  },
  {
    id: 6,
    title: "Deploying a Next.js Website to Vercel and Render",
    date: "June 10, 2025",
    summary: "Learn how to deploy your Next.js application step-by-step to both Vercel and Render platforms, including setup, environment variables, and CI/CD.",
    slug: "deploy-nextjs-to-vercel-and-render"
  },
  {
    id: 7,
    title: "Deploying a Flask API on Render",
    date: "July 15, 2025",
    summary: "Deploy your Flask backend API on Render with steps to set up the Gunicorn server, environment variables, and production config.",
    slug: "deploy-flask-api-on-render"
  }

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

const postVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | ByArm Portfolio</title>
        <meta name="description" content="Explore the latest insights on web development, Next.js, Tailwind CSS, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white px-4 sm:px-6 lg:px-8 py-20 font-inter">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-12 text-center tracking-tight"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Blog
          </motion.h1>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map(post => (
              <motion.article
                key={post.id}
                className="p-6 bg-gray-800/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md border border-gray-700/50 group"
                variants={postVariants}
                role="article"
              >
                <Link href={`/blog/${post.slug}`} passHref>
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-3 group-hover:text-blue-400 cursor-pointer transition-colors duration-200">
                    {post.title}
                  </h2>
                </Link>
                <time className="text-sm text-gray-400 mb-4 block font-mono tracking-wide" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5">{post.summary}</p>
                <Link href={`/blog/${post.slug}`} passHref aria-label={`Read more about ${post.title}`}>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}