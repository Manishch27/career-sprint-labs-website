'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

const categories = [
  {
    title: "National Boards",
    items: [
      { name: "CBSE Overview", href: "/school-boards/cbse" },
      { name: "CBSE Syllabus", href: "/school-boards/cbse/syllabus" },
      { name: "CBSE Exam Pattern", href: "/school-boards/cbse/exam-pattern" },
      { name: "CBSE Results", href: "/school-boards/cbse/results" },
      { name: "CBSE Schools", href: "/school-boards/cbse/schools" },
      { name: "CBSE Study Material", href: "/school-boards/cbse/study-material" }
    ]
  },
  {
    title: "State Boards",
    items: [
      { name: "Maharashtra Board", href: "/school-boards/maharashtra" },
      { name: "Karnataka Board", href: "/school-boards/karnataka" },
      { name: "Tamil Nadu Board", href: "/school-boards/tamil-nadu" },
      { name: "UP Board", href: "/school-boards/up" },
      { name: "Delhi Board", href: "/school-boards/delhi" },
      { name: "All State Boards", href: "/school-boards/state" }
    ]
  },
  {
    title: "International Boards",
    items: [
      { name: "IB Overview", href: "/school-boards/ib" },
      { name: "Cambridge (IGCSE)", href: "/school-boards/cambridge" },
      { name: "American Curriculum", href: "/school-boards/american" },
      { name: "IB vs CBSE", href: "/school-boards/ib-vs-cbse" },
      { name: "IB Schools", href: "/school-boards/ib/schools" },
      { name: "International Schools", href: "/school-boards/international-schools" }
    ]
  },
  {
    title: "Resources",
    items: [
      { name: "Board Comparison", href: "/school-boards/compare" },
      { name: "Academic Calendar", href: "/school-boards/calendar" },
      { name: "Admission Process", href: "/school-boards/admission" },
      { name: "Career Counselling", href: "/career-counselling" },
      { name: "Study Material", href: "/school-boards/study-material" },
      { name: "FAQs", href: "/school-boards/faqs" }
    ]
  }
]

export function SchoolBoardsDropdown() {
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
              placeholder="Search for school boards..."
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

