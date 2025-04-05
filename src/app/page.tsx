import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Check, ChevronRight, MapPin, PawPrint, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingForm } from "@/components/booking-form"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { PetGallery } from "@/components/pet-gallery"
import { ServiceCard } from "@/components/service-card"
import { FacilityTour } from "@/components/facility-tour"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6" />
            <span className="text-xl font-bold">PetRetreat</span>
          </div>
          <nav className="ml-auto hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#facilities" className="text-sm font-medium hover:text-primary transition-colors">
              Facilities
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#booking" className="text-sm font-medium hover:text-primary transition-colors">
              Book Now
            </Link>
          </nav>
          <Button asChild className="ml-4">
            <Link href="#booking">Book a Stay</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Happy pets at our boarding facility"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Luxury Pet Boarding Your Furry Friend Will Love
              </h1>
              <p className="text-xl text-muted-foreground">
                Premium care, spacious accommodations, and personalized attention for your pets while you're away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#booking">
                    Book Now <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#facilities">Take a Tour</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm">24/7 Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm">Vet on Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm">Daily Updates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Premium Services</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored care packages to meet your pet's unique needs and preferences
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Luxury Suites"
                description="Spacious, climate-controlled private rooms with comfortable bedding and relaxing music."
                icon="Home"
                price="$65"
                features={["Private space", "Webcam access", "Premium bedding", "Climate control"]}
              />
              <ServiceCard
                title="Activity Package"
                description="Multiple play sessions, nature walks, and interactive games to keep your pet active and happy."
                icon="Activity"
                price="$45"
                features={["Group play", "One-on-one time", "Nature walks", "Enrichment activities"]}
              />
              <ServiceCard
                title="Spa & Grooming"
                description="Professional grooming, bathing, and pampering to keep your pet looking and feeling their best."
                icon="Scissors"
                price="$55"
                features={["Bath & brush", "Nail trimming", "Ear cleaning", "Coat treatment"]}
              />
            </div>
          </div>
        </section>

        <section id="facilities" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Facilities</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Take a virtual tour of our state-of-the-art pet boarding facilities
              </p>
            </div>
            <FacilityTour />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Indoor Play Areas</CardTitle>
                  <CardDescription>Climate-controlled spaces for year-round play</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Indoor play area"
                    className="rounded-lg object-cover w-full h-48"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Outdoor Playground</CardTitle>
                  <CardDescription>Secure, spacious areas for exercise and exploration</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Outdoor playground"
                    className="rounded-lg object-cover w-full h-48"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Grooming Salon</CardTitle>
                  <CardDescription>Professional equipment for all grooming needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    width={400}
                    height={200}
                    alt="Grooming salon"
                    className="rounded-lg object-cover w-full h-48"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Happy Pet Parents</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our clients have to say about their experience with us
              </p>
            </div>
            <TestimonialsCarousel />
          </div>
        </section>

        <section id="gallery" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Pet Gallery</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet some of our adorable guests who've stayed with us
              </p>
            </div>
            <PetGallery />
          </div>
        </section>

        <section id="booking" className="py-16 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book Your Pet's Stay</h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Reserve a spot for your furry friend at our luxury pet boarding facility
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <CalendarDays className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Flexible Scheduling</h3>
                      <p className="text-sm text-muted-foreground">
                        Book for any duration, from overnight stays to extended vacations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Safety Guaranteed</h3>
                      <p className="text-sm text-muted-foreground">
                        Secure facilities with 24/7 monitoring and trained staff
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Convenient Location</h3>
                      <p className="text-sm text-muted-foreground">Easy access with ample parking and drop-off zones</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Tabs defaultValue="new" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="new">New Booking</TabsTrigger>
                    <TabsTrigger value="returning">Returning Pets</TabsTrigger>
                  </TabsList>
                  <TabsContent value="new" className="mt-0">
                    <BookingForm isReturning={false} />
                  </TabsContent>
                  <TabsContent value="returning" className="mt-0">
                    <BookingForm isReturning={true} />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-muted/30">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PawPrint className="h-6 w-6" />
              <span className="text-xl font-bold">PetRetreat</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Luxury pet boarding services with a focus on comfort, care, and fun for your furry family members.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#facilities"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#booking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>123 Pet Paradise Lane</p>
              <p>Pawsville, CA 90210</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@petretreat.com</p>
            </address>
          </div>
          <div>
            <h3 className="font-medium mb-4">Hours</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Monday - Friday: 7am - 7pm</li>
              <li>Saturday: 8am - 6pm</li>
              <li>Sunday: 9am - 5pm</li>
              <li>Check-in/out available during all open hours</li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} PetRetreat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

