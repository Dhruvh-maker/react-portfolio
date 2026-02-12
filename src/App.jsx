import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Wrapper for Projects page to include TechStack
const ProjectsPage = () => (
  <>
    <Projects />
    <TechStack />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-50 dark:bg-deep-black min-h-screen text-gray-900 dark:text-white overflow-x-hidden flex flex-col transition-colors duration-300">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/5 rounded-full blur-[120px]"></div>
        </div>

        <Navbar />

        <main className="relative z-10 flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<ProjectsPage />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
