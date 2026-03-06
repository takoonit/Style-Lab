import { useState } from 'react';
import { UIStyle } from '../data/styles';
import { motion } from 'motion/react';
import { LiveExample } from './LiveExample';
import { CheckCircle2, Code2, Layout, History, Component, AlertTriangle } from 'lucide-react';
import { TrueFocus } from './reactbits/TrueFocus';

export function StyleDetail({ style, isDarkTheme, globalFont }: { style: UIStyle, isDarkTheme?: boolean, globalFont?: { heading: string; body: string } }) {
  const [codeTab, setCodeTab] = useState<'tailwind' | 'css'>('tailwind');

  return (
    <motion.div 
      key={style.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 pb-12"
    >
      {/* Header */}
      <div className={`border-b pb-6 ${isDarkTheme ? 'border-white/10' : 'border-slate-200'}`}>
        <div className={`flex justify-start ${globalFont?.heading || ''}`}>
          <TrueFocus 
            sentence={style.name} 
            manualMode={false} 
            blurAmount={4} 
            borderColor={isDarkTheme ? "#a855f7" : "#4f46e5"} 
            glowColor={isDarkTheme ? "rgba(168, 85, 247, 0.4)" : "rgba(79, 70, 229, 0.4)"} 
            animationDuration={0.6}
            pauseBetweenAnimations={1.5}
          />
        </div>
        <p className={`mt-6 text-lg leading-relaxed max-w-3xl ${isDarkTheme ? 'text-white/70' : 'text-slate-500'}`}>{style.description}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Left Column: Info & Code */}
        <div className="space-y-8 lg:w-1/2 order-2 lg:order-1">
          
          {/* Why It Appeared */}
          <section className={`p-5 rounded-2xl border ${isDarkTheme ? 'bg-indigo-900/20 border-indigo-500/20' : 'bg-indigo-50/50 border-indigo-100/50'}`}>
            <h2 className={`text-lg flex items-center gap-2 mb-3 ${isDarkTheme ? 'text-indigo-300' : 'text-indigo-900'} ${globalFont?.heading || 'font-semibold'}`}>
              <History size={18} className={isDarkTheme ? 'text-indigo-400' : 'text-indigo-500'} />
              Why It Appeared
            </h2>
            <p className={`leading-relaxed ${isDarkTheme ? 'text-indigo-200/80' : 'text-indigo-800/80'}`}>
              {style.whyItAppeared}
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Target Audience */}
            <section>
              <h2 className={`text-lg flex items-center gap-2 mb-3 ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${globalFont?.heading || 'font-semibold'}`}>
                <Layout size={18} className={isDarkTheme ? 'text-indigo-400' : 'text-indigo-500'} />
                Target Audience
              </h2>
              <p className={`leading-relaxed ${isDarkTheme ? 'text-white/70' : 'text-slate-700'}`}>
                {style.targetAudience}
              </p>
            </section>

            {/* Core Design Principles */}
            <section>
              <h2 className={`text-lg flex items-center gap-2 mb-3 ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${globalFont?.heading || 'font-semibold'}`}>
                <Component size={18} className={isDarkTheme ? 'text-indigo-400' : 'text-indigo-500'} />
                Core Design Principles
              </h2>
              <ul className="space-y-2">
                {style.coreDesignPrinciples.map((principle, idx) => (
                  <li key={idx} className={`flex items-start gap-2 ${isDarkTheme ? 'text-white/70' : 'text-slate-700'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${isDarkTheme ? 'bg-indigo-500' : 'bg-indigo-400'}`}></div>
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Characteristics */}
            <section>
              <h2 className={`text-lg flex items-center gap-2 mb-4 ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${globalFont?.heading || 'font-semibold'}`}>
                <Layout size={18} className={isDarkTheme ? 'text-indigo-400' : 'text-indigo-500'} />
                Characteristics
              </h2>
              <ul className="space-y-3">
                {style.characteristics.map((char, idx) => (
                  <li key={idx} className={`flex items-start gap-3 ${isDarkTheme ? 'text-white/70' : 'text-slate-700'}`}>
                    <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Typical Elements */}
            <section>
              <h2 className={`text-lg flex items-center gap-2 mb-4 ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${globalFont?.heading || 'font-semibold'}`}>
                <Component size={18} className={isDarkTheme ? 'text-indigo-400' : 'text-indigo-500'} />
                Typical Elements
              </h2>
              <ul className="space-y-3">
                {style.typicalElements.map((el, idx) => (
                  <li key={idx} className={`flex items-start gap-3 ${isDarkTheme ? 'text-white/70' : 'text-slate-700'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${isDarkTheme ? 'bg-indigo-500' : 'bg-indigo-400'}`}></div>
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Use Cases */}
          <section>
            <h2 className={`text-lg flex items-center gap-2 mb-4 ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${globalFont?.heading || 'font-semibold'}`}>
              <CheckCircle2 size={18} className={isDarkTheme ? 'text-indigo-400' : 'text-indigo-500'} />
              Best Used For
            </h2>
            <div className="flex flex-wrap gap-2">
              {style.useCases.map((useCase, idx) => (
                <span key={idx} className={`px-3 py-1.5 rounded-full text-xs font-medium border ${isDarkTheme ? 'bg-white/10 text-white/80 border-white/20' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                  {useCase}
                </span>
              ))}
            </div>
          </section>

          {/* Problems */}
          <section className={`p-5 rounded-2xl border ${isDarkTheme ? 'bg-rose-900/20 border-rose-500/20' : 'bg-rose-50/50 border-rose-100/50'}`}>
            <h2 className={`text-lg flex items-center gap-2 mb-4 ${isDarkTheme ? 'text-rose-400' : 'text-rose-900'} ${globalFont?.heading || 'font-semibold'}`}>
              <AlertTriangle size={18} className={isDarkTheme ? 'text-rose-400' : 'text-rose-500'} />
              Common Problems & Challenges
            </h2>
            <ul className="space-y-3">
              {style.problems.map((prob, idx) => (
                <li key={idx} className={`flex items-start gap-3 ${isDarkTheme ? 'text-rose-200/80' : 'text-rose-800/80'}`}>
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${isDarkTheme ? 'bg-rose-500' : 'bg-rose-400'}`}></div>
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Code Snippets */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-xl flex items-center gap-2 ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${globalFont?.heading || 'font-semibold'}`}>
                <Code2 size={20} className={isDarkTheme ? 'text-indigo-400' : 'text-indigo-500'} />
                Implementation
              </h2>
              <div className={`flex p-1 rounded-lg ${isDarkTheme ? 'bg-white/10' : 'bg-slate-100'}`}>
                <button 
                  onClick={() => setCodeTab('tailwind')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${codeTab === 'tailwind' ? (isDarkTheme ? 'bg-white/20 text-white shadow-sm scale-100' : 'bg-white text-slate-900 shadow-sm scale-100') : (isDarkTheme ? 'text-white/60 hover:text-white hover:bg-white/10 active:scale-95' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 active:scale-95')}`}
                >
                  Tailwind
                </button>
                <button 
                  onClick={() => setCodeTab('css')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${codeTab === 'css' ? (isDarkTheme ? 'bg-white/20 text-white shadow-sm scale-100' : 'bg-white text-slate-900 shadow-sm scale-100') : (isDarkTheme ? 'text-white/60 hover:text-white hover:bg-white/10 active:scale-95' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 active:scale-95')}`}
                >
                  Vanilla CSS
                </button>
              </div>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-lg ${isDarkTheme ? 'bg-black/40 border border-white/10' : 'bg-slate-900'}`}>
              <div className={`flex items-center px-4 py-2 border-b ${isDarkTheme ? 'bg-black/40 border-white/10' : 'bg-slate-800 border-slate-700'}`}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <span className="ml-4 text-xs text-slate-400 font-mono">
                  {codeTab === 'tailwind' ? 'example.html' : 'styles.css'}
                </span>
              </div>
              <pre className="p-4 text-sm font-mono text-slate-300 overflow-x-auto whitespace-pre">
                <code>{codeTab === 'tailwind' ? style.tailwindSnippet : style.cssSnippet}</code>
              </pre>
            </div>
          </section>
        </div>

        {/* Right Column: Live Example */}
        <div className="lg:w-1/2 order-1 lg:order-2">
          <div className="lg:sticky lg:top-10 h-fit">
            <h2 className={`text-xl mb-4 ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${globalFont?.heading || 'font-semibold'}`}>Live Example</h2>
            <LiveExample style={style} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
