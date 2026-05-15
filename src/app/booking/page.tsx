"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="bg-luxe-black min-h-screen">
      <Navbar />
      
      <div className="pt-40 pb-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Info Side */}
            <div className="w-full lg:w-1/3">
              <span className="text-luxe-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Reservation</span>
              <h1 className="text-5xl font-serif font-bold mb-8">Secure Your <span className="gold-gradient italic">Session</span></h1>
              <p className="text-white/40 mb-12">
                Book your luxury nail experience in West Delhi. Our team will contact you within 30 minutes to confirm your slot.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 p-6 rounded-3xl bg-luxe-dark border border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-luxe-gold/10 flex items-center justify-center text-luxe-gold">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Instant Support</h4>
                    <p className="text-white/40 text-sm">WhatsApp: +91 98765 43210</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 rounded-3xl bg-luxe-dark border border-white/5">
                  <div className="w-12 h-12 rounded-2xl bg-luxe-gold/10 flex items-center justify-center text-luxe-gold">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Home Services</h4>
                    <p className="text-white/40 text-sm">Available for West Delhi residents.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="glass-card p-8 md:p-12 rounded-[40px]"
                  >
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-luxe-gold">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                            <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-luxe-gold transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-luxe-gold">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                            <input required type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-luxe-gold transition-all" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-luxe-gold">Preferred Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                            <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-luxe-gold transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-luxe-gold">Service Type</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-luxe-gold transition-all appearance-none cursor-pointer">
                            <option className="bg-luxe-black">Nail Extensions</option>
                            <option className="bg-luxe-black">Bridal Luxury Set</option>
                            <option className="bg-luxe-black">Gel Polish</option>
                            <option className="bg-luxe-black">French Tips</option>
                            <option className="bg-luxe-black">Home Visit</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-luxe-gold">Special Notes</label>
                        <textarea rows={4} placeholder="Any specific design or requirements?" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-luxe-gold transition-all" />
                      </div>

                      <button type="submit" className="btn-primary w-full py-6 text-lg">
                        CONFIRM BOOKING
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-20 rounded-[40px] text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-luxe-gold/20 flex items-center justify-center text-luxe-gold mx-auto mb-8">
                       <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl font-serif font-bold mb-4 text-white">Booking Received!</h2>
                    <p className="text-white/40 text-lg mb-12">
                      Our concierge will contact you shortly to finalize your appointment. Get ready for elegance.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="text-luxe-gold border-b border-luxe-gold font-bold uppercase tracking-widest text-xs">
                       BACK TO FORM
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
