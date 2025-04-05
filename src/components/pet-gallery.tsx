"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const pets = [
  { id: 1, name: "Max", type: "Dog", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Luna", type: "Cat", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Buddy", type: "Dog", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Charlie", type: "Dog", image: "/placeholder.svg?height=300&width=300" },
  { id: 5, name: "Bella", type: "Cat", image: "/placeholder.svg?height=300&width=300" },
  { id: 6, name: "Rocky", type: "Dog", image: "/placeholder.svg?height=300&width=300" },
  { id: 7, name: "Coco", type: "Bird", image: "/placeholder.svg?height=300&width=300" },
  { id: 8, name: "Daisy", type: "Dog", image: "/placeholder.svg?height=300&width=300" },
]

export function PetGallery() {
  const [filter, setFilter] = useState<string | null>(null)
  const [selectedPet, setSelectedPet] = useState<(typeof pets)[0] | null>(null)

  const filteredPets = filter ? pets.filter((pet) => pet.type === filter) : pets

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            filter === null ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
          )}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Dog")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            filter === "Dog" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
          )}
        >
          Dogs
        </button>
        <button
          onClick={() => setFilter("Cat")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            filter === "Cat" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
          )}
        >
          Cats
        </button>
        <button
          onClick={() => setFilter("Bird")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            filter === "Bird" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
          )}
        >
          Birds
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPets.map((pet) => (
          <div
            key={pet.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedPet(pet)}
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={pet.image || "/placeholder.svg"}
                alt={pet.name}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-medium">{pet.name}</h3>
              <p className="text-white/80 text-sm">{pet.type}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedPet} onOpenChange={(open) => !open && setSelectedPet(null)}>
        <DialogContent className="max-w-3xl">
          {selectedPet && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-square">
                <Image
                  src={selectedPet.image || "/placeholder.svg"}
                  alt={selectedPet.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{selectedPet.name}</h2>
                <p className="text-muted-foreground mb-4">{selectedPet.type}</p>
                <p className="mb-4">
                  {selectedPet.name} is one of our wonderful guests who regularly stays with us.
                  {selectedPet.type === "Dog" &&
                    " They love playing fetch in our outdoor playground and cuddling with our staff during downtime."}
                  {selectedPet.type === "Cat" &&
                    " They enjoy lounging in our cat condos and playing with interactive toys."}
                  {selectedPet.type === "Bird" &&
                    " They love singing and interacting with our trained staff who specialize in avian care."}
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Favorite Activities:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedPet.type === "Dog" && (
                      <>
                        <li>Playing fetch</li>
                        <li>Belly rubs</li>
                        <li>Socializing with other dogs</li>
                      </>
                    )}
                    {selectedPet.type === "Cat" && (
                      <>
                        <li>Napping in sunny spots</li>
                        <li>Chasing toys</li>
                        <li>Watching birds from the window</li>
                      </>
                    )}
                    {selectedPet.type === "Bird" && (
                      <>
                        <li>Singing</li>
                        <li>Playing with bells</li>
                        <li>Learning new sounds</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

