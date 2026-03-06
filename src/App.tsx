/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { StyleDetail } from './components/StyleDetail';
import { Dashboard } from './components/Dashboard';
import { uiStyles } from './data/styles';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [globalStyleId, setGlobalStyleId] = useState<string>(uiStyles[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync global style when navigating to a specific style page
  useEffect(() => {
    if (activeTab !== 'dashboard') {
      setGlobalStyleId(activeTab);
    }
  }, [activeTab]);

  const activeStyle = uiStyles.find(s => s.id === activeTab);
  const globalStyle = uiStyles.find(s => s.id === globalStyleId) || uiStyles[0];

  const isDarkTheme = globalStyle.id === 'aurora' || globalStyle.id === 'glassmorphism';
  const baseFontClass = globalStyle.fonts.body;

  return (
    <div className={`flex h-screen overflow-hidden transition-colors duration-500 ${globalStyle.bgClass} ${isDarkTheme ? 'text-white' : 'text-slate-900'} ${baseFontClass}`}>
      {/* Mobile Menu Toggle */}
      <button 
        className={`md:hidden fixed top-4 right-4 z-50 p-2 rounded-full shadow-lg ${isDarkTheme ? 'bg-white/20 text-white' : 'bg-slate-900 text-white'}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out
        ${isDarkTheme ? 'bg-black/20 border-r border-white/10 backdrop-blur-md' : 'bg-white/50 border-r border-slate-200/50 backdrop-blur-md'}
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
      <main className="flex-1 overflow-y-auto">
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
            <StyleDetail style={activeStyle} isDarkTheme={isDarkTheme} globalFont={globalStyle.fonts} />
          ) : null}
        </div>
      </main>
    </div>
  );
}
