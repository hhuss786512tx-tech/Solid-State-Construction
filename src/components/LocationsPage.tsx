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

          {/* Dynamic Google Map based on selected hub */}
          <div className="relative h-96 w-full bg-slate-900 border border-slate-850 overflow-hidden">
            <iframe 
              key={activeHub.id}
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000!2d${activeHub.coords.lng.split('Â°')[0]}!3d${activeHub.coords.lat.split('Â°')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1717880000000!5m2!1sen!2sus`} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${activeHub.city}`}
            ></iframe>
            
            {/* Legend / Overlay */}
            <div className="absolute top-4 left-4 z-10 bg-slate-900/90 border border-orange-500/30 px-3 py-2 font-mono text-[9px] text-orange-400 backdrop-blur-sm">
              <span className="font-bold">ACTIVE NODE:</span> {activeHub.city.toUpperCase()} [{activeHub.coords.lat}, {activeHub.coords.lng}]
            </div>
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
      <section className="mb-16 border border-slate-800/80 bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl shadow-orange-950/10 hover:border-slate-700/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-orange-400">// STRATEGIC INFRASTRUCTURE SITE</span>
            <h2 className="font-display text-3xl font-black text-white uppercase tracking-tight mt-1">
              Primary Service Station
            </h2>
            <p className="text-sm text-slate-400 font-sans mt-2 max-w-xl">
              Our central manufacturing and deployment hub is located in Leander, serving the entire Cedar Park, Round Rock, and North Austin metropolitan areas with rapid response telemetry.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end text-left md:text-right bg-slate-950/40 border border-slate-800 p-4 rounded-xl min-w-[240px]">
            <span className="font-mono text-[10px] text-orange-400 uppercase tracking-widest font-black">STATION ADDR // GLOBAL COORDS</span>
            <span className="font-display text-md font-bold text-slate-100 mt-1">1101 Halsey Drive</span>
            <span className="font-display text-xs text-slate-400 font-medium">Leander, TX 78641</span>
          </div>
        </div>
        
        <div className="relative h-[450px] w-full border border-slate-800/60 bg-slate-950 rounded-xl overflow-hidden shadow-2xl shadow-black/80 group">
          {/* Elegant Floating Map Card overlay (Hidden on mobile for seamless navigation) */}
          <div className="absolute top-4 left-4 z-10 hidden lg:block max-w-[320px] bg-slate-950/95 backdrop-blur-md border border-slate-800/80 p-5 rounded-xl shadow-2xl transition-all duration-300 group-hover:border-orange-500/30">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="p-2.5 bg-orange-500/10 rounded-lg border border-orange-500/20 text-orange-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-black text-white uppercase tracking-wider">LEANDER HQ</h4>
                <p className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">STATUS: NOMINAL // ONLINE</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
              Our state-of-the-art facility managing continuous live-load operations, fabrication engineering, and rapid deployment crews.
            </p>
            <div className="space-y-2 border-t border-slate-900 pt-3.5 text-[11px] font-mono">
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">SYSTEM RESPONSE:</span>
                <span className="text-slate-300 font-bold">0.04ms latency</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">TELEMETRY FREQ:</span>
                <span className="text-emerald-400 font-bold">5.8 GHz SOLID</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">HOURS OF OPS:</span>
                <span className="text-slate-300">0700 - 1800 CST</span>
              </div>
            </div>
          </div>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3311894435553!2d-97.85966562442533!3d30.582295674657895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d4fdf80fbcf%3A0xc6cb556209b5eb3b!2s1101%20Halsey%20Dr%2C%20Leander%2C%20TX%2078641!5e0!3m2!1sen!2sus!4v1717900000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Solid State Construction Location"
            className="transition-all duration-300 filter saturate-[0.85] contrast-[1.05] brightness-[0.9] hover:saturate-[1] hover:brightness-[0.95]"
          ></iframe>
          
          {/* Technical overlay corners to preserve brand vibe */}
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
            className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/5 hover:bg-orange-500 hover:text-brand-dark transition-all duration-300 px-8 py-3.5 rounded-xl font-display text-xs font-bold uppercase tracking-wider text-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-500 cursor-pointer"
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
