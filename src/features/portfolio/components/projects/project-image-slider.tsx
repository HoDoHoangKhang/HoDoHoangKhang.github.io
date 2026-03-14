"use client"

import Image from "next/image"
import { useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

/** Shows ~4 images at a time using Carousel (Embla), with prev/next buttons. Click opens image in a dialog. */
export function ProjectImageSlider({
  images,
  altPrefix = "Project screenshot",
  className,
}: {
  images: string[]
  altPrefix?: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  if (!images.length) return null

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage({ src, alt: `${altPrefix} ${index + 1}` })
    setOpen(true)
  }

  return (
    <>
      <Carousel
        className={cn("w-full max-w-full", className)}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="-ml-1">
          {images.map((src, index) => (
            <CarouselItem
              key={`${src}-${index}`}
              className="basis-1/2 pl-1 sm:basis-1/3 md:basis-1/4"
            >
              <div className="p-1">
                <Card className="h-24 overflow-hidden border-edge p-0 sm:h-28 cursor-pointer">
                  <CardContent className="flex h-full items-center justify-center p-0">
                    <button
                      type="button"
                      onClick={() => handleImageClick(src, index)}
                      className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <Image
                        src={src}
                        alt={`${altPrefix} ${index + 1}`}
                        width={320}
                        height={200}
                        className="h-full w-full object-cover"
                        unoptimized={src.startsWith("http")}
                      />
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="size-6 border-2 bg-clip-border ring-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
        <CarouselNext className="size-6 border-2 bg-clip-border ring-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
      </Carousel>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-[min(90vw,56rem)] p-0 overflow-hidden"
          showCloseButton
        >
          <DialogTitle className="sr-only">{selectedImage?.alt}</DialogTitle>
          {selectedImage && (
            <div className="relative w-full max-h-[85vh] flex items-center justify-center bg-muted/30">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
                unoptimized={selectedImage.src.startsWith("http")}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
