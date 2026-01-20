'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import WaveText from '@/components/WaveText';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'neo-brutal-border border-t-0 border-l-0 border-r-0 bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="neo-brutal-border neo-brutal-shadow bg-purple-400 px-4 py-2 font-bold text-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            &lt;/&gt;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(link.href)}
                className="neo-brutal-border neo-brutal-shadow bg-white px-4 py-2 font-bold hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all hover:bg-yellow-300 wave-button"
              >
                <WaveText>{link.name}</WaveText>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden neo-brutal-border neo-brutal-shadow bg-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 neo-brutal-border neo-brutal-shadow bg-white p-4 space-y-2">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(link.href)}
                className="neo-brutal-border neo-brutal-shadow bg-yellow-300 px-4 py-3 font-bold w-full text-left hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all wave-button"
              >
                <WaveText>{link.name}</WaveText>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
