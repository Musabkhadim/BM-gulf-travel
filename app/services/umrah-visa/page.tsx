import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { Clock, DollarSign, CheckCircle, Heart, Users, Calendar, Phone, Mail, Star } from "lucide-react"
import Link from "next/link"
import ClientTestimonials from "@/app/ClientTestimonials"

const requirements = [
  "Valid passport with 6+ months validity",
  "Completed Umrah visa application",
  "Recent passport photographs (white background)",
  "Meningitis vaccination certificate",
 
  "Confirmed hotel booking in Saudi Arabia",
  "Return flight tickets",
  "Bank statements showing sufficient funds",
]

const packages = [
  {
    name: "Economy Package",
    price: "PKR 85,000",
    duration: "7 Days",
    features: [
      "Visa processing",
      "3-star hotel accommodation",
      "Airport transfers",
      "Basic guidance",
      "Group transportation",
    ],
  },
  {
    name: "Premium Package",
    price: "PKR 125,000",
    duration: "10 Days",
    features: [
      "Visa processing",
      "4-star hotel accommodation",
      "Private transfers",
      "Dedicated guide",
      "Ziyarat tours included",
      "24/7 support",
    ],
    popular: true,
  },
  {
    name: "VIP Package",
    price: "PKR 185,000",
    duration: "14 Days",
    features: [
      "Visa processing",
      "5-star hotel accommodation",
      "Luxury transfers",
      "Personal guide",
      "Complete Ziyarat package",
      "Premium services",
      "Concierge support",
    ],
  },
]

const spiritualServices = [
  "Pre-departure Islamic guidance",
  "Dua and prayer assistance",
  "Ziyarat (religious sites) tours",
  "Spiritual counseling",
  "Group prayers coordination",
  "Religious literature provision",
]

export default function UmrahVisaPage() {
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
              Spiritual Journey
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">
              Umrah Visa & Packages
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Embark on your spiritual journey with our comprehensive Umrah visa services and packages. Complete
              guidance from visa to pilgrimage.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/get-quote">
                <GradientButton size="lg" className="rounded-full">
                  Book Umrah Package
                </GradientButton>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                Speak to Expert
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
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Processing</h3>
                <p className="text-2xl font-bold gradient-text">3-7 Days</p>
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
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Validity</h3>
                <p className="text-2xl font-bold gradient-text">18 Days</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Group Size</h3>
                <p className="text-2xl font-bold gradient-text">15-40</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      

      {/* Requirements & Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Visa <span className="gradient-text">Requirements</span>
                </h2>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Spiritual <span className="gradient-text">Services</span>
                </h2>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {spiritualServices.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <Heart className="w-4 h-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your <span className="gradient-text">Sacred Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us guide you through every step of your Umrah pilgrimage. From visa processing to spiritual guidance,
              we're here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <GradientButton size="lg" className="rounded-full">
                  Book Your Umrah
                </GradientButton>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Get Information
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
