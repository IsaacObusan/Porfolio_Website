import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8 w-full">
      <div className="container mx-auto text-center">
        {/* You can add footer content here, e.g., copyright info, links */}
        <p>&copy; {new Date().getFullYear()} John Isaac C. Obusan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 