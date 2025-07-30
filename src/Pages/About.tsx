import React, { useState } from 'react';
import cvFile from '../assets/JOHN-ISAAC-C.-OBUSAN_CV_2025.docx'; 
import certificate1 from '../assets/certificate_1.jpg';
import certificate2 from '../assets/certificate_2.jpg';
import certificate3 from '../assets/certificate_3.jpg';
import certificate4 from '../assets/certificate_4.jpg';
import certificate5 from '../assets/certificate_5.png';
import certificate6 from '../assets/certificate_6.png';
import certificate7 from '../assets/certificate_7.png';
import certificate8 from '../assets/certificate_8.png';
import chick from '../assets/chick.png';
import CertificateModal from '../components/CertificateModal';

const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    image: string;
    title: string;
    date: string;
  } | null>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFile; // Ensure the Word file path is correct
    link.download = 'JOHN-ISAAC-C.-OBUSAN_CV_2025.docx'; // Update the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCertificateClick = (image: string, title: string, date: string) => {
    setSelectedCertificate({ image, title, date });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-950">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-100">About Me</h1>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download CV
          </button>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <div className="prose max-w-none">
            <p className="mb-4 text-2xl italic text-gray-100">
              I'm John Isaac C. Obusan, a multimedia specialist with a strong foundation in full stack development. 
              My primary expertise lies in UX design and frontend development, where I blend creativity and technical skill to deliver engaging digital experiences.
            </p>
       
            {/* Certificates Section */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-semibold text-gray-100">Certificates</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Certificate 1 */}
                <div 
                  className="p-4 transition-all duration-300 transform bg-gray-700 rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-600 group"
                  onClick={() => handleCertificateClick(certificate1, "Figma & Beyond: Mastering UX UI Design Tools Smartly", "Udemy - June 9, 2025")}
                >
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-medium text-gray-200 group-hover:text-white">Figma & Beyond: Mastering UX UI Design Tools Smartly</h3>
                    <p className="text-gray-300 group-hover:text-gray-200">Udemy - June 9, 2025</p>
                    <img src={certificate1} alt="Certificate 1" className="object-cover w-full h-48 mt-4 rounded-lg group-hover:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="p-2 bg-black bg-opacity-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate 2 */}
                <div 
                  className="p-4 transition-all duration-300 transform bg-gray-700 rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-600 group"
                  onClick={() => handleCertificateClick(certificate2, "Introduction to TypeScript", "Great Learning - June 10, 2025")}
                >
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-medium text-gray-200 group-hover:text-white">Introduction to TypeScript</h3>
                    <p className="text-gray-300 group-hover:text-gray-200">Great Learning - June 10, 2025</p>
                    <img src={certificate2} alt="Certificate 2" className="object-cover w-full h-48 mt-4 rounded-lg group-hover:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="p-2 bg-black bg-opacity-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate 3 */}
                <div 
                  className="p-4 transition-all duration-300 transform bg-gray-700 rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-600 group"
                  onClick={() => handleCertificateClick(certificate8, "Creatives Seminar on Portfolio Making", "DTI, RDC & CNSC - March 11, 2025")}
                >
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-medium text-gray-200 group-hover:text-white">Creatives Seminar on Portfolio Making</h3>
                    <p className="text-gray-300 group-hover:text-gray-200">DTI, RDC & CNSC - March 11, 2025</p>
                    <img src={certificate8} alt="Certificate 3" className="object-cover w-full h-48 mt-4 rounded-lg group-hover:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="p-2 bg-black bg-opacity-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate 4 */}
                <div 
                  className="p-4 transition-all duration-300 transform bg-gray-700 rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-600 group"
                  onClick={() => handleCertificateClick(certificate4, "Plaque of Appreciation - Best in Visual Effects", "Camarines Norte State College - May 7, 2024")}
                >
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-medium text-gray-200 group-hover:text-white">Plaque of Appreciation - Best in Visual Effects</h3>
                    <p className="text-gray-300 group-hover:text-gray-200">Camarines Norte State College - May 7, 2024</p>
                    <img src={certificate4} alt="Certificate 4" className="object-cover w-full h-48 mt-4 rounded-lg group-hover:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="p-2 bg-black bg-opacity-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate 5 */}
                <div 
                  className="p-4 transition-all duration-300 transform bg-gray-700 rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-600 group"
                  onClick={() => handleCertificateClick(certificate5, "Certificate of Recognition - JC Media Committee", "Camarines Norte State College - August 31, 2023")}
                >
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-medium text-gray-200 group-hover:text-white">Certificate of Recognition - JC Media Committee</h3>
                    <p className="text-gray-300 group-hover:text-gray-200">Camarines Norte State College - August 31, 2023</p>
                    <img src={certificate5} alt="Certificate 5" className="object-cover w-full h-48 mt-4 rounded-lg group-hover:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="p-2 bg-black bg-opacity-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate 6 */}
                <div 
                  className="p-4 transition-all duration-300 transform bg-gray-700 rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-600 group"
                  onClick={() => handleCertificateClick(certificate6, "Certificate of Participation - AppCon 2023", "Otis Japan Inc. - June 30, 2024")}
                >
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-medium text-gray-200 group-hover:text-white">Certificate of Participation - AppCon 2023</h3>
                    <p className="text-gray-300 group-hover:text-gray-200">Otis Japan Inc. - June 30, 2024</p>
                    <img src={certificate6} alt="Certificate 6" className="object-cover w-full h-48 mt-4 rounded-lg group-hover:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="p-2 bg-black bg-opacity-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate 7 */}
                <div 
                  className="p-4 transition-all duration-300 transform bg-gray-700 rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-600 group"
                  onClick={() => handleCertificateClick(certificate7, "From Scroll to Skill - AI Seminar", "ICT Council of Camarines Norte - March 14, 2025")}
                >
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-medium text-gray-200 group-hover:text-white">From Scroll to Skill - AI Seminar</h3>
                    <p className="text-gray-300 group-hover:text-gray-200">ICT Council of Camarines Norte - March 14, 2025</p>
                    <img src={certificate7} alt="Certificate 7" className="object-cover w-full h-48 mt-4 rounded-lg group-hover:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="p-2 bg-black bg-opacity-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate 8 */}
                <div 
                  className="p-4 transition-all duration-300 transform bg-gray-700 rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-600 group"
                  onClick={() => handleCertificateClick(certificate3, "Video Editing Basics", "Great Learning - May 2025")}
                >
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-medium text-gray-200 group-hover:text-white">Video Editing Basics</h3>
                    <p className="text-gray-300 group-hover:text-gray-200">Great Learning - May 2025</p>
                    <img src={certificate3} alt="Certificate 8" className="object-cover w-full h-48 mt-4 rounded-lg group-hover:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="p-2 bg-black bg-opacity-50 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedCertificate && (
        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          image={selectedCertificate.image}
          title={selectedCertificate.title}
          date={selectedCertificate.date}
        />
      )}
    </div>
  );
};

export default About; 