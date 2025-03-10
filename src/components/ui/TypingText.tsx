import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  wordDelay?: number;
}

const TypingText = ({
  text,
  className = '',
  speed = 50,
  delay = 0,
  wordDelay = 500,
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWordIndex < words.length) {
        if (currentCharIndex < words[currentWordIndex].length) {
          // Type the current character
          setDisplayedText(prev => prev + words[currentWordIndex][currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Add space and move to next word
          setDisplayedText(prev => prev + ' ');
          setCurrentWordIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      }
    }, currentCharIndex === 0 ? wordDelay : speed);

    return () => clearTimeout(timer);
  }, [currentWordIndex, currentCharIndex, words, speed, wordDelay]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayedText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TypingText; 