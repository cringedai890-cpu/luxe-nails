import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const allServices = [
  {
    title: "Nail Extensions",
    price: "₹1,499",
    duration: "90 min",
    category: "Extensions",
    desc: "Acrylic or Gel extensions with premium tips and custom shaping (Square, Oval, Almond, Coffin).",
    image: "https://images.unsplash.com/photo-1604654894610-df49ff66a7cb?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bridal Luxury Set",
    price: "₹2,999",
    duration: "150 min",
    category: "Bridal",
    desc: "Specially curated for your big day. Includes pearls, crystals, and matching toe gel polish.",
    image: "https://images.unsplash.com/photo-1632345031435-81979cd75139?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "French Ombre Tips",
    price: "₹1,299",
    duration: "60 min",
    category: "Minimal",
    desc: "The classic French look with a modern soft ombre fade. Timeless and elegant.",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Chrome & Holographic",
    price: "₹1,199",
    duration: "60 min",
    category: "Trendy",
    desc: "Mirror finish chrome in gold, silver, or rose gold. Perfect for that metallic edge.",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hand-Painted Art",
    price: "₹1,899",
    duration: "120 min",
    category: "Luxury Art",
    desc: "Intricate custom hand-drawn patterns, floral designs, or character art.",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefda4740?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Home Visit (VIP)",
    price: "₹500 + Service",
    duration: "Varies",
    category: "Home Service",
    desc: "Experience the Luxe studio at the comfort of your home. Exclusive to West Delhi.",
    image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-luxe-black">
      <Navbar />
      <div className="pt-40 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mb-20">
          <span className="text-luxe-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Full Menu</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8">Service <span className="gold-gradient italic">Portfolio</span></h1>
          <p className="text-white/40 text-lg max-w-2xl">
            Choose from our range of premium nail services. Each treatment includes a luxury manicure prep and premium cuticle care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {allServices.map((service, i) => (
            <div key={i} className="luxe-card flex flex-col sm:flex-row group">
              <div className="w-full sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-luxe-gold text-[10px] uppercase tracking-widest font-black border border-luxe-gold/20 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <span className="text-white font-bold text-lg">{service.price}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/40 text-sm mb-6 leading-relaxed line-clamp-2">
                    {service.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <Clock size={14} className="text-luxe-gold" />
                    {service.duration}
                  </div>
                  <Link href="/booking" className="text-luxe-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                    BOOK NOW <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
