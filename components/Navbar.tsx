"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-sm border-b border-gray-200">
      <div className="w-full py-3 px-6 flex items-center justify-between max-w-[1200px] mx-auto">
        <nav className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          <a href="#" className="hover:text-[var(--primary)] transition">Home</a>
          <a href="#about" className="hover:text-[var(--primary)] transition">About</a>
          <a href="#projects" className="hover:text-[var(--primary)] transition">Projects</a>
          <a href="#contact" className="hover:text-[var(--primary)] transition">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="/resume.pdf" className="px-4 py-2 rounded-full bg-[var(--primary)] text-white text-sm shadow-sm hover:shadow-md transition">Download Resume</a>
        </div>

        <div className="md:hidden">
          <button aria-label="Open menu" className="p-2 rounded-md border border-gray-200 bg-white">Menu</button>
        </div>
      </div>
    </header>
  );
}
