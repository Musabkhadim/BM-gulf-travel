"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Calendar, User, ArrowRight, Filter, Clock, Eye } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    slug: "gulf-visa-guide-2025", // Changed to match individual post
    title: "Complete Guide to Gulf Visa from Pakistan (2025)", // Fixed title
    excerpt:
      "Everything you need to know about obtaining an Umrah visa from Pakistan, including requirements, process, and tips for a smooth application",
    image: "/bloge1.png", // Use the same image as individual post
    category: "Visa Guide",
    author: "BM GULF Team",
    date: "December 15, 2024",
    readTime: "5 min read",
    tags: ["Umrah", "Visa", "Pakistan", "Saudi Arabia"],
    views: "2.4k"
  },
  {
    id: 2,
    slug: "freelance-visa-uae-requirements", // Changed to match individual post
    title: "Freelance Visa Made Easy: Start Working Legally in the Gulf with BM Gulf",
    excerpt:
      "Step-by-step guide to obtaining a freelance visa for UAE, including documentation, fees, and processing time.",
  
  image: "/freelancevisa.png",

    category: "Business Visa",
    author: "Visa Expert",
    date: "August 10, 2025",
    readTime: "7 min read",
    tags: ["UAE", "Freelance", "Business Visa"],
    views: "9.8k"
  },
  {
    id: 3,
    slug: "best-time-book-international-flights",
   title: "Why Thousands Choose BM Gulf for Their Gulf Visa Applications",
      excerpt: "Learn insider tips to get best flight deals and save money on international travel. Discover the perfect booking windows.",
  
    image: "/thounsand .png",
    date: "August 10, 2025",
    readTime: "7 min read",
    views: "3.2k",
    tags: ["Flights", "Travel Tips", "Booking"],
    
  },
    {
    id: 5,
    slug: "travel-insurance-essential-guide",
    title: "The Story Behind BM Gulf: Turning Travel Dreams into Reality",
    excerpt: "Understanding the importance of travel insurance and how to choose the right coverage for your trip.",
    image: "/blog5.png",
    category: "BM Gulf",
    author: "Insurance Specialist",
    date: "November 20, 2024",
    readTime: "6 min read",
    tags: ["Insurance", "Travel Safety", "Protection"],
    views: "1.5k"
  },
  {
    id: 4,
    slug: "hajj-2024-complete-package-guide",
     title: "Complete Guide to Hajj 2025: Step-by-Step Process, Costs, and Travel Tips",
    excerpt:
      "Comprehensive information about Hajj packages, requirements, and what to expect during your spiritual journey.",
    image: "/hajj.jpg",
    category: "Hajj Guide",
    author: "Religious Tourism Expert",
    date: "November 28, 2024",
    readTime: "8 min read",
    tags: ["Hajj", "Pilgrimage", "Saudi Arabia"],
    views: "4.1k"
  },

  {
    id: 6,
    slug: "dubai-visa-requirements-pakistani-citizens",
    title: "Dubai Visa Requirements for Pakistani Citizens",
    excerpt: "Complete guide to Dubai visa requirements, application process, and tips for Pakistani passport holders.",
    image: "/blog6.png",
    category: "Visa Guide",
    author: "Dubai Visa Expert",
    date: "November 15, 2025",
    readTime: "5 min read",
    tags: ["Dubai", "UAE", "Visa", "Pakistan"],
    views: "2.9k"
  },
]

const categories = ["All", "Visa Guide", "Business Visa", "Travel Tips", "Hajj Guide", "Travel Safety"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  // Filter posts based on search and category
  useEffect(() => {
    let filtered = blogPosts

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategory])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20">
      <Navbar />

      {/* Combined Hero + Search Section */}
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
        Travel Blog & Insights
      </h1>
      <p
        className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        Stay updated with the latest travel tips, visa guides, and industry insights from our experts.
      </p>
    </div>
  </div>
 <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100/50">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search articles, topics, or keywords..."
                    className="pl-12 rounded-xl border-0 bg-white/50 shadow-sm focus:bg-white transition-all duration-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm" className="md:hidden rounded-xl bg-white/50 border-gray-200">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === selectedCategory ? "default" : "outline"}
                    size="sm"
                    className={`rounded-full transition-all duration-300 hover:scale-105 ${
                      category === selectedCategory 
                        ? "shadow-lg shadow-primary/20" 
                        : "bg-white/50 border-gray-200 hover:bg-white"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
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

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
                <p className="text-muted-foreground mb-8">Try adjusting your search or filter criteria.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                  <Card 
                    className="glass-card hover-lift overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] bg-white/80 backdrop-blur-sm"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      borderRadius: '20px'
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                          {post.category}
                        </span>
                      </div>

                      {/* View Count */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <ArrowRight className="w-5 h-5 text-gray-800" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="text-xs">{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            <span className="text-xs">{post.author}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span className="text-xs">{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title with Gradient Animation */}
                      <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-500">
                        {post.title}
                      </h3>

                      {/* Excerpt with Smooth Animation */}
                      <p className="text-muted-foreground mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium border border-primary/20 transition-all duration-300 group-hover:from-primary/20 group-hover:to-accent/20"
                          >
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Load More Articles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}