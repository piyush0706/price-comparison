import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Objective from './components/Objective';
import Scenario from './components/Scenario';
// import Architecture from './components/Architecture'; // Hidden as per request
// import TechStack from './components/TechStack'; // Hidden as per request
import Features from './components/Features';
import Demo from './components/Demo';
import Mockups from './components/Mockups';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // No scrolling, just set state to show overlay
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        <SearchResults query={searchQuery} onClose={() => setSearchQuery('')} />
        <main>
          <Hero onSearch={handleSearch} />
          <Problem />
          <Objective />
          <Scenario />
          {/* <Architecture /> */}
          {/* <TechStack /> */}
          <Features />
          {/* <Demo searchQuery="" /> Products hidden on home page as per request */}
          {/* <Mockups /> Removed as per request */}
          {/* <Benefits /> Removed as per request */}
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
