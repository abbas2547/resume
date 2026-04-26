// @ts-nocheck
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen w-full pt-32 pb-20 px-6 bg-image-overlay flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm font-medium text-blue-600 mb-6 uppercase tracking-widest"
          >
            Welcome to my resume
          </motion.p>

          {/* Main Heading */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight text-balance">
            Abbas Raza.
          </h1>

          {/* Subheading */}
          <h2 className="font-sans text-2xl md:text-3xl font-light text-slate-600 mb-8 text-balance">
            Full-Stack Developer | Next.js & Laravel Specialist
          </h2>

          {/* Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-sans text-lg text-slate-700 leading-relaxed mb-12 max-w-2xl text-balance"
          >
            I craft elegant, high-performance web applications with modern technologies. Specializing in Next.js and Laravel, I build scalable solutions that combine beautiful user experiences with robust backend architecture.
          </motion.p>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 mb-12"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Email</p>
              <a
                href="mailto:abbaszaidi028@gmail.com"
                className="text-lg text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                abbaszaidi028@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Phone</p>
              <a
                href="tel:+918755621235"
                className="text-lg text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                +91 8755621235
              </a>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('experience');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
