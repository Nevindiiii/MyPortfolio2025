import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const shapes = containerRef.current.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        y: `${gsap.utils.random(-100, 100)}`,
        x: `${gsap.utils.random(-100, 100)}`,
        rotation: gsap.utils.random(-180, 180),
        duration: gsap.utils.random(15, 25),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5,
      });
    });

    const gradient = containerRef.current.querySelector('.animated-gradient');
    if (gradient) {
      gsap.to(gradient, {
        backgroundPosition: '200% 50%',
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="animated-gradient absolute inset-0 opacity-30" 
           style={{
             background: 'linear-gradient(45deg, #f97316, #3b82f6, #10b981, #f97316)',
             backgroundSize: '400% 400%',
           }} 
      />
      
      <div className="shape absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="shape absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="shape absolute bottom-20 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
      <div className="shape absolute bottom-40 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundAnimation;
