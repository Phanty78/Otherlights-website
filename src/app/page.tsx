'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

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
              className="text-2xl font-bold text-yellow-400 pl-4 flex items-center"
            >
              <Image
                src="/library_logo_transparent.webp"
                alt="Otherlights Hero"
                width={100}
                height={100}
                className="object-cover"
                priority
              />
              <h1 className=" text-yellow-400 ">Otherlights</h1>
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
                  className={`text-sm font-medium hover:text-yellow-400 transition-colors ${
                    activeSection === item.toLowerCase().replace(' ', '-')
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <button
              className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                  className="text-xl font-medium text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <Image
          src="/store_capsule_main2.webp"
          alt="Otherlights Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-4">
          <div className="sm:w-3/4 md:w-1/2 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/GeeKXMaHztc?si=Pa1T9VHYnHLjf7Ke"
              className="w-full h-full"
              title="Otherlights Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            An Action/RPG Roguelite designed
            <br /> for 1 to 4 players in local co-op.
          </p>
          <Link
            href="https://store.steampowered.com/app/2666000/Otherlights/"
            className="inline-flex items-center px-8 py-3 text-lg font-bold text-black bg-yellow-400 rounded-full hover:bg-yellow-300 transition-colors"
            target="_blank"
          >
            Play Now
          </Link>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
      </section>

      {/* Explore Section */}
      <section
        id="explore"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            Explore a Mystical World
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-xl">
                Explore a dark fantasy univers with an unique art style In this
                sunless world, nature, monsters and humans Evolved to survive.
              </p>
            </div>
            <Image
              src="/Arbre_Temps.webp"
              alt="Mystical Time Tree"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            Meet the Characters
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/village.webp"
              alt="Village Scene"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl order-2 md:order-1"
            />
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-xl">
                Unlock characters and progress in the roguelite quest completed
                secondary missions that take place in the past. All playable in
                local co-op.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinies Section */}
      <section
        id="destinies"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            Choose Your Destiny
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-xl">
                Choose upon more than 50 characters and 46 destinies that which
                brings you powerful passives skills
              </p>
            </div>
            <Image
              src="/planche_destinees.webp"
              alt="Character Destinies"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Build Section */}
      <section id="build" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            Craft Your Legend
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/Screenshot_Loot.webp"
              alt="Character Building"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl order-2 md:order-1"
            />
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-xl">
                Optimize your build with a large content of item, weapons and
                play styles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* World Section */}
      <section
        id="world"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            Find Your Way
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-xl">
                Explore a vast and interconnected world filled with secrets,
                challenges, and adventures.
              </p>
            </div>
            <Image
              src="/UI-Carte.webp"
              alt="World Map"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900" id="find-us">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
            Find us
          </h2>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            <Link
              href="https://www.instagram.com/otherlights_official/"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              target="_blank"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61568828963619"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              target="_blank"
            >
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link
              href="https://x.com/SolArtificiel"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              target="_blank"
            >
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.tiktok.com/@otherlights_game"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              target="_blank"
            >
              <FaTiktok className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.youtube.com/@Otherlights"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              target="_blank"
            >
              <FaYoutube className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/soleil-artificiel/"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://discord.gg/4kstZMUrAt"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              target="_blank"
            >
              <FaDiscord className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-gray-400">
            © 2024 Otherlights. All rights reserved.
          </p>
          <p className="text-gray-400">
            Website by Maël Donnart, hire me on{' '}
            <Link
              href="https://www.malt.fr/profile/maeldonnart?overview=true"
              target="_blank"
              className="text-yellow-400 hover:underline"
            >
              Malt
            </Link>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
