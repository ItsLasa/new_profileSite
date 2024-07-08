// components/WelcomeAnimation.tsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, 3000); // Change duration as needed

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 flex items-center justify-center bg-blue-500 text-white z-50"
    >
      <h1 className="text-4xl">Hey Anoymonus</h1>
    </motion.div>
  );
};

export default WelcomeAnimation;
