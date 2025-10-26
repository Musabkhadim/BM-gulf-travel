"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Sparkles, BookOpen, ArrowRight, Clock, Calendar } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    slug: "gulf-visa-guide-2025",
    title: "Complete Guide to Gulf Visa from Pakistan",
    excerpt: "Applying for a Gulf visa from Pakistan is now easier than ever with BM Gulf Travel. Whether you're planning to work, visit family, or perform Umrah.",
    image: "/bloge2.png",
    category: "Visa Guide",
    date: "octuber 01, 2025",
    readTime: "6 min read",
    views: "6.4k"
  },
  {
    id: 2,
    slug: "freelance-visa-uae-requirements",
    title: "Freelance Visa Made Easy: Start Working Legally in the Gulf with BM Gulf", 
    excerpt: "Step-by-step guide for freelance visa in UAE with requirements and documentation. Complete process explained in simple steps.",
    image: "/freelancevisa.png",
    category: "Business Visa",
    date: "August 10, 2025",
    readTime: "7 min read",
    views: "9.8k"
  },
  {
    id: 3,
    slug: "best-time-book-international-flights",
    title: "Why Thousands Choose BM Gulf for Their Gulf Visa Applications",
    excerpt: "Learn insider tips to get best flight deals and save money on international travel. Discover the perfect booking windows.",
    image: "/thounsand .png",
    category: "Travel Tips",
    date: "october 5, 2025",
    readTime: "4 min read",
    views: "3.2k"
  },
  {
    id: 4,
    slug: "hajj-2024-complete-package-guide", 
    title: "Complete Guide to Hajj 2025: Step-by-Step Process, Costs, and Travel Tips",
    excerpt: "Complete information about Hajj packages, requirements and spiritual preparation. Everything you need to know for your journey.",
    image: "/hajj.jpg",
    category: "Hajj Guide",
    date: "Nov 08, 2025",
    readTime: "8 min read",
    views: "4.1k"
  }
]

export function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20">
      <div className="container mx-auto px-4">
        {/* Attractive Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Latest Travel Insights</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Travel Insights & Guides
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover expert travel tips, visa guides, and journey planning advice
          </p>
        </div>

        {/* 4 Cards in 1 Row - Enhanced Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="block group"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card 
                className="relative overflow-hidden bg-transparent shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:scale-105 h-[480px] border-0 rounded-none"
              >
                {/* Main Image Container - Full Card Background */}
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Dynamic Gradient Overlay */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    hoveredCard === post.id 
                      ? 'bg-gradient-to-t from-black/85 via-black/50 to-black/30' 
                      : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'
                  }`}></div>
                  
                  {/* Category Badge with Original Colors */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-full text-xs font-bold shadow-2xl border-0 hover:bg-white transition-colors">
                      {post.category}
                    </Badge>
                  </div>

                  {/* View Count */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs shadow-2xl">
                      <Eye className="w-3 h-3" />
                      <span className="font-semibold">{post.views}</span>
                    </div>
                  </div>

                  {/* Content Area - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500">
                    {/* Bold Title */}
                    <h3 className="text-xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">
                      {post.title}
                    </h3>

                    {/* Date and Read Time - Side by Side */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <Calendar className="w-4 h-4 text-primary/80" />
                        <span className="font-medium">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <Clock className="w-4 h-4 text-accent/80" />
                        <span className="font-medium">{post.readTime}</span>
                      </div>
                    </div>

                    {/* Excerpt - 2 Lines with Smooth Animation */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      hoveredCard === post.id 
                        ? 'max-h-16 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Read Button - Appears on Hover */}
                    <div className={`transition-all duration-500 transform ${
                      hoveredCard === post.id 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0 transition-all duration-300 rounded-xl h-12 text-sm font-bold group/btn hover:scale-105 shadow-2xl mt-4"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read Full Guide
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>

                  {/* Subtle Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1200"></div>
                </div>

                {/* Floating Animation Elements */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button 
              size="lg" 
              className="rounded-2xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/30 px-8 py-6 text-base font-bold group border-0"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Travel Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}