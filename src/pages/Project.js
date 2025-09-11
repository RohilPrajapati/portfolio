import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projectData = [
    {
        title: "Project Management System & AMS",
        institution: "LIS Nepal Pvt. Ltd.",
        date: "May 2024",
        objective: "To develop a comprehensive project management system for tracking projects, resources, tasks, and sprints , ensuring efficient planning, monitoring, and execution of projects across teams.",
        details: "I contributed to a system for tracking projects and resources by generating insightful reports, adding and enhancing features, and resolving issues using Laravel, React, and PostgreSQL. Additionally, I maintained and updated legacy systems built with CodeIgniter, ensuring smooth functionality and alignment with evolving business needs. Assisted system department in implementing CI/CD pipeline for the project.",
        githubLink: null,
        websiteLink: null
    },
    {
        title: "Hospital Management System",
        institution: "Starter Nepal Pvt. Ltd.",
        date: "May 2023",
        objective: "This project was initiate to handle the pharmacy, hospital service billing, Report generation of the billing and Lab report Management System",
        details: "Currently this system has a record of selling 12000+ quantities of medicine worth NRs. 600k + Monthly billing. This system was built-using Django, Quasar (Vue.js). My role in this project was to design and develop the database and API for this system. Setup JWT authentication to the project. Tested API using Postman.",
        githubLink: null,
        websiteLink: "https://hmsdemo.starternepal.com/",
    },
    {
        title: "E-commerce Web Application (Wosa: Pasa:)",
        institution: "Asian College of Higher Studies",
        date: "August 2022",
        objective: "Users can buy and sell clothing products online. Admin can monitor users and stock.",
        details: "Project was created to meet the requirement of Bachelor Projects program in 4th semester. The core features of the project are Online Payment Gateway Integration (eSewa), Admin Panel to monitor and manage the stock, manage users, etc.",
        githubLink: "https://github.com/RohilPrajapati/Wosa-Pasa",
        websiteLink: null
    },
    {
        title: "Quiz Web Application",
        institution: "Asian College of Higher Studies",
        date: "April 2022",
        objective: "Users can play quiz games online.",
        details: "Project was created to meet the requirement of Scripting Language Subject in 4th Semester. It allows users to play quiz games and the admin Panel to monitor user results and manage users.",
        githubLink: "https://github.com/RohilPrajapati/Quizer",
        websiteLink: null
    },
];

const Project = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-12 lg:px-24 py-16">
            <motion.h1
                className="text-4xl font-extrabold text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Projects
                <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
            </motion.h1>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
            >
                {projectData.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Project;
