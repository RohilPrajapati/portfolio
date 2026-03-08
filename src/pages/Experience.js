import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";
import data from '../data/experience.json';

const experienceData = data;

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-12 lg:px-24 py-16">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        Experience
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
      </motion.h1>

      {/* Experience Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {experienceData.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <ExperienceCard
              id={experience.id}
              jobTitle={experience.jobTitle}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
