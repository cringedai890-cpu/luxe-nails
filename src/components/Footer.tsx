import React from 'react';
import { Instagram, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="bg-luxe-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="flex flex-col">
              <span className="text-luxe-gold tracking-[0.3em] text-xs uppercase font-bold">THE LUXE</span>
              <span className="text-2xl font-bold font-serif tracking-tight">NAIL INSTITUTE</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Defining elegance through premium nail artistry and professional institute training in West Delhi.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxe-gold hover:bg-luxe-gold hover:text-black transition-all cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxe-gold hover:bg-luxe-gold hover:text-black transition-all cursor-pointer">
                <Phone size={20} />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-luxe-gold font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link href="#about" className="hover:text-luxe-gold transition-colors">About Studio</Link></li>
              <li><Link href="#services" className="hover:text-luxe-gold transition-colors">Services & Pricing</Link></li>
              <li><Link href="#gallery" className="hover:text-luxe-gold transition-colors">Nail Gallery</Link></li>
              <li><Link href="#booking" className="hover:text-luxe-gold transition-colors">Book Online</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-luxe-gold font-bold uppercase tracking-widest text-sm mb-8">Contact Us</h4>
            <ul className="space-y-6 text-white/60 text-sm">
              <li className="flex gap-4">
                <MapPin size={20} className="text-luxe-gold shrink-0" />
                <span>B-14, Ground Floor, West Delhi, India</span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-luxe-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-luxe-gold shrink-0" />
                <span>hello@luxenails.in</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-luxe-gold font-bold uppercase tracking-widest text-sm mb-8">Opening Hours</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sat:</span>
                <span className="text-white font-bold">10 AM - 8 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-bold">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} The Luxe Nail Institute. All rights reserved.
          </p>
          <p className="text-white/10 text-[10px] tracking-[0.3em] font-bold">
            DESIGNED BY ANTIGRAVITY
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
