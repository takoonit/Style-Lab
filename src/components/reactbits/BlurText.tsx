import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, delay = 50, className = '' }) => {
  const words = text.split(' ');
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 10 },
            visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.8,
            delay: i * (delay / 1000),
            ease: 'easeOut',
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
