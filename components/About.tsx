// @ts-nocheck
'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Co.',
    dates: 'Jan 2023 - Present',
    achievements: [
      'Led development of 3+ production SaaS applications using Next.js and Laravel',
      'Improved application performance by 40% through optimization strategies',
      'Mentored junior developers and established coding best practices',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions LLC',
    dates: 'Jun 2022 - Dec 2022',
    achievements: [
      'Built and deployed e-commerce platform handling 10k+ daily users',
      'Developed RESTful APIs and optimized database queries',
      'Implemented responsive UI components with Tailwind CSS',
    ],
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'StartUp Hub Inc.',
    dates: 'Jan 2022 - May 2022',
    achievements: [
      'Created dynamic web applications using Next.js and React',
      'Collaborated with designers and product teams on feature implementation',
      'Gained expertise in modern web development practices',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function About() {
  return (
    <section id="experience" className="w-full py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3.5 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg" />

              {/* Content Card */}
              <div className="card p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                    {exp.dates}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-slate-700 flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
