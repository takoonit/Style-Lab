/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { StyleDetail } from './components/StyleDetail';
import { Dashboard } from './components/Dashboard';
import { uiStyles } from './data/styles';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [globalStyleId, setGlobalStyleId] = useState<string>(uiStyles[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Sync global style when navigating to a specific style page
  useEffect(() => {
    if (activeTab !== 'dashboard') {
      setGlobalStyleId(activeTab);
    }
    // Scroll to top on navigation
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const activeStyle = uiStyles.find(s => s.id === activeTab);
  const globalStyle = uiStyles.find(s => s.id === globalStyleId) || uiStyles[0];

  const isDarkTheme = globalStyle.id === 'aurora' || globalStyle.id === 'glassmorphism';
  const baseFontClass = globalStyle.fonts.body;

  return (
    <div className={`flex h-screen overflow-hidden transition-colors duration-500 ${globalStyle.bgClass} ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${baseFontClass}`}>
      
      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out
        ${isDarkTheme ? 'bg-black/40 border-r border-white/10 backdrop-blur-xl' : 'bg-white/80 border-r border-slate-200/50 backdrop-blur-xl'}
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsMobileMenuOpen(false);
          }} 
          styles={uiStyles} 
          isDarkTheme={isDarkTheme}
          globalFont={globalStyle.fonts}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Mobile Header Bar */}
        <header className={`md:hidden flex items-center justify-between px-4 py-3 z-20 border-b ${isDarkTheme ? 'bg-black/20 border-white/10 backdrop-blur-md' : 'bg-white/50 border-slate-200/50 backdrop-blur-md'}`}>
          <div className={`font-medium truncate ${globalStyle.fonts.heading}`}>
            {activeTab === 'dashboard' ? 'Dashboard' : activeStyle?.name}
          </div>
          <button 
            className={`p-2 -mr-2 rounded-lg transition-colors ${isDarkTheme ? 'text-white hover:bg-white/10' : 'text-slate-900 hover:bg-slate-200/50'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        <main ref={mainRef} className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto p-4 md:p-10">
            {activeTab === 'dashboard' ? (
              <Dashboard 
                styles={uiStyles} 
                onSelectStyle={setActiveTab} 
                globalStyleId={globalStyleId}
                setGlobalStyleId={setGlobalStyleId}
                isDarkTheme={isDarkTheme}
                globalFont={globalStyle.fonts}
              />
            ) : activeStyle ? (
              <StyleDetail style={activeStyle} isDarkTheme={isDarkTheme} globalFont={globalStyle.fonts} onBack={() => setActiveTab('dashboard')} />
            ) : null}
          </div>
        </main>
      </div>
    </div>
  );
}
