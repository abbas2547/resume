'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Next.js', level: 95 },
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Laravel', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'PHP', level: 85 },
      { name: 'RESTful APIs', level: 90 },
    ],
  },
  {
    category: 'Database & Tools',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 78 },
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
    ],
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'UI/UX Design', level: 80 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Testing', level: 78 },
      { name: 'Deployment', level: 88 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 px-6 bg-white">
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
            Skills
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            A comprehensive toolkit of technologies and expertise I've mastered over years of dedicated development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="card p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-slate-900">{skill.name}</span>
                      <span className="text-sm font-medium text-blue-600">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: idx * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 bg-slate-50 rounded-lg border border-slate-200"
        >
          <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Problem Solving',
              'Team Collaboration',
              'Project Management',
              'Communication',
              'Mentoring',
              'Agile Methodology',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
