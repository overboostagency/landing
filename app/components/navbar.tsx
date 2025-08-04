"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { trackCTAClick, trackNavigation } from "./gtm-events"
import { SegmentedControl } from "./segmented-control"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleCTAClick = (location: string) => {
    trackCTAClick("Agenda una llamada", location)
    scrollToSection("contacto")
  }

  const handleNavClick = (linkText: string, sectionId: string) => {
    trackNavigation(linkText, `#${sectionId}`)
    scrollToSection(sectionId)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo y Segmented Control */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="OVERBOOST AGENCY" width={120} height={65} className="h-20 w-auto" />
            </Link>
            <div className="hidden md:block">
              <SegmentedControl />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("Servicios", "servicios")}
              className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => handleNavClick("Proceso", "proceso")}
              className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Proceso
            </button>
            <button
              onClick={() => handleNavClick("Casos de Uso", "casos-de-uso")}
              className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Casos de Uso
            </button>
            <button
              onClick={() => handleNavClick("Contacto", "contacto")}
              className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => handleCTAClick("navbar_desktop")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-medium transition-all"
            >
              Agenda una llamada
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            {/* Segmented Control - Mobile */}
            <div className="mb-6 flex justify-center">
              <SegmentedControl />
            </div>

            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick("Servicios", "servicios")}
                className="text-gray-300 hover:text-white transition-colors py-2 text-left bg-transparent border-none"
              >
                Servicios
              </button>
              <button
                onClick={() => handleNavClick("Proceso", "proceso")}
                className="text-gray-300 hover:text-white transition-colors py-2 text-left bg-transparent border-none"
              >
                Proceso
              </button>
              <button
                onClick={() => handleNavClick("Casos de Uso", "casos-de-uso")}
                className="text-gray-300 hover:text-white transition-colors py-2 text-left bg-transparent border-none"
              >
                Casos de Uso
              </button>
              <button
                onClick={() => handleNavClick("Contacto", "contacto")}
                className="text-gray-300 hover:text-white transition-colors py-2 text-left bg-transparent border-none"
              >
                Contacto
              </button>
              <button
                onClick={() => handleCTAClick("navbar_mobile")}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-medium transition-all w-full mt-2"
              >
                Agenda una llamada
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
