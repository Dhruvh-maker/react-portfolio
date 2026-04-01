import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FooterWidgets from './components/FooterWidgets';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';
import Guestbook from './sections/Guestbook';


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

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="bg-pure-black min-h-screen text-white overflow-x-hidden flex flex-col font-sans">
      <ScrollToTop />

      <Navbar />

      <main className="relative z-10 flex-grow pt-28 pb-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guestbook" element={<Guestbook />} />
          </Routes>
        </AnimatePresence>
      </main>

      <FooterWidgets />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
