// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 px-6">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="p-6 rounded-2xl bg-white shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Let’s connect</h3>
          <p className="text-[var(--text-secondary)] mb-6">I’m available for internships, freelance work, and full-time roles. Reach out via email or phone below.</p>
          <div className="mb-4">
            <a href="mailto:abbaszaidi028@gmail.com" className="inline-block px-4 py-2 rounded-lg border border-gray-200 bg-white text-[var(--text-primary)]">abbaszaidi028@gmail.com</a>
          </div>
          <div>
            <a href="tel:8755621235" className="inline-block px-4 py-2 rounded-lg border border-gray-200 bg-white text-[var(--text-primary)]">8755621235</a>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-sm">
          <div className="font-semibold mb-2">Available for freelance projects, startup roles, and full-time opportunities.</div>
          <div className="text-[var(--text-secondary)] mt-4">Email: <a href="mailto:abbaszaidi028@gmail.com" className="text-[var(--primary)]">abbaszaidi028@gmail.com</a></div>
          <div className="mt-2">Phone: <a href="tel:8755621235" className="text-[var(--primary)]">8755621235</a></div>
        </div>
      </motion.div>
    </section>
  );
}
