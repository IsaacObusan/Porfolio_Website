import React from 'react';

const ThreeDModel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-100 mb-6">3D Modeling Projects</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 3D Models */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">3D Models</h2>
              <div className="aspect-square bg-gray-600 rounded-lg mb-4">
                {/* 3D model preview will go here */}
              </div>
              <p className="text-gray-300">3D model project description goes here.</p>
            </div>

            {/* Animations */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">3D Animations</h2>
              <div className="aspect-video bg-gray-600 rounded-lg mb-4">
                {/* Animation preview will go here */}
              </div>
              <p className="text-gray-300">3D animation project description goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDModel; 