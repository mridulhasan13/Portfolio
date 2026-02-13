
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Creatives from './components/Creatives';

const App: React.FC = () => {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'about', 'education', 'experience', 'skills', 'creatives', 'awards', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash());

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when navigating
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };


  // Manual scroll restoration
  useEffect(() => {
    // Prevent browser from restoring scroll automatically
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Restore scroll position on mount (refresh)
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
      }, 0);
    }

    // Save scroll position before unload (refresh)
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const isFirstRender = React.useRef(true);

  // Scroll to top whenever page changes, but skip on initial render
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={handleNavigate} />;
      case 'about': return <About />;
      case 'education': return <Education />;
      case 'experience': return <Experience />;
      case 'skills': return <Skills />;
      case 'creatives': return <Creatives />;
      case 'awards': return <Awards />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 selection:bg-amber-400 selection:text-black">
      <Navbar activeSection={currentPage} onNavigate={handleNavigate} />

      <main className="page-transition">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
