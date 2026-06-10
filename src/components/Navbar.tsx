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
    { id: 'gallery', label: 'Registry', icon: Image },
    { id: 'locations', label: 'NodesMap', icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-orange-500/10 bg-brand-darker/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <div 
          onClick={() => setTab('homepage')} 
          className="flex cursor-pointer items-center gap-3 transition-colors hover:opacity-90"
        >
          <div className="relative flex h-9 w-9 items-center justify-center border-2 border-orange-500 bg-brand-dark font-display text-lg font-bold text-orange-400">
            S
            <span className="absolute -right-1 -top-1 h-1.5 w-1.5 bg-orange-500" />
            <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 bg-orange-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-widest text-slate-100 uppercase">
              SOLID STATE <span className="text-orange-500">CONSTRUCTION</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-orange-400/80 uppercase">
              SPEC SYSTEM V4.1
            </span>
          </div>
        </div>

        {/* Technical Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-link-${tab.id}`}
                onClick={() => setTab(tab.id)}
                className="relative flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-150 text-slate-400 hover:text-orange-400"
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-orange-500' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-amber-400"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Global CTA Status button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-orange-500 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          
          <div className="hidden lg:flex items-center gap-2 border border-slate-800 bg-slate-900/60 px-3 py-1 font-mono text-[10px] text-slate-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </span>
            <span>(512) 595-2332 // 24/7 EMERGENCY</span>
          </div>

          <button
            id="rfq-trigger-button"
            onClick={onRequestQuote}
            className="group relative overflow-hidden bg-orange-500 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-brand-dark shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all hover:bg-orange-600 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5" />
              Request Spec Quote
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-amber-400 via-orange-400 to-orange-600 transition-transform duration-300 group-hover:translate-x-0" />
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
                isActive ? 'text-orange-400' : 'text-slate-400'
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
