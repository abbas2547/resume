// @ts-nocheck
"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: 'eluue.com',
      desc: 'A clean and modern personal portfolio website built to showcase identity, skills, and personal branding.',
      frontend: ['Next.js','Tailwind'],
      backend: ['Laravel','PostgreSQL'],
      link: 'https://eluue.com'
    },
    {
      title: 'ecom.eluue.com',
      desc: 'A fully functional ecommerce website with product listings, user flow, and modern UI design.',
      frontend: ['Next.js','Tailwind'],
      backend: ['Laravel'],
      link: 'https://ecom.eluue.com'
    },
    {
      title: 'DigitalServices',
      desc: 'A digital services platform currently under development, focused on providing modern web solutions. Planned release in 2027.',
      frontend: ['Next.js'],
      backend: ['Laravel'],
      comingSoon: true
    }
  ];

  return (
    <section id="projects" className="w-full py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} whileHover={{ y: -8 }} transition={{ duration: 0.5 }} className="glass p-5 rounded-2xl">
              <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-50 rounded-md mb-4" />
              <div className="flex items-start justify-between">
                <h4 className="font-semibold">{p.title}</h4>
                {p.comingSoon ? <span className="text-xs px-2 py-1 bg-yellow-600 text-black rounded">Coming Soon</span> : null}
              </div>
              <p className="text-[var(--text-secondary)] text-sm my-2">{p.desc}</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="text-xs text-[var(--text-secondary)]">Frontend:</div>
                <div className="flex gap-2">{p.frontend.map((f) => <span key={f} className="text-xs px-2 py-1 rounded bg-gray-100">{f}</span>)}</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="text-xs text-[var(--text-secondary)]">Backend:</div>
                <div className="flex gap-2">{p.backend.map((f) => <span key={f} className="text-xs px-2 py-1 rounded bg-gray-100">{f}</span>)}</div>
              </div>
              <div className="flex gap-3 mt-4">
                {p.link ? <a href={p.link} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded bg-[var(--primary)] text-white">Live Demo</a> : <button className="text-sm px-3 py-2 rounded bg-gray-100 text-[var(--text-secondary)] cursor-default">Live Demo</button>}
                <a className="text-sm px-3 py-2 rounded border border-gray-200 text-[var(--text-secondary)]">View Code</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
