"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { trackCTAClick, trackNavigation } from "./gtm-events"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCTAClick = (location: string) => {
    trackCTAClick("Consulta Gratuita", location)
  }

  const handleNavClick = (linkText: string, destination: string) => {
    trackNavigation(linkText, destination)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="OVERBOOST AGENCY" width={120} height={65} className="h-20 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#servicios"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => handleNavClick("Servicios", "#servicios")}
            >
              Servicios
            </Link>
            <Link
              href="#enfoque"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => handleNavClick("Enfoque", "#enfoque")}
            >
              Enfoque
            </Link>
            <Link
              href="#casos"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => handleNavClick("Casos de Éxito", "#casos")}
            >
              Casos de Éxito
            </Link>
            <Link
              href="#contacto"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => handleNavClick("Contacto", "#contacto")}
            >
              Contacto
            </Link>
          </nav>

          <div className="hidden md:block">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-medium transition-all"
              onClick={() => handleCTAClick("navbar_desktop")}
            >
              Consulta Gratuita
            </button>
          </div>

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
            <nav className="flex flex-col space-y-4">
              <Link
                href="#servicios"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => handleNavClick("Servicios", "#servicios")}
              >
                Servicios
              </Link>
              <Link
                href="#enfoque"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => handleNavClick("Enfoque", "#enfoque")}
              >
                Enfoque
              </Link>
              <Link
                href="#casos"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => handleNavClick("Casos de Éxito", "#casos")}
              >
                Casos de Éxito
              </Link>
              <Link
                href="#contacto"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => handleNavClick("Contacto", "#contacto")}
              >
                Contacto
              </Link>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-medium transition-all w-full mt-2"
                onClick={() => handleCTAClick("navbar_mobile")}
              >
                Consulta Gratuita
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
