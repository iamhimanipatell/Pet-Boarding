"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const facilities = [
  {
    id: 1,
    name: "Luxury Dog Suites",
    description: "Spacious private rooms with comfortable bedding and climate control",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    name: "Cat Condos",
    description: "Multi-level spaces with climbing areas and cozy nooks",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    name: "Indoor Play Area",
    description: "Climate-controlled space for year-round play and exercise",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    name: "Outdoor Playground",
    description: "Secure, spacious area for exercise and exploration",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    name: "Grooming Salon",
    description: "Professional equipment for all grooming needs",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export function FacilityTour() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const slideRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((current) => (current <= 0 ? facilities.length - 1 : current - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((current) => (current >= facilities.length - 1 ? 0 : current + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleThumbnailClick = (index: number) => {
    if (activeIndex === index || isAnimating) return
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return

    const touchEnd = e.touches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
      setTouchStart(null)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isFullscreen) {
        setActiveIndex((current) => (current >= facilities.length - 1 ? 0 : current + 1))
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isFullscreen])

  return (
    <>
      <div className="relative rounded-xl overflow-hidden bg-muted/30 border">
        <div
          ref={slideRef}
          className="relative aspect-[16/9] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0",
              )}
            >
              <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{facility.name}</h3>
                <p className="text-white/80">{facility.description}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white border-white/20"
                onClick={() => setIsFullscreen(true)}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white border-white/20 z-20"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-white border-white/20 z-20"
          onClick={handleNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="flex justify-center gap-2 p-4">
          {facilities.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                activeIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src={facilities[activeIndex].image || "/placeholder.svg"}
              alt={facilities[activeIndex].name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">{facilities[activeIndex].name}</h3>
              <p className="text-white/80">{facilities[activeIndex].description}</p>
            </div>
          </div>
          <div className="p-4 flex justify-center gap-2">
            {facilities.map((facility, index) => (
              <div
                key={facility.id}
                className={cn(
                  "relative w-20 h-12 rounded-md overflow-hidden cursor-pointer border-2",
                  activeIndex === index ? "border-primary" : "border-transparent",
                )}
                onClick={() => setActiveIndex(index)}
              >
                <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

