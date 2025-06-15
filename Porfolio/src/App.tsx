import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Partials/NavBar';
import TechOverlay from './components/TechOverlay';
import HeroSection from './sections/HeroSection';
import Footer from './Partials/Footer';
import About from './Pages/About';
import Coding from './Pages/Coding';
import Multimedia from './Pages/Multimedia';
import VFX from './Pages/VFX';
import UXUI from './Pages/UXUI';
import ThreeDModel from './Pages/ThreeDModel';
import { FaPaintBrush, FaCode, FaDraftingCompass } from 'react-icons/fa';

function Home() {
  return (
    <>
      <div className="pt-24 px-15">
        <HeroSection />
      </div>
      {/* New section for clickable cards */}
      <div className="mt-16 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-8 text-white">My Expertise</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
            <div className="text-white h-48 w-48 mb-4 flex items-center justify-center">
              <FaPaintBrush />
            </div>
            <p className="text-lg font-medium text-white">Multimedia</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
            <div className="text-white h-56 w-56 mb-4 flex items-center justify-center">
              <FaCode />
            </div>
            <p className="text-lg font-medium text-white">Programming</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
            <div className="text-white h-56 w-56 mb-4 flex items-center justify-center">
              <FaDraftingCompass />
            </div>
            <p className="text-lg font-medium text-white">UX/UI Design</p>
          </div>
        </div>
      </div>
    </>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative bg-gray-950 min-h-screen">
        <TechOverlay />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/vfx" element={<VFX />} />
          <Route path="/ux-ui" element={<UXUI />} />
          <Route path="/3d-model" element={<ThreeDModel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

