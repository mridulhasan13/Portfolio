import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'ACADEMICS', id: 'education' },
    { 
      name: 'EXPERIENCE', 
      id: 'experience-dropdown',
      isDropdown: true,
      subItems: [
        { 
          name: 'Work Experience', 
          id: 'work-experience', 
          desc: 'Professional journey',
          icon: (
            <svg className="w-5 h-5 text-neutral-500 group-hover/item:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        { 
          name: 'Projects', 
          id: 'projects', 
          desc: 'Personal builds & major contributions',
          icon: (
            <svg className="w-5 h-5 text-neutral-500 group-hover/item:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )
        }
      ]
    },
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

  const handleNavClick = (id: string, isDropdownParent: boolean = false) => {
    if (isDropdownParent) return;
    onNavigate(id);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (id: string) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
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
              {navItems.map((item) => {
                if (item.isDropdown) {
                  const isActive = activeSection === 'work-experience' || activeSection === 'projects';
                  return (
                    <div 
                      key={item.id} 
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(item.id)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === item.id ? null : item.id);
                        }}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-black tracking-widest transition-all duration-300 outline-none ${
                            isActive
                            ? 'text-amber-400 bg-amber-400/10'
                            : 'text-neutral-500 hover:text-white group-hover:text-white'
                          }`}
                      >
                        {item.name}
                        <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180 text-amber-400' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      <div className={`absolute top-[120%] left-1/2 -translate-x-1/2 w-[280px] pt-4 transition-all duration-300 ease-out z-50 ${activeDropdown === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
                        <div className="bg-[#0f0f11]/95 rounded-2xl p-3 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden shadow-2xl">
                          {/* Inner glowing top edge styling */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
                          
                          <div className="flex flex-col gap-1.5">
                            {item.subItems?.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => handleNavClick(subItem.id)}
                                className={`group/item flex items-center gap-4 p-3 rounded-xl transition-all duration-300 text-left outline-none hover:bg-neutral-800/80 ${activeSection === subItem.id ? 'bg-amber-400/10 border border-amber-400/30' : 'border border-transparent'}`}
                              >
                                <div className="w-11 h-11 shrink-0 bg-neutral-900 rounded-[14px] flex items-center justify-center border border-white/5 group-hover/item:border-amber-400/20 group-hover/item:shadow-[0_0_15px_rgba(251,191,36,0.15)] transition-all duration-300">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <div className={`text-base tracking-tight font-bold mb-0.5 transition-colors duration-300 ${activeSection === subItem.id ? 'text-amber-400' : 'text-neutral-200 group-hover/item:text-white'}`}>
                                    {subItem.name}
                                  </div>
                                  <div className="text-[13px] text-neutral-500 font-medium leading-tight">
                                    {subItem.desc}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
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
                );
              })}
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
          className={`absolute inset-x-0 top-0 pt-32 pb-12 px-8 flex flex-col items-center space-y-8 transition-transform duration-500 overflow-y-auto max-h-screen ${isOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          {navItems.map((item) => {
            if (item.isDropdown) {
              const isActive = activeSection === 'work-experience' || activeSection === 'projects';
              return (
                <div key={item.id} className="w-full flex flex-col items-center">
                  <button
                    onClick={() => toggleMobileDropdown(item.id)}
                    className={`flex items-center gap-2 text-2xl font-black tracking-[0.2em] transition-all duration-300 outline-none ${isActive
                        ? 'text-amber-400 translate-x-2'
                        : 'text-neutral-300 hover:text-white'
                      }`}
                  >
                    {item.name}
                    <svg className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Dropdown SubItems */}
                  <div className={`flex flex-col items-center overflow-hidden transition-all duration-300 ${activeDropdown === item.id ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                    {item.subItems?.map(sub => (
                       <button
                         key={sub.id}
                         onClick={() => handleNavClick(sub.id)}
                         className={`text-lg font-bold tracking-widest my-3 transition-colors ${activeSection === sub.id ? 'text-amber-400' : 'text-neutral-400 hover:text-white'}`}
                       >
                         {sub.name}
                       </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
