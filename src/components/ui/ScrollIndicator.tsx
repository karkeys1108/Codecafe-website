import { useEffect, useRef } from 'react';

const ScrollIndicator = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      if (!progressRef.current) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      progressRef.current.style.height = `${progress}%`;
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    // Initial update
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed right-0 top-0 h-screen w-1.5 bg-gray-800/30 z-50">
      <div 
        ref={progressRef}
        className="absolute top-0 left-0 w-full bg-amber-400 transition-height duration-100 ease-out"
        style={{ height: '0%' }}
      />
    </div>
  );
};

export default ScrollIndicator;
