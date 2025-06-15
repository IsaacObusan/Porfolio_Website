import React from 'react';

const Multimedia: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-100 mb-6">Multimedia Projects</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video Projects */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Video Projects</h2>
              <div className="aspect-video bg-gray-600 rounded-lg mb-4">
                {/* Video thumbnail or preview will go here */}
              </div>
              <p className="text-gray-300">Video project description goes here.</p>
            </div>

            {/* Photo Projects */}
            <div className="bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-100 mb-2">Photo Projects</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Photo thumbnails will go here */}
                <div className="aspect-square bg-gray-600 rounded-lg"></div>
                <div className="aspect-square bg-gray-600 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multimedia; 