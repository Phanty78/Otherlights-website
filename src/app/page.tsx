'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import BuildSection from './components/Build'
import CharactersSection from './components/Characters'
import DestiniesSection from './components/Destinies'
import ExploreSection from './components/Explore'
import FindUsSection from './components/Footer'
import HeroSection from './components/Hero'
export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'explore',
        'characters',
        'destinies',
        'build',
        'world',
        'find-us',
      ]
      let current = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 shadow-md">
        <div className=" px-4 w-full">
          <div className="w-full flex justify-between items-center py-4">
            <Link
              href="/"
              className="text-2xl font-bold text-yellow-500 pl-4 flex items-center gap-4"
            >
              <Image
                src="/library_logo_transparent.webp"
                alt="Otherlights Logo"
                width={100}
                height={100}
                className="object-cover"
                priority
              />
              <h1 className=" text-yellow-500 font-morris-roman text-3xl">
                Otherlights
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-6 pr-4">
              {[
                'Explore',
                'Characters',
                'Destinies',
                'Build',
                'World',
                'Find Us',
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(' ', '-'))
                  }
                  className={`text-2xl font-medium hover:text-yellow-500 transition-colors font-parma-petit ${
                    activeSection === item.toLowerCase().replace(' ', '-')
                      ? 'text-yellow-500'
                      : 'text-gray-300'
                  }`}
                  aria-label={'scroll to ' + item + ' section'}
                  role="link"
                >
                  {item}
                </button>
              ))}
            </nav>
            <button
              className="md:hidden text-gray-300 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              role="button"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {['Explore', 'Characters', 'Destinies', 'Build', 'Find Us'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(' ', '-'))
                  }
                  className="text-xl font-medium text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}

      <HeroSection />

      <ExploreSection />

      <CharactersSection />

      <DestiniesSection />

      <BuildSection />

      <section id="world" className="py-20 relative">
        <Image
          src="/UI-Carte.webp"
          alt="World Map in background"
          fill
          className="object-cover opacity-40 z-10"
          loading="lazy"
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
        <div className="container mx-auto px-4 relative z-30">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500 font-parma-petit">
            Find Your Way
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-3xl font-parma-petit">
                Explore a vast and interconnected world filled with secrets,
                challenges, and adventures.
              </p>
            </div>
            {/* Image cliquable */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer"
              role="button"
              aria-label="Click to enlarge the world map"
            >
              <Image
                src="/UI-Carte.webp"
                alt="World Map (click to enlarge)"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Modal pour l'image agrandie */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-white text-3xl font-bold"
              >
                &times;
              </button>
              <Image
                src="/UI-Carte.webp"
                alt="World Map Enlarged"
                width={1200}
                height={800}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </section>

      <FindUsSection />
    </div>
  )
}
