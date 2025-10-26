"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GradientButton } from "@/components/ui/gradient-button"
import { Badge } from "@/components/ui/badge"
import { FileText, MapPin, Users, Plane, CheckCircle, Clock, Shield, Star } from "lucide-react"

const services = [
  {
    id: "freelance-visa",
    title: "Freelance Visa",
    description:
      "Professional freelance visa services for UAE and other countries with complete documentation support.",
    icon: FileText,
    features: ["Document Preparation", "Application Processing", "Status Tracking", "Expert Guidance"],
    price: "Competitive Rates",
    duration: "7-12 days",
    image: "/freelance.png",
    popular: false,
  },
  {
    id: "umrah-visa",
    title: "Umrah Visa",
    description: "Complete Umrah visa processing with spiritual guidance and comprehensive travel support.",
    icon: MapPin,
    features: ["Visa Processing", "Hotel Booking", "Transport Arrangement", "Spiritual Guide"],
    price: "Competitive Rates",
    duration: "5-10 days",
    image: "/umrah.png",
    popular: true,
  },
  {
    id: "hajj-visa",
    title: "Hajj Visa",
    description: "Comprehensive Hajj visa and package services with complete pilgrimage management.",
    icon: Users,
    features: ["Visa Processing", "Package Deals", "Group Management", "Complete Support"],
    price: "Competitive Rates",
    duration: "20-30 days",
    image: "/hajj.png",
    popular: false,
  },
  {
    id: "air-tickets",
    title: "Visit visa ",
    description: "Best deals on domestic and international flights with 24/7 customer support.",
    icon: Plane,
    features: ["Best Price Guarantee", "24/7 Support", "Easy Cancellation", "Multiple Airlines"],
    price: "Competitive Rates",
    duration: "Instant Booking",
    image: "/airticket.png",
    popular: false,
  },
]

const stats = [
  { label: "Happy Clients", value: "10,000+", icon: Users },
  { label: "Visas Processed", value: "25,000+", icon: FileText },
  { label: "Years Experience", value: "15+", icon: Star },
  { label: "Success Rate", value: "98%", icon: CheckCircle },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Professional Travel & <span className="gradient-text">Visa Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From spiritual journeys to business opportunities, we provide comprehensive travel solutions with expert
            guidance and transparent processes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 overflow-hidden ${
                service.popular ? "border-accent/50 bg-gradient-to-b from-accent/5 to-transparent" : "border-border/50"
              } ${selectedService === service.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-accent to-primary text-white px-3 py-1">Most Popular</Badge>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:translate-y-2"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">{service.title}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold gradient-text">{service.price}</span>
                    <Shield className="w-5 h-5 text-accent" />
                  </div>

                  {selectedService === service.id && (
                    <div className="space-y-3 animate-slide-up">
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/get-quote" passHref>
                        <GradientButton size="sm" className="w-full">
                          Apply Now
                        </GradientButton>
                      </Link>
                    </div>
                  )}

                  {selectedService !== service.id && (
                    <GradientButton variant="secondary" size="sm" className="w-full">
                      Learn More
                    </GradientButton>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Ready to Start Your Journey?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized assistance from our travel experts. We're here to make your travel dreams come true with
            professional service and competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/get-quote" passHref>
            <GradientButton size="lg">
              <Plane className="w-5 h-5 mr-2" />
              Get Free Consultation
            </GradientButton>
            </Link>
            {/* <GradientButton variant="secondary" size="lg">
              <FileText className="w-5 h-5 mr-2" />
              Download Brochure
            </GradientButton> */}
          </div>
        </div>
      </div>
    </section>
  )
}
