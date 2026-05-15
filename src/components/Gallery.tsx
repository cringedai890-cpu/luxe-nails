"use client";
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1604654894610-df49ff66a7cb?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1632345031435-81979cd75139?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522337660859-02fbefda4740?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&q=80&w=800"
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-luxe-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxe-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block"
          >
            Digital Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold"
          >
            Art on <span className="gold-gradient italic">Your Fingertips</span>
          </motion.h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Nail Art ${i + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxe-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="px-6 py-2 border border-white/30 rounded-full text-white text-xs font-bold tracking-widest backdrop-blur-sm">
                  VIEW DESIGN
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <button className="btn-secondary">
             EXPLORE FULL GALLERY
           </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
