"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/footer/footer"
import { WhatsAppFloat } from "@/components/ui/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

// Mock blog post data - in a real app, this would come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts: Record<string, any> = {
 "gulf-visa-guide-2025": {
  id: 1,
  title: "Complete Guide to Getting a Gulf Visa from Pakistan",
  excerpt:
    "Discover how to easily apply for a Gulf visa from Pakistan with BM Gulf Travel. Whether you’re planning to work, visit family, or perform Umrah, our expert team handles every visa type — quickly, safely, and at the best rates.",
  content: `
    <h2>Introduction: Simplifying Your Gulf Visa Journey</h2>
    <p>Getting a <strong>Gulf visa from Pakistan</strong> has never been easier. With <strong>BM Gulf Travel</strong>, you can apply for visit, freelance, or Umrah visas through a fast, secure, and transparent process — all at affordable prices with full support from our professional team.</p>

    <h2>Types of Gulf Visas We Offer</h2>
    <ul>
      <li><strong>Visit Visa:</strong> Perfect for tourism, family visits, or short business trips across the Gulf region.</li>
      <li><strong>Freelance Visa:</strong> Ideal for professionals who want to work independently in the UAE or other Gulf countries.</li>
      <li><strong>Umrah Visa:</strong> Designed for spiritual travelers performing Umrah in Saudi Arabia with full visa assistance.</li>
    </ul>

    <h2>Required Documents</h2>
    <ul>
      <li>Valid passport (minimum 6 months validity)</li>
      <li>CNIC copy</li>
      <li>Recent passport-size photo (white background)</li>
      <li>Completed visa application form</li>
    </ul>

    <h2>Visa Fees & Processing Time</h2>
    <p>Our <strong>Gulf visa packages</strong> start from <strong>afford able price </strong>, inclusive of all government fees. Processing typically takes <strong>3–7 working days</strong>, depending on the visa type and destination country.</p>

    <h2>Why Choose BM Gulf Travel</h2>
    <ul>
      <li>Fast and reliable visa processing with real-time updates</li>
      <li>Transparent pricing — absolutely no hidden costs</li>
      <li>Professional support for all visa categories (Visit, Freelance, and Umrah)</li>
      <li>Trusted by hundreds of satisfied clients across Pakistan and the Gulf</li>
    </ul>

    <h2>How to Apply for a Gulf Visa</h2>
    <ol>
      <li><strong>Contact BM Gulf Travel</strong> via WhatsApp or phone.</li>
      <li><strong>Submit your required documents</strong> (passport, CNIC, and photo).</li>
      <li><strong>Make payment securely</strong> through our verified channels.</li>
      <li><strong>Receive your approved visa</strong> via email or WhatsApp within a few days.</li>
    </ol>

    <h2>Conclusion: Your Trusted Partner for Gulf Visas</h2>
    <p>With <strong>BM Gulf Travel</strong>, obtaining a <strong>Gulf visa from Pakistan</strong> is simple, transparent, and stress-free. Our dedicated team manages everything — from document submission to final approval — ensuring you travel with confidence. <strong>Contact BM Gulf today</strong> to begin your Gulf visa process!</p>
  `,
  image: "/bloge1.png",
  category: "Visa Guide",
  author: "BM GULF Team",
  date: "October 20, 2025",
  readTime: "5 min read",
  tags: ["Gulf Visa", "Visit Visa", "Freelance Visa", "Pakistan", "BM Gulf Travel"],
},

    "freelance-visa-uae-requirements": {
      id: 2,
     
  title: "Freelance Visa Made Easy: Start Working Legally in the Gulf with BM Gulf",
  excerpt:
    "Dreaming of working independently in the Gulf? Discover how BM Gulf helps professionals get a UAE freelance visa easily — from choosing the right free zone to handling every step of the process.",
  content: `
    <h2>Overview: Work Legally and Freely in the Gulf</h2>
    <p>Becoming a freelancer in the Gulf — especially in the UAE — has never been easier. Through <strong>BM Gulf Travel</strong>, professionals can apply for a <strong>freelance visa</strong> that lets them work independently, live legally, and collaborate with clients across the region.</p>
    <p>Freelance visas are typically issued through <strong>designated free zones</strong> or special remote work programs, allowing you to operate your own business without needing a traditional employer.</p>

    <h2>Who Can Apply for a Gulf Freelance Visa?</h2>
    <p>The Gulf freelance visa is open to skilled individuals across multiple industries. Commonly accepted fields include:</p>
    <ul>
      <li>Technology and Software Development</li>
      <li>Media, Design, and Content Creation</li>
      <li>Marketing and Consulting Services</li>
      <li>Education and Online Training</li>
      <li>IT and Digital Solutions</li>
    </ul>
    <p>Each <strong>free zone</strong> has its own list of eligible professions, fees, and application procedures. BM Gulf helps you identify which one fits your background best.</p>

    <h2>Main Routes to Getting a Freelance Visa</h2>
    <ul>
      <li><strong>Free Zone Freelance License:</strong> Apply through UAE free zones like Dubai Media City or Dubai Internet City. This license allows you to legally work for multiple clients.</li>
      <li><strong>Employment Visa Conversion:</strong> If you’re already on a company visa, you can later convert it into a freelance or self-employment setup, depending on eligibility.</li>
      <li><strong>Remote Work Visa:</strong> For those working with international clients while living in the UAE — ideal for digital nomads.</li>
    </ul>

    <h2>Required Documents</h2>
    <p>Before applying, make sure you have:</p>
    <ul>
      <li>Passport copy (minimum 6 months validity)</li>
      <li>Passport-size photos (white background)</li>
      <li>Educational or professional certificates (attested if required)</li>
      <li>Portfolio or work samples for creative and tech applicants</li>
      <li>Completed application form with your chosen business activity</li>
    </ul>

    <h2>Step-by-Step Application Process</h2>
    <ol>
      <li><strong>Choose a Free Zone:</strong> Compare costs, benefits, and professions allowed in each Gulf free zone.</li>
      <li><strong>Prepare Your Documents:</strong> Gather your passport, attested certificates, and professional portfolio.</li>
      <li><strong>Submit the Application:</strong> Most free zones now accept online submissions for freelance licenses.</li>
      <li><strong>Pay the Required Fees:</strong> Fees vary depending on the free zone and type of license.</li>
      <li><strong>Apply for Residence Visa:</strong> After obtaining your freelance license, apply for your residence visa under that free zone.</li>
    </ol>

    <h2>Tips for a Smooth Freelance Visa Approval</h2>
    <ul>
      <li>Compare free zones to find the most cost-effective and flexible option.</li>
      <li>Keep your portfolio and client references up-to-date to strengthen your application.</li>
      <li>Work with a trusted agency like BM Gulf for documentation and attestation assistance.</li>
    </ul>

    <h2>Why Choose BM Gulf Travel?</h2>
    <ul>
      <li>End-to-end support — from document preparation to visa approval</li>
      <li>Guidance on selecting the right free zone for your profession</li>
      <li>Transparent pricing and quick processing</li>
      <li>Trusted by hundreds of freelancers and entrepreneurs across Pakistan and the UAE</li>
    </ul>

    <h2>Conclusion: Start Your Freelance Journey with Confidence</h2>
    <p>A <strong>UAE freelance visa</strong> is your gateway to independence, flexibility, and opportunity in the Gulf. Whether you're a designer, developer, consultant, or educator, BM Gulf Travel helps you take the legal and professional route to success.</p>
    <p><strong>Contact BM Gulf today</strong> to start your freelance visa application and begin your journey toward working freely in the Gulf.</p>
  `,
  image: "/freelancevisa.png",
  category: "Business Visa",
  author: "Visa Expert",
  date: "August 10, 2025",
  readTime: "7 min read",
  tags: ["Freelance Visa", "UAE Visa", "Business Visa", "BM Gulf Travel", "Work in Gulf"],
}

  
,
    "best-time-book-international-flights": {
      id: 3,
            title: "Why Thousands Choose BM Gulf for Their Gulf Visa Applications",
  excerpt:
    "Find out why travelers and professionals across Pakistan trust BM Gulf for their Gulf visa needs. From transparent pricing to expert guidance, learn what sets us apart.",
  content: `
    <h2>Introduction</h2>
    <p>Applying for a Gulf visa can often feel confusing — from understanding requirements to handling paperwork and payments. That’s where <strong>BM Gulf Travel</strong> comes in. We’ve helped thousands of clients across Pakistan successfully secure their <strong>Gulf visas</strong> with ease, transparency, and reliability.</p>
    <p>In this guide, you’ll discover why so many travelers, freelancers, and families choose BM Gulf as their trusted visa partner for the UAE, Saudi Arabia, Qatar, Oman, and other Gulf destinations.</p>

    <h2>1. Fast and Reliable Visa Processing</h2>
    <p>Time matters when planning your travel or work journey. BM Gulf ensures <strong>quick visa approvals</strong> — most applications are processed within just a few working days, depending on the visa type. Our team stays in constant contact with embassy officials and clients to provide real-time updates.</p>

    <h2>2. Transparent Pricing — No Hidden Costs</h2>
    <p>Many agencies surprise clients with unexpected fees after submission. At BM Gulf, we believe in <strong>100% transparency</strong>. Every client receives a clear breakdown of costs before payment, so you always know exactly what you’re paying for.</p>

    <h2>3. Expert Team with Proven Experience</h2>
    <p>Our visa specialists handle all categories — <strong>Visit Visa, Freelance Visa, Umrah Visa, and Business Visa</strong>. With years of experience, our team understands every requirement, documentation detail, and embassy process to minimize errors and delays.</p>

    <h2>4. One-Stop Visa & Travel Solutions</h2>
    <p>From visa application to flight booking and travel insurance, BM Gulf offers <strong>complete travel assistance under one roof</strong>. Whether you’re planning a short visit or moving abroad for work, we guide you through every step for a seamless experience.</p>

    <h2>5. Trusted by Thousands of Happy Clients</h2>
    <p>Our growing client base speaks for itself. Thousands of Pakistanis have trusted BM Gulf for Gulf visa services — and continue to recommend us for our honesty, efficiency, and customer support. Our success is built on client satisfaction and long-term relationships.</p>

    <h2>6. Dedicated Customer Support</h2>
    <p>We understand that every traveler’s situation is unique. That’s why BM Gulf provides <strong>personalized support</strong> via WhatsApp, phone, and email — ensuring your questions are answered quickly and clearly at every step.</p>

    <h2>7. Safe, Secure, and Hassle-Free Process</h2>
    <p>Security and trust are at the heart of our operations. Your documents and data are handled with utmost confidentiality. We use verified payment methods and ensure that every application follows legal and government-approved channels.</p>

    <h2>Conclusion</h2>
    <p>Getting a <strong>Gulf visa from Pakistan</strong> doesn’t need to be stressful. With <strong>BM Gulf Travel</strong>, you benefit from professional guidance, transparent pricing, and a trusted process from start to finish. Whether you’re applying for a <strong>visit, freelance, or Umrah visa</strong>, our team makes the journey simple and worry-free.</p>
    <p><strong>Contact BM Gulf today</strong> to start your visa process and experience why thousands choose us for their Gulf travel needs.</p>
  `,
      image: "/thounsand .png",

  category: "Visa Guide",
  author: "BM Gulf Team",
  date: "December 5, 2024",
  readTime: "4 min read",
  tags: ["Gulf Visa", "Visa Application", "BM Gulf Travel", "Visit Visa", "Freelance Visa"],
},
    "hajj-2024-complete-package-guide": {
      id: 4,
   title: "Complete Guide to Hajj 2025: Step-by-Step Process, Costs, and Travel Tips",
excerpt:
  "Everything you need to know about performing Hajj in 2025 — from registration, visa requirements, and costs to preparation and essential travel tips for pilgrims from Pakistan.",
content: `
  <h2>Introduction</h2>
  <p>Hajj is one of the five pillars of Islam and a once-in-a-lifetime journey for every Muslim who can afford it. Each year, millions of pilgrims travel to Makkah to perform Hajj. If you are planning to go for Hajj in 2025, this guide by <strong>BM Gulf Travel</strong> will walk you through the complete process — from registration and visa requirements to preparation, costs, and important travel advice.</p>

  <h2>Types of Hajj Packages</h2>
  <p>In 2025, Pakistani pilgrims can choose between government-organized and private Hajj packages. The main difference lies in pricing, accommodation quality, and additional services.</p>
  <ul>
    <li><strong>Government Hajj Packages:</strong> Organized by Pakistan’s Ministry of Religious Affairs with fixed pricing, standardized hotels, and meals.</li>
    <li><strong>Private Hajj Packages:</strong> Offered by licensed travel agencies like BM Gulf, providing flexible options — from budget to luxury — including shorter stays and premium hotels near Haram.</li>
  </ul>

  <h2>Eligibility & Required Documents</h2>
  <p>To apply for a Hajj visa, you’ll need the following documents:</p>
  <ul>
    <li>Valid passport (at least 8 months validity)</li>
    <li>CNIC copy and recent passport-size photos</li>
    <li>Vaccination certificate (as per Saudi health requirements)</li>
    <li>Proof of Mahram (for female pilgrims under 45)</li>
    <li>Completed Hajj application form (through authorized agency or online portal)</li>
  </ul>

  <h2>Step-by-Step Hajj Application Process</h2>
  <ol>
    <li><strong>Choose your Hajj package:</strong> Compare government and private options based on budget, duration, and accommodation.</li>
    <li><strong>Submit documents:</strong> Provide passport, photos, vaccination records, and CNIC to your chosen travel agency or ministry office.</li>
    <li><strong>Visa processing:</strong> Your agency (like BM Gulf) submits the documents to the Saudi Embassy for visa approval.</li>
    <li><strong>Receive flight details and itinerary:</strong> Once your visa is approved, you’ll receive flight dates and complete travel arrangements.</li>
    <li><strong>Attend pre-Hajj orientation:</strong> Learn the rituals, travel guidelines, and health precautions before departure.</li>
  </ol>

  <h2>Estimated Cost of Hajj 2025</h2>
  <p>Hajj costs vary depending on the package and services included. Here’s an approximate breakdown for Pakistani pilgrims:</p>
  <ul>
    
  </ul>
  <p>Prices typically include airfare, accommodation, meals, transportation within Saudi Arabia, and basic guidance.</p>

  <h2>Essential Travel & Preparation Tips</h2>
  <ul>
    <li>Pack light — carry essentials like Ihram, comfortable footwear, and a small backpack.</li>
    <li>Stay hydrated and rest well during rituals.</li>
    <li>Download Hajj guide apps for navigation and prayers.</li>
    <li>Keep digital and physical copies of all important documents.</li>
    <li>Follow group instructions and stay connected with your agency guide.</li>
  </ul>

  <h2>Why Choose BM Gulf Travel</h2>
  <p><strong>BM Gulf Travel</strong> has years of experience helping thousands of pilgrims perform Hajj and Umrah with peace of mind. From document processing to flight booking and hotel arrangements, our team ensures a smooth and spiritually fulfilling journey.</p>

  <h2>Conclusion</h2>
  <p>Performing Hajj is one of the most sacred experiences in a Muslim’s life. With the right preparation, guidance, and trusted travel partner like BM Gulf, you can focus on your worship while we handle the logistics. Start planning early for Hajj 2025 and make your journey to the House of Allah truly memorable.</p>
`,
      image: "/hajj.jpg",
      category: "Hajj Guide",
      author: "Religious Tourism Expert",
     date: "Nov 08, 2025",
      readTime: "8 min read",
      tags: ["Hajj", "Pilgrimage", "Saudi Arabia"],
    },
    "travel-insurance-essential-guide": {
      id: 5,
      title: "The Story Behind BM Gulf: Turning Travel Dreams into Reality",
  excerpt:
    "Discover how BM Gulf Travel grew from a small visa consultancy into one of Pakistan’s most trusted Gulf travel and visa service providers — helping thousands turn travel dreams into reality.",
  content: `
    <h1>The Story Behind BM Gulf: Turning Travel Dreams into Reality</h1>

    <h2>Introduction</h2>
    <p>Every great journey begins with a single step, and BM Gulf Travel started with one clear goal — to make travel simple, transparent, and stress-free for everyone in Pakistan. From visa processing to Umrah and freelance travel support, BM Gulf has become a name trusted by thousands of travelers across the country.</p>

    <h2>Our Beginning</h2>
    <p>BM Gulf was founded with a mission to bring honesty and professionalism to the travel industry. Many travelers faced unclear visa procedures, hidden fees, and unreliable agents. Our founders wanted to change that by creating a service built on trust, clarity, and real customer care.</p>

    <h2>Our Mission</h2>
    <p>At BM Gulf, our mission is simple — to help people achieve their travel goals easily and confidently. Whether you’re traveling for work, visiting family, or performing Umrah, we guide you through every step, ensuring smooth documentation, quick approvals, and transparent pricing.</p>

    <h2>What We Offer</h2>
    <ul>
      <li><strong>Visit Visas:</strong> For tourism, family visits, and business meetings across the Gulf region.</li>
      <li><strong>Freelance & Work Visas:</strong> Legal pathways for independent professionals in the UAE and beyond.</li>
      <li><strong>Umrah & Hajj Packages:</strong> Affordable and spiritually fulfilling packages with full travel support.</li>
      <li><strong>Flight & Hotel Booking:</strong> Best deals on air tickets and trusted hotel partners for a smooth journey.</li>
      <li><strong>Travel Assistance:</strong> From document attestation to after-arrival support, we handle everything.</li>
    </ul>

    <h2>Why Travelers Trust BM Gulf</h2>
    <ul>
      <li>Fast and transparent visa processing</li>
      <li>No hidden charges or false promises</li>
      <li>Dedicated team for every visa category</li>
      <li>Thousands of successful applications</li>
      <li>24/7 customer support on WhatsApp and phone</li>
    </ul>

    <h2>Our Team and Values</h2>
    <p>The BM Gulf team is made up of experienced visa consultants, travel coordinators, and customer service professionals who share one vision — to make travel effortless for our clients. We believe in honesty, reliability, and putting people first in everything we do.</p>

    <h2>Our Vision for the Future</h2>
    <p>BM Gulf is expanding its digital presence with online application systems, instant consultation tools, and real-time visa tracking. Our goal is to become Pakistan’s leading Gulf travel brand — known for quality, transparency, and customer trust.</p>

    <h2>Conclusion</h2>
    <p>BM Gulf isn’t just a travel agency — it’s a journey built on dreams, dedication, and trust. From your first inquiry to your final destination, we stand beside you every step of the way. Let BM Gulf Travel help you turn your travel dreams into reality.</p>
  `,
      image: "/blog5.png",
      category: "Travel Safety",
      author: "Insurance Specialist",
      date: "November 20, 2024",
      readTime: "6 min read",
      tags: ["Insurance", "Travel Safety", "Protection"],
    },
    "dubai-visa-requirements-pakistani-citizens": {
      id: 6,
        title: "Dubai Visa Requirements for Pakistani Citizens (2025 Guide)",
  excerpt:
    "Complete 2025 guide to Dubai visa requirements for Pakistani citizens — learn about visa types, documents, and expert tips from BM Gulf Travel Agency.",
  content: `
    <h1>Dubai Visa Requirements for Pakistani Citizens (2025 Guide)</h1>
    <p>Planning to visit Dubai from Pakistan? Whether for tourism, business, or family visits, understanding the <strong>Dubai visa requirements</strong> is essential. This complete guide by <strong>BM Gulf Travel Agency</strong> explains the visa types, documentation process, fees, and expert tips to help you get your visa approved quickly.</p>

    <h2>Overview</h2>
    <p>The <strong>United Arab Emirates (UAE)</strong> offers several types of visas to Pakistani citizens depending on the purpose and duration of stay. From short-term tourist visas to long-term and multiple-entry options, choosing the right one makes your travel smooth and stress-free.</p>

    <h2>Types of UAE Visit Visas for Pakistanis</h2>
    <ul>
      <li><strong>30-Day Visit Visa:</strong> Best for short vacations, family visits, or tourism.</li>
      <li><strong>60-Day Visit Visa:</strong> Ideal for extended business trips or longer holidays.</li>
      <li><strong>Multiple-Entry Visa:</strong> Designed for business travelers or frequent flyers needing repeated access to the UAE.</li>
      <li><strong>Transit Visa:</strong> For travelers connecting through UAE airports for short stopovers.</li>
    </ul>

    <h3>Important Note:</h3>
    <p>Pakistanis are <strong>not eligible for visa on arrival</strong> in most cases. Always apply for a pre-arranged visa through a sponsor, airline, or trusted travel agency like <strong>BM Gulf Travel</strong>.</p>

    <h2>Required Documents for Dubai Visa (Pakistan 2025)</h2>
    <ul>
      <li>Original Passport (minimum 6 months validity)</li>
      <li>Completed Visa Application Form</li>
      <li>Recent Passport-Size Photographs (white background)</li>
      <li>Confirmed Return Flight Ticket</li>
      <li>Hotel Booking or Accommodation Proof</li>
      <li>Bank Statement (last 3–6 months, if requested)</li>
      <li>CNIC Copy and Family Details (if applying for family visit)</li>
    </ul>

    <h2>How to Apply for a Dubai Visa from Pakistan</h2>
    <ol>
      <li><strong>Choose the Visa Type:</strong> Decide between 30, 60, or multiple-entry visa based on your travel needs.</li>
      <li><strong>Apply via Sponsor or Agency:</strong> Apply through an authorized travel agent or UAE host company.</li>
      <li><strong>Upload Required Documents:</strong> Make sure scans are clear and match your passport details exactly.</li>
      <li><strong>Pay the Visa Fee:</strong> Fees vary depending on visa type and processing time (standard or urgent).</li>
      <li><strong>Wait for Processing:</strong> Most visas are approved within 2–7 working days.</li>
      <li><strong>Receive E-Visa:</strong> Download and print your e-visa. You’ll need to present it at immigration upon arrival.</li>
    </ol>

    <h2>Processing Time & Fees</h2>
    <p>The average <strong>Dubai visa processing time</strong> for Pakistani citizens is between <strong>2 to 7 working days</strong>. Expedited services are available for an additional charge. BM Gulf provides transparent pricing and priority handling for urgent applications.</p>

    <h2>Top Tips for a Successful Dubai Visa Application</h2>
    <ul>
      <li>Ensure your passport and documents are valid and accurate.</li>
      <li>Book through a trusted agency like <strong>BM Gulf</strong> to avoid rejections or delays.</li>
      <li>Double-check travel dates before submitting your application.</li>
      <li>Keep digital and printed copies of your e-visa when travelling.</li>
      <li>Follow UAE immigration rules — overstaying may lead to fines or future visa denials.</li>
    </ul>

    <h2>Why Apply Through BM Gulf Travel Agency?</h2>
    <ul>
      <li>✅ Fast and reliable visa processing</li>
      <li>✅ Expert team with years of Gulf visa experience</li>
      <li>✅ Hassle-free document submission</li>
      <li>✅ Real-time application tracking and updates</li>
      <li>✅ 24/7 customer support for travellers</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Applying for a <strong>Dubai visa from Pakistan</strong> is simple if you have the right documents and support. BM Gulf Travel Agency makes the process fast, transparent, and stress-free. Whether you’re travelling for leisure, work, or family, we ensure a smooth visa experience from start to finish.</p>

    <p><em>Contact BM Gulf Travel today for expert assistance with your UAE visa — and take the first step toward your dream Dubai experience.</em></p>
  `,

      image: "/blog6.png",
      category: "Visa Guide",
      author: "Dubai Visa Expert",
      date: "November 15, 2025",
      readTime: "5 min read",
      tags: ["Dubai", "UAE", "Visa", "Pakistan"],
    },
  }

  return posts[slug] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
        <WhatsAppFloat />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-accent hover:text-accent/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <Badge variant="outline" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">{post.title}</h1>

            <div
              className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <div
                      className="prose prose-lg max-w-none prose-headings:gradient-text prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
                      {post.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  {/* Share */}
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Article
                      </h3>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent" onClick={() => { window.open(`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`, '_blank') }}>
                          <Facebook className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent" onClick={() => { window.open(`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}&text=${encodeURIComponent(post.title)}`, '_blank') }}>
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent" onClick={() => { window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${typeof window !== 'undefined' ? window.location.href : ''}&title=${encodeURIComponent(post.title)}`, '_blank') }}>
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Related Services */}
                  <Card className="glass-card">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Related Services</h3>
                      <div className="space-y-3">
                        <Link
                          href="/services/umrah-visa"
                          className="block p-3 rounded-lg hover:bg-accent/10 transition-colors"
                        >
                          <h4 className="font-medium text-sm">Umrah Visa</h4>
                          <p className="text-xs text-muted-foreground">Complete visa processing</p>
                        </Link>
                        <Link
                          href="/services/hajj-visa"
                          className="block p-3 rounded-lg hover:bg-accent/10 transition-colors"
                        >
                          <h4 className="font-medium text-sm">Hajj Visa</h4>
                          <p className="text-xs text-muted-foreground">Hajj packages & visas</p>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}