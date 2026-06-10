import React, { useState, useEffect } from 'react';
import { HUBS } from '../data';
import { HubLocation } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Phone, MapPin, Layers, Terminal, Send, Check, Search, Map } from 'lucide-react';

interface LocationsPageProps {
  selectedHubId: string | null;
  setSelectedHubId: (id: string | null) => void;
}

export default function LocationsPage({ selectedHubId, setSelectedHubId }: LocationsPageProps) {
  const [activeHub, setActiveHub] = useState<HubLocation>(HUBS[0]);
  const [globalInquiryRegion, setGlobalInquiryRegion] = useState('');
  const [globalInquirySuccess, setGlobalInquirySuccess] = useState(false);
  const [directionsPath, setDirectionsPath] = useState<string[] | null>(null);
  const [calculatingPath, setCalculatingPath] = useState(false);

  // Sync selectedHubId from external select trigger (e.g. from Homepage node selection)
  useEffect(() => {
    if (selectedHubId) {
      const found = HUBS.find(h => h.id === selectedHubId || h.city.toLowerCase() === selectedHubId.toLowerCase());
      if (found) {
        setActiveHub(found);
      }
    }
  }, [selectedHubId]);

  const handleHubClick = (hub: HubLocation) => {
    setActiveHub(hub);
    setSelectedHubId(hub.id);
    setDirectionsPath(null); // Clear routing path
  };

  const handleInquerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (globalInquiryRegion.trim()) {
      setGlobalInquirySuccess(true);
      setTimeout(() => {
        setGlobalInquiryRegion('');
        setGlobalInquirySuccess(false);
      }, 4000);
    }
  };

  const handleGetDirections = (hub: HubLocation) => {
    setCalculatingPath(true);
    setDirectionsPath(null);
    setTimeout(() => {
      setCalculatingPath(false);
      // Simulate highly detailed tech path tracing outputs
      setDirectionsPath([
        `TRACING CORE ROUTE &rarr; ${hub.city.toUpperCase()}_UNIT`,
        `NODE_0: CONNECTED TO SOLID STATE CONSTRUCTION_CENTRAL_SECURE_CLOUD_DNS`,
        `NODE_1: INTEGRATED TRUNK TRUNK GBL_OPS_SHIELD_V4 [${hub.coords.lat}, ${hub.coords.lng}]`,
        `NODE_2: SECTOR ENTRY SECUREMENT // PASS CODE APPROVED`,
        `ARREST ARRIVAL COORDINATES AT: ${hub.address}`,
        `TOTAL TRANSIT LATENCY ESTIMATED: 48 MINUTES VIA EXP_LINE`
      ]);
    }, 1200);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-slate-100 technical-grid-fine">
      
      {/* Title section from Specifications */}
      <div className="text-center mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-orange-400">// STATIONS MAP</span>
        <h1 className="font-display text-4xl font-extrabold uppercase text-white tracking-widest mt-1">
          Strategic Site Network
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-400 font-sans leading-relaxed">
          Integrated structural nodes communicating continuous live load telemetry. Select a command hub to see detailed staffs and workloads.
        </p>
      </div>

      {/* Grid: Map layout left, dynamic hub card details right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        
        {/* Map Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between border border-slate-800 bg-slate-950 p-6 relative overflow-hidden">
          
          {/* Diagnostic Overlay */}
          <div className="flex justify-between items-center bg-slate-900/80 border border-slate-800 p-3 font-mono text-[9px] mb-4 z-10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              <span>TACTICAL_SITES MAP V1 // SYSTEMS_NOMINAL</span>
            </div>
            <div className="text-slate-500">
              ROTATION: <span className="text-slate-300">0.0Â° ELEV</span>
            </div>
          </div>

          {/* Map canvas containing grids, circles, and coordinate markers */}
          <div className="relative h-96 w-full bg-brand-darker border border-slate-850 overflow-hidden flex items-center justify-center">
            
            {/* Fine technical blueprint lines */}
            <div className="absolute inset-0 technical-grid opacity-30" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-darker" />

            {/* Simulated Satellite Earth map background watermark to match mock style */}
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-6QZqJv8esJ-wzlLbpGdZ893QzE6yVOwmCzCMPlKd1unh70cEC08DX4myR4jpfZN_uK__TwJ0FDEydzC_c29x_t3274KjithHJWQ0Cj-sYOsHbEWQpH1-l38dmEh913QZnatdce7LqQdXWC2Xk2bqcy5xfIFQDIoDhgaKeIMt8HDaBoKHNx8FndqAO5jBkPKZG2Ps_sTIDoBHG1EgKdSl3NBYS6tUL_QUAs9eWPfqT083q1aV_mmsPqpMPaHaQa7JoLS0kdHSmcHt" 
              alt="Globe watermark blueprint" 
              className="absolute w-full h-full object-cover opacity-20 filter invert brightness-50"
              referrerPolicy="no-referrer"
            />

            {/* Dynamic coordinate axis numbers */}
            <div className="absolute bottom-2 left-3 font-mono text-[8px] text-slate-500">Y-AXIS 09B</div>
            <div className="absolute top-2 right-3 font-mono text-[8px] text-slate-500">X-AXIS 441A</div>

            {/* Live radar sweep element */}
            <div className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_0deg_at_50%_50%,rgba(249,115,22,0.1),transparent_90deg)] animate-spin duration-10000" />

            {/* Dynamic target coords lines for selected node */}
            <div className="absolute left-0 right-0 border-t border-orange-500/10" style={{ top: `${activeHub.coords.y}%` }} />
            <div className="absolute top-0 bottom-0 border-l border-orange-500/10" style={{ left: `${activeHub.coords.x}%` }} />

            {/* Render interactive coordinate pointers for each Hub */}
            {HUBS.map((hub) => {
              const isSelected = activeHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => handleHubClick(hub)}
                  style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
                  className="absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 group"
                >
                  {/* Outer pulsing ring */}
                  <span className={`absolute h-8 w-8 rounded-full border border-orange-500/30 transition-transform ${
                    isSelected ? 'animate-ping scale-110' : 'group-hover:scale-105'
                  }`} />
                  
                  {/* Concentric marker dot */}
                  <span className={`h-4.5 w-4.5 rounded-full border-2 border-brand-darker flex items-center justify-center transition-all ${
                    isSelected ? 'bg-orange-500 scale-110 shadow-[0_0_12px_#f97316]' : 'bg-slate-800'
                  }`} />

                  {/* Tooltip on hover/active */}
                  <div className={`absolute bottom-6 whitespace-nowrap bg-slate-900 border border-slate-800 font-mono text-[8px] tracking-wider px-2 py-1 text-slate-100 uppercase transition-all ${
                    isSelected ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0'
                  }`}>
                    {hub.city.toUpperCase()}: [{hub.coords.lat}, {hub.coords.lng}]
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center mt-4 font-mono text-[9px] text-slate-500">
            <span>SELECTED NODE STATUS: <span className="text-orange-400 uppercase font-black">{activeHub.status}</span></span>
            <span>STAFF MEMBERS: <span className="text-slate-300 font-bold">{activeHub.staff.split(',')[0]}</span></span>
          </div>

        </div>

        {/* Dynamic Hub Details Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-slate-800 bg-brand-dark p-6 relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHub.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              <div>
                {/* Photo frame */}
                <div className="h-44 w-full bg-slate-900 relative overflow-hidden border border-slate-850 mb-5">
                  <img 
                    src={activeHub.image} 
                    alt={activeHub.name} 
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 mix-blend-color" />
                  <div className={`absolute top-3 right-3 px-2 py-0.5 font-mono text-[8px] font-bold tracking-widest uppercase ${
                    activeHub.status === 'NOMINAL' ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-amber-400 text-slate-950'
                  }`}>
                    STATE: {activeHub.status}
                  </div>
                </div>

                {/* Name & Coordinates */}
                <div>
                  <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight">
                    {activeHub.name}
                  </h3>
                  <div className="font-mono text-[10px] text-orange-400 mt-1 uppercase flex gap-2">
                    <span>GPS: {activeHub.coords.lat}</span>
                    <span>/</span>
                    <span>{activeHub.coords.lng}</span>
                  </div>
                </div>

                {/* Sub-description with rich paragraph */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-4">
                  {activeHub.description}
                </p>

                {/* Details list logs */}
                <div className="mt-6 border-t border-slate-850 pt-5 space-y-3 font-mono text-xs">
                  <div className="flex gap-2 items-start text-slate-400">
                    <MapPin className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">ADDRESS STATION:</span>
                      <span className="text-slate-300">{activeHub.address}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start text-slate-400">
                    <Phone className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">CONTACT DIRECT:</span>
                      <span className="text-slate-300">{activeHub.phone}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action routing triggers */}
              <div className="mt-8 border-t border-slate-900 pt-5">
                <button
                  onClick={() => handleGetDirections(activeHub)}
                  className="w-full flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/60 hover:bg-slate-900 hover:border-orange-500/30 transition-all py-2.5 font-display text-xs font-bold uppercase tracking-widest text-slate-200 cursor-pointer"
                >
                  <Compass className="h-4 w-4 text-orange-500" />
                  Generate Transit Directions
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* Traced Directions Terminal (Shows beautifully if compiled) */}
      <AnimatePresence>
        {(calculatingPath || directionsPath) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border border-slate-800 bg-slate-950 p-6 mb-16 relative overflow-hidden font-mono text-xs"
          >
            <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-orange-500" />
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-orange-500" />
            
            <div className="flex items-center gap-2.5 border-b border-slate-900 pb-3 mb-4">
              <Terminal className="h-4 w-4 text-orange-400 shrink-0" />
              <span className="font-bold text-slate-300 uppercase">TRANSIT ROUTE GENERATOR CONSOLE // OUTPUT</span>
            </div>

            {calculatingPath ? (
              <div className="flex items-center gap-3 py-4 text-slate-500">
                <Layers className="h-4 w-4 animate-spin text-orange-500" />
                <span>Computing dynamic transit vector lines based on real GPS metrics...</span>
              </div>
            ) : (
              <div className="space-y-1.5 min-w-full">
                {directionsPath?.map((path, idx) => (
                  <div key={idx} className="flex gap-3 leading-normal">
                    <span className="text-slate-600 select-none">[0{idx + 1}]</span>
                    <span 
                      className={idx === 0 ? 'text-orange-400 font-bold' : idx === directionsPath.length - 1 ? 'text-emerald-400 font-bold' : 'text-slate-300'}
                      dangerouslySetInnerHTML={{ __html: path }}
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Command Center Grid List below */}
      <div className="mb-16">
        <h3 className="font-display text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">// STATION COMPENDIUM</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {HUBS.map((hub) => (
            <div 
              key={hub.id}
              onClick={() => handleHubClick(hub)}
              className={`border p-4 cursor-pointer transition-all ${
                activeHub.id === hub.id 
                  ? 'border-orange-500 bg-orange-950/10 text-orange-400' 
                  : 'border-slate-850 bg-slate-900/10 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-sm font-bold uppercase tracking-wider">{hub.city} unit</span>
                <span className={`h-1.5 w-1.5 rounded-full ${hub.status === 'NOMINAL' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              </div>
              <p className="text-[10px] font-mono leading-relaxed truncate mb-1">
                COORDS: {hub.coords.lat}
              </p>
              <p className="text-[9px] font-mono text-slate-500 uppercase">
                {hub.workloads}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Primary Service Station Map Section */}
      <section className="mb-16 border border-slate-800 bg-brand-dark p-6 sm:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-orange-400">// WHERE TO FIND US</span>
            <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight mt-1">
              Primary Service Station
            </h2>
            <p className="text-sm text-slate-400 font-sans mt-2">Located in the heart of Leander, we serve the entire Cedar Park and North Austin metropolitan area.</p>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Address Station</span>
            <span className="font-display text-sm font-bold text-slate-100">1101 Halsey Drive, Leander, TX 78641</span>
          </div>
        </div>
        
        <div className="relative h-[400px] w-full border border-slate-800 bg-slate-950 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.918991475141!2d-97.8556857244249!3d30.58000497465893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d7c5b1c5b1d%3A0x5b1c5b1d5b1c5b1d!2s1101%20Halsey%20Dr%2C%20Leander%2C%20TX%2078641!5e0!3m2!1sen!2sus!4v1717880000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Solid State Construction Location"
            className="grayscale brightness-75 contrast-125"
          ></iframe>
          {/* Technical overlay corners */}
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-orange-500 pointer-events-none" />
          <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-orange-500 pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-orange-500 pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-orange-500 pointer-events-none" />
        </div>
        
        <div className="mt-6 flex justify-center">
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=1101+Halsey+Drive+Leander+TX+78641" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-orange-500 bg-orange-950/10 hover:bg-orange-500 hover:text-brand-dark transition-all duration-200 px-8 py-3 font-display text-xs font-bold uppercase tracking-wider text-orange-400 cursor-pointer"
          >
            <MapPin className="h-4 w-4" />
            Get Directions to Site
          </a>
        </div>
      </section>

      {/* Inquire globally Call to Action */}
      <section className="bg-brand-dark border border-slate-800 p-8 sm:p-12 relative overflow-hidden text-center max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-orange-500" />
        <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-orange-500" />
        <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-orange-500" />
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-orange-500" />

        <span className="font-mono text-xs uppercase tracking-widest text-orange-400">// EXPANSION INQUIRIES</span>
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-white mt-1">
          Can't find a local office?
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
          SOLID STATE CONSTRUCTION designs are modular and can be deployed with heavy equipment units in any territory. Input your operational state for support.
        </p>

        {globalInquirySuccess ? (
          <div className="mt-8 p-3 bg-emerald-950/25 border border-emerald-500/20 text-emerald-400 font-mono text-xs inline-flex items-center gap-2 max-w-md mx-auto">
            <Check className="h-4 w-4" />
            <span>GLOBAL OFFICE DISPATCH RECEIVED // WE WILL CONNECT</span>
          </div>
        ) : (
          <form onSubmit={handleInquerySubmit} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="text"
              required
              value={globalInquiryRegion}
              onChange={(e) => setGlobalInquiryRegion(e.target.value)}
              placeholder="E.g. Berlin, Tokyo, Sydney"
              className="flex-1 bg-slate-950 border border-slate-800 focus:border-orange-500 px-4 py-2 text-slate-100 text-xs font-mono tracking-wide outline-none placeholder-slate-700"
            />
            <button
              type="submit"
              className="bg-orange-500 text-brand-dark hover:bg-orange-600 transition-colors py-2 px-6 font-display text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Inquire Globally
            </button>
          </form>
        )}
      </section>

    </div>
  );
}
