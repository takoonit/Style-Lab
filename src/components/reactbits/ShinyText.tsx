import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({ text, className = '', speed = 3 }) => {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:200%_100%] animate-shimmer ${className}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {text}
    </span>
  );
};
