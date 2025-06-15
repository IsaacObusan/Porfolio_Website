import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.png';
import FigmaLogo from '../assets/Figma.png';
import BlenderLogo from '../assets/blender 3D.png';
import ReactLogo from '../assets/REACT.png';
import AeLogo from '../assets/AE.png';
import PsLogo from '../assets/photoshop.png';
import LinkedInLogo from '../assets/Linkedin.webp';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 sm:px-8 py-8 sm:py-16">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-x-20 w-full">
          {/* Text Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl italic font-semibold mb-6 leading-tight">
              Hi! I'm <span className="text-blue-400">John Isaac C. Obusan</span>, an IT
              student who loves web design, coding, 3d
              model, and editing. I use tools like React,
              Figma, and After Effects. I've done
              freelance work and worked in our school's
              IT office.
            </h1>
            <div className="flex justify-center lg:justify-start">
              <Link 
                to="/about" 
                className="border border-white rounded-full px-6 sm:px-10 py-3 sm:py-5 text-lg sm:text-xl font-medium hover:bg-white hover:text-gray-800 transition duration-300"
              >
                KNOW ME
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start mt-6 lg:mt-0">
            <img 
              src={profilePic} 
              alt="Profile" 
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover border-4 border-white shadow-lg" 
            />
          </div>
        </div>

        {/* Tools and LinkedIn Section */}
        <div className="mt-12 w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 sm:gap-0">
            {/* Tools Section */}
            <div className="w-full sm:w-auto">
              <p className="text-sm text-gray-400 mb-4 text-center sm:text-left">Tools used:</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-12">
                <img src={FigmaLogo} alt="Figma" className="h-8 w-8 sm:h-12 sm:w-12 object-contain" />
                <img src={BlenderLogo} alt="Blender" className="h-8 w-8 sm:h-12 sm:w-12 object-contain" />
                <img src={ReactLogo} alt="React" className="h-8 w-8 sm:h-12 sm:w-12 object-contain" />
                <img src={AeLogo} alt="After Effects" className="h-8 w-8 sm:h-12 sm:w-12 object-contain" />
                <img src={PsLogo} alt="Photoshop" className="h-8 w-8 sm:h-12 sm:w-12 object-contain" />
              </div>
            </div>

            {/* LinkedIn Section */}
            <div className="flex items-center mt-6 sm:mt-0">
              <span className="text-blue-400 text-base sm:text-lg font-semibold">Isaac Obusan</span>
              <a 
                href="https://www.linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 sm:ml-8"
              >
                <img 
                  src={LinkedInLogo} 
                  alt="LinkedIn" 
                  className="h-6 w-6 sm:h-8 sm:w-8 object-contain" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 