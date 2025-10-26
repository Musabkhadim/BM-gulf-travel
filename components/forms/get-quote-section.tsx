"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GradientButton } from "@/components/ui/gradient-button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Phone, Mail, User, MessageSquare, Send, CheckCircle, Globe, Clock, ShieldCheck, Sparkles, Star } from "lucide-react"
import { collection, addDoc, serverTimestamp, doc, setDoc } from "firebase/firestore"
import { db } from "../../app/firebase/firebase"

export function GetQuoteSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // Function to generate unique ID from user name
  const generateUniqueId = (firstName: string, lastName: string) => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    const nameSlug = `${firstName}-${lastName}`
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .substring(0, 20);
    
    return `${nameSlug}-${timestamp}-${randomStr}`;
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.service) newErrors.service = "Please select a service type"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Generate unique ID from user name
      const uniqueId = generateUniqueId(formData.firstName, formData.lastName);
      
      // Create document reference with custom ID
      const docRef = doc(db, "gm gulf", uniqueId);
      
      // Save to Firebase Firestore with custom ID
      await setDoc(docRef, {
        // Form data
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        message: formData.message.trim(),
        
        // Metadata
        uniqueId: uniqueId,
        status: "new",
        company: "BM GULF Travel & Tour",
        timestamp: serverTimestamp(),
        read: false,
        responded: false
      })

      console.log("Document written with ID: ", uniqueId)
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        service: "",
        message: "",
      })
      
      setIsSubmitted(true)
      
    } catch (error) {
      console.error("Error adding document: ", error)
      setSubmitError("Failed to submit your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
    if (submitError) {
      setSubmitError("")
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/10 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <Badge className="mb-4 bg-green-500/20 text-green-600 border-green-500/30 px-4 py-2">
              <Sparkles className="w-3 h-3 mr-1" />
              Successfully Submitted
            </Badge>
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Request Received Successfully!
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong>Thank you for choosing BM GULF Travel & Tour!</strong> Our travel experts will review your request 
              and contact you within <strong className="text-primary">24 hours</strong> with a personalized quote.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 mb-8 backdrop-blur-sm">
              <h4 className="font-bold text-primary mb-4 flex items-center justify-center">
                <Clock className="w-5 h-5 mr-2" />
                What happens next?
              </h4>
              <div className="grid gap-3 text-left text-sm">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary text-xs font-bold">1</span>
                  </div>
                  <span>Our expert will contact you within 24 hours</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary text-xs font-bold">2</span>
                  </div>
                  <span>We'll provide a detailed quote with all inclusions</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary text-xs font-bold">3</span>
                  </div>
                  <span>Personalized travel consultation at no cost</span>
                </div>
              </div>
            </div>
            <GradientButton 
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Another Request
            </GradientButton>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/10 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl" />

      {/* Floating Stars */}
      <div className="absolute top-20 left-20 animate-bounce">
        <Star className="w-6 h-6 text-primary/30" />
      </div>
      <div className="absolute bottom-32 right-32 animate-bounce delay-300">
        <Star className="w-4 h-4 text-accent/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6 px-5 py-2 glass-effect border-primary/30 bg-primary/5 animate-fade-in">
            <Send className="w-4 h-4 mr-2" />
            <span className="font-semibold">GET PERSONALIZED QUOTE</span>
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your <span className="gradient-text">Dream Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Complete the form below and receive your <strong className="text-primary">customized travel quote</strong> within 24 hours
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-white/20 shadow-2xl backdrop-blur-sm overflow-hidden relative">
            {/* Progress Steps - Simplified */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-4 border-b border-white/10">
              <div className="flex items-center justify-center space-x-6">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold border-2 border-white shadow-lg">
                      {step}
                    </div>
                    {step < 3 && <div className="w-8 h-0.5 bg-primary/30 mx-2 hidden md:block" />}
                  </div>
                ))}
              </div>
            </div>

            <CardHeader className="text-center pb-4 pt-6">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Request Your Free Quote
              </CardTitle>
              <CardDescription className="text-base">
                Fill in your details and we'll create the perfect travel plan for you
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pb-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium flex items-center space-x-2">
                        <User className="w-4 h-4 text-primary" />
                        <span>First Name *</span>
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className={`transition-all duration-200 ${errors.firstName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs font-medium flex items-center">
                        ⚠️ {errors.firstName}
                      </p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium flex items-center space-x-2">
                        <User className="w-4 h-4 text-primary" />
                        <span>Last Name *</span>
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className={`transition-all duration-200 ${errors.lastName ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs font-medium flex items-center">
                        ⚠️ {errors.lastName}
                      </p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`transition-all duration-200 ${errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                        placeholder="+92 300 123 4567"
                      />
                      {errors.phone && <p className="text-red-500 text-xs font-medium flex items-center">
                        ⚠️ {errors.phone}
                      </p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Service Type *</span>
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger
                          className={`transition-all duration-200 ${errors.service ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"}`}
                        >
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="freelance-visa">🌍 Freelance Visa</SelectItem>
                          <SelectItem value="visit-visa">🛂 Visit Visa</SelectItem>
                       
                          <SelectItem value="air-tickets">✈️ Air Tickets</SelectItem>
                             <SelectItem value="hajj-visa">🕋 Hajj Visa</SelectItem>
                          <SelectItem value="tour-package">🏝️ Tour Package</SelectItem>
                          <SelectItem value="custom">🎯 Custom Plan</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-red-500 text-xs font-medium flex items-center">
                        ⚠️ {errors.service}
                      </p>}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Additional Requirements</h3>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span>Special Requests</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="transition-all duration-200 border-gray-300 focus:border-primary min-h-[100px] resize-vertical"
                      placeholder="Tell us about any specific requirements, preferences, or special needs..."
                    />
                  </div>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm font-medium flex items-center">
                      ⚠️ {submitError}
                    </p>
                  </div>
                )}

                {/* Benefits Section */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="flex items-center space-x-2 justify-center">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                      <span className="font-medium">100% Secure & Verified</span>
                    </div>
                    <div className="flex items-center space-x-2 justify-center">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">24-Hour Response</span>
                    </div>
                    <div className="flex items-center space-x-2 justify-center">
                      <Star className="w-4 h-4 text-yellow-600" />
                      <span className="font-medium">Best Price Guarantee</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-2">
                  <GradientButton
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Saving to Database...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        GET MY FREE QUOTE
                      </>
                    )}
                  </GradientButton>
                  <p className="text-xs text-muted-foreground mt-3">
                    🔒 <strong>Your information is secure</strong> - We never share your details
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
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