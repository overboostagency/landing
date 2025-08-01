"use client"

import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 transform rotate-45"></div>
              <span className="text-xl font-bold">OVERBOOST</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Potenciamos tu negocio con estrategias de marketing digital que generan resultados reales y medibles.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/overboost.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/overboost-agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Paid Media
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  SEO
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Email Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@overboost.agency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 OVERBOOST Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
