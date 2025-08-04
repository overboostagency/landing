"use client"

import { Zap, BarChart, Target, Users, Search, Mail, Megaphone, PieChart, ArrowRight } from 'lucide-react'
import { NavBar } from "../components/navbar"
import { ServiceCard } from "../components/service-card"
import { ContactForm } from "../components/contact-form"
import { Footer } from "../components/footer"
import { ClientLogos } from "../components/client-logos"

export default function MarketingPage() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-red-600/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="text-sm font-mono tracking-wider bg-red-600 px-4 py-2 rounded-sm">
                Performance Marketing
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Convertimos presupuestos de marketing en <span className="text-red-500">motores de ingresos</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Estrategias de marketing digital orientadas a resultados. Maximizamos tu ROI con campañas inteligentes,
              automatización avanzada y análisis de datos en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("contacto")}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm font-medium transition-all flex items-center gap-2 justify-center"
              >
                <span>Acelera tu crecimiento</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="border border-white/30 hover:border-white/60 px-8 py-3 rounded-sm font-medium transition-all"
              >
                Ver servicios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestros <span className="text-red-500">Servicios</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Estrategias de marketing digital diseñadas para maximizar tu rendimiento y superar a la competencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Paid Media"
              description="Campañas de alto rendimiento en Google, Meta, y más plataformas."
              icon={<Target className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="SEO Técnico"
              description="Optimización para motores de búsqueda con enfoque en resultados medibles."
              icon={<Search className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Analítica Avanzada"
              description="Medición precisa y análisis de datos para optimizar cada campaña."
              icon={<BarChart className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Email Marketing"
              description="Estrategias de nurturing y conversión para maximizar el valor del cliente."
              icon={<Mail className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Automatización"
              description="Procesos automatizados para escalar tus campañas sin perder eficiencia."
              icon={<Zap className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Consultoría"
              description="Asesoramiento estratégico para potenciar tu departamento de marketing."
              icon={<Users className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Ecommerce"
              description="Creación y optimización de tiendas online diseñadas para escalar y maximizar la conversión."
              icon={<Megaphone className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Landing Pages"
              description="Diseño de páginas de aterrizaje de alta conversión como parte integral de tu estrategia de adquisición."
              icon={<PieChart className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="CRM"
              description="Implementación y gestión de sistemas CRM para optimizar el seguimiento de leads y campañas."
              icon={<Users className="h-6 w-6 text-white" />}
            />
          </div>
        </div>
      </section>

      {/* Resto del contenido... */}
      <Footer />
    </main>
  )
}
