'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { universities } from '@/data/universities'

const categories = [
  {
    title: "Online Universities",
    items: [
      { name: "Top Online Universities", href: "/universities/online" },
      { name: "UGC-DEB Approved", href: "/universities/list/ugc-deb-approved" },
      { name: "NAAC A+ Universities", href: "/universities/list/naac-aplus" },
      { name: "NIRF Ranked Universities", href: "/universities/list/nirf-ranked" },
      { name: "Distance Universities", href: "/universities/distance" },
      { name: "Private Universities", href: "/universities/private" }
    ]
  },
  {
    title: "Popular Universities",
    items: [
      { name: "Lovely Professional University", href: "/universities/lpu" },
      { name: "Amity University", href: "/universities/amity" },
      { name: "Chandigarh University", href: "/universities/chandigarh" },
      { name: "UPES", href: "/universities/upes" },
      { name: "Manipal University", href: "/universities/manipal" },
      { name: "Jain University", href: "/universities/jain" }
    ]
  },
  {
    title: "Top MBA Universities",
    items: [
      { name: "MBA Universities Overview", href: "/universities/mba" },
      { name: "Top 10 MBA Universities", href: "/top-universities/mba" },
      { name: "MBA Admission Process", href: "/universities/mba/admission" },
      { name: "MBA Fee Structure", href: "/universities/mba/fees" },
      { name: "MBA Specializations", href: "/universities/mba/specializations" },
      { name: "MBA Placements", href: "/universities/mba/placements" }
    ]
  },
  {
    title: "Resources",
    items: [
      { name: "Compare Universities", href: "/universities/compare" },
      { name: "University Rankings", href: "/universities/rankings" },
      { name: "Admission Calendar", href: "/universities/admission-calendar" },
      { name: "Career Counselling", href: "/career-counselling" },
      { name: "Education Loan", href: "/education-loan" },
      { name: "FAQs", href: "/universities/faqs" }
    ]
  }
]

export function UniversitiesDropdown() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{ name: string; href: string }>>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setSearchResults([])
      return
    }
    
    // Flatten all items for searching
    const allItems = categories.flatMap(category => category.items)
    const results = allItems.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="absolute top-full right-0 w-screen bg-white dark:bg-gray-950 shadow-lg border-t dark:border-gray-800 z-50">
      <div className="container mx-auto py-8">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search for universities, courses and more..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>
          
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="absolute z-10 w-full bg-white dark:bg-gray-950 shadow-lg rounded-b-lg border dark:border-gray-800 mt-1">
              <ul className="divide-y dark:divide-gray-800">
                {searchResults.map((result, index) => (
                  <li key={index}>
                    <Link
                      href={result.href}
                      className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      {result.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

