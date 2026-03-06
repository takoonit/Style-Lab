import { useState, useEffect, Component as ReactComponent, ReactNode } from 'react';
import { UIStyle, UIExample } from '../data/styles';
import { motion, AnimatePresence } from 'motion/react';
import { LiveExample } from './LiveExample';
import { CheckCircle2, Code2, Layout, History, Component, AlertTriangle, Copy, Check, AlertCircle } from 'lucide-react';
import { TrueFocus } from './reactbits/TrueFocus';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

class ErrorBoundary extends ReactComponent<{ children: ReactNode, isDarkTheme?: boolean }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: ReactNode, isDarkTheme?: boolean }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("StyleDetail rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`p-6 rounded-xl border ${this.props.isDarkTheme ? 'bg-rose-900/20 border-rose-500/20' : 'bg-rose-50 border-rose-200'}`}>
          <div className="flex items-start gap-3">
            <AlertCircle className={`w-6 h-6 shrink-0 ${this.props.isDarkTheme ? 'text-rose-400' : 'text-rose-500'}`} />
            <div>
              <h3 className={`text-lg font-medium mb-2 ${this.props.isDarkTheme ? 'text-rose-300' : 'text-rose-800'}`}>
                Something went wrong
              </h3>
              <p className={`text-sm mb-4 ${this.props.isDarkTheme ? 'text-rose-200/70' : 'text-rose-600'}`}>
                We encountered an error while rendering this style's details.
              </p>
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  this.props.isDarkTheme 
                    ? 'bg-rose-500/20 text-rose-300 hover:bg-rose-500/30' 
                    : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                }`}
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function CopyButton({ text, isDarkTheme }: { text: string, isDarkTheme?: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`relative flex items-center justify-center w-20 h-8 rounded-md transition-colors overflow-hidden ${
        isDarkTheme 
          ? 'text-slate-400 hover:text-white hover:bg-white/10' 
          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
      }`}
      title="Copy code"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.div
            key="copied"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 text-emerald-500 absolute"
          >
            <Check size={14} />
            <span className="text-xs font-medium">Copied!</span>
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 absolute"
          >
            <Copy size={14} />
            <span className="text-xs font-medium">Copy</span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

function ExampleCard({ example, style, isDarkTheme, globalFont }: { example: UIExample, style: UIStyle, isDarkTheme?: boolean, globalFont?: { heading: string; body: string } }) {
  const [showCode, setShowCode] = useState(false);
  const [codeTab, setCodeTab] = useState<'tailwind' | 'css'>('tailwind');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className={`text-lg ${isDarkTheme ? 'text-white/90' : 'text-slate-800'} ${globalFont?.heading || 'font-medium'}`}>
          {example.name}
        </h3>
        <button 
          onClick={() => setShowCode(!showCode)}
          className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${isDarkTheme ? 'bg-white/10 hover:bg-white/20 text-white/80' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}
        >
          {showCode ? 'Hide Code' : 'View Code'}
        </button>
      </div>
      
      {!showCode ? (
        <LiveExample style={style} snippet={example.tailwindSnippet} />
      ) : (
        <div className="space-y-3">
          <div className={`flex p-1 rounded-lg w-fit ${isDarkTheme ? 'bg-white/10' : 'bg-slate-100'}`}>
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
          <div className={`rounded-xl overflow-hidden shadow-lg h-[320px] md:h-[400px] flex flex-col ${isDarkTheme ? 'bg-black/40 border border-white/10' : 'bg-[#1e1e1e]'}`}>
            <div className={`flex items-center px-4 py-2 border-b shrink-0 ${isDarkTheme ? 'bg-black/40 border-white/10' : 'bg-[#1e1e1e] border-slate-700'}`}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="ml-4 text-xs text-slate-400 font-mono flex-1">
                {codeTab === 'tailwind' ? 'example.html' : 'styles.css'}
              </span>
              <CopyButton text={codeTab === 'tailwind' ? example.tailwindSnippet : example.cssSnippet} isDarkTheme={isDarkTheme} />
            </div>
            <div className="flex-1 overflow-auto bg-[#1e1e1e]">
              <SyntaxHighlighter
                language={codeTab === 'tailwind' ? 'html' : 'css'}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1rem',
                  background: 'transparent',
                  fontSize: '0.875rem',
                }}
                wrapLines={true}
                wrapLongLines={true}
              >
                {codeTab === 'tailwind' ? example.tailwindSnippet : example.cssSnippet}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function StyleDetail({ style, isDarkTheme, globalFont, onBack }: { style: UIStyle, isDarkTheme?: boolean, globalFont?: { heading: string; body: string }, onBack: () => void }) {
  const [codeTab, setCodeTab] = useState<'tailwind' | 'css'>('tailwind');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching/rendering time when style changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [style.id]);

  return (
    <ErrorBoundary isDarkTheme={isDarkTheme}>
      <motion.div 
        key={style.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-8 pb-12"
      >
      {/* Header */}
      <div className={`border-b pb-6 ${isDarkTheme ? 'border-white/10' : 'border-slate-200'}`}>
        <button
          onClick={onBack}
          className={`mb-6 flex items-center gap-2 text-sm font-medium transition-colors ${isDarkTheme ? 'text-white/60 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Dashboard
        </button>
        <div className="flex items-center justify-between">
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
          
          {/* Subtle Loading Indicator */}
          <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full ${isDarkTheme ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-500/10 text-indigo-600'}`}>
              <div className={`w-3.5 h-3.5 md:w-4 md:h-4 border-2 border-t-transparent rounded-full animate-spin ${isDarkTheme ? 'border-indigo-300' : 'border-indigo-600'}`}></div>
              <span className="text-xs md:text-sm font-medium">Loading...</span>
            </div>
          </div>
        </div>
        <p className={`mt-6 text-lg leading-relaxed max-w-3xl ${isDarkTheme ? 'text-white/70' : 'text-slate-500'}`}>{style.description}</p>
      </div>

      {/* Content with subtle fade during loading */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-40 pointer-events-none blur-[2px]' : 'opacity-100 blur-0'}`}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Left Column: Info & Code */}
        <div className="space-y-8 lg:w-1/2 order-2 lg:order-1">
          
          {/* Why It Appeared */}
          <section className={`p-6 rounded-2xl border-l-4 ${isDarkTheme ? 'bg-indigo-900/10 border-indigo-500/50 border-y-white/5 border-r-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]' : 'bg-gradient-to-br from-indigo-50/50 to-white border-indigo-400 border-y-slate-100 border-r-slate-100 shadow-sm'}`}>
            <div className={`border-b pb-3 mb-4 ${isDarkTheme ? 'border-indigo-500/20' : 'border-indigo-200/50'}`}>
              <h2 className={`text-lg flex items-center gap-2 ${isDarkTheme ? 'text-indigo-300' : 'text-indigo-900'} ${globalFont?.heading || 'font-semibold'}`}>
                <div className={`p-1.5 rounded-md ${isDarkTheme ? 'bg-indigo-500/20' : 'bg-indigo-100/80'}`}>
                  <History size={16} className={isDarkTheme ? 'text-indigo-400' : 'text-indigo-600'} />
                </div>
                Why It Appeared
              </h2>
            </div>
            <p className={`leading-relaxed ${isDarkTheme ? 'text-indigo-200/80' : 'text-indigo-900/70'}`}>
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
          <section className={`p-6 rounded-2xl border-l-4 ${isDarkTheme ? 'bg-rose-900/10 border-rose-500/50 border-y-white/5 border-r-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]' : 'bg-gradient-to-br from-rose-50/50 to-white border-rose-400 border-y-slate-100 border-r-slate-100 shadow-sm'}`}>
            <div className={`border-b pb-3 mb-4 ${isDarkTheme ? 'border-rose-500/20' : 'border-rose-200/50'}`}>
              <h2 className={`text-lg flex items-center gap-2 ${isDarkTheme ? 'text-rose-400' : 'text-rose-900'} ${globalFont?.heading || 'font-semibold'}`}>
                <div className={`p-1.5 rounded-md ${isDarkTheme ? 'bg-rose-500/20' : 'bg-rose-100/80'}`}>
                  <AlertTriangle size={16} className={isDarkTheme ? 'text-rose-400' : 'text-rose-600'} />
                </div>
                Common Problems & Challenges
              </h2>
            </div>
            <ul className="space-y-3">
              {style.problems.map((prob, idx) => (
                <li key={idx} className={`flex items-start gap-3 ${isDarkTheme ? 'text-rose-200/80' : 'text-rose-900/70'}`}>
                  <AlertCircle size={16} className={`shrink-0 mt-0.5 ${isDarkTheme ? 'text-rose-500/70' : 'text-rose-400'}`} />
                  <span className="leading-relaxed">{prob}</span>
                </li>
              ))}
            </ul>
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

      {/* Examples Section */}
      {style.examples && style.examples.length > 0 && (
        <div className={`mt-16 pt-12 border-t ${isDarkTheme ? 'border-white/10' : 'border-slate-200'}`}>
          <h2 className={`text-2xl mb-8 ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${globalFont?.heading || 'font-semibold'}`}>
            More Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {style.examples.map((example) => (
              <ExampleCard 
                key={example.id} 
                example={example} 
                style={style} 
                isDarkTheme={isDarkTheme} 
                globalFont={globalFont} 
              />
            ))}
          </div>
        </div>
      )}
      </div>
      </motion.div>
    </ErrorBoundary>
  );
}
