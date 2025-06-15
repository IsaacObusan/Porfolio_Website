import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three-stdlib';
import * as THREE from 'three';
import NavBar from './Partials/NavBar';
import TechOverlay from './components/TechOverlay';
import HeroSection from './sections/HeroSection';
import Footer from './Partials/Footer';
import About from './Pages/About';
import Coding from './Pages/coding';
import Multimedia from './Pages/Multimedia';
import UXUI from './Pages/UXUI';
import { FaPaintBrush, FaCode, FaDraftingCompass } from 'react-icons/fa';

// 3D Model Component
function Model({ isHovered, mousePosition }: { isHovered: boolean; mousePosition: { x: number; y: number } }) {
  const ref = useRef<THREE.Group>(null);
  const fbx = useLoader(FBXLoader, '/sample.fbx');

  useEffect(() => {
    if (fbx) {
      // Center the model
      const box = new THREE.Box3().setFromObject(fbx);
      const center = box.getCenter(new THREE.Vector3());
      fbx.position.sub(center);
      
      // Set initial rotation for better readability
      fbx.rotation.y = Math.PI / 4; // 45 degrees rotation
    }
  }, [fbx]);

  useFrame(() => {
    if (ref.current && isHovered) {
      // Only rotate when hovered
      const targetRotationX = (mousePosition.y - 0.5) * Math.PI * 0.3;
      const targetRotationY = (mousePosition.x - 0.5) * Math.PI * 0.3;
      
      // Smooth interpolation
      ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.03;
      ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.03;
    }
  });

  return <primitive ref={ref} object={fbx} scale={0.05} />;
}

function Home() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <>
      <div className="pt-24 px-15">
        <HeroSection />
      </div>
      <div className="mt-16 w-full flex flex-col items-center">
        {/* 3D Model Section - Now before cards */}
        <div 
          className="w-full h-[300px] mb-8 cursor-none"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveredCard('model')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <Model isHovered={hoveredCard === 'model'} mousePosition={mousePosition} />
          </Canvas>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div 
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => navigate('/multimedia')}
            onMouseEnter={() => setHoveredCard('multimedia')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-white h-48 w-48 mb-4 flex items-center justify-center">
              <FaPaintBrush />
            </div>
            <p className="text-lg font-medium text-white">Multimedia</p>
          </div>
          <div 
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => navigate('/coding')}
            onMouseEnter={() => setHoveredCard('coding')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-white h-56 w-56 mb-4 flex items-center justify-center">
              <FaCode />
            </div>
            <p className="text-lg font-medium text-white">Development</p>
          </div>
          <div 
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => navigate('/ux-ui')}
            onMouseEnter={() => setHoveredCard('uxui')}
            onMouseLeave={() => setHoveredCard(null)}
          >
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
          <Route path="/ux-ui" element={<UXUI />} />
      
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

