import React from 'react';
import Ebook from '../assets/Ebook.png';
import PureDrop from '../assets/PureDrop.jpg';
import Baybayin from '../assets/Baybayin.png';
import EOS from '../assets/EOS.png';
import Express from '../assets/Express.png';
import Foodwaste from '../assets/Foodwaste.png';
import Furnhub from '../assets/Furnhub.png';
import MDRRMO from '../assets/MDRRMO.png';
import MOA from '../assets/MOA.png';

const UXUI: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-950">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-100">UX/UI Design Projects</h1>
        <div className="p-6 mb-8 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-100">Figma Projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* FurnHub */}
            <div className="flex flex-col p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4 bg-gray-600 rounded-lg w-full h-48 overflow-hidden">
                <img src={Furnhub} alt="FurnHub Cover" className="object-contain w-full h-full rounded-lg" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">FurnHub</h3>
              <p className="mb-2 text-gray-300">A modern furniture e-commerce platform designed for seamless browsing and purchasing. Features a clean UI and intuitive navigation.</p>
              <a href="https://www.figma.com/design/UP08KUzOXJqsJlfzAgUtzr/Furnhub?m=auto&t=Vn1kIp4tfnbydbis-6" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Figma</a>
            </div>
            {/* EOS */}
            <div className="flex flex-col p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4 bg-gray-600 rounded-lg w-full h-48 overflow-hidden">
                <img src={EOS} alt="EOS Cover" className="object-contain w-full h-full rounded-lg" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">EOS</h3>
              <p className="mb-2 text-gray-300">A web-based platform for efficient event organization and scheduling. Focuses on user-friendly workflows and clear information hierarchy.</p>
              <a href="https://www.figma.com/design/juj0K9wvfkjvDutKyciqsE/EOS?m=auto&t=Vn1kIp4tfnbydbis-6" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Figma</a>
            </div>
            {/* Baybayin Mobile Application */}
            <div className="flex flex-col p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4 bg-gray-600 rounded-lg w-full h-48 overflow-hidden">
                <img src={Baybayin} alt="Baybayin Mobile Application Cover" className="object-contain w-full h-full rounded-lg" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">Baybayin Mobile Application</h3>
              <p className="mb-2 text-gray-300">A mobile app concept for learning and practicing Baybayin, the ancient Filipino script. Features interactive lessons and quizzes.</p>
              <a href="https://www.figma.com/design/jT8TQFyZ1AEz7QXeAUNDmk/BAYBAYIN-QUEST?node-id=1-3773&p=f&t=FmLgImDgLTvRCfxw-0" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Figma</a>
            </div>
            {/* E-Book Mobile Application */}
            <div className="flex flex-col p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4 bg-gray-600 rounded-lg w-full h-48 overflow-hidden">
                <img src={Ebook} alt="E-Book Mobile Application Cover" className="object-contain w-full h-full rounded-lg" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">E-Book Mobile Application</h3>
              <p className="mb-2 text-gray-300">A digital vocabulary book app for mobile devices, designed for easy reading and word discovery. Includes search and bookmarking features.</p>
              <a href="https://www.figma.com/design/NVwmEsQuKC5lnnsjfx23rU/E-Bookabularyo?m=auto&t=Vn1kIp4tfnbydbis-6" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Figma</a>
            </div>
            {/* MDRRMO */}
            <div className="flex flex-col p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4 bg-gray-600 rounded-lg w-full h-48 overflow-hidden">
                <img src={MDRRMO} alt="MDRRMO Cover" className="object-contain w-full h-full rounded-lg" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">MDRRMO</h3>
              <p className="mb-2 text-gray-300">A disaster risk reduction and management office dashboard for monitoring and response. Prioritizes clarity and quick access to critical data.</p>
              <a href="https://www.figma.com/design/5JJcpPuQ5VFrJ4wUXBqOQh/MDRRMO?m=auto&t=Vn1kIp4tfnbydbis-6" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Figma</a>
            </div>
            {/* Moa Controller */}
            <div className="flex flex-col p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4 bg-gray-600 rounded-lg w-full h-48 overflow-hidden">
                <img src={MOA} alt="Moa Controller Cover" className="object-contain w-full h-full rounded-lg" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">Moa Controller</h3>
              <p className="mb-2 text-gray-300">A controller interface.</p>
              <a href="https://www.figma.com/design/tommvJ0ONhhDxaBhUqlGbW/MOA-CONTROLLER?m=auto&t=Vn1kIp4tfnbydbis-6" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Figma</a>
            </div>
            {/* Express Delivery Mobile Application */}
            <div className="flex flex-col p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4 bg-gray-600 rounded-lg w-full h-48 overflow-hidden">
                <img src={Express} alt="Express Delivery Mobile Application Cover" className="object-contain w-full h-full rounded-lg" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">Express Delivery Mobile Application</h3>
              <p className="mb-2 text-gray-300">A mobile app for fast and reliable delivery services. Features real-time tracking and a user-friendly order process.</p>
              <a href="https://www.figma.com/design/SFbtCl6Bl8alRnyvXX2v0g/Express-Delivery--Copy-?node-id=0-1&t=Vn1kIp4tfnbydbis-1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Figma</a>
          
            </div>
            {/* FoodWaste */}
            <div className="flex flex-col p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4 bg-gray-600 rounded-lg w-full h-48 overflow-hidden">
                <img src={Foodwaste} alt="FoodWaste Cover" className="object-contain w-full h-full rounded-lg" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">FoodWaste</h3>
              <p className="mb-2 text-gray-300">A mobile app for reducing food waste by connecting surplus food providers with those in need. Features a user-friendly interface and real-time updates.</p>
              <a href="https://www.figma.com/design/5JJcpPuQ5VFrJ4wUXBqOQh/MDRRMO?m=auto&t=Vn1kIp4tfnbydbis-6" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on Figma</a>
            </div>
            {/* PureDrop Mobile App */}
            <div className="flex flex-col p-4 bg-gray-700 rounded-lg max-w-md mx-auto">
              <div className="flex items-center justify-center mb-4 bg-gray-600 rounded-lg w-full h-48 overflow-hidden">
                <img src={PureDrop} alt="PureDrop Mobile App Cover" className="object-contain w-full h-full rounded-lg" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-100">PureDrop Mobile App</h3>
              <p className="mb-2 text-gray-300">𝚃𝚑𝚒𝚜 𝚖𝚘𝚋𝚒𝚕𝚎 𝚊𝚙𝚙 𝚒𝚜 𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚝𝚘 𝚖𝚊𝚗𝚊𝚐𝚎 𝙿𝚞𝚛𝚎𝙳𝚛𝚘𝚙, 𝚊𝚗 𝙰𝚛𝚍𝚞𝚒𝚗𝚘-𝚋𝚊𝚜𝚎𝚍 𝚜𝚢𝚜𝚝𝚎𝚖 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚗𝚐 𝚛𝚊𝚒𝚗𝚠𝚊𝚝𝚎𝚛 𝚒𝚗𝚝𝚘 𝚍𝚛𝚒𝚗𝚔𝚊𝚋𝚕𝚎 𝚠𝚊𝚝𝚎𝚛. 𝙸𝚝 𝚊𝚌𝚝𝚜 𝚊𝚜 𝚊 𝚍𝚊𝚝𝚊 𝚑𝚞𝚋 𝚏𝚘𝚛 𝚠𝚊𝚝𝚎𝚛 𝚚𝚞𝚊𝚕𝚒𝚝𝚢 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗 𝚠𝚒𝚝𝚑𝚒𝚗 𝚝𝚑𝚎 𝙰𝚛𝚍𝚞𝚒𝚗𝚘 𝚜𝚎𝚝𝚞𝚙. 𝚃𝚑𝚎 𝚊𝚙𝚙 𝚒𝚜 𝚒𝚗 𝚙𝚛𝚘𝚐𝚛𝚎𝚜𝚜 𝚊𝚗𝚍 𝚎𝚡𝚙𝚎𝚌𝚝𝚜 𝚊𝚍𝚍𝚒𝚝𝚒𝚘𝚗𝚊𝚕 𝚏𝚎𝚊𝚝𝚞𝚛𝚎𝚜 𝚒𝚗 𝚝𝚑𝚎 𝚏𝚞𝚝𝚞𝚛𝚎.</p>
              <a href="https://github.com/IsaacObusan/PureDrop" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXUI; 