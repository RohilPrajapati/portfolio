import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ title, institution, date, objective, details, githubLink, websiteLink }) => {
    const [showFull, setShowFull] = useState(false);
    const previewLength = 120;

    const toggleDetails = () => setShowFull(!showFull);

    const getPreview = (text, length) =>
        text.length > length ? text.slice(0, length) + "..." : text;

    return (
        <motion.div
            className="bg-gray-900 bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-xl p-5 flex flex-col justify-between shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 min-h-[250px]"
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex flex-col">
                <h2 className="text-lg font-bold text-white">{title}</h2>
                <p className="text-gray-400 text-sm mt-1">{institution} | {date}</p>

                {/* Objective */}
                <p className="text-gray-300 text-sm mt-2">
                    <strong>Objective:</strong> {objective}
                </p>

                {/* Details */}
                <div className="text-gray-300 text-sm mt-1 leading-relaxed">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={showFull ? "full" : "short"}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {showFull ? (
                                <span>{details}</span>
                            ) : (
                                <span>{getPreview(details, previewLength)}</span>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Toggle button */}
                    {details.length > previewLength && (
                        <button
                            onClick={toggleDetails}
                            className="ml-1 text-blue-400 hover:text-blue-500 font-medium mt-1 focus:outline-none"
                        >
                            {showFull ? "Show Less" : "Read More"}
                        </button>
                    )}
                </div>
                <div className="absolute -left-4 top-0 w-1 h-full bg-blue-500 rounded"></div>


                {/* GitHub link */}
                {githubLink && (
                    <div className="mt-3">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500 font-medium"
                        >
                            View on GitHub
                        </a>
                    </div>
                )}

                {/* Website link */}
                {websiteLink && (
                    <div className="mt-3">
                        <a
                            href={websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-500 font-medium"
                        >
                            View on Website
                        </a>
                    </div>
                )}
            </div>

        </motion.div>
    );
};

export default ProjectCard;
