import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { TechnicalService } from '../types';
import { ShieldCheck, Cpu, Sliders, ChevronRight, Zap, RefreshCw, Layers } from 'lucide-react';

export default function ServicesPage({ onRequestQuote }: { onRequestQuote: () => void }) {
  const [selectedService, setSelectedService] = useState<TechnicalService>(SERVICES[0]);
  
  // Simulation Values for interactive Spec Testing Console
  const [windSpeed, setWindSpeed] = useState(130); // for Roofing
  const [concretePSI, setConcretePSI] = useState(6000); // for Foundation
  const [fluidPressure, setFluidPressure] = useState(300); // for Plumbing
  const [groutSpacing, setGroutSpacing] = useState(1.5); // for Tiling

  // Compute live safety margins based on slider values
  const getSimulatedReport = () => {
    switch (selectedService.id) {
      case 'roofing':
        const upliftDeflection = ((windSpeed * windSpeed) * 0.0025).toFixed(2);
        const factorOfSafety = (350 / windSpeed).toFixed(2);
        const status = windSpeed < 145 ? 'COMPLIANT' : 'CRITICAL WARNING';
        return {
          metrics: [
            { label: 'Wind Uplift Force (Deflect)', value: `${upliftDeflection} lbs/sq.ft`, state: 'neutral' },
            { label: 'Structural Safety Factor', value: `${factorOfSafety}X Code`, state: Number(factorOfSafety) > 2 ? 'safe' : 'warn' },
          ],
          status,
          code: 'SPEC_0740_SHEAR_RES'
        };
      case 'foundation':
        const loadCapacityFactor = (concretePSI * 144 * 0.6).toLocaleString();
        const bedrockDeflection = (concretePSI > 7000) ? '0.12 Millimeter' : '1.80 Millimeter';
        return {
          metrics: [
            { label: 'Calculated Yield Stress', value: `${concretePSI} PSI Core`, state: 'safe' },
            { label: 'Estimated Geotech Load Cap', value: `${loadCapacityFactor} Tons Total`, state: 'safe' },
          ],
          status: concretePSI >= 5000 ? 'STABLE' : 'INSUFFICIENT DEPTH',
          code: 'SPEC_0330_COMPRESSIVE'
        };
      case 'plumbing':
        const flowCapacityGPM = Math.floor(fluidPressure * 7.5);
        const valveLatency = fluidPressure > 400 ? '195ms shutdown' : '142ms shutdown';
        return {
          metrics: [
            { label: 'Equivalent GPM Delivery', value: `${flowCapacityGPM} GPM`, state: 'neutral' },
            { label: 'Diagnostic Fail-safe Speed', value: valveLatency, state: 'safe' },
          ],
          status: fluidPressure <= 450 ? 'NOMINAL FLOW' : 'OVERPRESSURE RISK',
          code: 'SPEC_2200_HYDRAULIC'
        };
      case 'tiling':
        const shearTransfer = (100 - (groutSpacing * 15)).toFixed(1);
        const frictionCoeff = groutSpacing < 2.0 ? '0.86 Excellent' : '0.74 Satisfactory';
        return {
          metrics: [
            { label: 'Inter-joint Slip Res', value: frictionCoeff, state: 'safe' },
            { label: 'Shear Force Distribution', value: `${shearTransfer}% Coefficient`, state: groutSpacing < 3.0 ? 'safe' : 'warn' },
          ],
          status: groutSpacing <= 2.5 ? 'MICRO-APPROVED' : 'JOINT TOLERANCE EXCEEDED',
          code: 'SPEC_0930_GEOMETRY'
        };
      default:
        return { metrics: [], status: 'STABLE', code: '' };
    }
  };

  const simulationReport = getSimulatedReport();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-slate-100 technical-grid-fine">
      
      {/* Header and subtitle */}
      <div className="text-center mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-orange-400">// DIVISION STANDARDS</span>
        <h1 className="font-display text-4xl font-extrabold uppercase text-white tracking-widest mt-1">
          Precision Engineering Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-400 font-sans leading-relaxed">
          Exceeding ASTM and ISO standard benchmarks through multi-layer redundancy testing. Browse division details and simulate live loads in real-time.
        </p>
      </div>

      {/* Main Grid: Division Selector tabs left, Selected details right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Side: Service Switchers */}
        <div className="lg:col-span-1 space-y-4">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest px-1">
            SELECT DIVISION REFERENCE
          </div>
          <div className="flex flex-row overflow-x-auto lg:flex-col gap-3 pb-3 lg:pb-0 scrollbar-none">
            {SERVICES.map((serv) => {
              const isSelected = selectedService.id === serv.id;
              return (
                <button
                  key={serv.id}
                  id={`service-tab-${serv.id}`}
                  onClick={() => setSelectedService(serv)}
                  className={`w-full text-left p-4 border transition-all duration-200 shrink-0 ${
                    isSelected 
                      ? 'border-orange-500 bg-orange-950/10 text-orange-400 shadow-[0_4px_15px_rgba(249,115,22,0.05)]' 
                      : 'border-slate-800 bg-slate-900/30 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="font-mono text-[9px] text-slate-500">{serv.divisionCode}</div>
                  <div className="font-display text-sm font-bold tracking-tight mt-1 uppercase">
                    {serv.name.split(' & ')[0]}
                  </div>
                  <div className="flex items-center justify-between mt-2 font-mono text-[9px]">
                    <span className="text-slate-500">RESILIENCE_RATING:</span>
                    <span className={isSelected ? 'text-orange-400' : 'text-slate-400'}>98.4%</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Prompt Quote block widget */}
          <div className="hidden lg:block border border-dashed border-slate-800 p-4 bg-brand-darker/50 text-center relative overflow-hidden">
            <span className="font-mono text-[9px] text-orange-400 uppercase tracking-wider block mb-2">
              REQUIRE DISCARD SPECS?
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
              Export specialized blueprints or generate interactive material takeoffs instantly.
            </p>
            <button
              onClick={onRequestQuote}
              className="w-full bg-orange-500 hover:bg-orange-600 font-display text-[10px] font-extrabold uppercase tracking-widest text-brand-dark py-2.5 transition-colors"
            >
              LAUNCH QUANTITY BIDDER &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Showcase Content */}
        <div className="lg:col-span-3 space-y-8">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="border border-slate-800 bg-brand-dark p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Highlight corners */}
              <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-orange-500" />
              <div className="absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2 border-orange-500" />
              <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-orange-500" />
              <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-orange-500" />

              {/* Title & Division Banner */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-800 pb-5">
                <div>
                  <div className="font-mono text-xs text-orange-400 font-bold uppercase tracking-wider">
                    {selectedService.divisionCode}
                  </div>
                  <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight mt-1">
                    {selectedService.name}
                  </h2>
                </div>
                <div className="font-mono text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-3 py-1 uppercase">
                  ACTIVE_SPEC_VERIFIED
                </div>
              </div>

              {/* Tagline & Core description */}
              <div className="mt-6">
                <blockquote className="border-l-2 border-orange-500 pl-4 py-1 italic font-mono text-slate-300 text-xs sm:text-sm">
                  "{selectedService.tagline}"
                </blockquote>
                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {selectedService.description}
                </p>
              </div>

              {/* Two Column Layout: Specs & Layout comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                
                {/* Specs list with real animated progress meters */}
                <div className="space-y-5">
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-orange-500 shrink-0" />
                    Technical Ratings & Indexes
                  </h4>
                  <div className="space-y-4">
                    {selectedService.specs.map((item) => (
                      <div key={item.label} className="space-y-1.5 font-mono text-xs">
                        <div className="flex justify-between text-slate-400">
                          <span>{item.label}</span>
                          <span className="text-orange-400 font-bold">{item.value}</span>
                        </div>
                        <div className="w-full bg-slate-900 h-2 border border-slate-800">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${item.progress ?? 85}%` }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-r from-orange-600 to-amber-500 h-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Impact and thermo details cards */}
                  <div className="grid grid-cols-2 gap-4 pt-3">
                    <div className="bg-slate-900/60 p-3 border border-slate-800">
                      <div className="font-display text-[10px] font-bold text-slate-200 uppercase">Impact Resilience</div>
                      <p className="text-[10px] text-slate-500 leading-relaxed mt-1 font-sans">
                        Retains structural stability even after high kinetic energy impacts.
                      </p>
                    </div>
                    <div className="bg-slate-900/60 p-3 border border-slate-800">
                      <div className="font-display text-[10px] font-bold text-slate-200 uppercase">Thermal Barrier</div>
                      <p className="text-[10px] text-slate-500 leading-relaxed mt-1 font-sans">
                        Protects inner operational levels from extreme thermal differences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right block: Division Photos and Subsections */}
                <div className="space-y-4">
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-slate-200 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-orange-500 shrink-0" />
                    Visual Component Blueprint
                  </h4>
                  <div className="relative border border-slate-850 h-56 bg-slate-950 overflow-hidden">
                    <img 
                      src={selectedService.image} 
                      alt={selectedService.name} 
                      className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/10 mix-blend-color" />
                    <div className="absolute right-3 top-3 bg-slate-900/95 border border-slate-800 font-mono text-[8px] opacity-90 px-2 py-1 uppercase text-slate-400">
                      ISO_LAB_PHOTO_2026
                    </div>
                  </div>

                  {/* Geometric layout specific tile highlights if Tiling */}
                  {selectedService.id === 'tiling' && selectedService.details[0]?.image && (
                    <div className="flex flex-col border border-dashed border-slate-800 p-3 bg-slate-900/40">
                      <div className="flex items-center gap-2 mb-2 font-mono text-[10px] text-orange-400 font-bold uppercase">
                        <span>Hexagonal Tiling System</span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img 
                          src={selectedService.details[0].image} 
                          alt="Hex tiling" 
                          className="h-16 w-16 object-cover border border-slate-800"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-[10px] text-slate-400 font-sans leading-relaxed">
                          {selectedService.details[0].description}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Advanced System Sub-components list */}
              <div className="mt-8 border-t border-slate-900 pt-6 space-y-4">
                <h4 className="font-display text-xs font-bold uppercase tracking-widest text-slate-200">
                  Resilience Assemblies Breakdown
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.details.map((detail, index) => (
                    <div key={index} className="border border-slate-800/80 bg-slate-900/20 p-4 font-sans text-xs">
                      <div className="font-display font-bold text-slate-200 uppercase flex items-center gap-1.5 mb-1.5">
                        <span className="text-orange-500 font-mono">0{index + 1}.</span>
                        {detail.title}
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Interactive Specification Live Testing Console */}
          <div className="border border-slate-800 bg-brand-dark/80 p-6 relative overflow-hidden technical-grid">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
              <div className="flex h-7 w-7 items-center justify-center border border-orange-500 font-mono text-xs text-orange-400">
                <Sliders className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-200">
                  Simulation Testing Console
                </h3>
                <p className="font-mono text-[9px] text-slate-500">
                  ADJUST ENVIRONMENTAL LOADS TO SIMULATE CODE COMPLIANCE
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sliders Input Panel Column */}
              <div className="md:col-span-2 space-y-5 px-1">
                {selectedService.id === 'roofing' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">WIND_LOAD_SPEED:</span>
                      <span className="text-orange-400 font-bold">{windSpeed} MPH</span>
                    </div>
                    <input 
                      type="range"
                      min="90"
                      max="180"
                      value={windSpeed}
                      onChange={(e) => setWindSpeed(Number(e.target.value))}
                      className="w-full accent-orange-500 cursor-pointer h-1.5 bg-slate-900 border border-slate-800 rounded-lg appearance-none"
                    />
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>90 MPH (CAT 1)</span>
                      <span>145 MPH (DESIGN_LIMIT)</span>
                      <span>180 MPH (CAT 5)</span>
                    </div>
                  </div>
                )}

                {selectedService.id === 'foundation' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">CONCRETE_CORE_STRENGTH:</span>
                      <span className="text-orange-400 font-bold">{concretePSI} PSI</span>
                    </div>
                    <input 
                      type="range"
                      min="3500"
                      max="10000"
                      value={concretePSI}
                      onChange={(e) => setConcretePSI(Number(e.target.value))}
                      className="w-full accent-orange-500 cursor-pointer h-1.5 bg-slate-900 border border-slate-800 rounded-lg appearance-none"
                    />
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>3,500 PSI (MED RES)</span>
                      <span>8,500 PSI (HEAVY INDUST)</span>
                      <span>10,000 PSI (SUPER HIGHCORE)</span>
                    </div>
                  </div>
                )}

                {selectedService.id === 'plumbing' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">HYDRAULIC_PRESSURE:</span>
                      <span className="text-orange-400 font-bold">{fluidPressure} PSI</span>
                    </div>
                    <input 
                      type="range"
                      min="100"
                      max="600"
                      value={fluidPressure}
                      onChange={(e) => setFluidPressure(Number(e.target.value))}
                      className="w-full accent-orange-500 cursor-pointer h-1.5 bg-slate-900 border border-slate-800 rounded-lg appearance-none"
                    />
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>100 PSI (LOW DISCHARGE)</span>
                      <span>450 PSI (SPEC THRESHOLD)</span>
                      <span>600 PSI (EXTREME FLOOD)</span>
                    </div>
                  </div>
                )}

                {selectedService.id === 'tiling' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">GEOMETRIC_JOINT_SPACING:</span>
                      <span className="text-orange-400 font-bold">{groutSpacing} mm</span>
                    </div>
                    <input 
                      type="range"
                      min="0.5"
                      max="5.0"
                      step="0.1"
                      value={groutSpacing}
                      onChange={(e) => setGroutSpacing(Number(e.target.value))}
                      className="w-full accent-orange-500 cursor-pointer h-1.5 bg-slate-900 border border-slate-800 rounded-lg appearance-none"
                    />
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>0.5 mm (REFINED MICRO)</span>
                      <span>1.5 mm (STANDARD STRUCT)</span>
                      <span>5.0 mm (WIDEPANEL DRAIN)</span>
                    </div>
                  </div>
                )}

                <div className="p-3 bg-slate-900/60 border border-slate-850 text-slate-400 text-xs font-mono flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-400 shrink-0" />
                  <span>Real-time adjustments feedback is updated automatically based on standard ISO-213 codes.</span>
                </div>
              </div>

              {/* Readout Feedback Output Column */}
              <div className="bg-slate-950 p-4 border border-slate-800 flex flex-col justify-between font-mono text-xs">
                <div>
                  <div className="flex justify-between border-b border-slate-900 pb-2 mb-3">
                    <span className="text-slate-500">SYSTEM_ID:</span>
                    <span className="text-slate-300 font-bold">{simulationReport.code}</span>
                  </div>

                  <div className="space-y-2.5">
                    {simulationReport.metrics.map((met, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className="text-[10px] text-slate-500 uppercase">{met.label}</span>
                        <div className={`text-xs font-bold ${met.state === 'safe' ? 'text-emerald-400' : met.state === 'warn' ? 'text-amber-400' : 'text-slate-200'}`}>
                          {met.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-900 pt-3">
                  <div className="text-[10px] text-slate-500 uppercase mb-1">COMPLIANCE DIAGNOSTIC STATUS:</div>
                  <div className={`text-sm font-black tracking-widest uppercase ${
                    simulationReport.status.includes('COMPLIANT') || simulationReport.status.includes('STABLE') || simulationReport.status.includes('NOMINAL') || simulationReport.status.includes('MICRO')
                      ? 'text-emerald-400' 
                      : 'text-rose-500'
                  }`}>
                    &gt; {simulationReport.status}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
