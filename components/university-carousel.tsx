'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Crown, MapPin, GraduationCap } from 'lucide-react'
import Link from 'next/link'

interface UniversityCard {
  name: string
  imageUrl: string
  location: string
  ranking: number
}

const universities: UniversityCard[] = [
  {
    name: 'GLA University',
    imageUrl: 'https://i.ibb.co/b5X6K6j/gla.jpg',
    location: 'Mathura, India',
    ranking: 1
  },
  {
    name: 'Jain university | Online',
    imageUrl: 'https://www.odljain.com/images/about.jpg',
    location: 'Bengaluru, India',
    ranking: 2
  },
  {
    name: 'LPU | Online',
    imageUrl: 'https://happenings.lpu.in/wp-content/uploads/2024/01/lpu.jpg',
    location: 'Phagwara, India',
    ranking: 3
  },
  {
    name: 'Amity University',
    imageUrl: 'https://amity.edu/images/university.jpg',
    location: 'Noida, India',
    ranking: 4
  },
  {
    name: 'Online Manipal',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4icYBJgcfkoYrum2aefZaud5-0qjAlhe08TIuIFy8LhmQFD1NAM7hXatrFb_i8Kl_zQ&usqp=CAU',
    location: 'Jaipur, India',
    ranking: 5
  },
  {
    name: 'Chandigarh University',
    imageUrl: 'https://distanceeducationschool.com/wp-content/uploads/2024/08/chandigarh-university-page.webp',
    location: 'Punjab, India',
    ranking: 5
  }
]

export function UniversityCarousel() {
  const [isComparing, setIsComparing] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      const scrollWidth = carousel.scrollWidth
      const animationDuration = scrollWidth / 50 // Adjust speed here

      carousel.style.setProperty('--scroll-width', `${scrollWidth}px`)
      carousel.style.setProperty('--animation-duration', `${animationDuration}s`)
    }
  }, [])

  const handleCardClick = (uni: UniversityCard) => {
    console.log('Clicked on:', uni.name)
    // Add your logic here for what should happen when a card is clicked
  }

  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="container px-4 md:px-6 flex flex-col">
        <div className="text-center mb-10 space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-950 dark:text-blue-50">
            Online & Distance <span className="text-blue-600 dark:text-blue-500">Education Universities</span>
          </h3>
        </div>
        
        <div className="relative overflow-hidden z-10">
          <div 
            ref={carouselRef}
            className="flex animate-carousel"
            style={{
              width: 'calc(250px * 10)',
            }}
          >
            {[...universities, ...universities].map((uni, index) => (
              <div key={index} className="w-[250px] flex-shrink-0 px-2">
                <Card 
                  className="h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => handleCardClick(uni)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <Badge className="absolute top-2 left-2 bg-blue-600 text-white hover:bg-blue-600/90">
                        <Crown className="w-3 h-3 mr-1" /> Rank #{uni.ranking}
                      </Badge>
                      <Image
                        src={uni.imageUrl}
                        alt={uni.name}
                        width={250}
                        height={150}
                        className="w-full h-[150px] object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 line-clamp-2">
                        {uni.name}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {uni.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <GraduationCap className="w-4 h-4 mr-1" />
                        Multiple Programs
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Link 
          href="/universities" 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-14 px-8 py-2 w-fit mx-auto mt-8 z-10"
        >
          View All & Compare
        </Link>
      </div>
    </section>
  )
}

