"use client"

import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"
import { google } from "google-maps"

interface GoogleMapProps {
  center: { lat: number; lng: number }
  zoom?: number
  markers?: Array<{
    position: { lat: number; lng: number }
    title: string
    icon?: string
  }>
  className?: string
}

export function GoogleMap({ center, zoom = 13, markers = [], className = "" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [map, setMap] = useState<any | null>(null)

  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (typeof window !== "undefined" && !window.google) {
        const script = document.createElement("script")
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
        script.async = true
        script.defer = true

        script.onload = () => {
          setIsLoaded(true)
        }

        document.head.appendChild(script)
      } else if (window.google) {
        setIsLoaded(true)
      }
    }

    loadGoogleMaps()
  }, [])

  useEffect(() => {
    if (isLoaded && mapRef.current && !map) {
      const newMap = new google.maps.Map(mapRef.current, {
        center,
        zoom,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      })

      setMap(newMap)
    }
  }, [isLoaded, center, zoom, map])

  useEffect(() => {
    if (map && markers.length > 0) {
      markers.forEach((marker) => {
        new google.maps.Marker({
          position: marker.position,
          map,
          title: marker.title,
          icon: marker.icon || undefined,
        })
      })
    }
  }, [map, markers])

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return <div ref={mapRef} className={className} />
}
