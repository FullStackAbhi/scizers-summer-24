import Benifits from "@/components/Benifits";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const images = [
    { src: "/images/Rectangle89.jpg", alt: "Image1" },
    { src: "/images/Rectangle91.jpg", alt: "Image2" },
    { src: "/images/Rectangle92.jpg", alt: "Image3" },
    { src: "/images/Rectangle93.jpg", alt: "Image4" },

    // Add more images as needed
  ];
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden bg-[#F4F9FF]">
      <HeroSection />
      <Benifits />
      <Features />
      <Gallery images={images} />
      <Footer />
    </main>
  );
}
