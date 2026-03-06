import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  delay?: number;
  animateOn?: 'view' | 'hover';
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  delay = 0,
  animateOn = 'hover',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (animateOn === 'view') {
      startAnimation();
    }
  }, [animateOn]);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    let iteration = 0;
    const length = text.length;
    
    const animate = () => {
      setDisplayText((prev) => {
        return prev
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            let shouldReveal = false;
            if (sequential) {
              if (revealDirection === 'start') {
                shouldReveal = index < iteration;
              } else if (revealDirection === 'end') {
                shouldReveal = index >= length - iteration;
              } else {
                const mid = Math.floor(length / 2);
                shouldReveal = Math.abs(index - mid) < iteration;
              }
            } else {
              shouldReveal = iteration >= maxIterations;
            }

            if (shouldReveal) {
              return text[index];
            }

            if (useOriginalCharsOnly) {
              return text[Math.floor(Math.random() * length)];
            }

            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('');
      });

      if (iteration < maxIterations) {
        iteration += 1 / 3;
        timeoutRef.current = window.setTimeout(animate, speed);
      } else {
        setDisplayText(text);
        setIsAnimating(false);
      }
    };

    setTimeout(animate, delay);
  };

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      setIsHovering(true);
      startAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === 'hover') {
      setIsHovering(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setDisplayText(text);
      setIsAnimating(false);
    }
  };

  return (
    <motion.span
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={isAnimating ? encryptedClassName : className}>
        {displayText}
      </span>
    </motion.span>
  );
};
