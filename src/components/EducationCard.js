import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCleanText } from "../utils/index.js"

const EducationCard = ({ degree, institution, startDate, endDate, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const isDescriptionLong = description.length > 150;

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  return (
    <motion.div
      className="relative bg-gray-900 bg-opacity-60 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-2xl font-bold text-white">{degree}</h2>
      <p className="text-gray-400 mt-1">
        {institution} | {startDate} - {endDate}
      </p>

      <div className="mt-4 text-gray-300 text-sm leading-relaxed">
        <AnimatePresence initial={false}>
          <motion.div
            key={showFullDescription ? "full" : "short"}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html:
                  showFullDescription || !isDescriptionLong
                    ? description
                    : getCleanText(description, 250),
              }}
            />
          </motion.div>
        </AnimatePresence>

        {isDescriptionLong && (
          <button
            onClick={toggleDescription}
            className="mt-2 text-blue-400 hover:text-blue-500 font-medium focus:outline-none"
          >
            {showFullDescription ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Optional Timeline Accent */}
      <div className="absolute -left-4 top-0 w-1 h-full bg-blue-500 rounded"></div>
    </motion.div>
  );
};

export default EducationCard;
