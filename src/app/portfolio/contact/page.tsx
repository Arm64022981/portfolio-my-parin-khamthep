'use client';

import Head from 'next/head';
import { Mail, Phone, MapPin, Clock, Facebook, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | ByArm Portfolio</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-[#0d1129] text-white px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="text-lg text-gray-300 mb-12">
            If you want to contact us, you can use the following channels.
          </p>

          <div className="space-y-6 text-left text-gray-200">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-400 mt-1" />
              <div>
                <h2 className="font-semibold text-white">Address</h2>
                <p>29/2 Moo 2, Ruam Chit, Tha Pla, Uttaradit 53150, Thailand</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-400 mt-1" />
              <div>
                <h2 className="font-semibold text-white">Phone</h2>
                <p>080-437-2911</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-400 mt-1" />
              <div>
                <h2 className="font-semibold text-white">Email</h2>
                <p>parinkhamthep21@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-blue-400 mt-1" />
              <div>
                <h2 className="font-semibold text-white">Business Hours</h2>
                <p>Monday - Friday: 09:00 AM - 06:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Facebook className="text-blue-400 mt-1" />
              <div>
                <h2 className="font-semibold text-white">Facebook</h2>
                <a href="https://www.facebook.com/arm.parin.2024" className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">
                  https://www.facebook.com/arm.parin.2024
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="text-blue-400 mt-1" />
              <div>
                <h2 className="font-semibold text-white">LINE</h2>
                <p>@byarm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
