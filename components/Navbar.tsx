
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'ACADEMICS', id: 'education' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'CREATIVES', id: 'creatives' },
    { name: 'AWARDS', id: 'awards' },
    { name: 'CONTACT', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] flex justify-center pt-6 px-4 transition-all duration-500 ${scrolled ? 'translate-y-[-10px]' : ''}`}>
        <div className={`max-w-7xl w-full glass rounded-full px-8 py-3 flex justify-between items-center border transition-all duration-500 ${scrolled ? 'border-amber-400/20 shadow-amber-400/5' : 'border-white/10 shadow-2xl'}`}>
          {/* Left Corner: Logo with Color Swap Effect */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex-shrink-0 font-extrabold text-xl tracking-tighter text-white hover:text-amber-400 transition-colors cursor-pointer select-none group"
          >
            MH<span className="text-amber-400 group-hover:text-white transition-colors">MRIDUL</span>
          </div>

          {/* Center: Desktop Nav Items */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full text-[11px] font-black tracking-widest transition-all duration-300 outline-none ${activeSection === item.id
                      ? 'text-amber-400 bg-amber-400/10'
                      : 'text-neutral-500 hover:text-white'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Corner: CV Button without dot */}
          <div className="flex items-center gap-6">
            <a
              href="https://drive.google.com/file/d/1COaGF0r0CZsZA1SqohWR8oai5I1ByB-r/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 font-extrabold text-xl tracking-tighter text-white hover:text-amber-400 transition-colors select-none group"
            >
              C<span className="text-amber-400 group-hover:text-white transition-colors">V</span>
            </a>

            {/* Mobile Toggle Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white p-2 hover:text-amber-400 transition-colors outline-none focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" onClick={() => setIsOpen(false)}></div>
        <div
          className={`absolute inset-x-0 top-0 pt-32 pb-12 px-8 flex flex-col items-center space-y-8 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-2xl font-black tracking-[0.2em] transition-all duration-300 outline-none ${activeSection === item.id
                  ? 'text-amber-400 translate-x-2'
                  : 'text-neutral-300 hover:text-white'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
