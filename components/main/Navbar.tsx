'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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

    setMenuOpen(!menuOpen);
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

    setMenuOpen(false);
    
    if (href.startsWith('/')) {
      window.location.href = href;
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
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
          <Image src="/logo-sm.png" alt="Logo" width={40} height={40} className="rounded-full" />
          <span className="hidden sm:block text-lg font-semibold text-gray-200">LJ</span>
        </Link>

        {/* Right-side controls: Music + Menu */}
        <div className="flex items-center gap-3">
          <button
            className="relative z-50 p-3 text-white hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 rounded-lg transition-colors duration-200"
            onClick={toggleMusic}
            aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
          >
            <Icon
              icon={isMusicPlaying ? 'material-symbols:pause-circle' : 'material-symbols:music-note'}
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
          <div className="fixed inset-0 z-40" style={{ position: 'fixed' }}>
            <div 
              className="fixed inset-0 bg-black/70 backdrop-blur-md" 
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed' }}
            />
            <div 
              className="fixed inset-0 flex items-center justify-center p-6 overflow-y-auto"
              ref={mobileMenuRef}
              style={{ position: 'fixed' }}
            >
              <div className="flex flex-col items-center gap-8 sm:gap-10 py-8">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-200 font-semibold hover:scale-105"
                    style={{
                      fontSize: 'clamp(20px, 4vw, 52px)',
                      letterSpacing: '0.04em',
                      animation: `fadeInUp 0.4s ease-out ${index * 70}ms both`,
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
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
      `}</style>
    </nav>
  );
};

export default Navbar;