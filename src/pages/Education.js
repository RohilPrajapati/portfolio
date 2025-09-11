import React from "react";
import EducationCard from "../components/EducationCard";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor in Computer Application",
    institution: "Asian College of Higher Studies, Tribhuvan University",
    startDate: "August 2019",
    endDate: "September 2024",
    description: `
      <ul class='list-disc pl-5 space-y-1'>
        <li>Gained in-depth knowledge of programming languages such as Python, JavaScript, and PHP.</li>
        <li>Completed coursework in data structures, algorithms, database management, and web development.</li>
        <li>Collaborated with peers on various academic projects, enhancing team-building and communication skills.</li>
        <li>Engaged in extracurricular activities, including coding bootcamps and technical workshops hosted by the institution.</li>
        <li>Achieved academic excellence with consistent top grades in core subjects.</li>
      </ul>
    `,
  },
  {
    degree: "School Leaving Certificate (S.L.C., +2, Management)",
    institution: "Ashirwad College, National Examination Board",
    startDate: "Not Mention",
    endDate: "July 2019",
    description: `<strong>Major Subject:</strong> Computer Science, Math`,
  },
  {
    degree: "Secondary Education Examination(S.E.E.)",
    institution: "Learning Zone Academy, National Examination Board",
    startDate: "Not Mention",
    endDate: "June 2017",
    description: ``,
  },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-12 lg:px-24 py-16">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        Education
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
      </motion.h1>

      {/* Education Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {educationData.map((education, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <EducationCard
              degree={education.degree}
              institution={education.institution}
              startDate={education.startDate}
              endDate={education.endDate}
              description={education.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
