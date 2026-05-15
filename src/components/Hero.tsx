"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxe-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-luxe-black/40 via-luxe-black/20 to-luxe-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1632345031435-81979cd75139?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Nails Background" 
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Soft Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-luxe-pink/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-luxe-gold/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            transition={{ 
              duration: 2 + Math.random() * 3, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute text-luxe-gold"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          >
            <Sparkles size={8 + Math.random() * 10} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxe-gold uppercase tracking-[0.5em] text-xs md:text-sm font-bold mb-6 block drop-shadow-lg">
              Est. 2014 • West Delhi's Finest
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter">
              Luxury Nails <br />
              <span className="gold-gradient italic">Define Elegance</span>
            </h1>
            <p className="text-lg md:text-xl text-luxe-pink font-light tracking-wide mb-12 max-w-2xl mx-auto drop-shadow-md">
              Aesthetic nail art, extensions, bridal nails & premium home services curated for the modern woman.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#booking" className="btn-primary group w-full sm:w-auto">
                BOOK APPOINTMENT
                <Calendar size={20} />
              </Link>
              <Link href="#gallery" className="btn-secondary group w-full sm:w-auto">
                VIEW DESIGNS
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-t from-luxe-gold/50 to-transparent" />
    </section>
  );
};

export default Hero;
