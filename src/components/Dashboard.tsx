import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { uiStyles, UIStyle } from '../data/styles';
import { HeroPlayground } from './HeroPlayground';
import { Filter, ArrowUpDown, Zap, Eye } from 'lucide-react';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { ShinyText } from './reactbits/ShinyText';

interface DashboardProps {
  styles: UIStyle[];
  onSelectStyle: (id: string) => void;
  globalStyleId: string;
  setGlobalStyleId: (id: string) => void;
  isDarkTheme: boolean;
  globalFont?: { heading: string; body: string };
}

export function Dashboard({ styles, onSelectStyle, globalStyleId, setGlobalStyleId, isDarkTheme, globalFont }: DashboardProps) {
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'difficulty'>('name');

  const filteredAndSortedStyles = useMemo(() => {
    let result = [...styles];

    if (filterDifficulty !== 'all') {
      result = result.filter(s => s.difficulty.toLowerCase() === filterDifficulty);
    }

    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
        return (difficultyOrder[a.difficulty as keyof typeof difficultyOrder] || 0) - 
               (difficultyOrder[b.difficulty as keyof typeof difficultyOrder] || 0);
      }
    });

    return result;
  }, [styles, filterDifficulty, sortBy]);

  return (
    <div className="space-y-8 md:space-y-16 pb-12 md:pb-20">
      <section>
        <HeroPlayground 
          globalStyleId={globalStyleId} 
          setGlobalStyleId={setGlobalStyleId} 
        />
      </section>

      <section className="space-y-4 md:space-y-6">
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4 border-b pb-3 md:pb-4 ${isDarkTheme ? 'border-white/10' : 'border-slate-100'}`}>
          <h2 className={`text-xl md:text-2xl ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${globalFont?.heading || 'font-semibold tracking-tight'}`}>
            <ShinyText text="Explore Styles" />
          </h2>
          
          <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2 text-sm">
              <span className={`font-medium ${isDarkTheme ? 'text-white/60' : 'text-slate-400'}`}>Filter:</span>
              <select 
                className={`bg-transparent border-none font-medium focus:ring-0 cursor-pointer transition-colors p-0 ${isDarkTheme ? 'text-white hover:text-white/80 [&>option]:text-slate-900' : 'text-slate-900 hover:text-indigo-600'}`}
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
              >
                <option value="all">All</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className={`font-medium ${isDarkTheme ? 'text-white/60' : 'text-slate-400'}`}>Sort:</span>
              <select 
                className={`bg-transparent border-none font-medium focus:ring-0 cursor-pointer transition-colors p-0 ${isDarkTheme ? 'text-white hover:text-white/80 [&>option]:text-slate-900' : 'text-slate-900 hover:text-indigo-600'}`}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'difficulty')}
              >
                <option value="name">Name</option>
                <option value="difficulty">Difficulty</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredAndSortedStyles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onSelectStyle(style.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectStyle(style.id);
                }
              }}
              role="button"
              tabIndex={0}
              className="h-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-xl"
            >
              <SpotlightCard className={`group cursor-pointer flex flex-col h-full transition-all duration-300 ${isDarkTheme ? 'bg-white/5 border-white/10 hover:border-white/30' : 'hover:border-slate-300'}`}>
                <div className="p-4 md:p-6 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    <h3 className={`text-base md:text-lg transition-colors ${isDarkTheme ? 'text-white group-hover:text-white/80' : 'text-slate-900 group-hover:text-indigo-600'} ${globalFont?.heading || 'font-semibold tracking-tight'}`}>
                      {style.name}
                    </h3>
                    <span className={`
                      text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-wider
                      ${style.difficulty === 'Beginner' ? (isDarkTheme ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-50 text-emerald-700') : 
                        style.difficulty === 'Intermediate' ? (isDarkTheme ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-50 text-amber-700') : 
                        (isDarkTheme ? 'bg-rose-500/20 text-rose-300' : 'bg-rose-50 text-rose-700')}
                    `}>
                      {style.difficulty}
                    </span>
                  </div>
                  
                  <p className={`text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-1 ${isDarkTheme ? 'text-white/60' : 'text-slate-500'}`}>
                    {style.tagline}
                  </p>

                  <div className={`flex items-center justify-between text-xs pt-3 md:pt-4 border-t ${isDarkTheme ? 'text-white/40 border-white/10' : 'text-slate-400 border-slate-50'}`}>
                    <div className="flex items-center gap-1.5" title="Performance Cost">
                      <Zap size={14} />
                      <span>{style.performanceCost}</span>
                    </div>
                    <div className="flex items-center gap-1.5" title="Accessibility">
                      <Eye size={14} />
                      <span>{style.accessibilityRating}</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
