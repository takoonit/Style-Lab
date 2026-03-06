import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { uiStyles } from '../data/styles';
import { Square, Layers, Droplet, Circle, Cloud, Wind, Sparkles, Grid, Box } from 'lucide-react';
import { BlurText } from './reactbits/BlurText';
import { Squares } from './reactbits/Squares';
import { SplitText } from './reactbits/SplitText';

const styleIcons: Record<string, React.ReactNode> = {
  'flat': <Square size={20} />,
  'material': <Layers size={20} />,
  'glassmorphism': <Droplet size={20} />,
  'neumorphism': <Circle size={20} />,
  'claymorphism': <Cloud size={20} />,
  'fluent': <Wind size={20} />,
  'aurora': <Sparkles size={20} />,
  'bento': <Grid size={20} />,
  'neubrutalism': <Box size={20} />,
};

interface HeroPlaygroundProps {
  globalStyleId: string;
  setGlobalStyleId: (id: string) => void;
}

export function HeroPlayground({ globalStyleId, setGlobalStyleId }: HeroPlaygroundProps) {
  const activeStyle = uiStyles.find(s => s.id === globalStyleId) || uiStyles[0];
  const isDarkTheme = activeStyle.id === 'aurora' || activeStyle.id === 'glassmorphism';

  return (
    <div className={`w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-sm flex flex-col relative transition-all duration-500 border ${isDarkTheme ? 'border-white/10' : 'border-slate-200/50'}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStyle.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`w-full flex flex-col items-center justify-center p-8 md:p-16 relative min-h-[400px] md:min-h-[500px] ${activeStyle.components.wrapper}`}
        >
          {/* React Bits Background */}
          <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor={activeStyle.id === 'aurora' || activeStyle.id === 'glassmorphism' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} 
            hoverFillColor="transparent"
          />

          {/* Optional background effects for specific styles */}
          {activeStyle.id === 'glassmorphism' && (
            <>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>
            </>
          )}

          <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center pb-12">
            <h1 className={`${activeStyle.components.title} !text-4xl md:!text-6xl !mb-6`}>
              <BlurText text="Master Modern UI" delay={50} />
            </h1>
            <p className={`${activeStyle.components.text} !text-lg md:!text-xl !mb-10 max-w-2xl opacity-90 leading-relaxed`}>
              <SplitText text="A curated playground of design systems. Select a style below to instantly transform this entire section, then dive deep into the code and principles." delay={20} />
            </p>
            <button className={`${activeStyle.components.button} !w-auto !px-8 !py-4 !text-lg !rounded-full`}>
              Get Started with {activeStyle.name}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Minimal Iconic Selector */}
      <div className={`absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-md p-1.5 md:p-2 rounded-full shadow-lg z-20 flex items-center gap-1 md:gap-2 ${isDarkTheme ? 'bg-black/40 border border-white/10' : 'bg-white/90 border border-slate-200/50'}`}>
        {uiStyles.map((style) => (
          <button
            key={style.id}
            onClick={() => setGlobalStyleId(style.id)}
            title={style.name}
            className={`p-2.5 md:p-3 rounded-full transition-all duration-300 flex items-center justify-center ${
              globalStyleId === style.id
                ? (isDarkTheme ? 'bg-white/20 text-white shadow-md scale-110' : 'bg-indigo-600 text-white shadow-md scale-110')
                : (isDarkTheme ? 'text-white/60 hover:bg-white/10 hover:text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900')
            }`}
          >
            {styleIcons[style.id] || <Square size={20} />}
          </button>
        ))}
      </div>
    </div>
  );
}
