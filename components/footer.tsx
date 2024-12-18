'use client'

import Link from 'next/link'
import { Facebook, Youtube, Twitter, Instagram, Linkedin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const universities = [
  "Online Manipal", "Amity University", "Lovely Professional University",
  "Chandigarh University", "DY Patil University", "Vivekananda Global University",
  "Sharda University", "Shoolini University", "Jain University",
  "Sikkim Manipal University", "Vignan University", "UPES University",
  "Amrita University", "Shobhit University", "Mangalayatan University",
  "Uttaranchal University", "Suresh Gyan Vihar University", 
  "Swami Vivekanand Subharti University"
]

const distanceCourses = [
  "BA Distance Education", "BBA Distance Education", "BCA Distance Education",
  "BCOM Distance Education", "BLIS Distance Education", "BJMC Distance Education",
  "BSC Distance Education", "MA Distance Education", "MBA Distance Education",
  "MCA Distance Education", "MCOM Distance Education", "MLIS Distance Education",
  "MSC Distance Education", "MJMC Distance Education"
]

const onlineCourses = [
  "Online MBA Course", "Online MCA Course", "Online MCOM Course",
  "Online MA Course", "Online MSC Course", "Online MJMC Course",
  "Online BBA Course", "Online BCA Course", "Online BCOM Course",
  "Online BA Course", "Online BSC Course", "Online BJMC Course",
  "Online & Distance Diploma Courses", "PGP Courses", "Certificate Course"
]

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Youtube, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"> {/* Increased grid columns */}
          {/* Logo and Social Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <img src="https://i.ibb.co/jyrRSkf/Sarthi.png" alt="Career Sarathi logo" className="h-24" />
            </Link>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link 
                    key={index} 
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Want to discuss your goals?</h3>
              <p className="text-sm">Our experts are here to make it happen.</p>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call now
              </Button>
            </div>
          </div>

          {/* Contact Us Section */}
          <div> {/* New section */}
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm mb-2">
              <Mail className="inline-block w-4 h-4 mr-2 align-middle" /> info@careersaathi.com
            </p>
            <p className="text-sm">
              <Phone className="inline-block w-4 h-4 mr-2 align-middle" /> +91-1234567890
            </p>
          </div>

          {/* Universities Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Online & Distance Universities</h3>
            <ul className="space-y-2">
              {universities.map((uni, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                    {uni}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Distance Courses Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Distance Courses</h3>
            <ul className="space-y-2">
              {distanceCourses.map((course, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Courses and MBA Specializations */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Online Courses</h3>
              <ul className="space-y-2">
                {onlineCourses.map((course, index) => (
                  <li key={index}>
                    <Link href="#" className="text-sm hover:text-blue-400 transition-colors">
                      {course}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} CareerSprint Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
  }

