"use client"

import { useState, useEffect } from "react"
import { GradientButton } from "@/components/ui/gradient-button"
import { Plane, MapPin, ArrowRight } from "lucide-react"

const heroSlides = [
  {
    title: "Your Spiritual Journey Awaits",
    description:
      "Get expert help with GULF visas, international travel bookings, and complete travel support—fast, trusted, and stress-free.",
  },
  {
    title: "Fly to Your Dreams",
    description:
      "Discover amazing destinations with our competitive flight booking services and expert travel advice.",
  },
  {
    title: "Unlock Global Opportunities",
    description:
      "Expand your horizons with our professional visa processing for ulf countries and international destinations.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const typingText = " Your Trusted Travel & Visa Partner"

  // Typing animation
  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < typingText.length) {
        setDisplayedText(typingText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 100)
    return () => clearInterval(typeInterval)
  }, [])

  // Slide rotation every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/fallback-image.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bmgulf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-32 sm:pt-40 md:pt-48">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Typing Animation */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="block font-playfair text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-glow">
              {displayedText}
              <span className="border-r-4 border-white ml-1 animate-blink"></span>
            </span>
          </h1>

          {/* Subheading */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold 
            bg-gradient-to-r from-primary to-accent 
            bg-clip-text text-transparent 
            mb-10 sm:mb-12 
            drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] 
            tracking-wide 
            animate-fade-slide"
          >
            Making Global Journeys Simple and Secure
          </h2>

          {/* Description with slide transition */}
          <p
            key={currentSlide}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto transition-opacity duration-700 animate-fade-in"
          >
            {heroSlides[currentSlide].description}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <GradientButton size="lg" className="group">
              <Plane className="w-5 h-5 mr-2 group-hover:animate-plane-fly" />
              Book Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full backdrop-blur-sm flex items-center justify-center">
          <Plane className="w-8 h-8 text-white" />
        </div>
      </div>

      <div
        className="absolute bottom-32 left-10 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full backdrop-blur-sm flex items-center justify-center">
          <MapPin className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
