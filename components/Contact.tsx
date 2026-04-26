// @ts-nocheck
'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Main Contact Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            I&apos;m always open to discussing new projects, creative ideas, and opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✉</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                <a
                  href="mailto:abbaszaidi028@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-lg"
                >
                  abbaszaidi028@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">☎</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                <a
                  href="tel:+918755621235"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-lg"
                >
                  +91 8755621235
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-600 mb-6">
            Feel free to reach out at any time. I typically respond within 24 hours.
          </p>
          <motion.a
            href="mailto:abbaszaidi028@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Send Me an Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
