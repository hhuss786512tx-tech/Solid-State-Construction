import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { TechnicalService } from '../types';
import { Droplets, Home, Hammer, Wrench, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage({ onRequestQuote }: { onRequestQuote: () => void }) {
  const [selectedService, setSelectedService] = useState<TechnicalService>(SERVICES[0]);
  
  const getIcon = (id: string) => {
    switch (id) {
      case 'water-remediation': return Droplets;
      case 'roofing': return Home;
      case 'concrete': return Hammer;
      case 'plumbing': return Wrench;
      default: return CheckCircle2;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 text-slate-100 min-h-screen">
      
      {/* Header and subtitle */}
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400 font-sans leading-relaxed">
          Straightforward, professional solutions for your home's most critical needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Left Side: Service Switchers */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex flex-row overflow-x-auto lg:flex-col gap-3 pb-3 lg:pb-0 scrollbar-none">
            {SERVICES.map((serv) => {
              const isSelected = selectedService.id === serv.id;
              const Icon = getIcon(serv.id);
              return (
                <button
                  key={serv.id}
                  onClick={() => setSelectedService(serv)}
                  className={`w-full text-left p-5 border-2 transition-all duration-300 rounded-2xl shrink-0 flex items-center gap-4 ${
                    isSelected 
                      ? 'border-emerald-600 bg-emerald-950/20 text-emerald-400 shadow-xl' 
                      : 'border-slate-800 bg-slate-900/30 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isSelected ? 'text-emerald-500' : 'text-slate-500'}`} />
                  <span className="font-display text-sm font-black uppercase tracking-tight">
                    {serv.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:block bg-slate-900 border-2 border-slate-800 p-8 rounded-3xl text-center shadow-2xl mt-8">
            <h3 className="text-white font-black uppercase mb-3">Need a Price?</h3>
            <p className="text-slate-400 text-sm mb-6">
              Use our interactive estimator to get a range for your project.
            </p>
            <button
              onClick={onRequestQuote}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-display text-xs font-black uppercase tracking-widest py-4 rounded-2xl transition-all shadow-lg shadow-emerald-900/40"
            >
              Get Free Estimate &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Showcase Content */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-slate-800 rounded-[40px] p-8 sm:p-12 shadow-2xl overflow-hidden relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-emerald-500 font-mono text-xs font-black uppercase tracking-[0.2em] mb-4 block">
                    {selectedService.id === 'water-remediation' ? '24/7 EMERGENCY PRIORITY' : 'CORE SERVICE'}
                  </span>
                  <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                    {selectedService.name}
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 font-sans">
                    {selectedService.description}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {selectedService.details.map((detail, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                          <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold uppercase text-sm mb-1">{detail.title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{detail.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onRequestQuote}
                    className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl transition-all shadow-xl shadow-emerald-900/30"
                  >
                    Get a Quote for this Service
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative">
                  <div className="aspect-[4/5] rounded-[32px] overflow-hidden border-2 border-slate-800 shadow-2xl relative group">
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Stats Overlay Card */}
                  <div className="absolute -bottom-6 -left-6 bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-2xl max-w-[200px]">
                    <div className="text-emerald-500 font-black text-2xl mb-1 uppercase">100%</div>
                    <div className="text-white font-bold text-[10px] uppercase tracking-widest">Quality Guarantee</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
