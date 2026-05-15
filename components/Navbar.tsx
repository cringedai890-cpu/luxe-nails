"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
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
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-luxe-black/90 backdrop-blur-xl py-4 border-b border-white/5' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col group">
          <span className="text-luxe-gold tracking-[0.3em] text-[10px] uppercase font-bold group-hover:text-luxe-pink transition-colors">THE LUXE</span>
          <span className="text-xl md:text-2xl font-bold font-serif tracking-tight">NAIL INSTITUTE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-bold text-white/70 hover:text-luxe-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="#booking" className="btn-primary py-3 px-6 text-xs">
            <Calendar size={14} />
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-luxe-gold p-2"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-[72px] bg-luxe-black z-40 lg:hidden"
          >
            <div className="flex flex-col p-10 space-y-8 h-full bg-gradient-to-b from-luxe-black to-luxe-dark">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-white/90 hover:text-luxe-gold transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <div className="w-12 h-[1px] bg-luxe-gold/30" />
                </Link>
              ))}
              <div className="pt-10 space-y-6">
                <Link href="#booking" className="btn-primary w-full" onClick={() => setIsMobileMenuOpen(false)}>
                  <Calendar size={20} />
                  BOOK APPOINTMENT
                </Link>
                <div className="flex justify-center gap-8 text-luxe-gold">
                   <Instagram size={24} />
                   <Phone size={24} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
