import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Droplets, Home, Hammer, Wrench, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data';

interface HomepageProps {
  setTab: (tab: string) => void;
  onRequestQuote: () => void;
  setSelectedHubId?: (id: string) => void;
}

export default function Homepage({ setTab, onRequestQuote }: HomepageProps) {
  const coreServices = [
    {
      id: 'water',
      title: 'Water Remediation',
      desc: 'Rapid 24/7 response to dry, clean, and restore your home from water damage.',
      icon: Droplets,
    },
    {
      id: 'roofing',
      title: 'Roofing Services',
      desc: 'Expert roof repairs and full replacements for long-lasting protection.',
      icon: Home,
    },
    {
      id: 'concrete',
      title: 'Concrete & Foundation',
      desc: 'Structural foundation leveling, concrete repair, and solid stabilization.',
      icon: Hammer,
    },
    {
      id: 'plumbing',
      title: 'Concrete Plumbing',
      desc: 'Specialized structural plumbing and hydraulic network solutions.',
      icon: Wrench,
    }
  ];

  return (
    <div className="relative min-h-screen text-slate-100 bg-brand-darker">
      {/* Background glowing gradients */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <div className="h-[500px] w-[500px] rounded-full bg-emerald-700 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-emerald-600/20 bg-emerald-950/30 px-5 py-2 text-xs font-bold text-emerald-500 mb-8 uppercase tracking-widest rounded-full shadow-lg shadow-emerald-900/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Local & Reliable Leander Experts</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-[1.1]"
          >
            Solid State <br />
            <span className="text-emerald-500">Construction</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Straight to the point: We fix homes. From emergency water remediation to foundational concrete, we provide quality craftsmanship you can trust.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={onRequestQuote}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-emerald-900/30 w-full sm:w-auto"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:5125952332"
              className="flex items-center justify-center gap-2 border-2 border-slate-700 bg-slate-800/50 hover:bg-slate-800 px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-sm text-white transition-all w-full sm:w-auto"
            >
              Call (512) 595-2332
            </a>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Our Core Services
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">We focus on what matters most to keeping your home structurally sound and safe.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <div 
                key={service.id}
                onClick={() => setTab('services')}
                className="group cursor-pointer bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl"
              >
                <div className="h-14 w-14 bg-emerald-950/50 border border-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-emerald-500 group-hover:text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center text-emerald-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Top Rated in Leander
            </h2>
            <p className="text-slate-400 font-bold mt-3 tracking-widest uppercase text-sm">5.0/5.0 Based on 50+ Local Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl hover:border-emerald-500/30 transition-all">
                <div className="text-emerald-500 mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 fill-emerald-500" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg leading-relaxed italic mb-8 font-serif">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-800 pt-6 flex items-center gap-4">
                  <div className="h-12 w-12 bg-emerald-950 border border-emerald-500/30 rounded-full flex items-center justify-center font-display font-black text-emerald-500 text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-bold tracking-tight">{t.name}</div>
                    <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-emerald-950/20 border-t border-slate-800">
        <div className="mx-auto max-w-4xl text-center bg-slate-900 border border-slate-700 p-10 sm:p-16 rounded-3xl shadow-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Contact us today for a free estimate. We are ready to handle your water remediation, roofing, concrete, and plumbing needs.
          </p>
          <button 
            onClick={onRequestQuote}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-emerald-900/30"
          >
            Get Your Free Estimate
          </button>
        </div>
      </section>

    </div>
  );
}
