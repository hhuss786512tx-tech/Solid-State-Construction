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
              <div className="flex h-10 w-10 items-center justify-center border-2 border-emerald-600 font-display text-lg font-bold text-emerald-500 rounded-lg shadow-lg">
                S
              </div>
              <span className="font-display text-xl font-black tracking-tighter text-slate-100 uppercase leading-none">
                SOLID STATE <span className="text-emerald-500">CONSTRUCTION</span>
              </span>
            </div>
            <p className="max-w-md text-sm text-slate-400 leading-relaxed font-sans mt-4">
              Your local Leander construction and restoration specialists. Quality craftsmanship for water remediation, roofing, concrete, and remodeling.
            </p>
          </div>

          {/* Quick Hub Links */}
          <div>
            <h4 className="font-display text-sm font-black uppercase tracking-widest text-slate-100 mb-4 border-l-2 border-emerald-600 pl-3">
              CONTACT US
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-center gap-2 text-slate-400">
                1101 Halsey Drive, Leander, TX 78641
              </li>
              <li className="flex items-center gap-2">
                <a href="tel:5125952332" className="text-emerald-500 font-bold hover:text-emerald-400 transition-colors">(512) 595-2332</a>
              </li>
              <li className="flex items-center gap-2">
                <a href="mailto:contact@solidstateconstruction.com" className="text-slate-400 hover:text-emerald-500 transition-colors">contact@solidstateconstruction.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Direct Feed Subscription */}
          <div>
            <h4 className="font-display text-sm font-black uppercase tracking-widest text-slate-100 mb-4 border-l-2 border-emerald-600 pl-3">
              READY TO START?
            </h4>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              We provide fast, reliable estimates for all projects.
            </p>
            <button 
              onClick={() => setTab('homepage')}
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-display text-xs font-bold uppercase tracking-widest transition-all w-full"
            >
              Request a Quote
            </button>
          </div>
        </div>

        {/* Technical Status Footer Row */}
        <div className="mt-16 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-500">
          <div>
            &copy; 2026 Solid State Construction. All rights reserved.
          </div>
          <div>
            Leander's Choice for Quality Construction
          </div>
        </div>
      </div>
    </footer>
  );
}
