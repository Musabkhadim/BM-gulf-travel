"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses = "relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"

    const variantClasses = {
      primary:
        "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90",
      secondary:
        "bg-gradient-to-r from-secondary to-primary text-secondary-foreground hover:from-secondary/90 hover:to-primary/90",
    }

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <Button ref={ref} className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </Button>
    )
  },
)

GradientButton.displayName = "GradientButton"

export { GradientButton }
