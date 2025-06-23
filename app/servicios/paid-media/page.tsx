"use client"

import { NavBar } from "@/app/components/navbar"
import { Footer } from "@/app/components/footer"
import { ContactForm } from "@/app/components/contact-form"
import { useEffect } from "react"

export default function PaidMediaPage() {
  // Efecto para asegurar que la página se cargue desde arriba
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-t from-red-600/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 inline-block">
              <span className="text-sm font-mono tracking-wider bg-red-600 px-3 py-1 rounded-sm">SERVICIOS</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Paid Media <span className="text-red-500">Estratégico</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Campañas publicitarias de alto rendimiento que maximizan tu ROI y superan a la competencia.
            </p>
          </div>
        </div>
      </section>

      {/* What is Paid Media Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Qué es <span className="text-red-500">Paid Media</span>?
              </h2>

              <p className="text-lg text-gray-300 mb-6">
                Paid Media es la estrategia de marketing digital que consiste en la creación, gestión y optimización de
                campañas publicitarias de pago en plataformas digitales para alcanzar objetivos específicos de negocio.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                En OVERBOOST, no solo ejecutamos campañas, sino que desarrollamos estrategias completas basadas en datos
                que maximizan cada peso invertido, generando resultados medibles y escalables.
              </p>

              <div className="bg-zinc-800/80 p-6 border-l-2 border-red-500 mt-8">
                <p className="text-xl italic text-gray-300">
                  "La publicidad digital efectiva no se trata de gastar más, sino de gastar más inteligentemente."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-red-500/20 to-red-600/40 absolute -top-20 -right-20 w-1/2"></div>
              <div className="aspect-square rounded-full bg-gradient-to-tr from-red-600/30 to-red-500/10 absolute -bottom-20 -left-20 w-1/2"></div>

              <div className="relative bg-zinc-800/80 p-8 rounded-sm border border-zinc-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-zinc-900/70 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
                    <div className="text-4xl font-bold text-red-500 mb-2">+220%</div>
                    <p className="text-gray-400">Aumento promedio en ROAS</p>
                  </div>

                  <div className="text-center p-4 bg-zinc-900/70 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
                    <div className="text-4xl font-bold text-red-500 mb-2">-45%</div>
                    <p className="text-gray-400">Reducción en CPA</p>
                  </div>

                  <div className="text-center p-4 bg-zinc-900/70 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
                    <div className="text-4xl font-bold text-red-500 mb-2">+85%</div>
                    <p className="text-gray-400">Incremento en CTR</p>
                  </div>

                  <div className="text-center p-4 bg-zinc-900/70 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
                    <div className="text-4xl font-bold text-red-500 mb-2">+175%</div>
                    <p className="text-gray-400">Conversiones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestros <span className="text-red-500">Servicios</span> de Paid Media
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Soluciones personalizadas para cada plataforma y objetivo de negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group">
              <div className="bg-red-500/20 p-4 rounded-sm mb-6 w-fit group-hover:bg-red-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Google Ads</h3>
              <p className="text-gray-400 mb-4">
                Campañas de Search, Display, Shopping y YouTube optimizadas para maximizar conversiones y reducir el
                costo por adquisición.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Estrategia de palabras clave
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Optimización de pujas
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Creación de anuncios de alto rendimiento
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group">
              <div className="bg-red-500/20 p-4 rounded-sm mb-6 w-fit group-hover:bg-red-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Meta Ads</h3>
              <p className="text-gray-400 mb-4">
                Campañas en Facebook e Instagram diseñadas para generar awareness, engagement y conversiones con
                segmentación avanzada.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Segmentación avanzada de audiencias
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Creación de creatividades impactantes
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Optimización de campañas con IA
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group">
              <div className="bg-red-500/20 p-4 rounded-sm mb-6 w-fit group-hover:bg-red-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">LinkedIn & Twitter Ads</h3>
              <p className="text-gray-400 mb-4">
                Estrategias B2B y de generación de leads en plataformas profesionales con enfoque en conversión y
                calidad.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Campañas de generación de leads B2B
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Segmentación por cargo y empresa
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Optimización de formularios de captura
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group">
              <div className="bg-red-500/20 p-4 rounded-sm mb-6 w-fit group-hover:bg-red-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">TikTok & YouTube Ads</h3>
              <p className="text-gray-400 mb-4">
                Publicidad en video optimizada para captar la atención de audiencias jóvenes y generar engagement de
                alta calidad.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Optimización de campañas de video
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Estrategias para Gen Z y Millennials
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Optimización para visualizaciones y conversiones
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group">
              <div className="bg-red-500/20 p-4 rounded-sm mb-6 w-fit group-hover:bg-red-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Remarketing Avanzado</h3>
              <p className="text-gray-400 mb-4">
                Estrategias de seguimiento y reconversión para recuperar usuarios que han interactuado con tu marca pero
                no han convertido.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Segmentación por comportamiento
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Personalización de mensajes
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Optimización de frecuencia y secuencia
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group">
              <div className="bg-red-500/20 p-4 rounded-sm mb-6 w-fit group-hover:bg-red-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Estrategia de Audiencias</h3>
              <p className="text-gray-400 mb-4">
                Desarrollo y segmentación de audiencias basadas en datos para maximizar la relevancia y efectividad de
                tus campañas.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Creación de buyer personas
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Lookalike audiences
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Segmentación por intereses y comportamiento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-zinc-900/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-red-600/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestro <span className="text-red-500">Enfoque</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un proceso metódico y basado en datos para maximizar el rendimiento de tus campañas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <div className="bg-red-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Análisis y Estrategia</h3>
              <p className="text-gray-400">
                Estudiamos tu negocio, competencia y mercado para desarrollar una estrategia personalizada que maximice
                resultados.
              </p>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <div className="bg-red-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Implementación</h3>
              <p className="text-gray-400">
                Configuramos campañas con estructuras optimizadas, segmentación precisa y creatividades de alto impacto.
              </p>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <div className="bg-red-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Optimización</h3>
              <p className="text-gray-400">
                Monitoreamos y ajustamos continuamente las campañas para mejorar el rendimiento y reducir costos.
              </p>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <div className="bg-red-500 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Análisis y Escalado</h3>
              <p className="text-gray-400">
                Analizamos resultados, identificamos oportunidades y escalamos las estrategias exitosas para maximizar
                el ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-zinc-900 to-black relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Potencia tu negocio con <span className="text-red-500">Paid Media</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Agenda una consulta gratuita y descubre cómo podemos transformar tu estrategia de publicidad digital.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contacto")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-medium transition-all text-lg inline-flex items-center gap-2"
            >
              <span>Solicitar propuesta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Hablemos sobre tu <span className="text-red-500">Estrategia</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Estamos listos para impulsar tus campañas de Paid Media al siguiente nivel. Cuéntanos sobre tu proyecto.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/20 p-3 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-gray-400">Comercial: +54 3413762699</p>
                    <p className="text-gray-400">Soporte: +54 3416111183</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-red-500/20 p-3 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-400">overboost.agency@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-red-500/20 p-3 rounded-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Ubicación</h3>
                    <p className="text-gray-400">Rosario, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
