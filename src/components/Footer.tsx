import React, { useState } from 'react';
import { Terminal, Send, CheckCircle2 } from 'lucide-react';

export default function Footer({ setTab }: { setTab: (tab: string) => void }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="border-t border-slate-800 bg-brand-darker pt-16 pb-8 text-slate-400 technical-grid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border border-orange-500 font-display text-sm font-bold text-orange-400">
                S
              </div>
              <span className="font-display text-lg font-bold tracking-widest text-slate-100 uppercase">
                SOLID STATE <span className="text-orange-500">CONSTRUCTION</span>
              </span>
            </div>
            <p className="max-w-md text-sm text-slate-400 leading-relaxed font-sans">
              Deploying industrial design matrices, resilient structural concrete foundations, complex hydraulic plumbing arrays, and modern thermal envelopments. Tested for extreme environments and high architectural load margins.
            </p>
            <div className="flex items-center gap-3 font-mono text-xs text-orange-400 bg-orange-950/20 max-w-xs p-3 border border-orange-500/10">
              <Terminal className="h-4 w-4 shrink-0 text-orange-500" />
              <span>TERMINAL COMPONENT V4.1.2 // SECURE</span>
            </div>
          </div>

          {/* Quick Hub Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-100 mb-4 border-l-2 border-orange-500 pl-2">
              SYSTEM REGISTRY
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <button onClick={() => setTab('homepage')} className="hover:text-orange-400 transition-colors">
                  &gt; OVERVIEW_DASHBOARD
                </button>
              </li>
              <li>
                <button onClick={() => setTab('services')} className="hover:text-orange-400 transition-colors">
                  &gt; SERVICES_CATALOG
                </button>
              </li>
              <li>
                <button onClick={() => setTab('gallery')} className="hover:text-orange-400 transition-colors">
                  &gt; PROJECT_REGISTRY
                </button>
              </li>
              <li>
                <button onClick={() => setTab('locations')} className="hover:text-orange-400 transition-colors">
                  &gt; ACTIVE_LOCATIONS
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Direct Feed Subscription */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-100 mb-4 border-l-2 border-orange-500 pl-2">
              TELEMETRY UPDATES
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Subscribe to capture live blueprint releases and engineering structural releases directly in your terminal inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <CheckCircle2 className="h-4 w-4" />
                <span>INBOX FEED REGISTERED</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="engineer@firm.com"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-orange-500 px-3 py-2 text-slate-200 text-xs outline-none font-mono tracking-wide"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1.5 text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Technical Status Footer Row */}
        <div className="mt-16 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div>NETWORK_LATENCY: <span className="text-emerald-400">14ms</span></div>
            <div>GLOBAL_OPS: <span className="text-emerald-400">ONLINE</span></div>
            <div>SEISMIC_RISK: <span className="text-slate-300">STABLE</span></div>
            <div>DB_REPLC: <span className="text-orange-400">04_NODES</span></div>
          </div>
          <div>
            &copy; 2026 SOLID STATE CONSTRUCTION CORP. INC. ALL DRAWINGS LICENSED UNDER ISO 9001:2015.
          </div>
        </div>
      </div>
    </footer>
  );
}
