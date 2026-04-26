// @ts-nocheck
"use client";
import { motion } from "framer-motion";

export default function SocialLinks() {
  const links = [
    { label: 'Email', href: 'mailto:abbaszaidi028@gmail.com' },
    { label: 'Phone', href: 'tel:8755621235' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {links.map((l) => (
        <motion.a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="p-4 rounded-xl flex items-center justify-center text-sm border border-gray-200 bg-white">
          {l.label}
        </motion.a>
      ))}
    </div>
  );
}
