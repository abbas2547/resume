'use client';

import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Tech Institute of Innovation',
    year: '2020 - 2024',
    details: [
      'GPA: 3.8/4.0',
      'Dean\'s List all semesters',
      'Major coursework: Web Development, Database Systems, Software Engineering',
    ],
  },
  {
    id: 2,
    degree: 'Web Development Bootcamp',
    field: 'Full Stack Development',
    institution: 'Modern Dev Academy',
    year: '2021 - 2022',
    details: [
      'Intensive 12-week program',
      'Specialization in Next.js and Laravel',
      'Completed 5+ capstone projects',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Education() {
  return (
    <section id="education" className="w-full py-24 px-6 bg-white">
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
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded-full" />
        </motion.div>

        {/* Education Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="card p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">{edu.field}</p>
                  <p className="text-slate-600">{edu.institution}</p>
                </div>
                <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                  {edu.year}
                </span>
              </div>

              {/* Details */}
              <ul className="space-y-2 mt-6">
                {edu.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-slate-700 flex items-start gap-3 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 p-8 bg-slate-50 rounded-lg border border-slate-200"
        >
          <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Next.js Advanced Certification',
              'Laravel Expert Developer',
              'AWS Solutions Architect Associate',
              'Responsive Web Design Professional',
            ].map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-100"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="font-medium text-slate-900">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
