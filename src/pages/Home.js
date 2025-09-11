import React from "react";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const data = {
    name: "Rohil Prajapati",
    role: "Software Developer",
    skills: ["Python", "Django", "RESTful APIs", "Database Design", "RDBMS"],
    experience: "3+ years",
    description:
      "Currently a Software Developer with expertise in designing and developing APIs, and a solid foundation in programming languages like Python and JavaScript. I have successfully delivered projects across various domains and possess expertise in creating efficient database structures, developing RESTful APIs, and integrating third-party services. 🚀",
    links: {
      github: "https://github.com/RohilPrajapati",
      linkedin: "https://linkedin.com/in/rohilprajapati/",
    },
  };

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        
        {/* Left Section - Text */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-blue-400">{data.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
            {data.role} • {data.experience}
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
            {data.description}
          </p>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {data.skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-200 hover:bg-blue-500 hover:text-white transition"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex justify-center md:justify-start gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.a
              href={data.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-blue-500 transition shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-5 h-5" /> GitHub
            </motion.a>
            <motion.a
              href={data.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-blue-500 transition shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section - Profile Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="image/rohil.jpg"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-gray-700"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
