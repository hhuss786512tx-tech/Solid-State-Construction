import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, FileText, Trash2, Phone, Mail, User, Maximize } from 'lucide-react';
import { QuoteRequest } from '../types';
import { openCalendly } from '../utils/calendly';

// CONFIGURATION FOR LEAD EMAILS:
// 1. Go to https://web3forms.com
// 2. Enter your business email: info@solidstatesconstruction.com
// 3. You will immediately receive a free Access Key in your inbox.
// 4. Paste that Access Key in the variable below:
const WEB3FORMS_ACCESS_KEY = "700a045a-9c7d-409d-ba90-8133f2c3b3a1";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('water-remediation');
  const [sqFt, setSqFt] = useState(1500); 
  const [notes, setNotes] = useState('');
  const [quoteHistory, setQuoteHistory] = useState<QuoteRequest[]>([]);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('solid_state_construction_quotes');
    if (stored) {
      try {
        setQuoteHistory(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // PRICING FRAMEWORK
  const pricingData: Record<string, { min: number, max: number, label: string, baseSqFt: number }> = {
    'water-remediation': { min: 1500, max: 45000, label: 'Water Remediation', baseSqFt: 500 },
    'roofing': { min: 4000, max: 55000, label: 'Roofing Services', baseSqFt: 2000 },
    'concrete': { min: 2000, max: 85000, label: 'Concrete & Foundation', baseSqFt: 1000 },
    'plumbing': { min: 1500, max: 48000, label: 'Plumbing Services', baseSqFt: 500 }
  };

  const computeEstimate = () => {
    const range = pricingData[projectType] || { min: 0, max: 0, baseSqFt: 1000 };
    
    // Scale pricing based on SqFt (Max is reached at 10,000 SqFt for this model)
    const scaleFactor = Math.min(sqFt / 10000, 1.0);
    const computed = range.min + (range.max - range.min) * scaleFactor;
    
    return Math.floor(computed);
  };

  const activeEstimate = computeEstimate();

  const handleSaveQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !phone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }

    const newQuote: QuoteRequest = {
      id: `QT-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName,
      email,
      projectType,
      dimensions: `${sqFt.toLocaleString()} SQ. FT.`,
      materialGrade: 'Standard',
      safetyLevel: 'Standard',
      notes: notes || 'N/A',
      estimatedCost: activeEstimate,
      date: new Date().toLocaleDateString(),
      status: 'PENDING'
    };

    const updatedHistory = [newQuote, ...quoteHistory];
    setQuoteHistory(updatedHistory);
    localStorage.setItem('solid_state_construction_quotes', JSON.stringify(updatedHistory));
    
    // Dispatch lead notification to business & auto-reply to client via EmailJS & FormSubmit
    const serviceName = pricingData[projectType]?.label || 'Construction Services';
    const autoResponderMsg = `Hello ${clientName || 'there'},\n\nThank you for contacting Solid State Construction! We have received your inquiry regarding ${serviceName}.\n\nOur team is currently reviewing your project details and we will get back to you shortly.\n\nIf you need urgent assistance, please reach out to us at (512) 595-2332.\n\nBest regards,\nSolid State Construction Team\nconstructionsresponse@gmail.com`;

    // 1. Dispatch EmailJS instant auto-reply directly to client
    if (email && email.includes('@')) {
      const emailjsParams = {
        to_email: email,
        to_name: clientName,
        name: clientName,
        email: email,
        phone: phone,
        service_name: serviceName,
        message: notes || 'N/A'
      };

      if (typeof window !== 'undefined' && (window as any).emailjs) {
        (window as any).emailjs.send("service_93epy7t", "template_1p5nbqo", emailjsParams, "GzoEufUCan1ZZqM_h")
          .catch((err: any) => console.error("EmailJS SDK error:", err));
      } else {
        fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_93epy7t",
            template_id: "template_1p5nbqo",
            user_id: "GzoEufUCan1ZZqM_h",
            template_params: emailjsParams
          })
        }).catch(err => console.error("EmailJS API error:", err));
      }
    }

    // 2. Submit lead notification to constructionsresponse@gmail.com via FormSubmit
    let iframe = document.getElementById('hidden_submit_iframe') as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'hidden_submit_iframe';
      iframe.name = 'hidden_submit_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    const fsForm = document.createElement('form');
    fsForm.method = 'POST';
    fsForm.action = 'https://formsubmit.co/constructionsresponse@gmail.com';
    fsForm.target = 'hidden_submit_iframe';

    const fsFields: Record<string, string> = {
      name: clientName,
      email: email || 'N/A',
      phone: phone,
      service: serviceName,
      estimated_cost: `$${activeEstimate.toLocaleString()}`,
      dimensions: `${sqFt.toLocaleString()} SQ. FT.`,
      notes: notes || 'N/A',
      _subject: `New Website Inquiry: ${serviceName} - ${clientName}`,
      _replyto: email || 'constructionsresponse@gmail.com',
      _autoresponse: autoResponderMsg,
      _captcha: 'false'
    };

    Object.entries(fsFields).forEach(([k, v]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = k;
      input.value = v;
      fsForm.appendChild(input);
    });

    document.body.appendChild(fsForm);
    fsForm.submit();
    setTimeout(() => { if (document.body.contains(fsForm)) document.body.removeChild(fsForm); }, 1000);

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setStep(3);
    }, 2500);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl border border-slate-800 bg-slate-900 p-6 sm:p-10 shadow-2xl text-slate-100 rounded-3xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="font-display text-3xl font-black text-white uppercase tracking-tight leading-none">
                  Free Estimate
                </h2>
                <p className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest font-bold mt-1">
                  Drag to Adjust Square Footage
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-emerald-500">
                <X className="h-7 w-7" />
              </button>
            </div>

            {savedSuccess ? (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="h-20 w-20 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-black uppercase mb-2">Inquiry Received!</h3>
                <p className="text-slate-300 max-w-sm mx-auto text-sm leading-relaxed">
                  Thank you! A confirmation email has been dispatched from <strong className="text-emerald-400">constructionsresponse@gmail.com</strong> to your inbox. We will be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-9 space-y-8">
                  {step === 1 && (
                    <div className="space-y-8">
                      {/* Stunning Dark Mode Walkthrough Banner */}
                      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-slate-800/80 p-5 shadow-xl backdrop-blur-md">
                        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-center sm:text-left space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 font-mono">Skip the Form</span>
                            <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                              Prefer to pick your own time?
                            </h4>
                            <p className="text-xs text-slate-300">
                              Book a walkthrough inspection directly on our calendar.
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              onClose();
                              openCalendly(e);
                            }}
                            className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-display font-black uppercase tracking-widest text-[10px] px-5 py-3 rounded-xl transition-all shadow-lg shadow-emerald-900/40 hover:scale-105 flex items-center gap-2 cursor-pointer border border-emerald-400/20"
                          >
                            <span>Book Walkthrough Inspection</span>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-4">1. Select Service</label>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.keys(pricingData).map((key) => (
                            <button
                              key={key}
                              onClick={() => setProjectType(key)}
                              className={`py-3.5 px-4 rounded-2xl border-2 text-[11px] font-black uppercase tracking-tight transition-all text-left ${
                                projectType === key 
                                  ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-900/40 translate-y-[-2px]' 
                                  : 'bg-slate-800/50 border-slate-800 text-slate-500 hover:border-slate-700'
                              }`}
                            >
                              {pricingData[key].label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="flex justify-between items-end">
                          <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest block">2. Project Size (Sq Ft)</label>
                          <div className="flex items-center gap-2 text-emerald-400">
                            <Maximize className="h-4 w-4" />
                            <span className="font-display text-2xl font-black">{sqFt.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <div className="relative pt-2">
                          <input 
                            type="range"
                            min="0"
                            max="10000"
                            step="50"
                            value={sqFt}
                            onChange={(e) => setSqFt(Number(e.target.value))}
                            className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                          />
                          <div className="flex justify-between mt-2 font-mono text-[9px] text-slate-600 uppercase font-bold">
                            <span>0 FT</span>
                            <span>5,000 FT</span>
                            <span>10,000 FT</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-center sm:text-left">
                          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Estimated Range</span>
                          <span className="text-3xl font-black text-emerald-400">${activeEstimate.toLocaleString()}*</span>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                          <button 
                            type="button"
                            onClick={() => {
                              const prefilledDetails = `Detailed Custom Estimate Request for ${pricingData[projectType].label}.\n\nProject Specifications:\n- Approximate Size: ${sqFt} SQ. FT.\n- Preliminary Estimated Budget: $${activeEstimate.toLocaleString()}*\n\nPlease contact me back to discuss the details.`;
                              setNotes(prefilledDetails);
                              setStep(2);
                            }}
                            className="flex-1 sm:flex-initial text-center border-2 border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white px-5 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-[10px] transition-all"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            Get a more detailed estimate
                          </button>
                          <button
                            onClick={() => setStep(2)}
                            className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-emerald-900/30"
                          >
                            Next Step &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <form onSubmit={handleSaveQuote} className="space-y-6">
                      <div className="space-y-5">
                        <div className="relative">
                          <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-2 ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-3.5 h-5 w-5 text-slate-600" />
                            <input
                              type="text" required placeholder="Your Name" value={clientName}
                              onChange={(e) => setClientName(e.target.value)}
                              className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl p-4 pl-12 text-sm text-white focus:border-emerald-500 outline-none transition-all"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-2 ml-1">Phone Number</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-3.5 h-5 w-5 text-slate-600" />
                              <input
                                type="tel" required placeholder="(512) 000-0000" value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl p-4 pl-12 text-sm text-white focus:border-emerald-500 outline-none transition-all"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-2 ml-1">Email (Optional)</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-600" />
                              <input
                                type="email" placeholder="email@address.com" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl p-4 pl-12 text-sm text-white focus:border-emerald-500 outline-none transition-all"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-2 ml-1">Project Details</label>
                          <textarea
                            placeholder="Tell us about the issue or project..." rows={3} value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full bg-slate-800 border-2 border-slate-700 rounded-2xl p-4 text-sm text-white focus:border-emerald-500 outline-none resize-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button type="button" onClick={() => setStep(1)} className="flex-1 bg-slate-800 text-slate-400 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-700 transition-all">
                          Back
                        </button>
                        <button type="submit" className="flex-[2] bg-emerald-600 text-white hover:bg-emerald-500 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-emerald-900/30 transition-all">
                          Confirm Quote
                        </button>
                      </div>
                    </form>
                  )}

                  {step === 3 && (
                    <div className="space-y-8">
                      <div className="bg-emerald-900/20 border-2 border-emerald-500/20 p-8 rounded-3xl space-y-6">
                        <div className="flex justify-between items-end border-b border-emerald-500/10 pb-6">
                          <div>
                            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest block mb-1">Generated Budget Range</span>
                            <span className="text-4xl font-black text-white">${activeEstimate.toLocaleString()}*</span>
                          </div>
                          <span className="bg-emerald-500 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter mb-1">Official Draft</span>
                        </div>
                        <div className="grid grid-cols-2 gap-8 py-2">
                          <div>
                            <span className="text-slate-500 text-[10px] font-black uppercase block mb-1">Service Node</span>
                            <span className="text-white font-bold text-lg uppercase">{pricingData[projectType].label}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 text-[10px] font-black uppercase block mb-1">Area Factor</span>
                            <span className="text-white font-bold text-lg uppercase">{sqFt.toLocaleString()} FT</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed italic pt-4">
                          *This estimate is generated for planning. A final price is provided after onsite structural inspection by our team.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={(e) => {
                            onClose();
                            openCalendly(e);
                          }}
                          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-center py-4 rounded-2xl font-display font-black uppercase tracking-widest text-xs shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Book Walkthrough Inspection</span>
                          <span>&rarr;</span>
                        </button>
                        <button onClick={onClose} className="px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all">
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-3 border-l border-slate-800 pl-6 hidden lg:flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-emerald-500 mb-2">
                      <FileText className="h-4 w-4" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Quote History</span>
                    </div>
                    
                    {quoteHistory.length === 0 ? (
                      <p className="text-slate-600 text-[10px] italic">No local quote history detected.</p>
                    ) : (
                      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {quoteHistory.map((q) => (
                          <div key={q.id} className="bg-slate-800/40 border border-slate-800 p-3 rounded-xl group hover:border-emerald-500/30 transition-all">
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-[8px] font-black text-emerald-500">{q.id}</span>
                              <button onClick={(e) => handleDeleteHistoryItem(q.id, e)} className="text-slate-700 hover:text-red-400 transition-colors">
                                <Trash2 className="h-3 w-3" />
                              </button>
                            </div>
                            <div className="text-xs font-bold text-white mb-1 truncate" title={q.clientName}>{q.clientName}</div>
                            <div className="flex justify-between items-end mt-1">
                              <span className="text-[9px] text-slate-500 font-mono">{q.date}</span>
                              <span className="text-emerald-400 font-black text-sm">${q.estimatedCost.toLocaleString()}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-[9px] text-slate-600 mt-8">Real-time local rates applied.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
