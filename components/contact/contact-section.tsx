"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GradientButton } from "@/components/ui/gradient-button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { collection, addDoc, serverTimestamp, doc, setDoc } from "firebase/firestore"
import { db } from "../../app/firebase/firebase"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  WheatIcon as WhatsApp,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Office # 3/14, Silk Center Rahmanabad Murree Rd B-block Satellite Town Rawalpindi"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+92 333 14444 55", "+92 309 28170 00", "++92 3470458847"],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["Bmgulf78@gmail.com", "visas@bmgulftravel.com", "musabkhadim363@gmail.com"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Friday: 9:00 AM - 8:00 PM", "Saturday: 10:00 AM - 8:00 PM", "Sunday: Closed"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
  { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-600" },
  { icon: WhatsApp, href: "#", label: "WhatsApp", color: "hover:text-green-600" },
]

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Function to generate unique ID from client name
  const generateUniqueId = (name: string) => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    const nameSlug = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .substring(0, 20);
    
    return `contact-${nameSlug}-${timestamp}-${randomStr}`;
  }

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Generate unique ID from client name
      const uniqueId = generateUniqueId(formData.name);
      
      // Create document reference with custom ID
      const docRef = doc(db, "contactForm", uniqueId);
      
      // Save to Firebase Firestore with custom ID
      await setDoc(docRef, {
        // Form data
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        
        // Metadata
        uniqueId: uniqueId,
        status: "new",
        type: "contact_form",
        timestamp: serverTimestamp(),
        read: false,
        responded: false
      })

      console.log("Contact form submitted with ID: ", uniqueId)

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      
    } catch (error) {
      console.error("Error submitting contact form: ", error)
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Badge variant="outline" className="mb-3 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 glass-effect border-primary/30 text-xs sm:text-sm">
            <MessageSquare className="w-3 h-3 mr-1 sm:mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Ready to start your journey? Our travel experts are here to help you with personalized service and
            professional guidance for all your travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information - Compact & White Cards */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                Contact Information
              </h3>
              
              {/* Compact Contact Cards Grid */}
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border border-gray-200 bg-white hover:border-primary/40 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                  >
                    <CardContent className="p-2 sm:p-3">
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${info.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <info.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${info.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-xs sm:text-sm mb-1 text-gray-800">{info.title}</h4>
                          <div className="space-y-0.5">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-xs text-gray-600 leading-tight">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media - Compact */}
            <div className="pt-1 sm:pt-2">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-center">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 bg-white shadow-lg sm:shadow-xl">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MessageSquare className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  Fill out the form below and we'll respond to your inquiry as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent className="px-3 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {/* Name Field */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="contact-name" className="flex items-center text-xs sm:text-sm font-medium">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-1.5 sm:mr-2"></span>
                        Full Name *
                      </Label>
                      <Input
                        id="contact-name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="h-10 sm:h-12 transition-all duration-200 border-gray-300 focus:border-primary/50 text-sm sm:text-base"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="contact-email" className="flex items-center text-xs sm:text-sm font-medium">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-1.5 sm:mr-2"></span>
                        Email Address *
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="h-10 sm:h-12 transition-all duration-200 border-gray-300 focus:border-primary/50 text-sm sm:text-base"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="contact-phone" className="flex items-center text-xs sm:text-sm font-medium">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-1.5 sm:mr-2"></span>
                        Phone Number
                      </Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-10 sm:h-12 transition-all duration-200 border-gray-300 focus:border-accent/50 text-sm sm:text-base"
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="contact-subject" className="flex items-center text-xs sm:text-sm font-medium">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-1.5 sm:mr-2"></span>
                        Subject *
                      </Label>
                      <Input
                        id="contact-subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                        className="h-10 sm:h-12 transition-all duration-200 border-gray-300 focus:border-primary/50 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="contact-message" className="flex items-center text-xs sm:text-sm font-medium">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-1.5 sm:mr-2"></span>
                      Message *
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Please describe your inquiry in detail..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={4}
                      className="resize-none transition-all duration-200 border-gray-300 focus:border-accent/50 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <GradientButton
                      type="submit"
                      size="lg"
                      className="w-full group py-2.5 sm:py-3 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      disabled={
                        isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message
                      }
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Saving to Database...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </GradientButton>
                  </div>

                  {/* Privacy Notice */}
                  <div className="text-center text-xs sm:text-sm text-muted-foreground pt-3 sm:pt-4 border-t border-gray-200">
                    <p className="flex items-center justify-center">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-1.5 sm:mr-2"></span>
                      We respect your privacy and will never share your information with third parties.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Screen Map Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 w-full">
          <Card className="border border-gray-200 overflow-hidden group hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 w-full bg-white">
            <CardContent className="p-0 w-full">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.234567890123!2d74.3456789!3d31.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM0JzA0LjQiTiA3NMKwMjAnNDQuNyJF!5e0!3m2!1sen!2s!4v1234567890"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BM GULF Travel & Tour Location"
                  allowFullScreen
                >
                </iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #B49057, #71AFBA);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  )
}