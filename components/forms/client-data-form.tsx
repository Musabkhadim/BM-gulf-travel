"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GradientButton } from "@/components/ui/gradient-button"
import { useToast } from "@/hooks/use-toast"
import { Plane, CheckCircle, User, Mail, Phone, MessageSquare } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const services = [
  { value: "freelance-visa", label: "Freelance Visa" },
  { value: "umrah-visa", label: "Umrah Visa" },
  { value: "hajj-visa", label: "Hajj Visa" },
  { value: "air-tickets", label: "Air Ticket Booking" },
  { value: "consultation", label: "General Consultation" },
]

export function ClientDataForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Application Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    })

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-2 border-accent/20 bg-gradient-to-b from-accent/5 to-transparent">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Thank You!</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Your application has been submitted successfully. Our travel experts will contact you within 24 hours to
                discuss your requirements.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Plane className="w-4 h-4 animate-plane-fly" />
                <span>Preparing your journey...</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Get Your <span className="gradient-text">Free Consultation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and our travel experts will contact you with personalized recommendations and
              competitive pricing.
            </p>
          </div>

          <Card className="border-2 border-border/50 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <User className="w-6 h-6 text-primary" />
                <span>Client Information Form</span>
              </CardTitle>
              <CardDescription className="text-base">
                Please provide your details so we can assist you better with your travel needs.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-primary" />
                      <span>Full Name *</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>Email Address *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>Phone Number *</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  {/* Service Field */}
                  <div className="space-y-2">
                    <Label htmlFor="service" className="flex items-center space-x-2">
                      <Plane className="w-4 h-4 text-primary" />
                      <span>Service Required *</span>
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span>Additional Message</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your travel plans, preferred dates, or any specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <GradientButton
                    type="submit"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.service}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Processing Application...
                      </>
                    ) : (
                      <>
                        <Plane className="w-5 h-5 mr-2 group-hover:animate-plane-fly" />
                        Submit Application
                      </>
                    )}
                  </GradientButton>
                </div>

                {/* Privacy Notice */}
                <div className="text-center text-sm text-muted-foreground pt-4">
                  <p>
                    By submitting this form, you agree to our privacy policy. We will only use your information to
                    contact you about your travel requirements.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
