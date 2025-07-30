import React from 'react';
import iporfolioImg from '../assets/iporfolio.png';
import wengsImg from '../assets/wengs.png';
import eoscoverImg from '../assets/eoscover.png';
import bumsImg from '../assets/bums.jpeg';
import jobImg from '../assets/job.png';
import chickImg from '../assets/chick.png';

const Coding: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-950">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-gray-100">Development Projects</h1>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Chickmate Project Card */}
            <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
              <img src={chickImg} alt="Chickmate" className="object-cover w-[400px] h-[225px] mb-4 border-2 border-gray-600 rounded-lg" />
              <h2 className="mb-2 text-xl font-semibold text-gray-100">Chickmate - Poultry Management System</h2>
              <p className="mb-4 text-center text-gray-300">
                Chickmate is a modern poultry management system for automating farm operations and monitoring. It streamlines poultry management tasks and provides real-time insights for farm owners.
              </p>
              <a
                href="https://github.com/05-14th/PMS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm text-white transition bg-blue-600 rounded hover:bg-blue-700"
              >
                GitHub
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.37.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
         
            {/* Portfolio Website Project Card */}
            <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
              <img src={iporfolioImg} alt="Portfolio Website" className="object-cover w-[400px] h-[225px] mb-4 border-2 border-gray-600 rounded-lg" />
              <h2 className="mb-2 text-xl font-semibold text-gray-100">Portfolio Website</h2>
              <p className="mb-4 text-center text-gray-300">
                Welcome to my official portfolio website. This site serves as a digital showcase of my creative and technical projects—from multimedia content to web development. Built with a modern tech stack and responsive design, this portfolio reflects both my personal style and professional capabilities.
              </p>
              <a
                href="https://github.com/IsaacObusan/Porfolio_Website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm text-white transition bg-blue-600 rounded hover:bg-blue-700"
              >
                GitHub
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.37.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
            {/* Weng's Delight Project Card */}
            <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
              <img src={wengsImg} alt="Weng's Delight" className="object-cover w-[400px] h-[225px] mb-4 border-2 border-gray-600 rounded-lg" />
              <h2 className="mb-2 text-xl font-semibold text-gray-100">Weng's Delight</h2>
              <p className="mb-4 text-center text-gray-300">
                Weng's Delight is a restaurant management system or food ordering app. This repository contains the source code and resources for the application.
              </p>
              <a
                href="https://github.com/IsaacObusan/Wengs_Delight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm text-white transition bg-blue-600 rounded hover:bg-blue-700"
              >
                GitHub
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.37.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
            {/* JobCompass Project Card */}
            <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
              <img src={jobImg} alt="JobCompass" className="object-cover w-[400px] h-[225px] mb-4 border-2 border-gray-600 rounded-lg" />
              <h2 className="mb-2 text-xl font-semibold text-gray-100">JobCompass: Employment Opportunity Navigator for PWDs</h2>
              <p className="mb-4 text-center text-gray-300">
                JobCompass is a digital platform that connects Persons with Disabilities (PWDs) in Camarines Norte to inclusive employment opportunities.
              </p>
              <a
                href="https://github.com/IsaacObusan/SAD-REVISED"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm text-white transition bg-blue-600 rounded hover:bg-blue-700"
              >
                GitHub
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.37.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
            {/* EOS Project Card */}
            <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
              <img src={eoscoverImg} alt="EOS Municipal Building Permit Management System" className="object-cover w-[400px] h-[225px] mb-4 border-2 border-gray-600 rounded-lg" />
              <h2 className="mb-2 text-xl font-semibold text-gray-100">Municipal Building Permit Management System</h2>
              <p className="mb-4 text-center text-gray-300">
                The Municipal Building Permit Management System is an online tool made to help the Municipality of Daet, Camarines Norte with building permit work.
              </p>
              <a
                href="https://github.com/siji1007/EOS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm text-white transition bg-blue-600 rounded hover:bg-blue-700"
              >
                GitHub
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.37.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
            {/* BUMS Integration Project Card */}
            <div className="flex flex-col items-center p-4 bg-gray-700 rounded-lg">
              <img src={bumsImg} alt="BUMS Integration" className="object-cover w-[400px] h-[225px] mb-4 border-2 border-gray-600 rounded-lg" />
              <h2 className="mb-2 text-xl font-semibold text-gray-100">EBPPro & BUMS Integration</h2>
              <p className="mb-4 text-center text-gray-300">
                A system integration project designed to automate and streamline the data transfer between Camarines Norte State College's Electronic Budget Planning Process (EBPPro) and Budget Utilization and Monitoring System (BUMS) using RESTful APIs and RabbitMQ.
              </p>
              <a
                href="https://github.com/IsaacObusan/Implementation-of-Middleware-Solution-for-System-Integration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm text-white transition bg-blue-600 rounded hover:bg-blue-700"
              >
                GitHub
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.37.813 1.102.813 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coding;
