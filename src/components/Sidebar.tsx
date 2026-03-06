import React from 'react';
import { LayoutTemplate, Layers, Droplet, Square, Circle, Wind, Sparkles, LayoutDashboard, Cloud, Grid, Box } from 'lucide-react';
import { UIStyle } from '../data/styles';
import { DecryptedText } from './reactbits/DecryptedText';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  styles: UIStyle[];
  isDarkTheme?: boolean;
  globalFont?: { heading: string; body: string };
}

const icons: Record<string, React.ReactNode> = {
  'flat': <Square size={18} />,
  'material': <Layers size={18} />,
  'glassmorphism': <Droplet size={18} />,
  'neumorphism': <Circle size={18} />,
  'claymorphism': <Cloud size={18} />,
  'fluent': <Wind size={18} />,
  'aurora': <Sparkles size={18} />,
  'bento': <Grid size={18} />,
  'neubrutalism': <Box size={18} />,
};

export function Sidebar({ activeTab, setActiveTab, styles, isDarkTheme, globalFont }: SidebarProps) {
  return (
    <div className="h-full flex flex-col py-6">
      <div className="px-6 mb-8">
        <div className={`flex items-center gap-2 text-xl ${isDarkTheme ? 'text-white' : 'text-indigo-600'} ${globalFont?.heading || 'font-bold tracking-tight'}`}>
          <LayoutTemplate size={24} />
          <DecryptedText 
            text="UI Educator" 
            speed={40} 
            maxIterations={15} 
            animateOn="hover" 
            className="inherit"
          />
        </div>
        <p className={`text-xs mt-1 ${isDarkTheme ? 'text-white/60' : 'text-slate-500'} ${globalFont?.body || ''}`}>Modern Design Styles</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 space-y-1">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'dashboard' 
              ? (isDarkTheme ? 'bg-white/10 text-white' : 'bg-indigo-50 text-indigo-700')
              : (isDarkTheme ? 'text-white/70 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900')
          }`}
        >
          {activeTab === 'dashboard' && (
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full ${isDarkTheme ? 'bg-indigo-400' : 'bg-indigo-600'}`} />
          )}
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <div className={`pt-4 pb-2 px-3 text-xs font-semibold uppercase tracking-wider ${isDarkTheme ? 'text-white/40' : 'text-slate-400'}`}>
          Styles
        </div>

        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => setActiveTab(style.id)}
            className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === style.id 
                ? (isDarkTheme ? 'bg-white/10 text-white' : 'bg-indigo-50 text-indigo-700')
                : (isDarkTheme ? 'text-white/70 hover:bg-white/5 hover:text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900')
            }`}
          >
            {activeTab === style.id && (
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full ${isDarkTheme ? 'bg-indigo-400' : 'bg-indigo-600'}`} />
            )}
            {icons[style.id] || <Square size={18} />}
            {style.name}
          </button>
        ))}
      </nav>
      
      <div className={`p-4 mx-4 mt-auto rounded-xl ${isDarkTheme ? 'bg-white/10' : 'bg-slate-100'}`}>
        <p className={`text-xs text-center ${isDarkTheme ? 'text-white/60' : 'text-slate-500'}`}>
          Select a style to view its characteristics, use cases, and code examples.
        </p>
      </div>
    </div>
  );
}
