
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

// Code-split pages for near-instant loading times
const About = lazy(() => import('./components/About'));
const WorkExperience = lazy(() => import('./components/WorkExperience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Awards = lazy(() => import('./components/Awards'));
const Contact = lazy(() => import('./components/Contact'));
const Creatives = lazy(() => import('./components/Creatives'));

const App: React.FC = () => {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'about', 'education', 'work-experience', 'projects', 'skills', 'creatives', 'awards', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash());
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  // Show/hide back-to-top button based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    return (
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        {(() => {
          switch (currentPage) {
            case 'home': return <Home onNavigate={handleNavigate} />;
            case 'about': return <About />;
            case 'education': return <Education />;
            case 'work-experience': return <WorkExperience />;
            case 'projects': return <Projects />;
            case 'skills': return <Skills />;
            case 'creatives': return <Creatives />;
            case 'awards': return <Awards />;
            case 'contact': return <Contact />;
            default: return <Home onNavigate={handleNavigate} />;
          }
        })()}
      </Suspense>
    );
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 selection:bg-amber-400 selection:text-black w-full max-w-full overflow-x-hidden">
      <Navbar activeSection={currentPage} onNavigate={handleNavigate} />

      <main className="page-transition w-full max-w-full overflow-x-hidden">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Floating Back-to-Top Button */}
      <button
        id="back-to-top-btn"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-amber-400 text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:bg-amber-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(251,191,36,0.6)] active:scale-95 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default App;
