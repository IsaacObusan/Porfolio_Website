import React, { useState } from 'react';
import Poster1 from '../assets/POSTER-1.png';
import Poster2 from '../assets/POSTER-2.png';
import Poster3 from '../assets/POSTER-3.png';
import Poster4 from '../assets/POSTER-4.png';
import Poster6 from '../assets/POSTER-6.jpg';
import Picture1 from '../assets/PICTURE-1.jpg';
import Picture2 from '../assets/PICTURE-2.jpg';
import Picture3 from '../assets/PICTURE-3.jpg';
import Picture4 from '../assets/PICTURE-4.png';
import Picture5 from '../assets/PICTURE-5.png';
import Picture6 from '../assets/PICTURE-6.png';
import CertificateModal from '../components/CertificateModal';
import Blood from '../assets/Blood.mp4';
import Soulbound from '../assets/Soulbound.mp4';
import ThreeD1 from '../assets/3D_1.mp4';
import ThreeD2 from '../assets/3D_2.mp4';
import ThreeD3 from '../assets/3D_3.mp4';
import Poster7 from '../assets/POSTER-7.png';
import Poster8 from '../assets/POSTER -8.png';
import Poster9 from '../assets/POSTER-9.png';
import Poster10 from '../assets/POSTER-10.png';

const Multimedia: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<{ image: string; title: string } | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{ image: string; title: string } | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-gray-950">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-100">Multimedia Portfolio</h1>
        
        {/* Videography Section */}
        <section className="mb-12">
          <h2 className="pb-2 mb-6 text-3xl font-bold text-gray-100 border-b border-gray-700">Videography</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gray-700 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-gray-400">Video Preview</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Project Title</h3>
                <p className="text-sm text-gray-300">Short description of the video project and its key features.</p>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gray-700 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-gray-400">Video Preview</span>
              
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Project Title</h3>
                <p className="text-sm text-gray-300">Short description of the video project and its key features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Section */}
        <section className="mb-12">
          <h2 className="pb-2 mb-6 text-3xl font-bold text-gray-100 border-b border-gray-700">Photography</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPhoto({ image: Picture1, title: 'Photography 1' })}>
              <img src={Picture1} alt="Photography 1" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Photography 1</h3>
                <p className="mb-3 text-sm text-gray-300">Creative photography showcasing composition and lighting techniques.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Photography</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPhoto({ image: Picture2, title: 'Photography 2' })}>
              <img src={Picture2} alt="Photography 2" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Photography 2</h3>
                <p className="mb-3 text-sm text-gray-300">Portrait photography with artistic composition and mood.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Photography</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPhoto({ image: Picture3, title: 'Photography 3' })}>
              <img src={Picture3} alt="Photography 3" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Photography 3</h3>
                <p className="mb-3 text-sm text-gray-300">Landscape photography capturing natural beauty and perspective.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Photography</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPhoto({ image: Picture4, title: 'Photography 4' })}>
              <img src={Picture4} alt="Photography 4" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Photography 4</h3>
                <p className="mb-3 text-sm text-gray-300">Additional creative photography work showcasing unique perspectives.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Photography</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPhoto({ image: Picture5, title: 'Photography 5' })}>
              <img src={Picture5} alt="Photography 5" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Photography 5</h3>
                <p className="mb-3 text-sm text-gray-300">Creative photography with a focus on color and form.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Photography</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPhoto({ image: Picture6, title: 'Photography 6' })}>
              <img src={Picture6} alt="Photography 6" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Photography 6</h3>
                <p className="mb-3 text-sm text-gray-300">Experimental photography exploring new visual techniques.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Photography</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VFX Section */}
        <section className="mb-12">
          <h2 className="pb-2 mb-6 text-3xl font-bold text-gray-100 border-b border-gray-700">VFX & Visual Effects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gray-700 aspect-video">
                <video
                  src={Soulbound}
                  controls
                  className="object-cover w-full h-full rounded-t-lg"
                  poster=""
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Soulbound VFX Demo</h3>
                <p className="mb-3 text-sm text-gray-300">A showcase of VFX work using After Effects .</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-red-600 rounded">After Effects</span>
                 
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gray-700 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-gray-400">VFX Demo</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">VFX Project</h3>
                <p className="mb-3 text-sm text-gray-300">Description of the visual effects work and techniques used.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-green-600 rounded">Blender</span>
                  <span className="px-2 py-1 text-xs text-white bg-orange-600 rounded">DaVinci Resolve</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gray-700 aspect-video">
                <video
                  src={Blood}
                  controls
                  className="object-cover w-full h-full rounded-t-lg"
                  poster=""
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Blood VFX Demo</h3>
                <p className="mb-3 text-sm text-gray-300">A VFX sequence featuring blood effects and compositing.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-red-600 rounded">After Effects</span>
                  <span className="px-2 py-1 text-xs text-white bg-gray-600 rounded">Compositing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Model Section */}
        <section className="mb-12">
          <h2 className="pb-2 mb-6 text-3xl font-bold text-gray-100 border-b border-gray-700">3D Models</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gray-700 aspect-video">
                <video
                  src={ThreeD1}
                  controls
                  className="object-cover w-full h-full rounded-t-lg"
                  poster=""
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">3D Model 1</h3>
                <p className="mb-3 text-sm text-gray-300">3D modeling and animation showcase using Blender.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-purple-600 rounded">Blender</span>
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">3D Modeling</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gray-700 aspect-video">
                <video
                  src={ThreeD2}
                  controls
                  className="object-cover w-full h-full rounded-t-lg"
                  poster=""
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">3D Model 2</h3>
                <p className="mb-3 text-sm text-gray-300">Advanced 3D modeling techniques and rendering.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-purple-600 rounded">Blender</span>
                  <span className="px-2 py-1 text-xs text-white bg-green-600 rounded">Rendering</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg">
              <div className="relative bg-gray-700 aspect-video">
                <video
                  src={ThreeD3}
                  controls
                  className="object-cover w-full h-full rounded-t-lg"
                  poster=""
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">3D Model 3</h3>
                <p className="mb-3 text-sm text-gray-300">Character modeling and animation work.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-purple-600 rounded">Blender</span>
                  <span className="px-2 py-1 text-xs text-white bg-orange-600 rounded">Animation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graphic Design Section */}
        <section className="mb-12">
          <h2 className="pb-2 mb-6 text-3xl font-bold text-gray-100 border-b border-gray-700">Graphic Design</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Poster 1 */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPoster({ image: Poster1, title: 'Poster Design 1' })}>
              <img src={Poster1} alt="Poster 1" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Poster Design 1</h3>
                <p className="mb-3 text-sm text-gray-300">Creative sports poster design.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-red-600 rounded">Photoshop</span>
                </div>
              </div>
            </div>
            {/* Poster 2 */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPoster({ image: Poster2, title: 'Poster Design 2' })}>
              <img src={Poster2} alt="Poster 2" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Poster Design 2</h3>
                <p className="mb-3 text-sm text-gray-300">Creative sports poster design.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-red-600 rounded">Photoshop</span>
                </div>
              </div>
            </div>
            {/* Poster 3 */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPoster({ image: Poster3, title: 'Poster Design 3' })}>
              <img src={Poster3} alt="Poster 3" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Poster Design 3</h3>
                <p className="mb-3 text-sm text-gray-300">Product splash poster design.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-red-600 rounded">Photoshop</span>
                </div>
              </div>
            </div>
            {/* Poster 4 */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPoster({ image: Poster4, title: 'Poster Design 4' })}>
              <img src={Poster4} alt="Poster 4" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Poster Design 4</h3>
                <p className="mb-3 text-sm text-gray-300">Movie poster design.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-red-600 rounded">Photoshop</span>
                </div>
              </div>
            </div>
            {/* Poster 6 */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPoster({ image: Poster6, title: 'Poster Design 6' })}>
              <img src={Poster6} alt="Poster 6" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Poster Design 6</h3>
                <p className="mb-3 text-sm text-gray-300">Additional creative poster design.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Figma</span>
                </div>
              </div>
            </div>
            {/* Poster 7 */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPoster({ image: Poster7, title: 'Poster Design 7' })}>
              <img src={Poster7} alt="Poster 7" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Poster Design 7</h3>
                <p className="mb-3 text-sm text-gray-300">Creative poster made in Figma.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Figma</span>
                </div>
              </div>
            </div>
            {/* Poster 8 */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPoster({ image: Poster8, title: 'Poster Design 8' })}>
              <img src={Poster8} alt="Poster 8" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Poster Design 8</h3>
                <p className="mb-3 text-sm text-gray-300">Creative poster made in Figma.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Figma</span>
                </div>
              </div>
            </div>
            {/* Poster 9 */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPoster({ image: Poster9, title: 'Poster Design 9' })}>
              <img src={Poster9} alt="Poster 9" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Poster Design 9</h3>
                <p className="mb-3 text-sm text-gray-300">Creative poster made in Figma.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Figma</span>
                </div>
              </div>
            </div>
            {/* Poster 10 */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedPoster({ image: Poster10, title: 'Poster Design 10' })}>
              <img src={Poster10} alt="Poster 10" className="object-cover w-full aspect-square" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-100">Poster Design 10</h3>
                <p className="mb-3 text-sm text-gray-300">Creative poster made in Figma.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {selectedPoster && (
          <CertificateModal
            isOpen={!!selectedPoster}
            onClose={() => setSelectedPoster(null)}
            image={selectedPoster.image}
            title={selectedPoster.title}
            date={''}
          />
        )}
        {selectedPhoto && (
          <CertificateModal
            isOpen={!!selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
            image={selectedPhoto.image}
            title={selectedPhoto.title}
            date={''}
          />
        )}
      </div>
    </div>
  );
};

export default Multimedia; 