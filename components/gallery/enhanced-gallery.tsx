"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ZoomIn,  Share2, Heart, MapPin, Calendar } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/musjid1.png",
    title: "Masjid al-Haram, Mecca",
    category: "Religious Sites",
    location: "Saudi Arabia",
    date: "2025",
    description: "Masjid al-Haram Mecca, Kaaba pilgrimage, Hajj and Umrah travel, holy mosque Saudi Arabia, visit Mecca 2024, Umrah Moments travel agency.",
    likes: 245,
    height: "tall",
  },
  {
    id: 2,
    src: "/Destinations.png",
    title: "Travel Destinations",
    category: "Destinations",
    location: "UAE",
    date: "2025",
    description: "travel destinations in Saudi Arabia, Gulf travel packages, Middle East tourism, modern architecture in Riyadh, traditional Arabian hospitality, Umrah and travel agency, explore Saudi Arabia 2025.",
    likes: 789,
    height: "medium",
  },
   
  {
    id: 3,
    src: "/visa.png",
    title: "Visa Processing",
    category: "Services",
    location: "Gulf countries",
    date: "2025",
    description: "At Umrah Moments, we provide professional visa documentation services for the UAE and all major Gulf countries, including Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait.",
    likes: 156,
    height: "short",
  },
  {
    id: 4,
    src: "/happy.png",
    title: "Happy Client",
    category: "Testimonials",
    location: "Pakistan",
    date: "2025",
    description: "UAE visa processing, happy clients, trusted UAE visa consultant, visa services Pakistan, professional visa documentation, UAE visit visa 2024.",
    likes: 203,
    height: "medium",
  },
  {
    id: 5,
    src: "/mohize.png",
    title: "Travel Consultant",
    category: "Team",
    location: "Pakistan",
    date: "2025",
    description: "With over 5 years of experience in the travel and tourism industry, Mueez Iqbal is a dedicated professional specializing in Umrah, Hajj, and Gulf country travel services.",
    likes: 167,
    height: "tall",
  },
  // {
  //   id: 6,
  //   src: "/professional-man-beard.png",
  //   title: "Visa Expert",
  //   category: "Team",
  //   location: "Pakistan",
  //   date: "2024",
  //   description: "Specialized in business visa processing",
  //   likes: 134,
  //   height: "short",
  // },
  {
    id: 7,
    src: "/hajj1.png",
    title: " Hajj Journey",
    category: "Services",
    location: "Pakistan",
    date: "2025",
    description: "Hajj journey 2025, Hajj travel packages, Hajj visa assistance, Makkah Madinah tours, best Hajj agency Pakistan, Hajj travel experience.",
    likes: 198,
    height: "medium",
  },
  {
    id: 8,
    src: "/hujj.png",
    title: " Umrah Moments",
    category: "Services",
    location: "saudi arabia",
    date: "2025",
    description: "Umrah Moments is your dedicated companion for a seamless and spiritually fulfilling journey to the Holy Cities of Makkah and Madinah.",
    likes: 845,
    height: "short",
  },
]

const categories = ["All", "Religious Sites", "Destinations", "Services", "Team", "Clients",  "Testimonials"]

export function EnhancedGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set())
  const [filteredImages, setFilteredImages] = useState(galleryImages)

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter((img) => img.category === selectedCategory))
    }
  }, [selectedCategory])

  const toggleLike = (imageId: number) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(imageId)) {
        newSet.delete(imageId)
      } else {
        newSet.add(imageId)
      }
      return newSet
    })
  }

  const getImageHeight = (height: string) => {
    switch (height) {
      case "short":
        return "h-64"
      case "medium":
        return "h-80"
      case "tall":
        return "h-96"
      default:
        return "h-80"
    }
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                  : "glass-effect hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-2xl glass-effect border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className={`w-full object-cover ${getImageHeight(image.height)} group-hover:scale-110 transition-transform duration-700`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="mb-3 bg-white/20 text-white border-white/30">{image.category}</Badge>
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <div className="flex items-center space-x-4 text-sm opacity-90">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{image.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{image.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-6xl max-h-[90vh] w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-card/95 backdrop-blur-sm rounded-3xl overflow-hidden">
                {/* Image */}
                <div className="lg:col-span-2">
                  <img
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover max-h-[70vh]"
                  />
                </div>

                {/* Details */}
                <div className="p-8 space-y-6">
                  <div>
                    <Badge className="mb-4">{selectedImage.category}</Badge>
                    <h2 className="text-3xl font-bold mb-4">{selectedImage.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{selectedImage.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{selectedImage.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-primary" />
                      <span>{selectedImage.likes} likes</span>
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleLike(selectedImage.id)}
                      className={`flex-1 ${likedImages.has(selectedImage.id) ? "text-red-500 border-red-500" : ""}`}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${likedImages.has(selectedImage.id) ? "fill-current" : ""}`} />
                      {likedImages.has(selectedImage.id) ? "Liked" : "Like"}
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
