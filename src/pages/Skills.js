import React from "react";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const skills = [
  { skillName: "Python", icon: "🐍", description: "Expert in scripting and backend development." },
  { skillName: "REST API Design", icon: "🌐", description: "Designing efficient and scalable REST APIs with clean endpoints." },
  { skillName: "Django", icon: "🦄", description: "Robust framework for backend APIs and web apps." },
  { skillName: "Backend Optimization", icon: "⚡", description: "Optimizing server performance with query optimization and reducing latency." },
  { skillName: "Database Optimization", icon: "💾", description: "Efficient data storage strategies and indexing for high performance." },
  { skillName: "Celery", icon: "🔄", description: "Asynchronous tasks and background job processing." },
  { skillName: "PostgreSQL", icon: "🐘", description: "Relational database management system." },
  { skillName: "Git", icon: "🔧", description: "Version control for collaboration and project management." },
  { skillName: "Linux", icon: "🐧", description: "Experienced with Linux environments and shell scripting." },
  { skillName: "Docker", icon: "🐳", description: "Containerization for dev, testing, and production." },
  { skillName: "PHP", icon: "🐘", description: "Server-side scripting for dynamic web apps." },
  { skillName: "JavaScript", icon: "⚡", description: "Creating dynamic, interactive web experiences." },
  { skillName: "MySQL", icon: "🐬", description: "Managing structured data with relational database systems." },
  { skillName: "React.js", icon: "⚛️", description: "Reusable, performant UI components for web apps." },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-12 lg:px-24 py-16">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <SkillCard skillName={skill.skillName} icon={skill.icon} description={skill.description} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
