'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { Socials } from '@/constants';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#project' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    
    // Check if it's an external page or a section
    if (href.startsWith('/')) {
      // Navigate to a new page
      window.location.href = href;
    } else {
      // Smooth scroll to section
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const navbarClasses = `
    fixed top-0 w-full h-[60px] sm:h-[65px] z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 md:px-10
    ${isScrolled 
      ? 'bg-[rgba(3,0,20,0.85)] backdrop-blur-lg shadow-xl shadow-[#2A0E61]/50' 
      : 'bg-transparent'
    }
  `;

  // Previously used for segmented control; retained for reference but unused now

  return (
    <nav className={navbarClasses}>
      <div className="max-w-[1280px] mx-auto h-full flex justify-between items-center relative">
        {/* Left side placeholder removed per request */}
        <div />

        {/* Centered Desktop Navigation (Segmented Control) */}
        {/* Desktop Profile Dropdown with name */}
        <div className="hidden md:flex items-center gap-3 ml-auto" ref={profileMenuRef}>
          <button
            onClick={() => setProfileOpen(v => !v)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm border border-purple-500/30 hover:bg-white/5 transition"
            aria-haspopup="menu"
            aria-expanded={profileOpen}
            aria-label="Open navigation menu"
          >
            <span className="font-semibold text-gray-200 text-sm sm:text-base">Lanson Johnson</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 transition-transform ${profileOpen ? 'rotate-180' : ''}`}>
              <path fillRule="evenodd" d="M12 14.25a.75.75 0 0 1-.53-.22l-4.5-4.5a.75.75 0 1 1 1.06-1.06L12 12.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.53.22z" clipRule="evenodd" />
            </svg>
          </button>
          {profileOpen && (
            <div className="absolute right-2 sm:right-4 top-[65px] sm:top-[70px] w-52 sm:w-56 rounded-xl border border-white/15 bg-[rgba(3,0,20,0.95)] backdrop-blur-xl shadow-xl p-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                    setProfileOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === link.href.substring(1) ? 'bg-white/10 text-white' : 'text-gray-200 hover:text-white hover:bg-white/5'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right-side Social Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          {/* GitHub Icon */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-all duration-200 hover:bg-white/10 hover:scale-110"
            aria-label="Visit GitHub"
          >
            <Icon 
              icon="mdi:github" 
              className="w-5 h-5 text-gray-300 hover:text-white transition-colors duration-200" 
            />
          </a>
          
          {Socials.filter(s => !['Instagram','Facebook','Discord'].includes(s.name)).map(social => (
            <a
              key={social.name}
              href={social.href ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-200 hover:bg-white/10 hover:scale-110"
              aria-label={`Visit ${social.name}`}
            >
              <Image
                src={social.src}
                alt={`${social.name} icon`}
                width={20}
                height={20}
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 rounded-lg transition-colors duration-200"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-6 relative">
            <span className={`
              absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out
              ${menuOpen ? 'rotate-45 top-3' : 'top-1'}
            `} />
            <span className={`
              absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out top-3
              ${menuOpen ? 'opacity-0' : 'opacity-100'}
            `} />
            <span className={`
              absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out
              ${menuOpen ? '-rotate-45 top-3' : 'top-5'}
            `} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          </div>
        )}

        {/* Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className={`
            fixed top-[60px] sm:top-[65px] right-0 w-72 sm:w-80 max-w-[90vw] h-[calc(100vh-60px)] sm:h-[calc(100vh-65px)] z-40 md:hidden
            bg-[rgba(3,0,20,0.95)] backdrop-blur-lg border-l border-gray-800
            transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`
                      block px-4 py-3 text-base sm:text-lg font-medium rounded-lg transition-all duration-200
                      transform hover:translate-x-2
                      ${isActive 
                        ? 'text-white bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30' 
                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                      }
                    `}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Mobile Social Links */}
            <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4 font-medium">Connect with me</p>
              <div className="flex space-x-4">
                {/* GitHub Icon for Mobile */}
                <a
                  href="https://github.com/blackswordsman-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-110"
                  aria-label="Visit GitHub"
                >
                  <Icon 
                    icon="mdi:github" 
                    className="w-6 h-6 text-gray-300 hover:text-white transition-colors duration-200" 
                  />
                </a>
                
                {Socials.filter(s => !['Instagram','Facebook','Discord'].includes(s.name)).map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-110"
                    style={{
                      animationDelay: `${(navLinks.length + index) * 100}ms`,
                    }}
                    aria-label={`Visit ${social.name}`}
                  >
                    <Image
                      src={social.src}
                      alt={`${social.name} icon`}
                      width={24}
                      height={24}
                      className="opacity-70 hover:opacity-100 transition-opacity duration-200"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;