"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientButton } from "@/components/ui/gradient-button"
import { Badge } from "@/components/ui/badge"
import { FileText, MapPin, Users, Plane, CheckCircle, Clock, Shield, Star, ArrowRight, Sparkles } from "lucide-react"

const services = [
  {
    id: "freelance-visa",
    title: "Freelance Visa",
    description:
      "Professional freelance visa services for UAE and other countries with complete documentation support.",
    icon: FileText,
    features: ["Document Preparation", "Application Processing", "Status Tracking", "Expert Guidance", "24/7 Support"],
    price: "Starting from PKR 25,000",
    duration: "7-14 days",
    image: "/freelance-visa-documents-professional-setup.jpg",
    popular: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: "umrah-visa",
    title: "Umrah Visa",
    description: "Complete Umrah visa processing with spiritual guidance and comprehensive travel support.",
    icon: MapPin,
    features: ["Visa Processing", "Hotel Booking", "Transport Arrangement", "Spiritual Guide", "Group Packages"],
    price: "Starting from PKR 15,000",
    duration: "5-10 days",
    image: "/beautiful-mosque-with-golden-dome-at-sunset--makka.jpg",
    popular: true,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "hajj-visa",
    title: "Hajj Visa",
    description: "Comprehensive Hajj visa and package services with complete pilgrimage management.",
    icon: Users,
    features: ["Visa Processing", "Package Deals", "Group Management", "Complete Support", "VIP Services"],
    price: "Starting from PKR 350,000",
    duration: "30-45 days",
    image: "/beautiful-mosque-with-golden-dome-at-sunset--makka.jpg",
    popular: false,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "air-tickets",
    title: "Air Ticket Booking",
    description: "Best deals on domestic and international flights with 24/7 customer support.",
    icon: Plane,
    features: ["Best Price Guarantee", "24/7 Support", "Easy Cancellation", "Multiple Airlines", "Instant Booking"],
    price: "Competitive Rates",
    duration: "Instant Booking",
    image: "/modern-airplane-flying-over-dubai-skyline-at-golde.jpg",
    popular: false,
    gradient: "from-orange-500/20 to-red-500/20",
  },
]

const stats = [
  { label: "Happy Clients", value: "10,000+", icon: Users },
  { label: "Visas Processed", value: "25,000+", icon: FileText },
  { label: "Years Experience", value: "15+", icon: Star },
  { label: "Success Rate", value: "98%", icon: CheckCircle },
]

export function EnhancedServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".service-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-sm glass-effect">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Services
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-playfair">
            Exceptional Travel & <span className="gradient-text">Visa Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience unparalleled service quality with our premium travel solutions. From spiritual journeys to
            business opportunities, we deliver excellence at every step.
          </p>
        </div>

        {/* Stats with Glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-3">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`service-card group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 border-0 glass-effect overflow-hidden relative ${
                service.popular ? "ring-2 ring-accent/50" : ""
              } ${selectedService === service.id ? "ring-2 ring-primary scale-105" : ""}`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-accent to-primary text-white px-4 py-2 shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div className="w-14 h-14 glass-effect rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0 relative z-10">
                <div className="space-y-6">
                  <div className="text-xl font-bold gradient-text">{service.price}</div>

                  {selectedService === service.id && (
                    <div className="space-y-4 animate-slide-up">
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <GradientButton size="sm" className="w-full group">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </GradientButton>
                    </div>
                  )}

                  {selectedService !== service.id && (
                    <GradientButton
                      variant="secondary"
                      size="sm"
                      className="w-full group hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </GradientButton>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl" />
          <div className="relative glass-effect rounded-3xl p-12 md:p-16 text-center border border-white/10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Ready to Start Your <span className="gradient-text">Journey?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Get personalized assistance from our travel experts. We're here to make your travel dreams come true with
              professional service, competitive pricing, and unmatched attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <GradientButton size="lg" className="group">
                <Plane className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Get Free Consultation
              </GradientButton>
              <GradientButton variant="secondary" size="lg" className="group glass-effect">
                <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Download Brochure
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
