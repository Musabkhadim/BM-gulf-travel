import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/services/services-section"
import { InfoGallery } from "@/components/gallery/info-gallery"
import { BlogSection } from "@/components/blog/blog-section"
import { ContactSection } from "@/components/contact/contact-section"
import { Footer } from "@/components/footer/footer"
import Image from "next/image";
import { Slider } from "@radix-ui/react-slider"
import AirlinePartners from "./slider"
import BlogPostPage from "./blog/[slug]/page"
import BlogPage from "./blog/page"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import ClientTestimonials from "./ClientTestimonials"
import FAQSection from "./FAQsection"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Quick Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          {/* airline patner  */}

          
          <AirlinePartners/>
          <ServicesSection />
        </div>
      </section>

      {/* Featured Gallery */}
      {/* <InfoGallery /> */}

      {/* Latest Blog Posts */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Latest Updates</h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Stay informed with our latest travel tips and guides
            </p>
          </div>
         
        </div>
      </section> */}
       <BlogSection/>
      {/* Contact Preview */}
      <FAQSection/>
      <ClientTestimonials/>
      
      <ContactSection />
      
 <WhatsAppFloat />
      <Footer />
    </main>
  )
}
