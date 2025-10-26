"use client"

import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function LoadingSpinner({ className, size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("animate-spin rounded-full border-2 border-primary/20 border-t-primary", sizeClasses[size])}>
        <div className="sr-only">Loading...</div>
      </div>
      <div className="ml-2 text-sm text-muted-foreground animate-pulse">Preparing your journey...</div>
    </div>
  )
}
