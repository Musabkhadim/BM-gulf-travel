"use client"

import { GradientButton } from "@/components/ui/gradient-button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  WheatIcon as WhatsApp,
  Plane,
  FileText,
  Users,
  Star,
  ArrowUp,
  Heart,
  Globe,
} from "lucide-react"
import { useState } from "react"

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Freelance Visa", href: "/services/freelance-visa" },
  { label: "Umrah Visa", href: "/services/umrah-visa" },
  { label: "Hajj Visa", href: "/services/hajj-visa" },
  { label: "Air Tickets", href: "/services/air-tickets" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" },
  { icon: WhatsApp, href: "#", label: "WhatsApp", color: "hover:text-green-600" },
  { icon: Globe, href: "https://cricaismus.com", label: "Website", color: "hover:text-yellow-600" },
]

const stats = [
  { icon: Users, label: "Happy Clients", value: "10,000+" },
  { icon: FileText, label: "Visas Processed", value: "05,000+" },
  { icon: Star, label: "Years Experience", value: "15+" },
  { icon: Plane, label: "Countries Served", value: "22+" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && consent) {
      setShowThankYou(true)
      setEmail("")
      setConsent(false)
      setTimeout(() => setShowThankYou(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-b from-muted/20 to-card border-t border-border/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-primary rounded-full blur-lg"></div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-border/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
           <div className="flex items-center space-x-3 mb-6">
  {/* Logo with Background */}
  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg overflow-hidden">
    <img 
      src="/logo.png" 
      alt="BM GULF Logo" 
      className="w-full h-full object-cover"
    />
  </div>
  <div>
    <h3 className="text-xl sm:text-2xl font-bold gradient-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      BM GULF
    </h3>
    <p className="text-xs sm:text-sm text-muted-foreground">Travel & Tour</p>
  </div>
</div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
              Your trusted partner for all travel and visa services. We specialize in making your journey smooth and
              memorable with professional expertise and personalized care.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3 mb-6">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-xs sm:text-sm">
                  Office # 3/14, Silk Center Rahmanabad Murree Rd B-block Satellite Town Rawalpindi
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-xs sm:text-sm">+92 333 14444 55</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-xs sm:text-sm">+92 309 28170 00</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-xs sm:text-sm">Bmgulf78@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block text-sm sm:text-base group"
                  >
                    <span className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="sm:col-span-1">
            <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-foreground">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block text-sm sm:text-base group"
                  >
                    <span className="group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent">
                      {service.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
              Subscribe to our newsletter for the latest travel deals and visa updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Subscribe Button */}
              <GradientButton 
                type="submit"
                className="w-full rounded-lg px-4 sm:px-6 py-3 text-sm sm:text-base"
              >
                Subscribe
              </GradientButton>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-2 text-xs sm:text-sm text-muted-foreground">
                <input 
                  type="checkbox" 
                  id="newsletter-consent" 
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="rounded mt-0.5 flex-shrink-0 focus:ring-primary focus:ring-2"
                  required
                />
                <label htmlFor="newsletter-consent" className="leading-tight text-xs sm:text-sm">
                  I agree to receive marketing emails
                </label>
              </div>

              {/* Thank You Message */}
              {showThankYou && (
                <div className="text-green-600 text-sm sm:text-base text-center animate-fade-in bg-green-50 border border-green-200 rounded-lg py-2 px-3">
                  ✅ Thank you for subscribing!
                </div>
              )}
            </form>

            {/* Trust Badges */}
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border/50">
              <p className="text-xs text-muted-foreground text-center mb-2">Trusted & Verified</p>
              <div className="flex justify-center space-x-4">
                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                  ✓ Verified
                </Badge>
                <Badge variant="secondary" className="text-xs bg-accent/10 text-accent">
                  ★ 5.0 Rating
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Social Icons - New Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-6 text-foreground text-center">Follow Us</h4>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted hover:bg-gradient-to-r hover:from-primary hover:to-accent flex items-center justify-center transition-all duration-300 hover:text-white hover:shadow-lg hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50 bg-card/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <span className="text-xs sm:text-sm text-muted-foreground">
                © 2025 BM GULF Travel & Tour. All rights reserved.
              </span>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <span className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mx-1" /> in Pakistan
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-4 text-xs sm:text-sm">
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                  Sitemap
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mt-2 sm:mt-0 shadow-md"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}