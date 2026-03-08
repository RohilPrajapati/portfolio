import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skill from "../pages/Skills";
import Project from "../pages/Project";
import ExperienceDetail from "../pages/ExperienceDetail";
import NotFound from "../components/NotFound";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skill />} />
          <Route path="projects" element={<Project />} />
          <Route path="experienceDetail/:id" element={<ExperienceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
