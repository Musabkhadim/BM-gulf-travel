import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { FileText, Clock, DollarSign, CheckCircle, Users, Calendar, Phone, Mail } from "lucide-react"
import Link from "next/link"
import ClientTestimonials from "@/app/ClientTestimonials"

const requirements = [
  "Valid passport with 6+ months validity",
  "Completed visa application form",
  "Recent passport-sized photographs",
  "Educational certificates and transcripts",
  "Professional portfolio or work samples",
  "Bank statements (last 6 months)",
  "Health insurance coverage",
  "No objection certificate (if employed)",
]

const benefits = [
  "Work independently in UAE",
  "Multiple entry visa validity",
  "Sponsor family members",
  "Access to UAE banking services",
  "Renewable visa status",
  "Professional networking opportunities",
]

const processSteps = [
  {
    step: 1,
    title: "Document Preparation",
    description: "Gather all required documents and ensure they meet UAE standards",
    duration: "2-3 days",
  },
  {
    step: 2,
    title: "Application Submission",
    description: "Submit application through authorized channels with complete documentation",
    duration: "1 day",
  },
  {
    step: 3,
    title: "Processing & Review",
    description: "UAE authorities review application and conduct background checks",
    duration: "7-14 days",
  },
  {
    step: 4,
    title: "Visa Approval",
    description: "Receive visa approval and complete final formalities",
    duration: "2-3 days",
  },
]

export default function FreelanceVisaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <FileText className="w-4 h-4 mr-2" />
              Business Visa Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in-up">Freelance Visa</h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Start your independent career in the UAE with our comprehensive freelance visa services. Professional
              guidance from application to approval.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link href="/get-quote">
                <GradientButton size="lg" className="rounded-full">
                  Get Quote Now
                </GradientButton>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                Call Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Processing Time</h3>
                <p className="text-3xl font-bold gradient-text mb-2">07-12 Days</p>
                <p className="text-muted-foreground">Average processing duration</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Starting From</h3>
                <p className="text-3xl font-bold gradient-text mb-2">ffordable & Honest pricing</p>
                <p className="text-muted-foreground">air pricing with all fees covered</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visa Validity</h3>
                <p className="text-3xl font-bold gradient-text mb-2">2-3 Years</p>
                <p className="text-muted-foreground">Renewable visa period</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visa <span className="gradient-text">Requirements</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Essential documents needed for your Gulf countries freelance visa application
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 text-accent mr-2" />
                    Key Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Application <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground">Simple 4-step process to get your Gulf countries freelance visa</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={step.step} className="glass-card hover-lift text-center relative">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.duration}
                    </Badge>
                  </CardContent>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Freelance Journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get expert assistance with your UAE freelance visa application. Our team ensures a smooth and successful
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-quote">
                <GradientButton size="lg" className="rounded-full">
                  Apply Now
                </GradientButton>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
  <ClientTestimonials/>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
