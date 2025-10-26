"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPulsing, setIsPulsing] = useState(false)

  const whatsappNumber = "+923331444455" // Replace with actual WhatsApp number
  const message = "Hello! I'm interested in your travel services. Can you help me?"

  // Pulsing effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup with WhatsApp-like design */}
      {isOpen && (
        <Card className="mb-4 w-80 bg-white shadow-2xl rounded-2xl border-0 animate-scale-in">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-[#00a884] p-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <FontAwesomeIcon 
                      icon={faWhatsapp} 
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">BM GULF Travel</h4>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      <p className="text-xs text-green-100">Online • Usually replies instantly</p>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsOpen(false)} 
                  className="h-8 w-8 p-0 text-white hover:bg-white/20 rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Message Content */}
            <div className="p-4 bg-gradient-to-b from-gray-50 to-white">
              <div className="mb-4">
                <div className="inline-block bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Hi there! 👋 
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    How can we help you with your travel plans today?
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">11:24 AM</p>
              </div>
              
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#00a884] hover:bg-[#008f70] text-white rounded-xl py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <FontAwesomeIcon 
                  icon={faWhatsapp} 
                  className="w-5 h-5 mr-2" 
                />
                Start Chat on WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* WhatsApp Button with Wave Animation */}
      <div className="relative">
        {/* Wave Animation */}
        <div className="absolute inset-0">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`absolute inset-0 rounded-full bg-[#25D366] ${
                isPulsing ? 'animate-ping' : ''
              }`}
              style={{
                animationDelay: `${i * 0.5}s`,
                opacity: 0.6 - i * 0.2,
                zIndex: -1 - i,
              }}
            />
          ))}
        </div>

        {/* Main Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-14 h-14 rounded-full 
            bg-[#25D366] hover:bg-[#128C7E] 
            text-white shadow-2xl 
            hover:shadow-3xl 
            transition-all duration-300 
            hover:scale-110
            border-2 border-white
            relative z-10
            ${isOpen ? 'rotate-0' : 'hover:rotate-12'}
          `}
          size="lg"
        >
          {/* FontAwesome WhatsApp Icon with Notification Dot */}
          <div className="relative flex items-center justify-center">
            <FontAwesomeIcon 
              icon={faWhatsapp} 
              className="w-7 h-7" 
            />
            {!isOpen && (
              <div className="absolute -top-1 -right-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse border border-gray-300" />
              </div>
            )}
          </div>
        </Button>

        {/* Floating Label */}
        {!isOpen && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with us
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        )}
      </div>
    </div>
  )
}