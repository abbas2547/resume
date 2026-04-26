// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="w-full py-20 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-semibold mb-3 text-[var(--text-primary)]">Hi, I'm Abbas Raza</h1>
          <h2 className="text-lg font-medium text-[var(--text-secondary)] mb-4">Full Stack Web Developer</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-lg">I build modern, accessible, and performant web applications using Next.js for frontend and Laravel for backend. I focus on clean UI, scalable architecture, and shipping production-ready features.</p>

          <div className="flex gap-3 mb-6 flex-wrap">
            <a href="mailto:abbaszaidi028@gmail.com" className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-[var(--text-primary)] shadow-sm">abbaszaidi028@gmail.com</a>
            <a href="tel:8755621235" className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-[var(--text-primary)] shadow-sm">8755621235</a>
          </div>

          <div className="flex items-center gap-4">
            <motion.a whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} href="#projects" className="px-5 py-3 rounded-full text-white bg-[var(--primary)] shadow-sm">View My Work</motion.a>
            <motion.a whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} href="/resume.pdf" className="px-5 py-3 rounded-full border border-gray-200 text-[var(--primary)] bg-white">Download Resume</motion.a>
          </div>
        </motion.div>

        <motion.div className="flex items-center justify-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[rgba(37,99,235,0.12)] to-[rgba(100,116,139,0.06)] blur-3xl -z-10" />
            <Image src="/p.jpeg" alt="Abbas Raza" width={288} height={288} className="object-cover w-full h-full relative z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
