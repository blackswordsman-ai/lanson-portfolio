'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';
import NeonLogo from '../sub/NeonLogo';

const navLinks = [
  { name: 'About Me', href: '#about-me' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#project' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
    
    // Smooth scroll to section
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navbarClasses = `
    fixed top-0 w-full h-[65px] z-50 transition-all duration-300 ease-in-out px-4 md:px-10
    ${isScrolled 
      ? 'bg-[rgba(3,0,20,0.85)] backdrop-blur-lg shadow-xl shadow-[#2A0E61]/50' 
      : 'bg-transparent'
    }
  `;

  // Compute active index for segmented control indicator
  const activeIndex = Math.max(0, navLinks.findIndex(l => l.href.substring(1) === activeSection));

  return (
    <nav className={navbarClasses}>
      <div className="max-w-[1280px] mx-auto h-full flex justify-between items-center relative">
        {/* Logo */}
        <a 
          href="#about-about" 
          className="flex items-center group"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#about-about');
          }}
        >
          <div className="relative overflow-hidden rounded-full bg-black/20 backdrop-blur-sm w-16 h-16 flex items-center justify-center border border-purple-500/30">
            <NeonLogo />
          </div>
          <span className="hidden md:block ml-3 font-bold text-gray-300 group-hover:text-white transition-colors duration-200">
            Lanson Johnson
          </span>
        </a>

        {/* Centered Desktop Navigation (Segmented Control) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-between w-[520px] h-[54px] p-1 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-2xl shadow-[0_10px_30px_rgba(42,14,97,0.35)]">
            {/* Active indicator */}
            <span
              className="absolute top-1 bottom-1 rounded-full bg-gradient-to-br from-purple-700/40 to-cyan-600/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15),0_8px_30px_rgba(123,77,255,0.35)] transition-all duration-300 ease-out"
              style={{
                left: `${(100 / navLinks.length) * (activeIndex < 0 ? 1 : activeIndex)}%`,
                width: `${100 / navLinks.length}%`
              }}
            />

            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.substring(1) || (activeSection === '' && index === 1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative z-10 flex-1 text-center select-none px-2 py-2 text-[15px] font-semibold transition-colors duration-200 rounded-full ${isActive ? 'text-white' : 'text-white/85 hover:text-white'}`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right-side Social Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          {Socials.map(social => (
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
            fixed top-[65px] right-0 w-80 max-w-[90vw] h-[calc(100vh-65px)] z-40 md:hidden
            bg-[rgba(3,0,20,0.95)] backdrop-blur-lg border-l border-gray-800
            transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8 space-y-6">
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
                      block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200
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
            <div className="px-6 py-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4 font-medium">Connect with me</p>
              <div className="flex space-x-4">
                {Socials.map((social, index) => (
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