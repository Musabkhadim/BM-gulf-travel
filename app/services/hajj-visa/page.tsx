import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { Clock, DollarSign, CheckCircle, Heart, Calendar, Phone, Mail, Star, Shield } from "lucide-react"
import Link from "next/link"
import ClientTestimonials from "@/app/ClientTestimonials"

const hajjRequirements = [
  "Valid passport with 6+ months validity",
  "Completed Hajj visa application form",
  "Recent passport photographs (white background)",
  "Meningitis ACWY vaccination certificate",
 
  "Medical fitness certificate",
  "Confirmed accommodation booking",
  "Return flight tickets",
  "Bank statements (last 6 months)",
  "Mahram certificate (for women under 45)",
]

const hajjPackages = [
  {
    name: "Standard Hajj",
    price: "PKR 450,000",
    duration: "21 Days",
    features: [
      "Hajj visa processing",
      "3-star hotel in Makkah & Madinah",
      "Shared accommodation in Mina",
      "Group transportation",
      "Basic meals included",
      "Religious guidance",
      "Airport transfers",
    ],
  },
  {
    name: "Premium Hajj",
    price: "PKR 650,000",
    duration: "25 Days",
    features: [
      "Hajj visa processing",
      "4-star hotel accommodation",
      "Better location in Mina",
      "Private transportation",
      "All meals included",
      "Dedicated guide",
      "Ziyarat tours",
      "24/7 support",
      "Medical assistance",
    ],
    popular: true,
  },
  {
    name: "VIP Hajj",
    price: "PKR 950,000",
    duration: "30 Days",
    features: [
      "Hajj visa processing",
      "5-star luxury hotels",
      "Premium Mina accommodation",
      "Private luxury transport",
      "Gourmet meals",
      "Personal guide",
      "Complete Ziyarat package",
      "VIP services",
      "Medical team",
      "Concierge support",
    ],
  },
]

const hajjRituals = [
  {
    name: "Ihram",
    description: "Sacred state of purity and intention",
  },
  {
    name: "Tawaf",
    description: "Circumambulation around the Kaaba",
  },
  {
    name: "Sa'i",
    description: "Walking between Safa and Marwah hills",
  },
  {
    name: "Wuquf",
    description: "Standing at Arafat on the Day of Hajj",
  },
  {
    name: "Muzdalifah",
    description: "Night stay under the open sky",
  },
  {
    name: "Rami",
    description: "Stoning of the pillars in Mina",
  },
]

export default function HajjVisaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Heart className="w-4 h-4 mr-2 text-red-500" />
              Sacred Pilgrimage
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
              Hajj Visa & Packages
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Fulfill your religious obligation with our comprehensive Hajj visa services and packages. Complete
              spiritual journey with expert guidance.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/get-quote">
                <GradientButton size="lg" className="rounded-full">
                  Book Hajj Package
                </GradientButton>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                Hajj Consultant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Hajj Season</h3>
                <p className="text-2xl font-bold gradient-text">2024</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Starting From</h3>
                <p className="text-2xl font-bold gradient-text">affordable price</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Duration</h3>
                <p className="text-2xl font-bold gradient-text">21-30 Days</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Success Rate</h3>
                <p className="text-2xl font-bold gradient-text">99.8%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hajj Packages */}
      {/* <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hajj <span className="gradient-text">Packages 2024</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the perfect package for your once-in-a-lifetime journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {hajjPackages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`glass-card hover-lift relative ${pkg.popular ? "ring-2 ring-accent" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold gradient-text mb-1">{pkg.price}</div>
                    <p className="text-muted-foreground">{pkg.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/get-quote">
                      <GradientButton className="w-full rounded-full">Select Package</GradientButton>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Hajj Rituals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hajj <span className="gradient-text">Rituals</span>
              </h2>
              <p className="text-lg text-muted-foreground">Understanding the sacred rituals of Hajj pilgrimage</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hajjRituals.map((ritual, index) => (
                <Card key={index} className="glass-card hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{ritual.name}</h3>
                    <p className="text-sm text-muted-foreground">{ritual.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hajj Visa <span className="gradient-text">Requirements</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Essential documents and requirements for Hajj visa application
              </p>
            </div>

            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {hajjRequirements.map((req, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Your <span className="gradient-text">Fifth Pillar</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of pilgrims who have trusted us with their Hajj journey. Experience the pilgrimage of a
              lifetime with complete peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <GradientButton size="lg" className="rounded-full">
                  Book Hajj 2024
                </GradientButton>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Request Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
        <ClientTestimonials/>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
