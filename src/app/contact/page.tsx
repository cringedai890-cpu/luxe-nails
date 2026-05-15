import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Instagram, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-luxe-black min-h-screen">
      <Navbar />
      
      <div className="pt-40 pb-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-luxe-gold uppercase tracking-[0.5em] text-xs font-bold mb-4 block">Get In Touch</span>
             <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 italic text-luxe-pink">Connect <span className="text-white not-italic">With Us</span></h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="glass-card p-8 md:p-12 rounded-[40px] order-2 lg:order-1">
               <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-luxe-gold">Your Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-luxe-gold transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-luxe-gold">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-luxe-gold transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-luxe-gold">Subject</label>
                     <input type="text" placeholder="Inquiry about bridal nails" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-luxe-gold transition-all" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-luxe-gold">Message</label>
                     <textarea rows={5} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-luxe-gold transition-all" />
                  </div>
                  <button className="btn-primary w-full py-6 text-lg">
                    SEND MESSAGE <Send size={20} />
                  </button>
               </form>
            </div>

            {/* Info */}
            <div className="space-y-12 order-1 lg:order-2">
               <div>
                  <h3 className="text-3xl font-serif font-bold mb-8">Studio <span className="text-luxe-gold italic">Details</span></h3>
                  <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 rounded-full bg-luxe-gold/10 flex items-center justify-center text-luxe-gold shrink-0">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <p className="text-white font-bold mb-1">Our Location</p>
                          <p className="text-white/40">B-14, Ground Floor, Tagore Garden, West Delhi, India</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 rounded-full bg-luxe-gold/10 flex items-center justify-center text-luxe-gold shrink-0">
                          <Phone size={24} />
                       </div>
                       <div>
                          <p className="text-white font-bold mb-1">Phone Number</p>
                          <p className="text-white/40">+91 98765 43210</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 rounded-full bg-luxe-gold/10 flex items-center justify-center text-luxe-gold shrink-0">
                          <Mail size={24} />
                       </div>
                       <div>
                          <p className="text-white font-bold mb-1">Email Address</p>
                          <p className="text-white/40">hello@luxenails.in</p>
                       </div>
                    </div>
                  </div>
               </div>

               <div className="p-8 rounded-[32px] bg-luxe-dark border border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                     <Clock className="text-luxe-gold" />
                     <h4 className="font-bold uppercase tracking-widest text-sm text-luxe-gold">Business Hours</h4>
                  </div>
                  <div className="space-y-3">
                     <div className="flex justify-between text-sm">
                        <span className="text-white/40">Monday - Saturday</span>
                        <span className="text-white font-bold">10:00 AM - 08:00 PM</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-white/40">Sunday</span>
                        <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Closed</span>
                     </div>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <button className="flex-1 btn-secondary py-4 text-xs">
                     <Instagram size={18} /> INSTAGRAM
                  </button>
                  <button className="flex-1 btn-secondary py-4 text-xs">
                     WHATSAPP
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
