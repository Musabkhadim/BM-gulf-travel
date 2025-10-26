"use client"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Award, Globe, Shield, Star } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Muhammad Ali Khan",
      position: "CEO & Founder",
      image: "/addnan.png",
      experience: "15+ Years Experience",
      description: "Visionary leader with extensive expertise in international travel and tourism. Committed to making travel accessible and seamless for everyone.",
      email: "ali.khan@bmgulf.com",
      phone: "+92 300 1234567",
      location: "Karachi, Pakistan"
    },
    {
      name: "Mueez Iqbal",
      position: "Visa Operations Head",
      image: "/mohize.png",
      experience: "05+ Years Experience",
      description: "Expert in visa processing with deep understanding of international travel regulations and embassy requirements worldwide.",
      email: "ayesha@bmgulf.com",
      phone: "+92 300 1234568",
      location: "Islamabad, Pakistan"
    },
     {
      name: "Mueez Iqbal",
      position: "Visa Operations Head",
      image: "/mohize.png",
      experience: "05+ Years Experience",
      description: "Expert in visa processing with deep understanding of international travel regulations and embassy requirements worldwide.",
      email: "ayesha@bmgulf.com",
      phone: "+92 300 1234568",
      location: "Islamabad, Pakistan"
    },
    {
      name: "Musab Khadim",
      position: "Business Developer",
      image: "/musab.png",
      experience: "03+ Years Experience",
      description: "I'm a passionate digital marketer and web developer focused on helping brands build their online presence and achieve measurable growth.",
      email: "bilal@bmgulf.com",
      phone: "+92 300 1234569",
      location: "Lahore, Pakistan"
    },
    {
      name: "Fatima Noor",
      position: "Customer Experience Manager",
      image: "/customer-relations.jpg",
      experience: "8+ Years Experience",
      description: "Dedicated to ensuring every client journey is smooth and memorable with personalized service and attention to detail.",
      email: "fatima@bmgulf.com",
      phone: "+92 300 1234570",
      location: "Karachi, Pakistan"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section with Animated Circles */}
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
        About BM GULF Travel & Tour
      </h1>
      <p
        className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        Your trusted partner in making travel dreams come true. With years of experience in visa processing and
        travel services, we ensure your journey is smooth and memorable.
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

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="glass-card hover-lift animate-slide-in-left">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional travel and visa services that exceed our clients' expectations. We are
                  committed to making your travel experience seamless, affordable, and memorable through our
                  professional expertise and personalized service.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift animate-slide-in-right">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading travel agency in Pakistan, known for our reliability, innovation, and customer
                  satisfaction. We envision a world where travel is accessible to everyone, and we're here to make that
                  vision a reality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Why Choose BM GULF?</h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We combine years of experience with modern technology to deliver exceptional travel services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Our experienced professionals guide you through every step of your travel journey",
                delay: "0s",
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description: "Thousands of satisfied customers and successful visa applications",
                delay: "0.2s",
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Strong partnerships with airlines and embassies worldwide",
                delay: "0.4s",
              },
              {
                icon: Shield,
                title: "Secure Process",
                description: "Your documents and personal information are handled with utmost security",
                delay: "0.6s",
              },
              {
                icon: Target,
                title: "Personalized Service",
                description: "Tailored solutions to meet your specific travel needs and requirements",
                delay: "0.8s",
              },
              {
                icon: Eye,
                title: "Transparent Pricing",
                description: "No hidden fees - clear and competitive pricing for all our services",
                delay: "1s",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="glass-card hover-lift animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
   {/* Leadership Section */}
<section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20 mb-6">
        <Star className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-primary">Leadership Team</span>
        <Star className="w-4 h-4 text-accent" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Meet Our Experts
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        Experienced professionals dedicated to making your travel journey exceptional
      </p>
    </div>

    {/* Team Cards - Updated for 5 columns */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
      {teamMembers.map((member, index) => {
        const isMusab = member.name.toLowerCase().includes("musab")

        const cardContent = (
          <Card 
            key={index}
            className="glass-card hover-lift group overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer"
            style={{
              borderRadius: "20px",
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <CardContent className="p-4 text-center relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-8 translate-x-8 opacity-60"></div>

              <div className="absolute -top-4 -right-2 z-20">
                <div className="bg-gradient-to-r from-primary to-accent text-white px-2 py-1 rounded-full text-xs font-bold shadow-2xl border-2 border-white">
                  {member.experience}
                </div>
              </div>

              <div className="relative inline-block mb-3">
                <div className="relative">
                  <div className="w-28 h-28 mx-auto">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
                </div>
              </div>

              <div className="mb-3">
                <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-500 line-clamp-1">
                  {member.name}
                </h3>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-2 py-1 rounded-full text-xs font-semibold inline-block border border-primary/20 line-clamp-1">
                  {member.position}
                </div>
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                {member.description}
              </p>

             
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"></div>
            </CardContent>
          </Card>
        )

        return isMusab ? (
          <a
            key={index}
            href="https://musabkhadim.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {cardContent}
          </a>
        ) : (
          cardContent
        )
      })}
    </div>
  </div>
</section>

      <Footer />
    </main>
  )
}