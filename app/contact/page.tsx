"use client"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { ContactSection } from "@/components/contact/contact-section"


export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
     <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
  {/* Animated Circles */}
  <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-[#D4B885]/30 to-[#9BC7D0]/30 blur-xl animate-circle-left"></div>
  <div className="absolute top-1/2 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-r from-[#9BC7D0]/30 to-[#B4C0AF]/30 blur-xl animate-circle-right"></div>
  
  {/* Animated Stars */}
  <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-[#D4B885] animate-star-1"></div>
  <div className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-[#9BC7D0] animate-star-2"></div>
  <div className="absolute top-1/3 left-1/2 w-5 h-5 rounded-full bg-[#B4C0AF] animate-star-3"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
        Contact Us
      </h1>
      <p
        className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
   Get in touch with our travel experts. We're here to help you plan your perfect journey and handle all your visa needs.
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
    
    @keyframes star-twinkle {
      0% {
        opacity: 0.3;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1.2);
        box-shadow: 0 0 20px currentColor;
      }
      100% {
        opacity: 0.3;
        transform: scale(0.8);
      }
    }
    
    @keyframes star-float {
      0% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(-20px) rotate(90deg);
      }
      50% {
        transform: translateY(0) rotate(180deg);
      }
      75% {
        transform: translateY(20px) rotate(270deg);
      }
      100% {
        transform: translateY(0) rotate(360deg);
      }
    }
    
    @keyframes star-pulse {
      0% {
        opacity: 0.2;
        transform: scale(0.5);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.5);
        box-shadow: 0 0 30px currentColor;
      }
      100% {
        opacity: 0.2;
        transform: scale(0.5);
      }
    }
    
    .animate-circle-left {
      animation: circle-left 10s ease-in-out infinite;
    }
    
    .animate-circle-right {
      animation: circle-right 10s ease-in-out infinite;
    }
    
    .animate-star-1 {
      animation: star-twinkle 3s ease-in-out infinite;
    }
    
    .animate-star-2 {
      animation: star-float 5s ease-in-out infinite;
    }
    
    .animate-star-3 {
      animation: star-pulse 4s ease-in-out infinite;
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #B49057, #71AFBA);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  `}</style>
</section>

      {/* Contact Section */}
      <ContactSection />
        
      <Footer />
    </main>
  )
}
