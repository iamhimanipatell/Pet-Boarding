"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

type Testimonial = {
  id: number
  name: string
  avatar: string
  petType: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",\
    avatar: "/placeholder.svg?height=40&width  = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    petType: "Dog",
    rating: 5,
    text: "PetRetreat is amazing! My golden retriever Baxter always comes home happy and well-cared for. The staff sends daily updates with photos, which gives me such peace of mind while I'm away."
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    petType: "Cat",
    rating: 5,
    text: "I was nervous about boarding my cat for the first time, but the team at PetRetreat made it a stress-free experience. Luna received individual attention and they accommodated all her special needs."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    petType: "Dog",
    rating: 4,
    text: "The luxury suites are worth every penny! My pup had his own space with a comfy bed and TV playing dog shows. The webcam access let me check in on him whenever I wanted."
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    petType: "Bird",
    rating: 5,
    text: "I never thought I'd find a place that could properly care for my parakeets, but PetRetreat exceeded my expectations. Their knowledge of bird care is impressive!"
  },
  {
    id: 5,
    name: "Jessica Taylor",
    avatar: "/placeholder.svg?height=40&width=40",
    petType: "Dog",
    rating: 5,
    text: "The grooming services are fantastic! My shih tzu not only had a great stay but came home looking and smelling wonderful. We'll definitely be back."
  }
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useMobile()
  const itemsPerPage = isMobile ? 1 : 3
  const maxIndex = testimonials.length - itemsPerPage

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [maxIndex])

  const handlePrev = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1))
  }

  const handleNext = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * (100 / itemsPerPage)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full md:min-w-[33.333%] px-4">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.petType} Owner</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md"
        onClick={handleNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

