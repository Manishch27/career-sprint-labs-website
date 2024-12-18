'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

const categories = [
  {
    title: "Management",
    items: [
      { name: "MBA Overview", href: "/courses/mba" },
      { name: "MBA Specializations", href: "/courses/mba/specializations" },
      { name: "Executive MBA", href: "/courses/executive-mba" },
      { name: "PGDM", href: "/courses/pgdm" },
      { name: "BBA", href: "/courses/bba" },
      { name: "Distance MBA", href: "/courses/distance-mba" }
    ]
  },
  {
    title: "Technology",
    items: [
      { name: "MCA Overview", href: "/courses/mca" },
      { name: "MCA Specializations", href: "/courses/mca/specializations" },
      { name: "BCA", href: "/courses/bca" },
      { name: "B.Tech", href: "/courses/btech" },
      { name: "M.Tech", href: "/courses/mtech" },
      { name: "Diploma in IT", href: "/courses/diploma-it" }
    ]
  },
  {
    title: "Commerce & Arts",
    items: [
      { name: "M.Com", href: "/courses/mcom" },
      { name: "B.Com", href: "/courses/bcom" },
      { name: "MA", href: "/courses/ma" },
      { name: "BA", href: "/courses/ba" },
      { name: "BBA + MBA (Integrated)", href: "/courses/integrated-bba-mba" },
      { name: "PhD Programs", href: "/courses/phd" }
    ]
  },
  {
    title: "Resources",
    items: [
      { name: "Course Finder", href: "/courses/finder" },
      { name: "Career Counselling", href: "/career-counselling" },
      { name: "Compare Courses", href: "/courses/compare" },
      { name: "Admission Process", href: "/courses/admission-process" },
      { name: "Fee Structure", href: "/courses/fee-structure" },
      { name: "FAQs", href: "/courses/faqs" }
    ]
  }
]

export function CoursesDropdown() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{ name: string; href: string }>>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setSearchResults([])
      return
    }
    
    const allItems = categories.flatMap(category => category.items)
    const results = allItems.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-950 shadow-lg border-t dark:border-gray-800 z-50">
      <div className="container mx-auto py-8">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="search"
              placeholder="Search for courses..."
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

