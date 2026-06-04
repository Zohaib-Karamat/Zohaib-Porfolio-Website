import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { stiffness: 150, damping: 18 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 18 });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [cursorX, cursorY, isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6C63FF]"
        style={{ x: cursorX, y: cursorY, scale: isPressed ? 0.5 : 1 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-[#6C63FF]"
        style={{ x: ringX, y: ringY, scale: isPressed ? 1.5 : 1 }}
      />
    </>
  );
};

export default CustomCursor;
