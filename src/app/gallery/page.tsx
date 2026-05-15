"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Bridal", "Minimal", "Trendy", "Extensions", "Luxury Sets"];

const galleryItems = [
  { category: "Extensions", image: "https://images.unsplash.com/photo-1604654894610-df49ff66a7cb?auto=format&fit=crop&q=80&w=800" },
  { category: "Bridal", image: "https://images.unsplash.com/photo-1632345031435-81979cd75139?auto=format&fit=crop&q=80&w=800" },
  { category: "Minimal", image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800" },
  { category: "Trendy", image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800" },
  { category: "Luxury Sets", image: "https://images.unsplash.com/photo-1522337660859-02fbefda4740?auto=format&fit=crop&q=80&w=800" },
  { category: "Bridal", image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&q=80&w=800" },
  { category: "Trendy", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800" },
  { category: "Extensions", image: "https://images.unsplash.com/photo-1582121049303-3a55b3a8264a?auto=format&fit=crop&q=80&w=800" },
  { category: "Minimal", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800" }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className="bg-luxe-black min-h-screen">
      <Navbar />
      
      <div className="pt-40 pb-24 container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-luxe-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Visual Experience</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-12">The Luxe <span className="gold-gradient italic">Lookbook</span></h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-luxe-gold text-black shadow-lg shadow-luxe-gold/20' 
                    : 'bg-white/5 text-white/40 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.image}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[32px] overflow-hidden group cursor-pointer border border-white/5"
              >
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-8 left-8">
                    <span className="text-luxe-gold text-[10px] uppercase tracking-widest font-black mb-2 block">Category</span>
                    <h4 className="text-xl font-bold text-white">{item.category}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </main>
  );
}
