import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Award, Network, Compass, ShieldCheck } from 'lucide-react';
import { HOMEPAGE_WIDGETS, TESTIMONIALS } from '../data';

interface HomepageProps {
  setTab: (tab: string) => void;
  onRequestQuote: () => void;
  setSelectedHubId?: (id: string) => void;
}

export default function Homepage({ setTab, onRequestQuote, setSelectedHubId }: HomepageProps) {
  const handleHubSelect = (hubId: string) => {
    if (setSelectedHubId) {
      setSelectedHubId(hubId);
    }
    setTab('locations');
  };

  return (
    <div className="relative min-h-screen text-slate-100 technical-grid-fine">
      {/* Background glowing gradients */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <div className="h-[500px] w-[500px] rounded-full bg-emerald-700 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            
            {/* System Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 border border-emerald-600/20 bg-emerald-950/10 px-4 py-1.5 font-mono text-xs text-emerald-500 mb-6 uppercase tracking-widest rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-700"></span>
              </span>
              <span>SYSTEM_STATUS // OPTIMAL // REGISTRY ONLINE</span>
            </motion.div>

            {/* Industrial Headings */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl max-w-4xl leading-none"
            >
              Leander's Choice for <br />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Quality Construction
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed font-sans"
            >
              SOLID STATE CONSTRUCTION is Leander's premier partner for comprehensive home restoration and improvement. We specialize in essential services designed to keep your home safe, beautiful, and structurally sound.
            </motion.p>

            {/* CTA Triggers */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <button
                id="hero-request-quote"
                onClick={onRequestQuote}
                className="group relative cursor-pointer overflow-hidden border border-emerald-600 bg-emerald-700/10 px-8 py-3.5 font-display text-xs font-bold uppercase tracking-widest text-emerald-500 shadow-[0_0_20px_rgba(6, 95, 70,0.1)] transition-all hover:bg-emerald-700 hover:text-brand-dark hover:shadow-[0_0_30px_rgba(6, 95, 70,0.3)]"
              >
                Get a Quote Online
                <div className="absolute right-2 top-2 h-1.5 w-1.5 bg-emerald-500 group-hover:bg-brand-dark" />
              </button>

              <a
                href="tel:5125952332"
                className="group flex items-center gap-2 cursor-pointer border border-slate-700/80 bg-slate-900/40 px-8 py-3.5 font-display text-xs font-bold uppercase tracking-widest text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-900"
              >
                Call Now: (512) 595-2332
                <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-emerald-500" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-950/40 border-y border-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-500">// INTEGRATED SOLUTIONS</span>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white mt-1">
              Bento Services Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Bento Card 1: Architectural Engineering */}
            <div 
              onClick={() => setTab('services')}
              className="group relative cursor-pointer overflow-hidden border border-slate-800 bg-brand-dark p-6 transition-all hover:border-emerald-600/40 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-slate-800 bg-slate-900 font-mono text-xs text-emerald-500 group-hover:border-emerald-600/20 group-hover:text-emerald-400">
                01
              </div>
              <h3 className="font-display font-bold uppercase text-white mt-8 tracking-wider group-hover:text-emerald-500 transition-colors">
                {HOMEPAGE_WIDGETS.bento.engineering.title}
              </h3>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed font-sans">
                {HOMEPAGE_WIDGETS.bento.engineering.desc}
              </p>
              
              <div className="mt-8 overflow-hidden h-36 border border-slate-800/80 relative">
                <img 
                  src={HOMEPAGE_WIDGETS.bento.engineering.image} 
                  alt="Architectural engineering design mockup" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Bento Card 2: Future-Proof Infrastructure */}
            <div 
              onClick={() => setTab('services')}
              className="group relative cursor-pointer overflow-hidden border border-slate-800 bg-brand-dark p-6 transition-all hover:border-emerald-600/40 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-slate-800 bg-slate-900 font-mono text-xs text-emerald-500 group-hover:border-emerald-600/20 group-hover:text-emerald-400">
                02
              </div>
              <h3 className="font-display font-bold uppercase text-white mt-8 tracking-wider group-hover:text-emerald-500 transition-colors">
                {HOMEPAGE_WIDGETS.bento.infrastructure.title}
              </h3>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed font-sans">
                {HOMEPAGE_WIDGETS.bento.infrastructure.desc}
              </p>

              <div className="mt-8 overflow-hidden h-36 border border-slate-800/80 relative">
                <img 
                  src={HOMEPAGE_WIDGETS.bento.infrastructure.image} 
                  alt="Mega civil structural crane" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Bento Card 3: Digital Twins (Hover Offsets) */}
            <div 
              onClick={() => setTab('services')}
              className="group relative cursor-pointer overflow-hidden border border-slate-800 bg-brand-dark p-6 flex flex-col justify-between transition-all hover:border-emerald-600/40 hover:-translate-y-1"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center border border-slate-800 bg-slate-900 font-mono text-xs text-emerald-500 group-hover:border-emerald-600/20 group-hover:text-emerald-400">
                  03
                </div>
                <h3 className="font-display font-bold uppercase text-white mt-8 tracking-wider group-hover:text-emerald-500 transition-colors">
                  {HOMEPAGE_WIDGETS.bento.digitalTwins.title}
                </h3>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed font-sans">
                  {HOMEPAGE_WIDGETS.bento.digitalTwins.desc}
                </p>
                
                {/* Visual Digital twin telemetry dashboard mockup layout */}
                <div className="mt-8 p-4 border border-dashed border-slate-800 bg-slate-950/80 font-mono text-[9px] text-emerald-500/80 space-y-2 relative">
                  <div className="flex justify-between border-b border-slate-900 pb-1">
                    <span>SENSOR_NODE_099</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>STRESS RATIO:</span>
                      <span className="text-slate-300">0.42 / 1.0</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-700 h-full w-[42%] transition-all duration-500" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>TEMP COEFF:</span>
                      <span className="text-slate-300">92.4Â°F</span>
                    </div>
                  </div>
                  <div className="absolute right-2 bottom-2 text-slate-600 font-bold uppercase">
                    MATRIX_MOD_A
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-end text-emerald-500 text-xs font-mono group-hover:text-emerald-400">
                <span>View specification details &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Charting the Future of Steel + Polaroid Widgets */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Stats Left Pane */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-500">// PERFORMANCE AUDITS</span>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white mt-1">
                  Who We Are & What We Do
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed font-sans mt-4">
                  SOLID STATE CONSTRUCTION is Leander's premier partner for comprehensive home restoration and improvement. We pride ourselves on being a local business that understands the unique construction needs of our Leander and North Austin neighbors. Every project we undertake is an essential service designed to keep your home safe and structurally sound.
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-8 font-mono">
                <div>
                  <div className="text-4xl font-extrabold text-emerald-600 tracking-tight">100%</div>
                  <div className="text-[10px] uppercase text-slate-400 tracking-wider mt-1.5">
                    Local Leander Focus
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white tracking-tight">24/7</div>
                  <div className="text-[10px] uppercase text-slate-400 tracking-wider mt-1.5">
                    Emergency Support
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-slate-300 tracking-tight">50+</div>
                  <div className="text-[10px] uppercase text-slate-400 tracking-wider mt-1.5">
                    5-Star Local Reviews
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-emerald-500 tracking-tight">Zero</div>
                  <div className="text-[10px] uppercase text-slate-400 tracking-wider mt-1.5">
                    Defect Guarantee
                  </div>
                </div>
              </div>
            </div>

            {/* Polaroid Right Pane */}
            <div className="lg:col-span-7 flex flex-wrap justify-center gap-8 relative py-8">
              {HOMEPAGE_WIDGETS.polaroids.map((p) => (
                <div 
                  key={p.id}
                  style={{ transform: `rotate(${p.angle}deg)` }}
                  className="w-64 bg-slate-100 text-slate-900 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-200 hover:rotate-0 hover:scale-105 hover:z-20 transition-all duration-300 cursor-pointer"
                >
                  {/* Polaroid Image */}
                  <div className="h-56 bg-slate-300 overflow-hidden relative border border-slate-400/50">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-slate-900/80 text-emerald-500 text-[8px] font-mono px-1.5 py-0.5 uppercase">
                      SECURED // SPEC
                    </div>
                  </div>
                  {/* Polaroid Label Footer */}
                  <div className="mt-4 flex flex-col items-center text-center">
                    <span className="font-mono text-[9px] tracking-widest text-emerald-700 font-bold uppercase leading-none">
                      {p.label}
                    </span>
                    <h4 className="font-display text-sm font-bold text-slate-800 tracking-tight mt-1">
                      {p.title}
                    </h4>
                    <span className="font-mono text-[8px] text-slate-400 mt-2">
                      SOLID STATE CONSTRUCTION FILE // 2026
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Global Command Centers Map Showcase preview */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-950/60 border-t border-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-500">// COMMAND CENTERS</span>
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white mt-1">
                Global Operations Nodes
              </h2>
            </div>
            <button 
              onClick={() => setTab('locations')}
              className="mt-4 sm:mt-0 font-mono text-xs text-emerald-500 hover:text-emerald-400 flex items-center gap-1 hover:underline"
            >
              Open Tactical Blueprint Map &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOMEPAGE_WIDGETS.globalCommandCenters.map((hub) => (
              <div 
                key={hub.city}
                onClick={() => handleHubSelect(hub.city === 'CHICAGO' ? 'chicago-hub' : hub.city === 'LONDON' ? 'london-hub' : 'ny-hub')}
                className="group relative cursor-pointer overflow-hidden border border-slate-800 bg-brand-dark transition-all hover:border-emerald-600/40"
              >
                {/* Image panel: Grayscale to color transition */}
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={hub.image} 
                    alt={hub.city} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Grayscale filter overlay matching specifications */}
                  <div className="absolute inset-0 bg-brand-dark/20 mix-blend-color group-hover:opacity-0 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4">
                    <span className="font-mono text-[9px] bg-emerald-800 text-slate-900 font-extrabold px-1.5 py-0.5 uppercase">
                      {hub.role}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-display text-lg font-bold text-white tracking-widest">
                      {hub.city} NODE
                    </h3>
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full" />
                  </div>
                  
                  <div className="flex justify-between font-mono text-[9px] text-slate-500 border-t border-slate-900 pt-2">
                    <span>COORDINATES // Lat: {hub.lat}</span>
                    <span>Lon: {hub.lng}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-500">// NEIGHBOR FEEDBACK</span>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white mt-1">
              Top Rated in Leander
            </h2>
            <p className="text-sm text-slate-400 font-mono mt-2">5.0/5.0 BASED ON 50+ LOCAL REVIEWS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="border border-slate-800 bg-brand-dark p-8 relative group hover:border-emerald-600/30 transition-all">
                <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-emerald-600 opacity-50 group-hover:opacity-100" />
                <div className="text-emerald-500 mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-4 w-4 fill-emerald-600/20" />
                  ))}
                </div>
                <p className="text-slate-300 font-serif text-lg leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-900 pt-6 flex items-center gap-4">
                  <div className="h-10 w-10 bg-slate-900 border border-slate-800 flex items-center justify-center font-display font-bold text-emerald-500 text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm tracking-tight">{t.name}</div>
                    <div className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero-like Call to Action */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-t from-emerald-950/20 to-transparent border-t border-slate-900">
        <div className="mx-auto max-w-5xl text-center border-2 border-dashed border-emerald-600/20 bg-brand-darker/60 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-emerald-600" />
          <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-emerald-600" />
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-emerald-600" />
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-emerald-600" />

          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500">// READY TO EXECUTE</span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-white mt-2">
            Constructing the Future
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            Specify structural foundations, advanced roofing membranes, custom geometric layouts or heavy pumping installations. Trigger a simulation run now.
          </p>
          <div className="mt-8 flex justify-center">
            <button 
              onClick={onRequestQuote}
              className="bg-emerald-700 text-brand-dark hover:bg-emerald-800 shadow-[0_0_20px_rgba(6, 95, 70,0.3)] transition-all font-display text-xs font-bold uppercase tracking-widest px-8 py-3"
            >
              LAUNCH QUANTITY BID RUN
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
