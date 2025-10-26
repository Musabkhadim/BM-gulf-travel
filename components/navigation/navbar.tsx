"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X, Plane, MapPin, Users, FileText, Phone, Home } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Freelance Visa",
    href: "/services/freelance-visa",
    description: "Professional freelance visa services for UAE and other countries",
    icon: FileText,
  },
  {
    title: "Umrah Visa",
    href: "/services/umrah-visa",
    description: "Complete Umrah visa processing with guidance",
    icon: MapPin,
  },
  {
    title: "Hajj Visa",
    href: "/services/hajj-visa",
    description: "Comprehensive Hajj visa and package services",
    icon: Users,
  },
  {
    title: "Visit Visa",
    href: "/services/air-tickets",
    description: "Best deals on domestic and international flights",
    icon: Plane,
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsMobileMenuOpen(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleServicesMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setServicesOpen(true)
    services.forEach((service) => router.prefetch(service.href))
  }

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false)
    }, 150)
    setHoverTimeout(timeout)
  }

  const handleServicesClick = () => {
    setServicesOpen(!servicesOpen)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
        "w-[95vw] max-w-6xl mx-auto", // Changed to vw for better mobile fit
        isScrolled
          ? "bg-gradient-to-r from-[#f7e7df]/80 to-[#c1d8de]/80 shadow-lg backdrop-blur-xl" 
          : "bg-gradient-to-r from-[#c1d8de]/40 to-[#f7e7df]/40 backdrop-blur-lg",
        isVisible ? "translate-y-0" : "-translate-y-full",
        "rounded-[50px] mt-4 border border-white/20"
      )}  
    >
      <div className="px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="BM Gulf Logo"
                width={160}
                height={160}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold gradient-text">
                BM GULF
              </span>
              <p className="text-sm sm:text-base font-bold text-muted-foreground -mt-1">
                Travel & Tour
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-bold transition-colors",
                        "hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      )}
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-bold transition-colors",
                        "hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      )}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Services dropdown */}
                <NavigationMenuItem
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <NavigationMenuTrigger
                    className="rounded-full font-bold"
                    onClick={handleServicesClick}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent 
                    className="w-auto min-w-[400px] bg-white shadow-xl rounded-xl p-4 animate-in fade-in-0 zoom-in-95 duration-100"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <div className="grid gap-3 grid-cols-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="group block select-none space-y-1 rounded-lg p-3 transition-all duration-200 hover:bg-accent/10 hover:scale-105"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
                            <service.icon className="w-4 h-4 text-accent" />
                            <div className="text-sm font-medium group-hover:text-accent">
                              {service.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-xs text-muted-foreground group-hover:text-foreground">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/gallery" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-bold transition-colors",
                        "hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      )}
                    >
                      Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-bold transition-colors",
                        "hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      )}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-bold transition-colors",
                        "hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      )}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-3 py-2 text-sm font-bold transition-colors",
                        "hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      )}
                    >
                      <Home className="w-4 h-4" />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-3 py-2 text-sm font-bold transition-colors",
                        "hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      )}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Services dropdown for tablet */}
                <NavigationMenuItem
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <NavigationMenuTrigger
                    className="rounded-full font-bold text-sm"
                    onClick={handleServicesClick}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent 
                    className="w-auto min-w-[380px] bg-white shadow-xl rounded-xl p-4 animate-in fade-in-0 zoom-in-95 duration-100"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <div className="grid gap-3 grid-cols-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="group block select-none space-y-1 rounded-lg p-3 transition-all duration-200 hover:bg-accent/10 hover:scale-105"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
                            <service.icon className="w-4 h-4 text-accent" />
                            <div className="text-sm font-medium group-hover:text-accent">
                              {service.title}
                            </div>
                          </div>
                          <p className="line-clamp-2 text-xs text-muted-foreground group-hover:text-foreground">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/gallery" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-3 py-2 text-sm font-bold transition-colors",
                        "hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      )}
                    >
                      Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-full px-3 py-2 text-sm font-bold transition-colors",
                        "hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent focus:outline-none",
                      )}
                    >
                      <Phone className="w-4 h-4" />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button - Hidden on mobile */}
          <div className="hidden md:block">
            <Link href="/get-quote">
              <GradientButton size="sm" className="rounded-full font-bold">
                Get Quote
              </GradientButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden rounded-full p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/20 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="flex items-center space-x-3 px-4 py-3 rounded-full hover:bg-accent/10 transition-colors font-bold text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5 text-accent" />
                <span>Home</span>
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 rounded-full hover:bg-accent/10 transition-colors font-bold text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <div className="px-4 py-2">
                <p className="text-sm font-bold text-muted-foreground mb-3">Services</p>
                <div className="grid grid-cols-1 gap-1 ml-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-full hover:bg-accent/10 transition-colors text-sm font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4 text-accent" />
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/gallery"
                className="px-4 py-3 rounded-full hover:bg-accent/10 transition-colors font-bold text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className="px-4 py-3 rounded-full hover:bg-accent/10 transition-colors font-bold text-base uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="flex items-center space-x-3 px-4 py-3 rounded-full hover:bg-accent/10 transition-colors font-bold text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5 text-accent" />
                <span>Contact</span>
              </Link>
              <div className="px-4 pt-3">
                <Link href="/get-quote" onClick={() => setIsMobileMenuOpen(false)}>
                  <GradientButton size="sm" className="w-full rounded-full font-bold">
                    Get Quote
                  </GradientButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}