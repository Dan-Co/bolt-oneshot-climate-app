import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GlobeProps {
  className?: string;
  size?: number;
  rotationSpeed?: number;
}

const Globe: React.FC<GlobeProps> = ({ 
  className = '', 
  size = 200, 
  rotationSpeed = 1 
}) => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    let animationId: number;
    let rotation = 0;

    const animate = () => {
      rotation += rotationSpeed * 0.5;
      globe.style.transform = `rotateY(${rotation}deg) rotateX(10deg)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [rotationSpeed]);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <div
        ref={globeRef}
        className="w-full h-full rounded-full relative preserve-3d"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, rgba(74, 222, 128, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 70% 20%, rgba(34, 197, 94, 0.6) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(22, 163, 74, 0.7) 0%, transparent 45%),
            radial-gradient(circle at 80% 70%, rgba(21, 128, 61, 0.5) 0%, transparent 35%),
            linear-gradient(45deg, #1e40af, #1e3a8a, #1e40af)
          `,
          boxShadow: `
            inset -20px -20px 40px rgba(0, 0, 0, 0.3),
            inset 20px 20px 40px rgba(255, 255, 255, 0.1),
            0 0 40px rgba(34, 197, 94, 0.3)
          `
        }}
      >
        {/* Climate hotspots */}
        <motion.div
          className="absolute w-3 h-3 bg-red-500 rounded-full shadow-lg"
          style={{ top: '20%', left: '15%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-orange-500 rounded-full shadow-lg"
          style={{ top: '60%', left: '25%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-yellow-500 rounded-full shadow-lg"
          style={{ top: '40%', left: '70%' }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-300 rounded-full"
            style={{
              top: `${20 + (i * 8)}%`,
              left: `${30 + (i * 5)}%`
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + (i * 0.2),
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Globe;