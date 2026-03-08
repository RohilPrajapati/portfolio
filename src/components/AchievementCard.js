import React from "react";
import { motion } from "framer-motion";

const AchievementCard = ({
    title,
    problem,
    investigative_approach = [],
    solution,
    impact,
    techStack = [],
}) => {
    return (
        <motion.div
            className="bg-gray-900 bg-opacity-60 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative"
            whileHover={{ scale: 1.05 }}
        >
            {/* Header: Title & Tech Stack */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content Body */}
            <div className="mt-4 text-gray-300 text-sm leading-relaxed space-y-4">
                {/* Challenge Section */}
                <div>
                    <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-1">
                        The Challenge
                    </p>
                    <p>{problem}</p>
                </div>

                {/* Investigative Approach Section */}
                {investigative_approach.length > 0 && (
                    <div className="bg-black/30 rounded-lg p-4 border border-gray-800">
                        <p className="text-gray-500 font-semibold text-xs uppercase tracking-widest mb-3">
                            Investigation & Debugging
                        </p>
                        <ul className="space-y-2">
                            {investigative_approach.map((step, index) => (
                                <li key={index} className="flex gap-3 text-gray-400">
                                    <span className="text-blue-500 font-mono">0{index + 1}.</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Solution & Impact Grid */}
                <div className="pt-2 border-t border-gray-800">
                    <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-1">
                        Final Solution
                    </p>
                    {/* <p className="text-gray-300">{solution}</p> */}
                    <ul className="px-4 space-y-2 list-disc pt-2">
                        {solution.map((step, index) => (
                            <li key={index} className=" text-gray-400">
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-green-500 font-semibold text-xs uppercase tracking-widest mb-1">
                        Measurable Impact
                    </p>
                    <p className="text-green-400 italic">{impact}</p>
                </div>
            </div>

            {/* Timeline Accent (Identical to ExperienceCard) */}
            <div className="absolute -left-4 top-0 w-1 h-full bg-blue-500 rounded"></div>
        </motion.div>
    );
};

export default AchievementCard;