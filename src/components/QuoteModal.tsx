import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, ShieldCheck, ListTodo, Download, FileText, CheckCircle2, Terminal, RefreshCw, Trash2 } from 'lucide-react';
import { QuoteRequest } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  // Wizard States
  const [step, setStep] = useState(1);
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('foundation'); // roofing | foundation | plumbing | tiling | combined
  const [length, setLength] = useState(120);
  const [width, setWidth] = useState(80);
  const [levels, setLevels] = useState(2);
  const [materialGrade, setMaterialGrade] = useState('high-tensile'); // standard | high-tensile | seismic-resilient
  const [safetyLevel, setSafetyLevel] = useState('20% Redundancy'); // 10% | 20% | 30%
  const [notes, setNotes] = useState('');

  // Local storage history of quotes
  const [quoteHistory, setQuoteHistory] = useState<QuoteRequest[]>([]);
  const [lastEstimate, setLastEstimate] = useState<number>(0);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    // Load quote history from local storage
    const stored = localStorage.getItem('solid_state_construction_quotes');
    if (stored) {
      try {
        setQuoteHistory(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Recalculate dynamic bid estimation when factors change
  const computeEstimate = () => {
    let basePricePerSqFt = 75; // Foundation base
    if (projectType === 'roofing') basePricePerSqFt = 92;
    if (projectType === 'plumbing') basePricePerSqFt = 68;
    if (projectType === 'tiling') basePricePerSqFt = 54;
    if (projectType === 'combined') basePricePerSqFt = 245;

    let gradeMultiplier = 1.0;
    if (materialGrade === 'high-tensile') gradeMultiplier = 1.25;
    if (materialGrade === 'seismic-resilient') gradeMultiplier = 1.45;

    let redundancyMultiplier = 1.0;
    if (safetyLevel.includes('20%')) redundancyMultiplier = 1.15;
    if (safetyLevel.includes('30%')) redundancyMultiplier = 1.30;

    const totalSqFt = length * width * levels;
    const computed = totalSqFt * basePricePerSqFt * gradeMultiplier * redundancyMultiplier;
    return Math.floor(computed);
  };

  const activeEstimate = computeEstimate();

  const handleSaveQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !email.trim()) {
      alert('Please fill out client authentication parameters first.');
      return;
    }

    const newQuote: QuoteRequest = {
      id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName,
      email,
      projectType,
      dimensions: `${length}ft L x ${width}ft W x ${levels} levels`,
      materialGrade,
      safetyLevel,
      notes: notes || 'No technical notes modified.',
      estimatedCost: activeEstimate,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      status: 'APPROVED'
    };

    const updatedHistory = [newQuote, ...quoteHistory];
    setQuoteHistory(updatedHistory);
    localStorage.setItem('solid_state_construction_quotes', JSON.stringify(updatedHistory));
    
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setStep(3); // Go to invoice readout step
    }, 1200);
  };

  const handleDeleteHistoryItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = quoteHistory.filter(q => q.id !== id);
    setQuoteHistory(updated);
    localStorage.setItem('solid_state_construction_quotes', JSON.stringify(updated));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-darker/90 backdrop-blur-sm p-4">
          
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl border border-slate-800 bg-slate-950 p-6 sm:p-8 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-slate-100"
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-orange-500" />
            <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-orange-500" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-orange-500" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-orange-500" />

            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-900 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center border-2 border-orange-500 font-mono text-sm font-bold text-orange-400">
                  <Calculator className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-black text-slate-100 uppercase tracking-widest leading-none">
                    Spec Quote Generator
                  </h2>
                  <span className="font-mono text-[9px] text-slate-500">
                    DIAGNOSTIC QUANTITY SURVEYOR V4.1 // ISO REGISTERS
                  </span>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="text-slate-500 hover:text-orange-500 p-1 bg-slate-950 hover:bg-slate-900 border border-transparent hover:border-slate-800 rounded transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Sub-steps Indicator */}
            <div className="flex justify-between items-center mb-6 font-mono text-[10px] text-slate-500 border-b border-slate-900/60 pb-3">
              <div className="flex gap-4">
                <span className={step === 1 ? 'text-orange-400 font-bold' : 'text-slate-500'}>01. PARAM_SPECS</span>
                <span>&rarr;</span>
                <span className={step === 2 ? 'text-orange-400 font-bold' : 'text-slate-500'}>02. COMPILATION</span>
                <span>&rarr;</span>
                <span className={step === 3 ? 'text-orange-400 font-bold' : 'text-slate-500'}>03. GEN_INVOICE</span>
              </div>
              <div className="text-[9px] text-orange-500 font-extrabold uppercase">
                BID_RES: ${activeEstimate.toLocaleString()} USD
              </div>
            </div>

            {savedSuccess ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  className="rounded-full bg-emerald-950/20 border-2 border-emerald-500 p-4 text-emerald-400"
                >
                  <CheckCircle2 className="h-8 w-8" />
                </motion.div>
                <div className="font-mono text-sm text-emerald-400 uppercase font-black tracking-widest">
                  SPECS REGISTERED SUCCESSFULLY
                </div>
                <p className="text-xs text-slate-400 max-w-xs font-sans">
                  Compiling dynamic load vectors, material takeoffs, and drafting PDF takeoff certificates...
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Steps left inputs (8 cols) */}
                <div className="lg:col-span-8 space-y-5">
                  
                  {/* Step 1: Adjust Dimensions Parameters */}
                  {step === 1 && (
                    <div className="space-y-4 font-mono text-xs">
                      <div>
                        <label className="text-slate-500 bock mb-2 font-bold uppercase block">DIVISION SPECS MODE:</label>
                        <select
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 p-2.5 text-slate-200 focus:border-orange-500 outline-none rounded"
                        >
                          <option value="water-remediation">Water Remediation (24/7 EMERGENCY)</option>
                          <option value="foundation">Foundation Repair (DIVISION 03)</option>
                          <option value="remodeling">Full Home Remodeling (DIVISION 09)</option>
                          <option value="painting">Painting & Drywall (DIVISION 09)</option>
                          <option value="roofing">Roofing Services (DIVISION 07)</option>
                          <option value="flooring">Flooring & Tile (DIVISION 09)</option>
                        </select>
                      </div>

                      {/* Dimensions slider configurations */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[11px] text-slate-400">
                            <span>LENGTH FACTOR:</span>
                            <span className="text-orange-400 text-bold font-bold">{length} FT</span>
                          </div>
                          <input 
                            type="range"
                            min="40"
                            max="300"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="w-full accent-orange-500"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[11px] text-slate-400">
                            <span>WIDTH FACTOR:</span>
                            <span className="text-orange-400 text-bold font-bold">{width} FT</span>
                          </div>
                          <input 
                            type="range"
                            min="30"
                            max="200"
                            value={width}
                            onChange={(e) => setWidth(Number(e.target.value))}
                            className="w-full accent-orange-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] text-slate-400">
                          <span>FLOOR LEVELS:</span>
                          <span className="text-white font-bold">{levels} FLOORS</span>
                        </div>
                        <div className="flex gap-2">
                          {[1, 2, 4, 8, 12].map((num) => (
                            <button
                              key={num}
                              type="button"
                              onClick={() => setLevels(num)}
                              className={`flex-1 py-1.5 font-bold uppercase tracking-wider text-[10px] border transition-all ${
                                levels === num 
                                  ? 'bg-orange-500 text-slate-900 border-orange-600' 
                                  : 'bg-slate-900 border-slate-800 text-slate-400'
                              }`}
                            >
                              {num} LVL
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full bg-slate-900 border border-slate-800 hover:border-orange-500/40 text-orange-400 py-3 font-display uppercase tracking-wider text-xs font-bold"
                        >
                          PROCEED TO AUTHENTICATION PARAMETERS &rarr;
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Client Auth and Quality details */}
                  {step === 2 && (
                    <form onSubmit={handleSaveQuote} className="space-y-4 font-mono text-xs">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-slate-500 block mb-1 font-bold uppercase">CLIENT NAME:</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 focus:border-orange-500 p-2 text-slate-200 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-slate-500 block mb-1 font-bold uppercase">COMM_EMAIL_ID:</label>
                          <input
                            type="email"
                            required
                            placeholder="doe@contractor.org"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 focus:border-orange-500 p-2 text-slate-200 outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-slate-500 block mb-1 font-bold uppercase">MATERIAL SPEC GRADE:</label>
                          <select
                            value={materialGrade}
                            onChange={(e) => setMaterialGrade(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 p-2 text-slate-200 focus:border-orange-500 outline-none"
                          >
                            <option value="standard">ASTM Standard Steel/Concrete</option>
                            <option value="high-tensile">High-Tensile (Cold-Rolled Decking)</option>
                            <option value="seismic-resilient">Seismic Resilient Continuous Anchors</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-slate-500 block mb-1 font-bold uppercase">REDUNDANCY RATIO:</label>
                          <select
                            value={safetyLevel}
                            onChange={(e) => setSafetyLevel(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 p-2 text-slate-200 focus:border-orange-500 outline-none"
                          >
                            <option value="10% Redundancy">10% Safety Buffer (Standard)</option>
                            <option value="20% Redundancy">20% Redundancy (Commercial Highrise)</option>
                            <option value="30% Redundancy">30% High Shock Seismic</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-500 block mb-1 font-bold uppercase">ADDITIONAL DESIGN PARAM NOTES:</label>
                        <textarea
                          placeholder="E.g. specialized water table elevations, thermal parameters specifications."
                          rows={2}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 focus:border-orange-500 p-2 text-slate-200 outline-none resize-none"
                        />
                      </div>

                      <div className="flex gap-4 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 bg-slate-900 border border-slate-800 text-slate-400 py-3 font-display uppercase tracking-widest text-xs font-bold"
                        >
                          &larr; BACK
                        </button>
                        <button
                          type="submit"
                          className="flex-1 bg-orange-500 text-brand-dark hover:bg-orange-600 transition-colors py-3 font-display uppercase tracking-widest text-xs font-bold font-black"
                        >
                          SUBMIT SPEC TO REGISTRY
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Step 3: View finalized printed estimate certificate list */}
                  {step === 3 && (
                    <div className="space-y-4 font-mono text-xs">
                      <div className="bg-slate-900/60 border border-slate-850 p-4 rounded text-slate-300 relative space-y-3">
                        <div className="absolute right-3 top-3 bg-orange-950/20 text-orange-400 font-bold border border-orange-500/10 text-[8px] px-1.5 py-0.5 uppercase">
                          OFFICIAL CERTIFICATE
                        </div>
                        <div className="border-b border-slate-800 pb-2">
                          <span className="text-[10px] text-slate-500 block uppercase font-bold">REGISTRY CLIENT:</span>
                          <span className="text-white text-sm font-bold">{clientName} ({email})</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-[10px] text-slate-500 block uppercase font-bold">STRUCTURAL MASS AREA:</span>
                            <span>{length * width * levels} Sq.Ft.</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 block uppercase font-bold">MATERIAL CONFORMENT:</span>
                            <span className="text-orange-400 uppercase font-bold">{materialGrade}</span>
                          </div>
                        </div>
                        <div className="border-t border-slate-850 pt-2 flex justify-between items-center bg-slate-950 p-2">
                          <span className="text-[10px] text-slate-500 uppercase font-black">ESTIMATED EXPOSURE RATE SUMMARY:</span>
                          <span className="text-emerald-400 font-extrabold text-base">${activeEstimate.toLocaleString()} USD</span>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setStep(1);
                            setClientName('');
                            setEmail('');
                            setNotes('');
                          }}
                          className="flex-1 bg-slate-900 border border-slate-800 text-slate-300 py-3 font-display uppercase tracking-widest text-xs"
                        >
                          CALCULATE NEW SPEC
                        </button>
                        <button
                          type="button"
                          onClick={onClose}
                          className="flex-1 bg-orange-500 text-slate-900 hover:bg-orange-600 transition-colors font-display font-extrabold uppercase tracking-widest text-xs py-3"
                        >
                          Close SURVEYOR
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                {/* Right sidebar quotes history log values (4 cols) */}
                <div className="lg:col-span-4 border-l border-slate-900/80 pl-6 flex flex-col justify-between font-mono text-[10px] space-y-5">
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase mb-3 font-bold flex items-center gap-1">
                        <FileText className="h-4 w-4 text-orange-500 shrink-0" />
                        COMMITTED SPECS REGISTRY ({quoteHistory.length})
                      </div>
                      
                      {quoteHistory.length === 0 ? (
                        <p className="text-slate-600 text-[10px] leading-relaxed italic">
                          No historic quotes committed to this workspace cache. Submit a calculated design spec above to store records locally.
                        </p>
                      ) : (
                        <div className="space-y-3.5 max-h-56 overflow-y-auto pr-1">
                          {quoteHistory.map((q) => (
                            <div 
                              key={q.id}
                              onClick={() => {
                                setClientName(q.clientName);
                                setEmail(q.email);
                                setProjectType(q.projectType);
                                setMaterialGrade(q.materialGrade);
                                setSafetyLevel(q.safetyLevel);
                                setStep(3);
                              }}
                              className="border border-slate-850 bg-slate-900/30 p-2.5 transition-all hover:border-orange-500/30 cursor-pointer relative"
                            >
                              <div className="flex justify-between items-start">
                                <span className="font-extrabold text-[9px] text-orange-400">{q.id}</span>
                                <button 
                                  onClick={(e) => handleDeleteHistoryItem(q.id, e)}
                                  className="text-slate-600 hover:text-rose-500 transition-colors"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </button>
                              </div>
                              <div className="text-[11px] font-bold text-slate-300 mt-1 truncate">
                                {q.clientName}
                              </div>
                              <div className="font-sans text-[9px] text-slate-500 tracking-normal mt-0.5">
                                {q.dimensions}
                              </div>
                              <div className="flex justify-between items-center border-t border-slate-950 mt-2 pt-1">
                                <span className="text-[8px] text-slate-600">{q.date.split(',')[0]}</span>
                                <span className="text-emerald-400 font-extrabold font-bold">${q.estimatedCost.toLocaleString()}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-slate-900 pt-4 text-slate-600 leading-normal text-[9px] font-sans">
                    All calculations are simulated locally inside user workspace caches. True ISO designs require architectural sign-offs.
                  </div>
                </div>

              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
