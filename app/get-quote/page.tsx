import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { GetQuoteSection } from "@/components/forms/get-quote-section"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Clock, Users, Star, Sparkles } from "lucide-react"
import FAQSection from "../FAQsection"
import ClientTestimonials from "../ClientTestimonials"

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Consultation",
    description: "Get personalized advice from our travel experts with 15+ years of experience",
  },
  {
    icon: Shield,
    title: "Secure Process",
    description: "Your information is protected with bank-level security and encryption",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Receive your detailed quote within 24 hours of submission",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal travel consultant assigned to handle your entire journey",
  },
]

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Business Owner",
    content:
      "BM GULF made my Umrah journey seamless. Their attention to detail and professional service exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Fatima Khan",
    role: "Freelancer",
    content:
      "Got my UAE freelance visa processed in just 10 days. The team was incredibly helpful throughout the process.",
    rating: 5,
  },
  {
    name: "Muhammad Ali",
    role: "Travel Enthusiast",
    content:
      "Best travel agency in Pakistan! Their air ticket deals are unbeatable and customer service is outstanding.",
    rating: 5,
  },
]

export default function GetQuotePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section with Parallax */}
     <section className="relative pt-20 pb-16 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-accent/30" />
  <div className="absolute inset-0 bg-[url('/travel-quote-background.jpg')] bg-cover bg-center opacity-5" />

  {/* Floating Elements - Adjusted for compact layout */}
  <div className="absolute top-1/6 left-1/6 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" />
  <div className="absolute bottom-1/6 right-1/6 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center max-w-4xl mx-auto">
      <Badge variant="outline" className="mb-6 px-5 py-2 glass-effect animate-fade-in-up">
        <Sparkles className="w-4 h-4 mr-2" />
        Free Quote Service
      </Badge>
      <h1
        className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        Get Your Free Quote
      </h1>
      <p
        className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up leading-relaxed"
        style={{ animationDelay: "0.2s" }}
      >
        Personalized travel solutions crafted just for you.
        <br />
        <span className="gradient-text font-semibold">No hidden fees. No obligations.</span>
      </p>

      {/* Compact Stats */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-1">24hrs</div>
          <div className="text-muted-foreground text-sm">Response Time</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-1">98%</div>
          <div className="text-muted-foreground text-sm">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-1">10K+</div>
          <div className="text-muted-foreground text-sm">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-1">15+</div>
          <div className="text-muted-foreground text-sm">Years Experience</div>
        </div>
      </div>

      {/* Optional: Add CTA Button for better conversion */}
      <div
        className="mt-8 animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
       
      </div>
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">Quote Service?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference with our premium quote service designed to give you complete transparency and
              peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <GetQuoteSection />
        <ClientTestimonials/>
      {/* Testimonials Section */}
      {/* <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 group hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}
