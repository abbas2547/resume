'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 pb-8 border-l-4 border-blue-600 pl-6">
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
                MY STORY
              </p>
              <h2 className="font-serif text-5xl font-bold text-slate-900">
                Turning Ideas into Impactful <span className="text-blue-600">Web Solutions</span>
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-4 bg-slate-50 rounded-lg"
              >
                <div className="text-2xl mb-1">📅</div>
                <p className="font-semibold text-slate-900">2+</p>
                <p className="text-sm text-slate-600">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-4 bg-slate-50 rounded-lg"
              >
                <div className="text-2xl mb-1">💻</div>
                <p className="font-semibold text-slate-900">Full Stack</p>
                <p className="text-sm text-slate-600">Frontend & Backend</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-slate-50 rounded-lg"
              >
                <div className="text-2xl mb-1">🚀</div>
                <p className="font-semibold text-slate-900">End-to-End</p>
                <p className="text-sm text-slate-600">Design → Deploy</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I&apos;m a dedicated and motivated web developer with over two years of hands-on experience in building modern web applications. I have built a strong foundation in core technologies such as HTML, CSS, and JavaScript, and gained hands-on experience with modern frameworks like Next.js and Laravel.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I specialize in creating responsive and user-friendly web applications. I enjoy building seamless user experiences and focus on writing clean code. I&apos;m always learning, always building, and always striving to grow as a software engineer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
