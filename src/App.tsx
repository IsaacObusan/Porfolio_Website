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
    if (ref.current) {
      if (isHovered) {
        // Rotate when hovered
        const targetRotationX = (mousePosition.y - 0.5) * Math.PI * 0.3;
        const targetRotationY = (mousePosition.x - 0.5) * Math.PI * 0.3;
        
        // Smooth interpolation
        ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.03;
        ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.03;
      } else {
        // Reset to initial rotation when not hovered
        const initialRotationY = Math.PI / 4; // 45 degrees rotation
        ref.current.rotation.x += (0 - ref.current.rotation.x) * 0.05;
        ref.current.rotation.y += (initialRotationY - ref.current.rotation.y) * 0.05;
      }
    }
  });

  // Responsive scale based on screen size
  // const isMobile = window.innerWidth < 768;
  // const modelScale = isMobile ? 0.03 : 0.05;
  const modelScale = 0.03;

  return <primitive ref={ref} object={fbx} scale={modelScale} />;
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
      <div className="px-4 pt-24 sm:px-15">
        <HeroSection />
      </div>
      <div className="flex flex-col items-center w-full mt-16">
        {/* 3D Model Section - Responsive for mobile */}
        <div 
          className="w-full h-[200px] sm:h-[300px] mb-8 cursor-none flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveredCard('model')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Canvas 
            camera={{ 
              position: [0, 0, 5], 
              fov: 45 
            }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <Model isHovered={hoveredCard === 'model'} mousePosition={mousePosition} />
          </Canvas>
        </div>

        <div className="flex flex-wrap justify-center gap-4 px-4 sm:gap-8">
          <div 
            className="flex flex-col items-center p-4 transition duration-300 bg-gray-800 rounded-lg shadow-lg cursor-pointer sm:p-6 hover:scale-105"
            onClick={() => navigate('/multimedia')}
            onMouseEnter={() => setHoveredCard('multimedia')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-center w-32 h-32 mb-4 text-white sm:h-48 sm:w-48">
              <FaPaintBrush size={window.innerWidth < 768 ? 24 : 32} />
            </div>
            <p className="text-base font-medium text-white sm:text-lg">Multimedia</p>
          </div>
          <div 
            className="flex flex-col items-center p-4 transition duration-300 bg-gray-800 rounded-lg shadow-lg cursor-pointer sm:p-6 hover:scale-105"
            onClick={() => navigate('/coding')}
            onMouseEnter={() => setHoveredCard('coding')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-center w-32 h-32 mb-4 text-white sm:h-56 sm:w-56">
              <FaCode size={window.innerWidth < 768 ? 24 : 32} />
            </div>
            <p className="text-base font-medium text-white sm:text-lg">Development</p>
          </div>
          <div 
            className="flex flex-col items-center p-4 transition duration-300 bg-gray-800 rounded-lg shadow-lg cursor-pointer sm:p-6 hover:scale-105"
            onClick={() => navigate('/ux-ui')}
            onMouseEnter={() => setHoveredCard('uxui')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-center w-32 h-32 mb-4 text-white sm:h-56 sm:w-56">
              <FaDraftingCompass size={window.innerWidth < 768 ? 24 : 32} />
            </div>
            <p className="text-base font-medium text-white sm:text-lg">UX/UI Design</p>
          </div>
        </div>
      </div>
    </>
  );
}

// Add Screenshot Protection Modal
const ScreenshotWarningModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.7)',
      zIndex: 9999,
      color: 'white',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2em',
    }}>
      <div style={{
        background: '#222',
        display: 'inline-block',
        padding: '2em',
        borderRadius: '1em',
        maxWidth: '90vw',
      }}>
        <div style={{fontSize: '2em'}}>🔒</div>
        <b>Protected under Republic Act No. 8293<br/>
        (Intellectual Property Code of the Philippines)</b><br/><br/>
        Unauthorized use, copying, or distribution is prohibited and may be subject to legal action.<br/><br/>
        <button onClick={onClose} style={{padding: '0.5em 1.5em', borderRadius: '0.5em', border: 'none', background: '#444', color: 'white', fontSize: '1em', cursor: 'pointer'}}>Close</button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  // Screenshot protection state
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Handler to show warning
    const show = (e?: Event) => {
      setShowWarning(true);
      if (e) e.preventDefault();
    };
    // Print Screen key
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') show(e);
    };
    // Ctrl+P (Print)
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        show(e);
      }
    };
    // Right-click anywhere
    const onContextMenu = (e: MouseEvent) => {
      show(e);
    };
    // Copy event
    const onCopy = (e: ClipboardEvent) => {
      show(e);
    };
    // Drag event
    const onDragStart = (e: DragEvent) => {
      show(e);
    };
    document.addEventListener('keyup', onKeyUp);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('contextmenu', onContextMenu);
    document.addEventListener('copy', onCopy);
    document.addEventListener('dragstart', onDragStart);
    return () => {
      document.removeEventListener('keyup', onKeyUp);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('contextmenu', onContextMenu);
      document.removeEventListener('copy', onCopy);
      document.removeEventListener('dragstart', onDragStart);
    };
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-950">
        <ScreenshotWarningModal open={showWarning} onClose={() => setShowWarning(false)} />
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

