'use client';

import { motion } from 'framer-motion';

// Update this with your actual skills
const skillCategories = [
  {
    category: 'Frontend',
    skills: [],
  },
  {
    category: 'Backend',
    skills: [],
  },
  {
    category: 'Database & Tools',
    skills: [],
  },
  {
    category: 'Other Skills',
    skills: [],
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
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-900 mb-4">
              Skills
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Technologies and expertise I work with.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
              >
                <div className="card p-8">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">
                    {category.category}
                  </h3>

                  {category.skills.length > 0 ? (
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
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: idx * 0.1,
                                ease: 'easeOut',
                              }}
                              style={{ height: '100%', borderRadius: '9999px' }}
                              className="bg-gradient-to-r from-blue-600 to-blue-400"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-sm">Add your skills here</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
