import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Logo from '../assets/Logo_i.png';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const togglePortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <ul className="flex space-x-4 text-white">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li className="relative">
            <button onClick={togglePortfolio} className="flex items-center hover:text-gray-300 focus:outline-none">
              Portfolio <div className={`ml-1 transition-transform duration-200 ${isPortfolioOpen ? 'rotate-180' : ''}`}><FaChevronDown /></div>
            </button>
            {isPortfolioOpen && (
              <ul className={`absolute left-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-10 transition-all duration-300 ease-in-out origin-top ${isPortfolioOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 transform'}`}>
                <li><Link to="/coding" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">Development</Link></li>
                <li><Link to="/multimedia" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">Multimedia</Link></li>
                <li><Link to="/ux-ui" className="block px-4 py-2 text-sm text-white hover:bg-gray-600">UX/UI</Link></li>
 
              </ul>
            )}
          </li>
          <li><Link to="/about" className="hover:text-gray-300">About me</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar; 