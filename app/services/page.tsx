import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { EnhancedServicesSection } from "@/components/services/enhanced-services-section"
import { GetQuoteSection } from "@/components/forms/get-quote-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section with Parallax */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute inset-0 bg-[url('/travel-services-background.jpg')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-8 animate-fade-in-up">
              Premium Travel Services
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Experience world-class travel and visa services with cutting-edge technology, personalized attention, and
              unmatched expertise.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Explore Services
              </button>
              <button className="px-8 py-4 glass-effect text-foreground rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <EnhancedServicesSection />

      {/* Get Quote Section */}
      <GetQuoteSection />

      <Footer />
    </main>
  )
}
