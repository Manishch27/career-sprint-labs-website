'use client'

import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { UniversitiesDropdown } from './universities-dropdown'
import { CoursesDropdown } from './courses-dropdown'
import { SchoolBoardsDropdown } from './school-boards-dropdown'
import { MobileNav } from './mobile-nav'

export function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const linkRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        linkRef.current &&
        !linkRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(prev => (prev === dropdown ? null : dropdown))
  }

  return (
    <nav className="w-full py-4 px-2 bg-background z-50 shadow-sm relative">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="https://i.ibb.co/jyrRSkf/Sarthi.png"
            alt="Career Sarathi logo"
            className="lg:h-16 h-12"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div ref={dropdownRef}>
            <NavLinks
              activeDropdown={activeDropdown}
              toggleDropdown={toggleDropdown}
              linkRef={linkRef}
            />
          </div>
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>

      {activeDropdown && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40">
          <div className="container mx-auto">
            {activeDropdown === 'Universities' && <UniversitiesDropdown />}
            {activeDropdown === 'Courses' && <CoursesDropdown />}
            {activeDropdown === 'School Boards' && <SchoolBoardsDropdown />}
          </div>
        </div>
      )}
    </nav>
  )
}

interface NavLinksProps {
  activeDropdown: string | null
  toggleDropdown: (dropdown: string) => void
  linkRef: React.RefObject<HTMLAnchorElement | null>
}

function NavLinks({ activeDropdown, toggleDropdown, linkRef }: NavLinksProps) {
  const navItems = ['Universities', 'Courses', 'School Boards']

  return (
    <ul className="flex gap-6 items-center">
      {navItems.map(item => (
        <li key={item} className="relative group">
          <Link
            href="#"
            ref={linkRef}
            className={cn(
              'flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors',
              activeDropdown === item && 'text-blue-600 dark:text-blue-400'
            )}
            onMouseEnter={() => toggleDropdown(item)}
          >
            {item}
            <ChevronDown
              className={cn(
                'ml-1 h-4 w-4 transition-transform',
                activeDropdown === item && 'rotate-180'
              )}
            />
          </Link>
          {activeDropdown === item && (
            <div className="absolute top-full left-0 w-[200px] bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50">
              <div className="p-4">
                {item === 'Universities' && <UniversitiesDropdown />}
                {item === 'Courses' && <CoursesDropdown />}
                {item === 'School Boards' && <SchoolBoardsDropdown />}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}