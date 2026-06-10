import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import ServicesPage from './components/ServicesPage';
import GalleryPage from './components/GalleryPage';
import LocationsPage from './components/LocationsPage';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [tab, setTab] = useState<string>('homepage');
  const [quoteOpen, setQuoteOpen] = useState<boolean>(false);
  const [selectedHubId, setSelectedHubId] = useState<string | null>(null);

  // Switch tabs safely
  const renderActiveScreen = () => {
    switch (tab) {
      case 'homepage':
        return (
          <Homepage 
            setTab={setTab} 
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
            setTab={setTab} 
            onRequestQuote={() => setQuoteOpen(true)} 
            setSelectedHubId={setSelectedHubId} 
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-darker font-sans text-slate-100 selection:bg-orange-500 selection:text-slate-900">
      
      {/* Dynamic Global Top Header Navigation */}
      <Navbar 
        currentTab={tab} 
        setTab={setTab} 
        onRequestQuote={() => setQuoteOpen(true)} 
      />

      {/* Primary Dynamic Main Body */}
      <main className="flex-grow">
        {renderActiveScreen()}
      </main>

      {/* Shared Global Technical Command Footer */}
      <Footer setTab={setTab} />

      {/* Advanced Quantity Surveyor Pricing Bid Wizard */}
      <QuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
      />

    </div>
  );
}
