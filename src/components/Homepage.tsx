import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Droplets, Home, Hammer, Wrench, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { openCalendly } from '../utils/calendly';

interface HomepageProps {
  setTab: (tab: string) => void;
  onRequestQuote: () => void;
  setSelectedHubId?: (id: string) => void;
}

type JobSiteItem = {
  kind: 'video' | 'photo';
  src: string;
  poster?: string;
  srcSet?: string;
  width?: number;
  height?: number;
  alt?: string;
  title: string;
  caption: string;
};

// Real job-site media. Captions describe only what is visible in each shot —
// none of these are tied to a specific client or case study.
const jobSiteMedia: JobSiteItem[] = [
  {
    kind: 'video',
    src: '/media/work-tunnel-shoring.mp4',
    poster: '/media/work-tunnel-shoring-poster.jpg',
    title: 'Tunnel Shoring',
    caption:
      'Timber cribbing and forced-air ventilation down an access tunnel — reaching the line without opening the slab above.',
  },
  {
    kind: 'video',
    src: '/media/work-bedding-sand.mp4',
    poster: '/media/work-bedding-sand-poster.jpg',
    title: 'Bedding Sand by Hand',
    caption:
      "Sand moved bucket by bucket and screeded out by hand where a machine can't reach the edge.",
  },
  {
    kind: 'video',
    src: '/media/work-driveway-rebuild.mp4',
    poster: '/media/work-driveway-rebuild-poster.jpg',
    title: 'Driveway Rebuild',
    caption:
      'The full run of a driveway job — material staged, bed prepared, and the drive kept passable throughout.',
  },
  {
    kind: 'photo',
    src: '/media/work-concrete-cut-repair-800.jpg',
    srcSet:
      '/media/work-concrete-cut-repair-800.jpg 800w, /media/work-concrete-cut-repair-1600.jpg 1600w',
    width: 1600,
    height: 1200,
    alt: 'A narrow strip of fresh concrete poured back into a cut running the length of an existing driveway',
    title: 'Driveway Cut Repair',
    caption: 'A utility cut poured back flush with the existing drive and left to cure behind tape.',
  },
  {
    // Carries an EXIF orientation flag: the browser renders this one portrait,
    // so it is declared 1200x1600 even though the stored buffer reads landscape.
    kind: 'photo',
    src: '/media/work-utility-trench-800.jpg',
    srcSet:
      '/media/work-utility-trench-800.jpg 800w, /media/work-utility-trench-1600.jpg 1600w',
    width: 1200,
    height: 1600,
    alt: 'New white PVC line bedded along the floor of an open trench with existing services crossing above it',
    title: 'Utility Line Trench',
    caption:
      'A new line bedded in an open trench, with the services already in the ground exposed and worked around.',
  },
  {
    kind: 'photo',
    src: '/media/work-spoil-haul-800.jpg',
    srcSet: '/media/work-spoil-haul-800.jpg 800w, /media/work-spoil-haul-1600.jpg 1600w',
    width: 1600,
    height: 1200,
    alt: 'Crew member loading excavated soil into a dump trailer hitched behind a truck on a residential street',
    title: 'Spoil Haul-Off',
    caption: 'Excavated material loaded straight out to the trailer rather than left sitting on the street.',
  },
];

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
      title: 'Plumbing Services',
      desc: 'Professional leak detection, pipe replacement, fixtures installation, and emergency plumbing.',
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
      <section className="relative px-4 pt-24 pb-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Job-site b-roll behind the hero copy. Muted + decorative, so it carries
            no alt text and is hidden from assistive tech; the poster covers
            reduced-motion and any browser that blocks autoplay. */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <video
            className="h-full w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/hero-crew-material-chain-poster.jpg"
            aria-hidden="true"
          >
            <source src="/media/hero-crew-material-chain.mp4" type="video/mp4" />
          </video>
          <img
            src="/media/hero-crew-material-chain-poster.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block"
          />
          <div className="absolute inset-0 bg-brand-darker/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/90 via-brand-darker/40 to-brand-darker" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-emerald-600/20 bg-emerald-950/30 px-5 py-2 text-xs font-bold text-emerald-500 mb-8 uppercase tracking-widest rounded-full shadow-lg shadow-emerald-900/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>24/7 Emergency Response | (512) 595-2332</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1]"
          >
            Solid State <span className="text-emerald-500">Construction</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            Water remediation, roofing, concrete, foundation repair & plumbing — on-site within 1 hour in Leander, Cedar Park, and North Austin.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <button
              onClick={openCalendly}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-emerald-900/30 w-full sm:w-auto text-center flex items-center justify-center gap-2 group cursor-pointer"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>Book Walkthrough Inspection</span>
            </button>
            <button
              onClick={onRequestQuote}
              className="border-2 border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all w-full sm:w-auto"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:5125952332"
              className="flex items-center justify-center gap-2 text-slate-400 hover:text-white px-6 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all w-full sm:w-auto border border-slate-800"
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

      {/* Job Site Media Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              From the Job Site
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Our own crews on our own projects — every clip and photo below was shot on site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobSiteMedia.map((item, i) => (
              <motion.figure
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50"
              >
                <div className="h-56 overflow-hidden bg-slate-950">
                  {item.kind === 'video' ? (
                    <video
                      className="h-full w-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster={item.poster}
                      aria-hidden="true"
                      ref={(el) => {
                        if (!el || el.dataset.observed) return;
                        el.dataset.observed = 'true';
                        // Only fetch and play a clip once it is actually on screen.
                        const io = new IntersectionObserver(
                          ([entry]) => {
                            if (entry.isIntersecting) {
                              el.play().catch(() => {});
                            } else {
                              el.pause();
                            }
                          },
                          { threshold: 0.25 }
                        );
                        io.observe(el);
                      }}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      srcSet={item.srcSet}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <figcaption className="p-6">
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.caption}</p>
                </figcaption>
              </motion.figure>
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
            <p className="text-slate-400 font-bold mt-3 tracking-widest uppercase text-sm">5.0/5.0 — Real Reviews from Leander Neighbors</p>
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
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={openCalendly}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-5 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-emerald-900/30 w-full sm:w-auto inline-flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book Walkthrough Inspection</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
            <button 
              onClick={onRequestQuote}
              className="border-2 border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-white px-8 py-5 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all w-full sm:w-auto"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
