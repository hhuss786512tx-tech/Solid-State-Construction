import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import ServicesPage from './components/ServicesPage';
import GalleryPage from './components/GalleryPage';
import LocationsPage from './components/LocationsPage';
import ServiceLandingPage from './components/ServiceLandingPage';
import QuoteModal from './components/QuoteModal';
import { SERVICE_PAGES } from './data/servicePages';

type TabId = 'homepage' | 'services' | 'gallery' | 'locations';

const SERVICE_SLUGS = SERVICE_PAGES.map((p) => p.slug);

export default function App() {
  const [tab, setTab] = useState<TabId>('homepage');
  const [quoteOpen, setQuoteOpen] = useState<boolean>(false);
  const [selectedHubId, setSelectedHubId] = useState<string | null>(null);
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);

  // URL-based routing: detect deep links and handle popstate
  useEffect(() => {
    const parsePath = () => {
      const path = window.location.pathname;
      
      // Service landing pages: /services/water-remediation, /services/plumbing, etc.
      const svcMatch = path.match(/^\/services\/([a-z-]+)$/);
      if (svcMatch && SERVICE_SLUGS.includes(svcMatch[1])) {
        setServiceSlug(svcMatch[1]);
        setShowThankYou(false);
        return;
      }

      // Thank-you page
      if (path === '/thank-you' || path === '/thank-you/') {
        setShowThankYou(true);
        setServiceSlug(null);
        return;
      }

      // Gallery
      if (path === '/gallery' || path === '/gallery/') {
        setTab('gallery');
        setServiceSlug(null);
        setShowThankYou(false);
        return;
      }

      // Default: homepage
      setTab('homepage');
      setServiceSlug(null);
      setShowThankYou(false);
    };

    parsePath();
    window.addEventListener('popstate', parsePath);
    return () => window.removeEventListener('popstate', parsePath);
  }, []);

  // Navigate to a service page
  const navigateToService = (slug: string) => {
    const url = `/services/${slug}`;
    window.history.pushState(null, '', url);
    setServiceSlug(slug);
    setShowThankYou(false);
  };

  // Switch tabs with URL updates
  const handleTabChange = (newTab: string) => {
    setServiceSlug(null);
    setShowThankYou(false);

    if (newTab === 'gallery') {
      window.history.pushState(null, '', '/gallery');
      setTab('gallery');
    } else if (newTab === 'homepage') {
      window.history.pushState(null, '', '/');
      setTab('homepage');
    } else {
      setTab(newTab as TabId);
    }
  };

  // If we're showing a service landing page
  if (serviceSlug) {
    return (
      <div className="flex min-h-screen flex-col bg-brand-darker font-sans text-slate-100 selection:bg-emerald-700 selection:text-slate-900">
        <Navbar
          currentTab={'homepage' as any}
          setTab={handleTabChange}
          onRequestQuote={() => setQuoteOpen(true)}
        />
        <main className="flex-grow">
          <ServiceLandingPage
            slug={serviceSlug}
            onRequestQuote={() => setQuoteOpen(true)}
          />
        </main>
        <Footer
          setTab={handleTabChange}
          navigateToService={navigateToService}
        />
        <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      </div>
    );
  }

  // If showing thank-you page
  if (showThankYou) {
    return (
      <div className="flex min-h-screen flex-col bg-brand-darker font-sans text-slate-100 selection:bg-emerald-700 selection:text-slate-900">
        <Navbar
          currentTab={'homepage' as any}
          setTab={handleTabChange}
          onRequestQuote={() => setQuoteOpen(true)}
        />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center px-4 py-24">
            <div className="h-20 w-20 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="h-10 w-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              Thank You!
            </h1>
            <p className="text-slate-300 max-w-md mx-auto text-lg leading-relaxed mb-8">
              Your inquiry has been received. Our team will reach out within 1 hour. For emergencies, call us now.
            </p>
            <a
              href="tel:5125952332"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-emerald-900/30"
            >
              <span>Call (512) 595-2332</span>
            </a>
          </div>
        </main>
        <Footer
          setTab={handleTabChange}
          navigateToService={navigateToService}
        />
      </div>
    );
  }

  // Render active tab screen
  const renderActiveScreen = () => {
    switch (tab) {
      case 'homepage':
        return (
          <Homepage
            setTab={handleTabChange}
            onRequestQuote={() => setQuoteOpen(true)}
            setSelectedHubId={setSelectedHubId}
          />
        );
      case 'services':
        return <ServicesPage onRequestQuote={() => setQuoteOpen(true)} />;
      case 'gallery':
        return <GalleryPage />;
      case 'locations':
        return (
          <LocationsPage
            selectedHubId={selectedHubId}
            setSelectedHubId={setSelectedHubId}
          />
        );
      default:
        return (
          <Homepage
            setTab={handleTabChange}
            onRequestQuote={() => setQuoteOpen(true)}
            setSelectedHubId={setSelectedHubId}
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-darker font-sans text-slate-100 selection:bg-emerald-700 selection:text-slate-900">
      <Navbar
        currentTab={tab}
        setTab={handleTabChange}
        onRequestQuote={() => setQuoteOpen(true)}
      />
      <main className="flex-grow">{renderActiveScreen()}</main>
      <Footer
        setTab={handleTabChange}
        navigateToService={navigateToService}
      />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}