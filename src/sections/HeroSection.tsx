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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-white bg-gray-900 sm:px-8 sm:py-16">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:gap-x-20">
          {/* Text Content */}
          <div className="w-full mb-8 text-center lg:w-3/5 lg:text-left lg:mb-0">
            <h1 className="mb-6 text-2xl italic font-semibold leading-tight sm:text-3xl lg:text-4xl">
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
                className="px-6 py-3 text-lg font-medium transition duration-300 border border-white rounded-full sm:px-10 sm:py-5 sm:text-xl hover:bg-white hover:text-gray-800"
              >
                KNOW ME
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center w-full mt-6 lg:w-2/5 lg:justify-start lg:mt-0">
            <img 
              src={profilePic} 
              alt="Profile" 
              className="object-cover w-48 h-48 border-4 border-white rounded-full shadow-lg sm:w-64 sm:h-64 lg:w-80 lg:h-80" 
            />
          </div>
        </div>

        {/* Tools and LinkedIn Section */}
        <div className="w-full mt-12">
          <div className="flex flex-col items-center justify-between w-full gap-6 sm:flex-row sm:gap-0">
            {/* Tools Section */}
            <div className="w-full sm:w-auto">
              <p className="mb-4 text-sm text-center text-gray-400 sm:text-left">Tools used:</p>
              <div className="flex flex-wrap justify-center gap-6 sm:justify-start sm:gap-12">
                <img src={FigmaLogo} alt="Figma" className="object-contain w-8 h-8 sm:h-12 sm:w-12" />
                <img src={BlenderLogo} alt="Blender" className="object-contain w-8 h-8 sm:h-12 sm:w-12" />
                <img src={ReactLogo} alt="React" className="object-contain w-8 h-8 sm:h-12 sm:w-12" />
                <img src={AeLogo} alt="After Effects" className="object-contain w-8 h-8 sm:h-12 sm:w-12" />
                <img src={PsLogo} alt="Photoshop" className="object-contain w-8 h-8 sm:h-12 sm:w-12" />
              </div>
            </div>

            {/* LinkedIn Section */}
            <div className="flex items-center mt-6 sm:mt-0">
              <span className="text-base font-semibold text-blue-400 sm:text-lg">Isaac Obusan</span>
              <a 
                href="https://www.linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 sm:ml-8"
              >
                <img 
                  src={LinkedInLogo} 
                  alt="LinkedIn" 
                  className="object-contain w-6 h-6 sm:h-8 sm:w-8" 
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