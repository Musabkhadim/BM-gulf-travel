"use client"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { EnhancedGallery } from "@/components/gallery/enhanced-gallery"
// import { Badge } from "@/components/ui/badge"
// import { Camera } from "lucide-react"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
    <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
  {/* Animated Circles */}
  <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-[#D4B885]/30 to-[#9BC7D0]/30 blur-xl animate-circle-left"></div>
  <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-r from-[#9BC7D0]/30 to-[#B4C0AF]/30 blur-xl animate-circle-right"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
        Travel Gallery
      </h1>
      <p
        className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        Explore breathtaking destinations, memorable moments, and the incredible journeys of our clients through our curated collection of travel experiences.
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes circle-left {
      0% {
        transform: translateX(-100%) translateY(-50%);
        opacity: 0.7;
      }
      50% {
        transform: translateX(50%) translateY(-50%);
        opacity: 1;
      }
      100% {
        transform: translateX(100%) translateY(-50%);
        opacity: 0.7;
      }
    }
    
    @keyframes circle-right {
      0% {
        transform: translateX(100%) translateY(-50%);
        opacity: 0.7;
      }
      50% {
        transform: translateX(-50%) translateY(-50%);
        opacity: 1;
      }
      100% {
        transform: translateX(-100%) translateY(-50%);
        opacity: 0.7;
      }
    }
    
    .animate-circle-left {
      animation: circle-left 8s ease-in-out infinite;
    }
    
    .animate-circle-right {
      animation: circle-right 8s ease-in-out infinite;
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #B49057, #71AFBA);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  `}</style>
</section>

      {/* Enhanced Gallery */}
      <EnhancedGallery />

      <Footer />
    </main>
  )
}
