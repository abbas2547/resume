'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Copyright */}
            <div className="text-slate-600 text-sm mb-6 md:mb-0">
              © {currentYear} Abbas Raza. All rights reserved.
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-8 text-sm">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Back to Top
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mt-8 pt-8 border-t border-slate-100">
            <p className="text-center text-xs text-slate-500">
              Crafted with care using Next.js, React, and Framer Motion.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
