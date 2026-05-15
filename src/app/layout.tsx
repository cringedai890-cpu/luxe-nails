import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theluxenailstudio.com'),
  title: "THE LUXE Nail Institute & Studio | Premium Nail Art in West Delhi",
  description: "Experience luxury nail art, extensions, bridal nails & home services in West Delhi. Elegant, feminine, and premium nail studio.",
  openGraph: {
    title: "THE LUXE Nail Institute & Studio",
    description: "Premium Nail Art & Extensions in West Delhi",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${poppins.variable} font-sans bg-luxe-black text-white selection:bg-luxe-gold selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
