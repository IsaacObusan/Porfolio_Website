import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Logo from '../assets/Logo_i.png';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isPermanentlyOpen, setIsPermanentlyOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsPortfolioOpen(true);
  };

  const handleMouseLeave = () => {
    // Only close if it's not permanently open
    if (!isPermanentlyOpen) {
      setIsPortfolioOpen(false);
    }
  };

  const handlePortfolioClick = () => {
    if (isPermanentlyOpen) {
      // If permanently open, close it
      setIsPortfolioOpen(false);
      setIsPermanentlyOpen(false);
    } else {
      // If not permanently open, toggle it
      setIsPortfolioOpen(!isPortfolioOpen);
    }
  };

  const handleDropdownItemHover = () => {
    // When hovering over dropdown items, make it permanently open
    setIsPermanentlyOpen(true);
    setIsPortfolioOpen(true);
  };

  const handleDropdownItemClick = () => {
    // Keep it open after clicking an item
    setIsPermanentlyOpen(true);
    setIsPortfolioOpen(true);
  };

  const handleDropdownAreaMouseEnter = () => {
    // When entering the dropdown area, make it permanently open
    setIsPermanentlyOpen(true);
    setIsPortfolioOpen(true);
  };

  const handleDropdownAreaMouseLeave = () => {
    // When leaving the dropdown area, reset the permanent state
    setIsPermanentlyOpen(false);
    setIsPortfolioOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.portfolio-dropdown')) {
        setIsPortfolioOpen(false);
        setIsPermanentlyOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </div>
        <ul className="flex space-x-4 text-white">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li className="relative portfolio-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button onClick={handlePortfolioClick} className="flex items-center hover:text-gray-300 focus:outline-none">
              Portfolio <div className={`ml-1 transition-transform duration-200 ${isPortfolioOpen ? 'rotate-180' : ''}`}><FaChevronDown /></div>
            </button>
            {isPortfolioOpen && (
              <ul 
                className="absolute left-0 mt-0 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-10 transition-all duration-300 ease-in-out origin-top opacity-100 scale-y-100"
                onMouseEnter={handleDropdownAreaMouseEnter}
                onMouseLeave={handleDropdownAreaMouseLeave}
              >
                <li><Link to="/coding" className="block px-4 py-2 text-sm text-white hover:bg-gray-600" onMouseEnter={handleDropdownItemHover} onClick={handleDropdownItemClick}>Development</Link></li>
                <li><Link to="/multimedia" className="block px-4 py-2 text-sm text-white hover:bg-gray-600" onMouseEnter={handleDropdownItemHover} onClick={handleDropdownItemClick}>Multimedia</Link></li>
                <li><Link to="/ux-ui" className="block px-4 py-2 text-sm text-white hover:bg-gray-600" onMouseEnter={handleDropdownItemHover} onClick={handleDropdownItemClick}>UX/UI</Link></li>
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