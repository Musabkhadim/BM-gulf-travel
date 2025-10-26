import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { Plane, Clock, DollarSign, CheckCircle, Globe, Phone, Mail, Users } from "lucide-react"
import Link from "next/link"
import FAQSection from "@/app/FAQsection"
import ClientTestimonials from "@/app/ClientTestimonials"
import { Slider } from "@radix-ui/react-slider"
import AirlinePartners from "@/app/slider"

const popularDestinations = [
  {
    city: "Dubai",
    country: "UAE",
   
    image: "/duabi.png",
    airlines: ["Emirates", "Flydubai", "PIA"],
  },
  {
    city: "Riyadh",
    country: "Saudi Arabia",
    
    image: "/saudii.png",
    airlines: ["Saudia", "PIA", "Air Arabia"],
  },
  {
    city: "Qattar",
    country: "Qattar",
    
    image: "/qattar.png",
    airlines: ["British Airways", "Virgin Atlantic", "PIA"],
  },
  {
    city: "Kuwait",
    country: "kuwait",
   
    image: "/kuwait.jpg",
    airlines: ["American Airlines", "Delta", "United"],
  },
]

const services = [
  "Domestic & International flight booking",
  "Best price guarantee",
  "24/7 customer support",
  "Flexible booking options",
  "Group booking discounts",
  "Travel insurance assistance",
  "Visa consultation",
  "Airport transfer arrangements",
]

const airlines = [
  { name: "Emirates", logo: "🇦🇪" },
  { name: "Qatar Airways", logo: "🇶🇦" },
  { name: "Etihad Airways", logo: "🇦🇪" },
  { name: "Turkish Airlines", logo: "🇹🇷" },
  { name: "PIA", logo: "🇵🇰" },
  { name: "Air Arabia", logo: "🇦🇪" },
  { name: "Saudia", logo: "🇸🇦" },
  { name: "Flydubai", logo: "🇦🇪" },
]

const bookingSteps = [
  {
    step: 1,
    title: "Search Flights",
    description: "Enter your travel details and search for the best flights",
  },
  {
    step: 2,
    title: "Compare Prices",
    description: "Compare prices from multiple airlines and choose the best option",
  },
  {
    step: 3,
    title: "Book & Pay",
    description: "Secure your booking with flexible payment options",
  },
  {
    step: 4,
    title: "Travel Ready",
    description: "Receive your tickets and travel with confidence",
  },
]

export default function AirTicketsPage() {
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
              <Plane className="w-4 h-4 mr-2" />
              Visit Visa Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">Visit Visa Booking</h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Find the best deals on domestic and international flights. Compare prices, choose your preferred airline,
              and book with confidence.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/get-quote">
                <GradientButton size="lg" className="rounded-full">
                  booking now
                </GradientButton>
              </Link>
              {/* <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                Call for Deals
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Best Prices</h3>
                <p className="text-sm text-muted-foreground">Guaranteed lowest fares</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Round the clock assistance</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Global Network</h3>
                <p className="text-sm text-muted-foreground">Worldwide destinations</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Group Discounts</h3>
                <p className="text-sm text-muted-foreground">Special rates for groups</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
     <section className="py-16 bg-muted/20">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Popular <span className="gradient-text">Destinations</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Book flights to the most popular destinations from Pakistan
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularDestinations.map((destination, index) => (
          <Card 
            key={index} 
            className="glass-card hover-lift overflow-hidden group relative h-96 cursor-pointer border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Full Box Image Container */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={destination.image || "/placeholder.svg"}
                alt={`${destination.city}, ${destination.country}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay - Changes on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/50 rounded-full animate-pulse"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-between p-6 text-white">
              
              {/* Top Content - Always Visible */}
              <div className="flex justify-between items-start">
                <div className="transform group-hover:translate-y-2 transition-transform duration-500">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 px-3 py-1 text-sm font-semibold">
                    ✈️ Round Trip
                  </Badge>
                </div>
                <div className="text-right transform group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl font-bold text-white drop-shadow-lg">From {destination.price}</span>
                </div>
              </div>

              {/* Middle Content - Expands on Hover */}
              <div className="flex-grow flex flex-col justify-center">
                <div className="transform group-hover:-translate-y-4 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{destination.city}</h3>
                  <p className="text-lg opacity-90 drop-shadow-md">{destination.country}</p>
                </div>
                
                {/* Airlines - Hidden by default, shows on hover */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                    <p className="text-sm font-semibold mb-1">Available Airlines:</p>
                    <p className="text-xs opacity-90">{destination.airlines.join(", ")}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Content - Button slides up on hover */}
              <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                <Link href="/get-quote">
                  <Button className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 transition-all duration-300 shadow-2xl shadow-primary/30 py-3 text-base font-semibold border-0">
                    ✈️ Book Flight Now
                  </Button>
                </Link>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/50 rounded-tl-xl"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/50 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/50 rounded-bl-xl"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/50 rounded-br-xl"></div>
            </div>

            {/* Enhanced Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Card>
        ))}
      </div>

      {/* View All Destinations Button */}
      <div className="text-center mt-12">

      </div>
    </div>
  </div>
</section>
      
      {/* Partner Airlines */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Partner <span className="gradient-text">Airlines</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We work with leading airlines to offer you the best travel experience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {airlines.map((airline, index) => (
                <Card key={index} className="glass-card hover-lift text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl mb-2">{airline.logo}</div>
                    <p className="text-xs font-medium">{airline.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Services & Booking Process */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Our <span className="gradient-text">Services</span>
                </h2>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Process */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Booking <span className="gradient-text">Process</span>
                </h2>
                <div className="space-y-4">
                  {bookingSteps.map((step, index) => (
                    <Card key={step.step} className="glass-card hover-lift">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
              Ready to <span className="gradient-text">Take Off</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your next flight with us and experience hassle-free travel. Get the best deals and professional
              service every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <GradientButton size="lg" className="rounded-full">
                  Search & Book Flights
                </GradientButton>
              </Link>
             
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
