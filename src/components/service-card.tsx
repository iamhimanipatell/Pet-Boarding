"use client"

import { useState } from "react"
import { Check, ChevronRight, Home, Activity, Scissors } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type ServiceCardProps = {
  title: string
  description: string
  icon: "Home" | "Activity" | "Scissors"
  price: string
  features: string[]
}

export function ServiceCard({ title, description, icon, price, features }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const IconComponent = {
    Home: Home,
    Activity: Activity,
    Scissors: Scissors,
  }[icon]

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-primary/5 transform origin-bottom transition-transform duration-500 ${isHovered ? "scale-y-100" : "scale-y-0"}`}
      />
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <div className="bg-primary/10 p-3 rounded-full">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <div className="text-2xl font-bold">
            {price}
            <span className="text-sm text-muted-foreground">/day</span>
          </div>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="relative">
        <Button asChild className="w-full group">
          <Link href="#booking">
            Book Now
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

