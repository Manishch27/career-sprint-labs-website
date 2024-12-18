'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { GraduationCap, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { universities } from '@/data/universities'
import { useForm } from 'react-hook-form';

export function PopupForm() {
  const [isOpen, setIsOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [courses, setCourses] = useState<string[]>([]);

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setIsOpen(false)
    localStorage.setItem('popupFormSubmitted', 'true')
    // Handle form submission (e.g., send data to server)
  };

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('popupFormSubmitted')
    if (!hasSubmitted) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // Extract unique course programs from universities data
    const courseOptions = Array.from(
      new Set(universities.flatMap((uni) => uni.courses.map((course) => course.program)))
    );
    setCourses(courseOptions);
  }, []);


  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-2xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader className="px-4 py-6 sm:px-6 sm:py-8">
                <div className="flex justify-between items-start">
                  <div>
                    <DialogTitle className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-white">
                      <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8" /> Get Expert Guidance
                    </DialogTitle>
                    <DialogDescription className="text-blue-200 mt-2">
                      Fill out the form below to receive personalized guidance on your educational journey.
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-4 py-2 sm:px-6 sm:py-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    {...register('name', { required: 'Name is required' })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studyLevel" className="text-white">Study Level</Label>
                  <Select {...register('studyLevel')}>
                    <SelectTrigger id="studyLevel" className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select study level" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <DialogFooter className="sm:px-6 py-4">
                  <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    <Send className="w-4 h-4 mr-2" />
                    Get Expert Guidance
                  </Button>
                </DialogFooter>
              </form>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

