"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Nail Extensions",
    price: "₹1,499",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1604654894610-df49ff66a7cb?auto=format&fit=crop&q=80&w=800",
    desc: "Premium acrylic or gel extensions for that perfect length and shape."
  },
  {
    title: "Bridal Nails",
    price: "₹2,999",
    duration: "120 min",
    image: "https://images.unsplash.com/photo-1632345031435-81979cd75139?auto=format&fit=crop&q=80&w=800",
    desc: "Exquisite designs featuring pearls, glitter, and intricate hand-painted art."
  },
  {
    title: "Gel Polish",
    price: "₹799",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800",
    desc: "Long-lasting high-shine finish with a wide variety of trending shades."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-luxe-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-luxe-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block"
            >
              Our Offerings
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif font-bold"
            >
              Exquisite <span className="text-luxe-pink italic">Services</span>
            </motion.h2>
          </div>
          <Link href="/services" className="text-luxe-gold border-b border-luxe-gold pb-1 font-bold tracking-widest text-xs hover:text-white hover:border-white transition-all uppercase">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="luxe-card group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxe-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-6 right-6">
                  <div className="bg-luxe-gold text-black font-black text-sm px-4 py-1 rounded-full shadow-lg">
                    {service.price}
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                  <div className="flex items-center gap-4 text-white/60 text-xs uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-1"><Clock size={12} className="text-luxe-gold" /> {service.duration}</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-luxe-dark group-hover:bg-luxe-dark/80 transition-colors">
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-luxe-gold text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                  BOOK NOW <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import Link from 'next/link';
export default Services;
