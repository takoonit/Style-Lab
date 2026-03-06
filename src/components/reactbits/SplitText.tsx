import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className = '', delay = 30 }) => {
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
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{
              duration: 0.5,
              delay: i * (delay / 1000),
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};
