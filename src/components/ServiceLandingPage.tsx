import React from 'react';
import { motion } from 'motion/react';
import { Phone, Shield, Clock, Award, ArrowRight } from 'lucide-react';
import { getServicePage } from '../data/servicePages';
import { openCalendly } from '../utils/calendly';

interface ServiceLandingPageProps {
  slug: string;
  onRequestQuote: () => void;
}

export default function ServiceLandingPage({ slug, onRequestQuote }: ServiceLandingPageProps) {
  const meta = getServicePage(slug);

  // Update document head for SEO
  React.useEffect(() => {
    if (!meta) return;
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);
    const kwEl = document.querySelector('meta[name="keywords"]');
    if (kwEl) kwEl.setAttribute('content', meta.keywords);
    const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalEl) canonicalEl.href = `https://solidstatesconstruction.com/services/${slug}`;
    
    return () => {
      // Reset on unmount
      document.title = 'Solid State Construction | Water Remediation, Roofing, Foundation & Plumbing — Leander, TX';
      if (descEl) descEl.setAttribute('content', 'Solid State Construction provides 24/7 emergency water remediation, roofing repair & replacement, concrete foundation leveling, and expert plumbing in Leander, Cedar Park, and North Austin. Free estimates — call (512) 595-2332.');
      if (kwEl) kwEl.setAttribute('content', '');
      if (canonicalEl) canonicalEl.href = 'https://solidstatesconstruction.com/';
    };
  }, [meta, slug]);

  if (!meta) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-darker text-slate-100">
        <div className="text-center">
          <h1 className="font-display text-3xl font-black uppercase">Service Not Found</h1>
          <p className="mt-4 text-slate-400">The service you're looking for isn't available. Please browse our main services.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-slate-100 bg-brand-darker">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <div className="h-[500px] w-[500px] rounded-full bg-emerald-700 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 pt-24 pb-16 sm:px-6 lg:px-8">
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
            <span>24/7 Emergency Response | (512) 595-2332</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.15]"
          >
            {meta.h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            {meta.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="tel:5125952332"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-emerald-900/30 w-full sm:w-auto text-center flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Phone className="h-5 w-5" />
              <span>Call (512) 595-2332</span>
            </a>
            <button
              onClick={onRequestQuote}
              className="border-2 border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all w-full sm:w-auto"
            >
              Get a Free Estimate
            </button>
            <button
              onClick={openCalendly}
              className="border border-slate-800 text-slate-400 hover:text-white px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all w-full sm:w-auto"
            >
              Book Inspection
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 bg-emerald-950/50 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-emerald-500" />
            </div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">1-Hour Response</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 bg-emerald-950/50 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-emerald-500" />
            </div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Licensed & Insured</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 bg-emerald-950/50 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Award className="h-6 w-6 text-emerald-500" />
            </div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">5.0 Star Rated</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 bg-emerald-950/50 border border-emerald-500/20 rounded-xl flex items-center justify-center">
              <Phone className="h-6 w-6 text-emerald-500" />
            </div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Free Estimates</span>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-xl">
            <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight mb-6">
              Why Choose Solid State for {meta.h1.split('—')[0].trim()}?
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                At Solid State Construction, we bring over a decade of hands-on experience to every project in Leander, Cedar Park, and North Austin. Our team is equipped with industrial-grade tools and proven techniques to deliver lasting results — whether it's an emergency call at 2 AM or a planned renovation.
              </p>
              <p>
                We handle everything from the initial inspection through final cleanup, including insurance coordination when applicable. Every job is backed by our commitment to clear communication, on-time arrival, and workmanship you can depend on.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 mt-4">
                <li>Free, no-obligation estimates for every project</li>
                <li>24/7 availability for emergencies — we answer the phone</li>
                <li>Licensed, insured, and bonded for your protection</li>
                <li>Insurance claims handled from start to finish</li>
                <li>Serving Leander, Cedar Park, Liberty Hill, Georgetown, Round Rock & North Austin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight mb-8">
            Service Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Leander', 'Cedar Park', 'Liberty Hill', 'Georgetown', 'Round Rock', 'North Austin', 'Lakeway', 'Bee Cave'].map((city) => (
              <span key={city} className="px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm font-bold text-slate-300">
                {city}, TX
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center bg-slate-900 border border-slate-700 p-10 sm:p-16 rounded-3xl shadow-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Contact us today for a free, no-obligation estimate. We're ready to help with your {meta.h1.split('—')[0].toLowerCase().trim()} needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:5125952332"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-5 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-emerald-900/30 w-full sm:w-auto inline-flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Phone className="h-5 w-5" />
              <span>(512) 595-2332</span>
            </a>
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