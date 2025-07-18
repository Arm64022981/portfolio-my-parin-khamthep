'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, MessageCircle } from 'lucide-react';
import Header from '@/app/components/Header'; 

const contactItems = [
  {
    icon: MapPin,
    title: 'Address',
    content: '29/2 Moo 2, Ruam Chit, Tha Pla, Uttaradit 53150, Thailand',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '080-437-2911',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'parinkhamthep21@gmail.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Friday: 09:00 AM - 06:00 PM',
  },
  {
    icon: Facebook,
    title: 'Facebook',
    content: 'https://www.facebook.com/arm.parin.2024',
    isLink: true,
  },
  {
    icon: MessageCircle,
    title: 'LINE',
    content: '@byarm',
  },
];

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white">
      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
            Contact Me
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Reach out through any of the channels below. I'm here to connect and collaborate!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800/80 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-md hover:shadow-xl transition-all duration-300 group hover:border-blue-400/50"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <item.icon className="text-blue-400 w-6 h-6 flex-shrink-0" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white text-lg mb-1">{item.title}</h2>
                    {item.isLink ? (
                      <a
                        href={item.content}
                        className="text-blue-300 hover:text-blue-400 hover:underline transition-all duration-200 break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-200 text-base leading-relaxed">{item.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 py-6 text-center text-gray-500">
        <p className="text-sm transition-all duration-200 hover:text-gray-400">
          © {new Date().getFullYear()} ByArm. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
