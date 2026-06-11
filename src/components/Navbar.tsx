import React from 'react';
import { motion } from 'motion/react';
import { Compass, Hammer, Image, MapPin, Layers, LayoutGrid, Terminal, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onRequestQuote: () => void;
}

export default function Navbar({ currentTab, setTab, onRequestQuote }: NavbarProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('light') ? 'light' : 'dark';
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const tabs = [
    { id: 'homepage', label: 'Overview', icon: LayoutGrid },
    { id: 'services', label: 'Services', icon: Hammer },
    { id: 'gallery', label: 'Projects', icon: Image },
    { id: 'locations', label: 'Locations', icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-600/10 bg-brand-darker/80 backdrop-blur-md shadow-xl shadow-brand-darker/50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div 
          onClick={() => setTab('homepage')} 
          className="flex cursor-pointer items-center gap-3 transition-colors hover:opacity-90"
        >
          <div className="relative flex h-9 w-9 items-center justify-center border-2 border-emerald-600 bg-brand-dark font-display text-lg font-bold text-emerald-500 rounded-lg shadow-lg shadow-emerald-900/20">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-black tracking-tighter text-white uppercase leading-none">
              SOLID STATE <span className="text-emerald-500">CONSTRUCTION</span>
            </span>
          </div>
        </div>

        {/* Technical Nav Links */}
        <nav className="hidden md:flex items-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-link-${tab.id}`}
                onClick={() => setTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-xl ${
                  isActive ? 'text-emerald-500 bg-emerald-950/30' : 'text-slate-400 hover:text-emerald-500 hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-emerald-500' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Global CTA Status button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-emerald-500 hover:bg-slate-800 transition-all shadow-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
          
          <div className="hidden lg:flex items-center gap-2 border border-emerald-900/50 bg-emerald-950/20 px-4 py-2 font-display font-bold text-[11px] text-emerald-500 rounded-xl uppercase tracking-widest shadow-sm">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>24/7 Emergency: (512) 595-2332</span>
          </div>

          <button
            id="rfq-trigger-button"
            onClick={onRequestQuote}
            className="group relative overflow-hidden bg-emerald-600 px-6 py-2.5 font-display text-xs font-black uppercase tracking-widest text-white rounded-xl shadow-lg shadow-emerald-900/30 transition-all hover:bg-emerald-500 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Quote
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Submenu for Quick Tap */}
      <div className="md:hidden flex max-w-full justify-around border-t border-slate-800 bg-brand-darker/65 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setTab(tab.id)}
              className={`flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-wide px-2 py-1 ${
                isActive ? 'text-emerald-500' : 'text-slate-400'
              }`}
            >
              <Icon className="h-4.5 w-4.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
