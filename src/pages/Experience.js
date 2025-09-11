import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import { motion } from "framer-motion";

const experienceData = [
  {
    jobTitle: "Software Developer",
    company: "Dhuni Software",
    startDate: "June 2024",
    endDate: "Present",
    description: `
      <ul class='list-disc pl-5 space-y-1'>
        <li>Developed clean, efficient, and maintainable code utilizing the Django framework to build robust web applications.</li>
        <li>Integrated third-party APIs and services to extend application functionality and improve user experience.</li>
        <li>Optimized application performance, significantly reducing API response times and enhancing overall efficiency.</li>
        <li>Identified, debugged, and resolved complex technical issues, ensuring smooth and seamless application functionality.</li>
        <li>Managed and optimized MySQL stored procedures and queries, ensuring efficient data retrieval and system performance.</li>
        <li>Improved existing API endpoints by implementing pagination and optimizing SQL queries to minimize server load and database hits.</li>
      </ul>`,
  },
  {
    jobTitle: "Software Intern",
    company: "LIS Nepal Pvt. Ltd.",
    startDate: "November 2023",
    endDate: "May 2024",
    description: `
      <ul class='list-disc pl-5 space-y-1'>
        <li>Managed <strong>MySQL</strong> and <strong>PostgreSQL</strong> databases and wrote queries to extract meaningful insights.</li>
        <li>Built dynamic web applications using <strong>Laravel</strong> and <strong>CodeIgniter</strong>.</li>
        <li>Created responsive and user-friendly interfaces using <strong>React.js</strong>.</li>
        <li>Collaborated with the system department to optimize deployment.</li>
        <li>Implemented <strong>Python</strong> scripts for cron jobs and automation tasks.</li>
      </ul>`,
  },
  {
    jobTitle: "Backend Developer",
    company: "Starter Nepal Pvt. Ltd.",
    startDate: "August 2022",
    endDate: "June 2023",
    description: `
      <ul class='list-disc pl-5 space-y-1'>
        <li>Planned and developed scalable system architectures.</li>
        <li>Designed and developed back-end APIs with <strong>Django (DRF)</strong>.</li>
        <li>Implemented <em>JWT authentication</em> for security.</li>
        <li>Analyzed data and generated reports as required.</li>
        <li>Collaborated with front-end developers for seamless integration.</li>
        <li>Provided guidance to junior developers on backend practices.</li>
      </ul>`,
  },
  {
    jobTitle: "Backend Intern",
    company: "Starter Nepal Pvt. Ltd.",
    startDate: "July 2020",
    endDate: "April 2021",
    description: `
      <ul class='list-disc pl-5 space-y-1'>
        <li>Worked with <strong>Django</strong> ORM, models, URLs, and views.</li>
        <li>Built and tested APIs using <strong>Django Rest Framework (DRF)</strong>.</li>
        <li>Managed and maintained the database and codebase.</li>
        <li>Implemented SQL queries for reporting and analytics.</li>
        <li>Wrote <strong>Python</strong> scripts for automation tasks.</li>
        <li>Assisted seniors in troubleshooting production bugs.</li>
      </ul>`,
  },
];

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
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <ExperienceCard
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
