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
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-500">// STRUCTURAL PORTFOLIO</span>
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
          className="group flex items-center gap-2 border border-emerald-600 bg-emerald-950/10 hover:bg-emerald-700 hover:text-brand-dark transition-all duration-200 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-emerald-500 cursor-pointer"
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
                  ? 'bg-emerald-700 border-emerald-700 text-slate-900 font-bold'
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
            className="w-full bg-slate-950/90 border border-slate-800 focus:border-emerald-600 px-4 py-2 pl-10 text-slate-100 text-xs font-mono tracking-wide outline-none placeholder-slate-600"
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
              className="group border border-slate-800 bg-brand-dark hover:border-emerald-600/40 transition-all flex flex-col justify-between"
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
                    proj.status === 'Completed' ? 'bg-emerald-400' : 'bg-emerald-400 font-extrabold'
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
                  <h3 className="font-display text-lg font-bold text-slate-100 group-hover:text-emerald-500 transition-colors uppercase tracking-tight">
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
                    <span className="text-emerald-500 font-semibold font-bold uppercase">{proj.specs.completion}</span>
                  </div>
                </div>
              </div>

              {/* Trigger details drawer button */}
              <div className="border-t border-slate-900 p-4">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full flex items-center justify-center gap-2 border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-emerald-600/30 transition-all py-2 font-display text-[11px] font-bold uppercase text-slate-300 tracking-wider cursor-pointer"
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
              <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-emerald-600" />
              <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-emerald-600" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-emerald-600" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-emerald-600" />

              {/* Top Row Close trigger */}
              <div className="flex justify-between items-start mb-6 border-b border-slate-900 pb-4">
                <div>
                  <span className="font-mono text-[9px] text-emerald-500 font-extrabold uppercase bg-emerald-950/20 px-2 py-0.5 border border-emerald-600/10 rounded">
                    CASE STUDY: {selectedProject.blueprintCode}
                  </span>
                  <h2 className="font-display text-2xl font-black text-white uppercase mt-2 tracking-tight">
                    {selectedProject.title}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-500 hover:text-emerald-500 hover:bg-slate-800 rounded-full transition-colors p-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Clean Image Preview */}
              <div className="mb-6 rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative aspect-video">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Clean Details Breakdown */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-sm font-bold text-white uppercase mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-slate-400 font-sans leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Expected Budget</span>
                    <div className="text-emerald-400 font-black text-lg">
                      {selectedProject.budget || 'Custom Quote'}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Location</span>
                    <div className="text-white font-bold flex items-center gap-1.5 mt-1">
                      <MapPin className="h-4 w-4 text-emerald-500" />
                      {selectedProject.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close CTAs */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-display font-black text-xs uppercase tracking-widest shadow-xl shadow-emerald-900/20 transition-all"
                >
                  Close Case Study
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
