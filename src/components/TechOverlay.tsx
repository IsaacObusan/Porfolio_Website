import React, { useEffect, useRef } from 'react';

const TechOverlay: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!overlayRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = overlayRef.current.getBoundingClientRect();
      
      const x = (clientX / width) * 100;
      const y = (clientY / height) * 100;
      
      overlayRef.current.style.background = `
        radial-gradient(
          circle at ${x}% ${y}%,
          rgba(0, 200, 255, 0.2) 0%,
          rgba(0, 150, 255, 0.1) 25%,
          rgba(0, 100, 255, 0.05) 50%,
          transparent 70%
        ),
        linear-gradient(
          90deg,
          rgba(0, 100, 255, 0.05) 1px, 
          transparent 1px, 
          transparent 30px
        ),
        linear-gradient(
          0deg,
          rgba(0, 100, 255, 0.05) 1px, 
          transparent 1px, 
          transparent 30px
        )
      `;
      overlayRef.current.style.backgroundSize = '100% 100%, 30px 30px, 30px 30px';
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed bottom-0 left-0 right-0 z-10 pointer-events-none top-16"
      style={{
        background: `
          radial-gradient(
            circle at 50% 50%,
            rgba(0, 200, 255, 0.2) 0%,
            rgba(0, 150, 255, 0.1) 25%,
            rgba(0, 100, 255, 0.05) 50%,
            transparent 70%
          ),
          linear-gradient(
            90deg,
            rgba(0, 100, 255, 0.05) 1px, 
            transparent 1px, 
            transparent 30px
          ),
          linear-gradient(
            0deg,
            rgba(0, 100, 255, 0.05) 1px, 
            transparent 1px, 
            transparent 30px
          )
        `,
        backgroundSize: '100% 100%, 30px 30px, 30px 30px',
        transition: 'background 0.3s ease-out'
      }}
    />
  );
};

export default TechOverlay; 