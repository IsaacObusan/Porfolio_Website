import React from 'react';
import profilePic from '../assets/profile.png';
import FigmaLogo from '../assets/Figma.png';
import BlenderLogo from '../assets/blender 3D.png';
import ReactLogo from '../assets/REACT.png';
import AeLogo from '../assets/AE.png';
import PsLogo from '../assets/photoshop.png';
import LinkedInLogo from '../assets/Linkedin.webp';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen py-16 bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[2000px] mx-auto px-16">
        <div className="lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-4xl italic font-semibold mb-4 leading-tight">
            Hi! I'm <span className="text-blue-400">John Isaac C. Obusan</span>, an IT
            student who loves web design, coding, 3d
            model, and editing. I use tools like React,
            Figma, and After Effects. I've done
            freelance work and  worked in our school's
            IT office.
          </h1>
          <div className="flex justify-center lg:justify-start">
            <button className="border border-white rounded-full px-10 py-5 text-xl font-medium hover:bg-white hover:text-gray-800 transition duration-300 mt-10">
              KNOW ME
            </button>
          </div>
        </div>
        <div className="lg:w-1/3 flex justify-end mt-6 lg:mt-0">
          <img src={profilePic} alt="Profile" className="rounded-full w-80 h-80 object-cover border-4 border-white" />
        </div>
      </div>
      {/* Tools used section, adjusted for alignment */}
      <div className="w-full max-w-[2000px] mx-auto px-16">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-400 mb-2">Tools used:</p>
            <div className="flex items-center space-x-12">
              <img src={FigmaLogo} alt="Figma" className="h-12 w-12" />
              <img src={BlenderLogo} alt="Blender" className="h-12 w-12" />
              <img src={ReactLogo} alt="React" className="h-12 w-12" />
              <img src={AeLogo} alt="After Effects" className="h-12 w-12" />
              <img src={PsLogo} alt="Photoshop" className="h-12 w-12" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-blue-400 text-lg font-semibold">Isaac Obusan</span>
            <img src={LinkedInLogo} alt="LinkedIn" className="h-8 w-8 ml-8" />
          </div>
        </div>
      </div>
    </div>
  );
}; 