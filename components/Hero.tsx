// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen w-full pt-32 pb-20 px-6 bg-white flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 bg-blue-50 rounded-full"
            >
              <p className="text-sm font-medium text-blue-600">👋 Hello, I&apos;m</p>
            </motion.div>

            {/* Main Name */}
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-slate-900 mb-4 leading-tight">
              Abbas <span className="text-blue-600">Raza</span>
            </h1>

            {/* Job Title */}
            <h2 className="font-sans text-2xl font-medium text-slate-700 mb-6">
              Full Stack Web Developer
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-sans text-lg text-slate-600 leading-relaxed mb-8 max-w-md"
            >
              I build clean, responsive, and user-friendly web applications that solve real-world problems.
            </motion.p>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="mailto:abbaszaidi028@gmail.com"
                className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 transition-colors"
              >
                <span>✉</span>
                <span className="font-medium text-slate-700">abbaszaidi028@gmail.com</span>
              </a>
              <a
                href="tel:+918755621235"
                className="flex items-center gap-3 px-4 py-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 transition-colors"
              >
                <span>📱</span>
                <span className="font-medium text-slate-700">8755621235</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('skills');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                View My Work →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-slate-400 transition-colors"
              >
                ⬇ Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-center px-6">
                <div>
                  <p className="text-6xl mb-2">📸</p>
                  <p className="font-medium">Your Photo Here</p>
                  <p className="text-sm text-slate-500 mt-1">Add your professional photo to make it stand out</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
