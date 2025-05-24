'use client';


import Head from 'next/head';
import Header from '@/app/components/Header';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "May 10, 2025",
    summary: "Learn the basics of Next.js and how to create your first React app with server-side rendering."
  },
  {
    id: 2,
    title: "How to Use Tailwind CSS",
    date: "May 15, 2025",
    summary: "A quick guide to using Tailwind CSS utility classes to rapidly build custom UI components."
  },
  {
    id: 3,
    title: "Deploying Your Website",
    date: "May 20, 2025",
    summary: "Step-by-step instructions to deploy your Next.js website on Vercel or other hosting platforms."
  }
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | ByArm Portfolio</title>
      </Head>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>

          <div className="space-y-8">
            {blogPosts.map(post => (
              <article key={post.id} className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 cursor-pointer">{post.title}</h2>
                <time className="text-sm text-gray-400 mb-4 block">{post.date}</time>
                <p className="text-gray-300">{post.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
