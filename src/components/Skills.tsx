
import React from "react";
import { Code, Database, Server, Layers } from "lucide-react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      level: 90,
      color: "from-gray-950 to-black",
    },
    {
      name: "Backend Development",
      icon: Server,
      level: 85,
      color: "from-gray-950 to-black",
    },
    {
      name: "Database Design",
      icon: Database,
      level: 80,
      color: "from-gray-950 to-black",
    },
    {
      name: "Software Architecture",
      icon: Layers,
      level: 75,
      color: "from-gray-950 to-black",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01] as const,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="ml-145 section-divider"></div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="p-8 transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="text-white" size={24} />
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold text-center text-gray-900">
                {skill.name}
              </h3>
              <div className="w-full h-3 mb-2 overflow-hidden bg-gray-200 rounded-full">
                <motion.div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                  variants={progressVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={skill.level}
                />
              </div>
              <motion.p
                className="text-sm text-center text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                {skill.level}% Proficiency
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
