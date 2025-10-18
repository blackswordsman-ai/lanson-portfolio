'use client';
import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Howl } from 'howler';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#project' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const musicRef = useRef<Howl | null>(null);
  const menuClickRef = useRef<Howl | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for navbar background and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScrollable > 0
        ? Math.min(100, Math.max(0, (scrollPosition / totalScrollable) * 100))
        : 0;
      setScrollProgress(progress);
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
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
    if (!menuClickRef.current) {
      menuClickRef.current = new Howl({
        src: ['/click-buttons-ui-menu-sounds-effects-button-2-203594.mp3'],
        html5: true,
        volume: 0.6,
        preload: true,
        onload: () => {},
        onloaderror: (_id, error) => console.error('Menu click SFX load error:', error),
        onplayerror: (_id, error) => console.error('Menu click SFX play error:', error),
      });
    }

    const clickSfx = menuClickRef.current;
    if (clickSfx) {
      const id = clickSfx.play();
      if (!id) {
        console.warn('Menu click SFX did not start. Check file presence and browser policies.');
      }
    }

    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);

    // Allow background scroll but keep modal fixed
    // Don't prevent background scroll - let it scroll behind the modal
  };

  const toggleMusic = () => {
    if (!musicRef.current) {
      musicRef.current = new Howl({
        src: ['/space-ambient-cinematic-music-377657.mp3'],
        html5: true,
        volume: 0.4,
        loop: true,
        preload: true,
        onload: () => {},
        onplay: () => setIsMusicPlaying(true),
        onpause: () => setIsMusicPlaying(false),
        onstop: () => setIsMusicPlaying(false),
        onend: () => setIsMusicPlaying(false),
        onloaderror: (_id, error) => {
          console.error('Howler load error for /music.mp3:', error);
          setIsMusicPlaying(false);
        },
        onplayerror: (_id, error) => {
          console.error('Howler play error:', error);
          setIsMusicPlaying(false);
        },
      });
    }

    const sound = musicRef.current;
    if (!sound) return;
    if (sound.playing()) {
      sound.pause();
      setIsMusicPlaying(false);
    } else {
      sound.play();
      setIsMusicPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (musicRef.current) {
        musicRef.current.unload();
        musicRef.current = null;
      }
    };
  }, []);

  const handleLinkClick = (href: string) => {
    if (!menuClickRef.current) {
      menuClickRef.current = new Howl({
        src: ['/click-buttons-ui-menu-sounds-effects-button-2-203594.mp3'],
        html5: true,
        volume: 0.6,
        preload: true,
        onloaderror: (_id, error) => console.error('Menu click SFX load error:', error),
        onplayerror: (_id, error) => console.error('Menu click SFX play error:', error),
      });
    }
    try {
      menuClickRef.current?.play();
    } catch {}

    // Close menu
    setMenuOpen(false);
    
    // Small delay to ensure menu closes before navigation
    setTimeout(() => {
      if (href.startsWith('/')) {
        window.location.href = href;
      } else {
        const element = document.getElementById(href.substring(1));
        if (element) {
          // Adjust offset for navbar height and better positioning
          const navbarHeight = 100;
          const offsetTop = element.offsetTop - navbarHeight - 20;
          window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: 'smooth'
          });
        }
      }
    }, 150);
  };

  const navbarClasses = `
    fixed top-0 w-full h-[80px] sm:h-[90px] md:h-[100px] z-50 transition-all duration-300 ease-in-out px-6 sm:px-8 md:px-12 lg:px-16
    ${isScrolled 
      ? 'bg-[rgba(3,0,20,0.85)] backdrop-blur-lg shadow-xl shadow-[#2A0E61]/50' 
      : 'bg-transparent'
    }
  `;

  return (
    <nav className={navbarClasses}>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60]">
        <div className="absolute inset-0 bg-white/20" />
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="max-w-[1400px] mx-auto h-full flex justify-between items-center relative">
        {/* Left: Logo / Home */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full px-3 py-2 hover:bg-white/5 transition-colors"
          aria-label="Go to home"
        >
          
          {/* <span className="hidden md:block text-xl font-semibold text-gray-200">LJ</span> */}
          <span className="hidden md:inline-block text-2xl font-bold text-gray-100 tracking-wide uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
  LJ
</span>

        </Link>

        {/* Right-side controls: Music + Menu */}
        <div className="flex items-center gap-3">
          <button
            className="relative z-50 p-3 text-white hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 rounded-lg transition-colors duration-200"
            onClick={toggleMusic}
            aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
          >
           <Icon
  icon={isMusicPlaying ? 'mdi:equalizer' : 'mdi:music-note-outline'}
  className="w-7 h-7 sm:w-8 sm:h-8"
/>

          </button>

          {/* Menu Toggle */}
          <button
            className="relative z-50 p-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <div className="relative w-8 h-7">
              <span
                className={`absolute left-0 right-0 block h-0.5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 right-0 block h-0.5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              />
              <span
                className={`absolute left-0 right-0 block h-0.5 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Modal Overlay + Centered Menu - Fixed with persistent blur */}
        {menuOpen && (
          <div 
            className="fixed inset-0 z-40 backdrop-blur-persistent"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(25px) saturate(200%)',
              WebkitBackdropFilter: 'blur(25px) saturate(200%)',
            }}
            onClick={() => setMenuOpen(false)}
          />
        )}
        
        {/* Menu content - separate from backdrop */}
        {menuOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            ref={mobileMenuRef}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
            }}
          >
            <div className="flex flex-col items-center gap-8 sm:gap-10 py-8 pointer-events-auto">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-200 font-semibold hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 rounded-lg px-4 py-2"
                  style={{
                    fontSize: 'clamp(20px, 4vw, 52px)',
                    letterSpacing: '0.04em',
                    animation: `fadeInUp 0.4s ease-out ${index * 70}ms both`,
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Ensure backdrop blur is always applied */
        .backdrop-blur-persistent {
          backdrop-filter: blur(25px) saturate(200%) !important;
          -webkit-backdrop-filter: blur(25px) saturate(200%) !important;
          will-change: backdrop-filter;
          background: rgba(0, 0, 0, 0.9) !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;