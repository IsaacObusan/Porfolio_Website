import React from 'react';

const Coding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-100 mb-6">Development Projects</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards will go here */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Project Title</h2>
              <p className="text-gray-300 mb-4">Project description goes here.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">React</span>
                <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
