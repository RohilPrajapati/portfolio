import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skillName, icon, description }) => {
  return (
    <motion.div
      className="bg-gray-900 bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 min-h-[180px] max-h-[220px]"
      whileHover={{ scale: 1.05 }}
    >
      {/* Icon */}
      <div className="text-5xl mb-1">{icon}</div>

      {/* Skill Name */}
      <h3 className="text-lg font-semibold text-white">{skillName}</h3>

      {/* Description */}
      <p
        className="text-gray-300 text-sm leading-snug line-clamp-2 mt-1"
        title={description} // tooltip shows full description on hover
      >
        {description}
      </p>
    </motion.div>
  );
};

export default SkillCard;
