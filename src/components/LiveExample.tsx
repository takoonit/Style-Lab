import { UIStyle } from '../data/styles';

export function LiveExample({ style }: { style: UIStyle }) {
  return (
    <div className={`w-full h-[320px] md:h-[400px] rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center p-4 md:p-8 relative ${style.bgClass}`}>
      
      {/* Aurora specific background elements */}
      {style.id === 'aurora' && (
        <>
          <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-[60px] md:blur-[90px] opacity-40 animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-cyan-500 rounded-full mix-blend-screen filter blur-[60px] md:blur-[90px] opacity-40 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="absolute -bottom-10 left-10 md:left-20 w-48 md:w-64 h-48 md:h-64 bg-pink-500 rounded-full mix-blend-screen filter blur-[60px] md:blur-[90px] opacity-40 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        </>
      )}

      {/* Render the actual Tailwind snippet as HTML */}
      <div 
        className="w-full max-w-sm relative z-10"
        dangerouslySetInnerHTML={{ __html: style.tailwindSnippet }} 
      />
    </div>
  );
}
