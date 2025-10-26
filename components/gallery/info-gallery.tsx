"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GradientButton } from "@/components/ui/gradient-button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users, Eye, Heart, Share2 } from "lucide-react"

const galleryItems = [
  // {
  //   id: 1,
  //   title: "Umrah Pilgrimage 2024",
  //   category: "Umrah",
  //   image: "/beautiful-mosque-with-golden-dome-at-sunset--makka.jpg",
  //   description: "Beautiful moments from our recent Umrah group pilgrimage to Makkah",
  //   date: "March 2024",
  //   location: "Makkah, Saudi Arabia",
  //   views: 2500,
  //   likes: 180,
  // },
  // {
  //   id: 2,
  //   title: "Dubai Business Visa Success",
  //   category: "Visa",
  //   image: "/modern-airplane-flying-over-dubai-skyline-at-golde.jpg",
  //   description: "Another successful freelance visa approval for our client",
  //   date: "February 2024",
  //   location: "Dubai, UAE",
  //   views: 1800,
  //   likes: 95,
  // },
  {
    id: 3,
    title: "Hajj Preparation Workshop",
    category: "Hajj",
    image: "/hajj-pilgrimage-mecca-visa-services.jpg",
    description: "Pre-departure briefing session for Hajj pilgrims",
    date: "January 2024",
    location: "Lahore, Pakistan",
    views: 3200,
    likes: 240,
  },
  {
    id: 4,
    title: "Client Success Stories",
    category: "Success",
    image: "/professional-business-visa-documents-with-uae-flag.jpg",
    description: "Happy clients with their approved visa documents",
    date: "December 2023",
    location: "BM Gulf Office",
    views: 1500,
    likes: 120,
  },
  {
    id: 5,
    title: "Air Ticket Booking Made Easy",
    category: "Travel",
    image: "/airplane-tickets-booking-travel-agency.jpg",
    description: "Seamless flight booking experience for international travel",
    date: "November 2023",
    location: "Multiple Destinations",
    views: 2100,
    likes: 160,
  },
  {
    id: 6,
    title: "Team Training Session",
    category: "Training",
    image: "/freelance-visa-documents-professional-setup.jpg",
    description: "Our team staying updated with latest visa regulations",
    date: "October 2023",
    location: "BM Gulf Office",
    views: 900,
    likes: 75,
  },
]

const categories = ["All", "Umrah", "Hajj", "Visa", "Travel", "Success", "Training"]

export function InfoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index)
    setSelectedImage(filteredItems[index].id)
  }

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentImageIndex + 1) % filteredItems.length

    setCurrentImageIndex(newIndex)
    setSelectedImage(filteredItems[newIndex].id)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Journey <span className="gradient-text">Memories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of successful visa approvals, pilgrimage moments, and happy client experiences that
            showcase our commitment to excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                  : "bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Dialog>
                    <DialogTrigger asChild>
                      <GradientButton size="sm" onClick={() => openImageModal(index)} className="backdrop-blur-sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </GradientButton>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                      <div className="relative bg-card rounded-lg overflow-hidden">
                        {/* Navigation Buttons */}
                        <button
                          onClick={() => navigateImage("prev")}
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => navigateImage("next")}
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Image */}
                        <div className="relative">
                          <img
                            src={filteredItems[currentImageIndex].image || "/placeholder.svg"}
                            alt={filteredItems[currentImageIndex].title}
                            className="w-full h-96 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                              {filteredItems[currentImageIndex].category}
                            </Badge>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{filteredItems[currentImageIndex].views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4" />
                                <span>{filteredItems[currentImageIndex].likes}</span>
                              </div>
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold mb-2">{filteredItems[currentImageIndex].title}</h3>
                          <p className="text-muted-foreground mb-4">{filteredItems[currentImageIndex].description}</p>

                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{filteredItems[currentImageIndex].date}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{filteredItems[currentImageIndex].location}</span>
                              </div>
                            </div>
                            <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                              <Share2 className="w-4 h-4" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white">{item.category}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <GradientButton size="lg">
            <Users className="w-5 h-5 mr-2" />
            View More Gallery
          </GradientButton>
        </div>
      </div>
    </section>
  )
}
