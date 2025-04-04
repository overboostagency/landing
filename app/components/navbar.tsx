"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <Link href="#servicios" className="text-gray-300 hover:text-white transition-colors">
              Servicios
            </Link>
            <Link href="#enfoque" className="text-gray-300 hover:text-white transition-colors">
              Enfoque
            </Link>
            <Link href="#casos" className="text-gray-300 hover:text-white transition-colors">
              Casos de Éxito
            </Link>
            <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="hidden md:block">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-medium transition-all">
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
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#enfoque"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Enfoque
              </Link>
              <Link
                href="#casos"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos de Éxito
              </Link>
              <Link
                href="#contacto"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-medium transition-all w-full mt-2">
                Consulta Gratuita
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

