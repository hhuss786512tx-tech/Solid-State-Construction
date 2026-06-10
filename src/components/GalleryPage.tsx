import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Eye, Download, Info, Terminal, User, MapPin, X, CheckCircle } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'ALL' | 'industrial' | 'infrastructure' | 'commercial'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Filter logic
  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesFilter = filter === 'ALL' || proj.type === filter;
    const matchesSearch = proj.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          proj.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          proj.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleDownloadRegistry = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      
      // Create a nice fake text file download of structural specifications
      const content = `SOLID STATE CONSTRUCTION SYSTEM REGISTRY EXPORT - ISO 9001:2015\n` + 
                      `===================================================\n\n` +
                      PROJECTS.map(p => (
                        `PROJECT: ${p.title}\n` +
                        `TYPE: ${p.type.toUpperCase()} | STATUS: ${p.status}\n` +
                        `LOCATION: ${p.location}\n` +
                        `COORDINATE CODE: ${p.blueprintCode}\n` +
                        `SIGN-OFF: ${p.engineer}\n` +
                        `SPECIFICATIONS:\n` +
                        `  - Load Capacity Factor: ${p.specs.loadCapacity || 'N/A'}\n` +
                        `  - Completion Ratio: ${p.specs.completion || 'N/A'}\n` +
                        `  - Dynamic Thermal Ef: ${p.specs.efficiency || 'N/A'}\n` +
                        `DESCRIPTION: ${p.description}\n` +
                        `---------------------------------------------------\n`
                      )).join('\n');
      
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'solid_state_construction_project_registry_takeoff.txt';
      link.click();
      URL.revokeObjectURL(url);

      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-slate-100 technical-grid-fine">
      
      {/* Title block from specifications */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-orange-400">// STRUCTURAL PORTFOLIO</span>
          <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
            Visual Project Registry
          </h1>
          <p className="mt-2 text-sm text-slate-400 font-sans max-w-xl">
            A comprehensive vault displaying fully detailed industrial architectures, infrastructure spans, and seismic-ready corporate assemblies.
          </p>
        </div>

        {/* Action Button: Download Full Registry */}
        <button
          onClick={handleDownloadRegistry}
          disabled={downloading}
          className="group flex items-center gap-2 border border-orange-500 bg-orange-950/10 hover:bg-orange-500 hover:text-brand-dark transition-all duration-200 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-orange-400 cursor-pointer"
        >
          {downloading ? (
            <>
              <Terminal className="h-4 w-4 animate-spin" />
              Compiling Registry Data...
            </>
          ) : downloadSuccess ? (
            <>
              <CheckCircle className="h-4 w-4" />
              COMPLETELY EXPORTED!
            </>
          ) : (
            <>
              <Download className="h-4 w-4" />
              Download Full Registry
            </>
          )}
        </button>
      </div>

      {/* Filters & Search Control Interface */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-slate-900/40 border border-slate-850 p-4 mb-10">
        
        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2">
          {(['ALL', 'industrial', 'infrastructure', 'commercial'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-150 border cursor-pointer ${
                (filter === tab)
                  ? 'bg-orange-500 border-orange-600 text-slate-900 font-bold'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-705'
              }`}
            >
              {tab === 'ALL' ? 'All Projects' : tab}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search matching blueprints..."
            className="w-full bg-slate-950/90 border border-slate-800 focus:border-orange-500 px-4 py-2 pl-10 text-slate-100 text-xs font-mono tracking-wide outline-none placeholder-slate-600"
          />
          <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-600" />
        </div>
      </div>

      {/* Grid List */}
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={proj.id}
              className="group border border-slate-800 bg-brand-dark hover:border-orange-500/40 transition-all flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="h-48 overflow-hidden relative border-b border-slate-850 bg-slate-950">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Status Badge */}
                <div className="absolute top-3 left-3 flex gap-1.5 font-mono text-[8px] font-bold uppercase">
                  <span className={`px-2 py-0.5 text-slate-900 ${
                    proj.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400 font-extrabold'
                  }`}>
                    {proj.status}
                  </span>
                  <span className="bg-slate-900/90 text-slate-300 border border-slate-800 px-2 py-0.5">
                    {proj.type}
                  </span>
                </div>

                <div className="absolute bottom-2 right-3">
                  <span className="font-mono text-[9px] bg-slate-950/90 border border-slate-800 text-slate-500 px-1.5 py-0.5 uppercase">
                    {proj.blueprintCode}
                  </span>
                </div>
              </div>

              {/* Title, description, specifications summaries */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-100 group-hover:text-orange-400 transition-colors uppercase tracking-tight">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-500 mt-1 mb-3">
                    <MapPin className="h-3 w-3" />
                    <span>{proj.location}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Performance metadata logs */}
                <div className="mt-5 border-t border-slate-900/80 pt-4 space-y-2.5 font-mono text-[10px]">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>LOAD CAPACITY:</span>
                    <span className="text-slate-200 font-semibold">{proj.specs.loadCapacity}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>EFFICIENCY:</span>
                    <span className="text-slate-200 font-semibold">{proj.specs.efficiency}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>RATIO:</span>
                    <span className="text-orange-400 font-semibold font-bold uppercase">{proj.specs.completion}</span>
                  </div>
                </div>
              </div>

              {/* Trigger details drawer button */}
              <div className="border-t border-slate-900 p-4">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full flex items-center justify-center gap-2 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-orange-500/30 transition-all py-2 font-display text-[11px] font-bold uppercase text-slate-300 tracking-wider cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                  View Blueprint Specs
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* No results placeholder */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 border border-dashed border-slate-800 bg-brand-dark/20">
          <Terminal className="h-8 w-8 text-slate-600 mx-auto mb-4" />
          <p className="font-mono text-xs text-slate-400 tracking-wide uppercase">
            NO REGISTERED BLUEPRINTS MATCHING YOUR LOGIC
          </p>
        </div>
      )}

      {/* Blueprint Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-darker/90 backdrop-blur-sm p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl border border-slate-800 bg-slate-950 p-6 sm:p-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Highlight corners */}
              <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-orange-500" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-orange-500" />

              {/* Top Row Close trigger */}
              <div className="flex justify-between items-start mb-6 border-b border-slate-900 pb-4">
                <div>
                  <span className="font-mono text-[9px] text-orange-400 font-extrabold uppercase bg-orange-950/20 px-2 py-0.5 border border-orange-500/10">
                    CERTIFIED: {selectedProject.blueprintCode}
                  </span>
                  <h2 className="font-display text-2xl font-black text-slate-100 uppercase mt-1.5 tracking-tight">
                    {selectedProject.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-500 hover:text-orange-500 transition-colors p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Blueprint vector preview mockup (ASCII Drawing layout) */}
              <div className="p-4 border border-slate-900 bg-slate-950 font-mono text-[8px] text-emerald-500/80 rounded leading-tight overflow-x-auto select-none mb-6">
                <div>// BENTLEY BIM EXPORT LAYER: ELEVATION_01A</div>
                <div>{`_______________________________________________________`}</div>
                <div>{`      /\\                                           /\\ `}</div>
                <div>{`     /  \\          [SECURE ARCHIVEMENT]           /  \\`}</div>
                <div>{`____/____\\_______________________________________/____\\`}</div>
                <div>{`   |      |                                     |      |`}</div>
                <div>{`   |  []  |      SYS STATUS: ACTIVE CONTRACT     |  []  |`}</div>
                <div>{`   |      |                                     |      |`}</div>
                <div>{`===|======|=====================================|======|===`}</div>
                <div>{`   |      |   X-DIM: 480ft || Y-DIM: 220ft      |      |`}</div>
                <div>{`   |  __  |   FOUNDATION COMPRESSION: 8.5K psi   |  __  |`}</div>
                <div>{`___|__||__|_____________________________________|__||__|`}</div>
                <div>// LATITUDE_COORD: 41.240.3 // LONGITUDE_COORD: -87.114.9</div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-xs font-bold text-slate-200 uppercase mb-1">
                    Engineering Specification Breakdown
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-900/50 border border-slate-900 p-4 font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase">LEAD ENGINEER SIGN-OFF:</span>
                    <div className="text-slate-200 font-bold flex items-center gap-1.5 mt-1">
                      <User className="h-3.5 w-3.5 text-orange-400" />
                      {selectedProject.engineer}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase">LOCATION STATUS:</span>
                    <div className="text-slate-200 font-bold flex items-center gap-1.5 mt-1">
                      <MapPin className="h-3.5 w-3.5 text-orange-400" />
                      {selectedProject.location}
                    </div>
                  </div>
                </div>

                <div className="bg-orange-950/20 border border-orange-500/10 p-3 flex gap-2.5 items-center">
                  <Info className="h-4 w-4 text-orange-500 shrink-0" />
                  <p className="font-sans text-[11px] text-slate-400 leading-normal">
                    This file is verified in Solid State Construction Global Vault. To request modified dimensional files or physical sample cores, launch the Spec Quote Generator.
                  </p>
                </div>
              </div>

              {/* Close CTAs */}
              <div className="mt-8 flex justify-end gap-3 font-mono text-xs">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 uppercase"
                >
                  Close Blueprint
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
