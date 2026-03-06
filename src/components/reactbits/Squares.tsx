import React, { useRef, useEffect } from 'react';

interface SquaresProps {
  direction?: 'diagonal' | 'up' | 'down' | 'left' | 'right';
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
}

export const Squares: React.FC<SquaresProps> = ({
  direction = 'diagonal',
  speed = 1,
  borderColor = '#e2e8f0',
  squareSize = 40,
  hoverFillColor = '#f1f5f9',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let gridOffset = { x: 0, y: 0 };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      const startX = gridOffset.x % squareSize;
      const startY = gridOffset.y % squareSize;

      ctx.beginPath();
      for (let x = startX - squareSize; x < canvas.width + squareSize; x += squareSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = startY - squareSize; y < canvas.height + squareSize; y += squareSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();
    };

    const updateGrid = () => {
      switch (direction) {
        case 'diagonal':
          gridOffset.x -= speed;
          gridOffset.y -= speed;
          break;
        case 'up':
          gridOffset.y -= speed;
          break;
        case 'down':
          gridOffset.y += speed;
          break;
        case 'left':
          gridOffset.x -= speed;
          break;
        case 'right':
          gridOffset.x += speed;
          break;
      }
      drawGrid();
      animationFrameId = requestAnimationFrame(updateGrid);
    };

    updateGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction, speed, borderColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};
