import React from 'react';
import cvFile from '../assets/JOHN-ISAAC-C.-OBUSAN_CV_INTERNSHIP.pdf';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'JOHN-ISAAC-C.-OBUSAN_CV_INTERNSHIP.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-100">About Me</h1>
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download CV
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-100 mb-4">
              Hello! I'm a passionate Frontend developer  with expertise in various fields including coding, multimedia, VFX, UX/UI design, and 3D modeling.
            </p>
            <p className="text-lg text-gray-100 mb-4">
              My journey in technology and design has equipped me with a unique perspective that combines technical expertise with creative problem-solving skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-100 mb-4">Skills</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-200 mb-2">Development</h3>
                    <ul className="list-disc list-inside text-gray-100">
                      <li>Frontend Development</li>
                      <li>React TypeScript</li>
                      <li>Python</li>
                      <li>VB.NET</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-200 mb-2">Design & Creative</h3>
                    <ul className="list-disc list-inside text-gray-100">
                      <li>UI/UX Design</li>
                      <li>Graphic Design</li>
                      <li>Figma</li>
                      <li>Adobe Photoshop</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-200 mb-2">Video & Multimedia</h3>
                    <ul className="list-disc list-inside text-gray-100">
                      <li>Videography</li>
                      <li>Video Editing</li>
                      <li>Photo Editing</li>
                      <li>Adobe Premiere Pro</li>
                      <li>After Effects</li>
                      <li>Blender</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-100 mb-4">Experience</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-200 mb-2">Student Assistant</h3>
                    <p className="text-gray-100">Camarines Norte State College - Information Technology Services Office</p>
                    <p className="text-gray-300 text-sm">May 2023 to July 2023</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-200 mb-2">Freelancer</h3>
                    <p className="text-gray-100">Multimedia Specialist / UX,UI Designer</p>
                    <p className="text-gray-300 text-sm">June 2022 to Present</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-medium text-gray-200 mb-2">Professional Skills</h3>
                  <ul className="list-disc list-inside text-gray-100">
                    <li>Communication Skills</li>
                    <li>Eager to learn and adapt to new tools, technologies, and workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 