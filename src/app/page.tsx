import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <div id="about" className="py-24 bg-luxe-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
             <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-luxe-gold/20 shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1522337660859-02fbefda4740?auto=format&fit=crop&q=80&w=800" 
                    alt="The Studio" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-card p-8 rounded-3xl hidden md:block">
                   <p className="text-luxe-gold font-serif text-5xl font-bold mb-2">10+</p>
                   <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Years of Artistic Excellence</p>
                </div>
             </div>
             <div className="w-full lg:w-1/2">
                <span className="text-luxe-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">The Studio Story</span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Crafting <span className="text-luxe-pink italic">Confidence</span> through Nail Art</h2>
                <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                  <p>
                    The Luxe Nail Institute & Studio was born out of a passion for high-end aesthetics and precision. Based in the heart of West Delhi, we specialize in luxury nail extensions, intricate hand-painted art, and bridal collections that tell a story.
                  </p>
                  <p>
                    Our founder, Jahnvi, envisioned a space where beauty meets sophistication—not just a studio, but an institute that sets the standard for nail artistry in India.
                  </p>
                </div>
                <div className="mt-12 flex gap-8">
                   <div className="text-center">
                      <p className="text-3xl font-bold text-white mb-1">5000+</p>
                      <p className="text-luxe-gold text-[10px] uppercase tracking-widest font-bold">Happy Clients</p>
                   </div>
                   <div className="w-[1px] h-12 bg-white/10" />
                   <div className="text-center">
                      <p className="text-3xl font-bold text-white mb-1">200+</p>
                      <p className="text-luxe-gold text-[10px] uppercase tracking-widest font-bold">Artists Trained</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      <Services />
      <Gallery />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} />
      </a>

      <Footer />
    </main>
  );
}
