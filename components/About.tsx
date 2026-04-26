// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const aboutText = `I’m a Full Stack Web Developer with 2+ years of experience delivering production-ready web applications. I build performant and accessible frontends with Next.js and robust backends using Laravel. My work focuses on clean UI, scalable architecture, and shipping features that solve real user problems. I’ve contributed to SaaS dashboards and e-commerce platforms, and I enjoy owning projects end-to-end—from design and implementation to deployment and monitoring.`;

  return (
    <section id="about" className="w-full py-20 px-6">
      <motion.div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-8 items-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div>
          <h3 className="text-2xl font-semibold mb-4">My Story</h3>
          <p className="text-[var(--text-secondary)] mb-6">{aboutText}</p>

          <div className="grid grid-cols-3 gap-4">
            <div className="glass p-4 rounded-xl text-center">
              <div className="text-2xl font-bold">2+</div>
              <div className="text-[var(--text-secondary)] text-sm">Years Experience</div>
            </div>
            <div className="glass p-4 rounded-xl text-center">
              <div className="text-2xl font-bold">Full Stack</div>
              <div className="text-[var(--text-secondary)] text-sm">Frontend & Backend</div>
            </div>
            <div className="glass p-4 rounded-xl text-center">
              <div className="text-2xl font-bold">End-to-End</div>
              <div className="text-[var(--text-secondary)] text-sm">Design → Deploy</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-sm">
            <Image src="/p.jpeg" alt="About image" width={224} height={224} className="object-cover w-full h-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
