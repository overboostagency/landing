"use client"

import { Bot, Zap, BarChart, Code, Database, ShieldCheck, Rocket, Repeat, Layers, Cpu } from "lucide-react"
import { NavBar } from "./components/navbar"
import { ServiceCard } from "./components/service-card"
import { ContactForm } from "./components/contact-form"
import { Footer } from "./components/footer"
import { VideoHero } from "./components/video-hero"
import { ClientLogos } from "./components/client-logos"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />
      <VideoHero />

      {/* Qué Hacemos Section */}
      <section
        id="que-hacemos"
        className="py-32 bg-gradient-to-b from-black via-zinc-900/80 to-zinc-900/50 relative overflow-hidden"
      >
        {/* Efectos visuales de fondo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge superior */}
          <div className="mb-8 inline-block">
            <h2 className="text-sm font-mono tracking-wider bg-red-600/20 text-red-400 px-3 py-1 rounded-sm inline-block">
              Quénes somos
            </h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Somos un{" "}
            <span className="text-red-500 relative">
              estudio de desarrollo de IA
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-red-400/50 rounded-full"></div>
            </span>
          </h1>

          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Diseñamos, construimos y mantenemos agentes inteligentes para compañías ambiciosas. Nos encargamos de todo
              el ciclo de vida: descubrimiento, arquitectura, entrenamiento, integración y MLOps.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          {/* Título principal de la sección */}
          <div className="text-center mb-3.5">
            <h2 className="text-sm font-mono tracking-wider bg-red-600/20 text-red-400 px-3 py-1 rounded-sm inline-block mb-4">
              Servicios
            </h2>
          </div>

          {/* Core Service: Agentes de IA a medida */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Agentes de IA a Medida</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ServiceCard
              title="Agentes de Atención al Cliente"
              description="Resuelven consultas automáticamente y escalan solo los casos complejos al equipo humano."
              icon={<Bot className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Agentes de Ventas y Upselling"
              description="Detectan oportunidades comerciales, califican leads y hacen seguimiento 24/7."
              icon={<Rocket className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Agentes de Operaciones"
              description="Sincronizan datos entre sistemas, ERPs, CRMs y automatizar procesos internos."
              icon={<Repeat className="h-6 w-6 text-white" />}
            />
          </div>

          {/* Automatización e Integración */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Automatización y Data </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ServiceCard
              title="APIs & RPA"
              description="Conectamos aplicaciones cloud y sistemas legacy."
              icon={<Code className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Ingeniería de Datos"
              description="Datos limpios y vivos para tus agentes."
              icon={<Database className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Orquestación & Monitoreo"
              description="Dashboards y alertas en tiempo real."
              icon={<BarChart className="h-6 w-6 text-white" />}
            />
          </div>

          {/* Performance Marketing */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">Performance Marketing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Paid Media & Growth"
              description="Campañas orientadas a adquisición."
              icon={<Zap className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Análisis de sentimiento"
              description="Analiza miles de reviews para mejorar tus productos."
              icon={<BarChart className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Automatización CRM"
              description="Email, chat y nurturing inteligente."
              icon={<Bot className="h-6 w-6 text-white" />}
            />
          </div>
          {/* Performance Marketing CTA */}
          <div className="text-center mt-12">
            <Link
              href="/marketing"
              className="inline-flex items-center gap-2 bg-transparent border border-red-500/30 hover:border-red-500 hover:bg-red-500/10 text-red-400 hover:text-red-300 px-6 py-3 rounded-sm font-medium transition-all group"
            >
              <span>Ver todos los servicios de Performance Marketing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 group-hover:translate-x-1 transition-transform"
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
            </Link>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section id="proceso" className="py-20 bg-zinc-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestro <span className="text-red-500">Proceso</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un flujo optimizado que nos lleva del concepto a la producción en tiempo récord
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Línea de conexión principal */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500/20 via-red-500 to-red-500/20 hidden lg:block transform -translate-y-1/2"></div>

            {/* Pasos del proceso */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {[
                {
                  number: "01",
                  title: "Discovery Jam",
                  description: "Sesión técnica‑negocio para detectar quick wins.",
                  icon: "🔍",
                },
                {
                  number: "02",
                  title: "Prototipado",
                  description: "PoC funcional validado con tu propio dato.",
                  icon: "⚡",
                },
                {
                  number: "03",
                  title: "Sprints de Desarrollo",
                  description: "Ciclos ágiles para llegar a producción.",
                  icon: "🚀",
                },
                {
                  number: "04",
                  title: "Deploy Seguro",
                  description: "Pruebas de carga, seguridad y compliance.",
                  icon: "🛡️",
                },
                {
                  number: "05",
                  title: "MLOps Continuo",
                  description: "Monitorizamos, afinamos y escalamos.",
                  icon: "📊",
                },
              ].map((step, index) => (
                <div key={index} className="relative group">
                  {/* Tarjeta del paso */}
                  <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:bg-zinc-800/80">
                    {/* Número del paso */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-red-500/60">{step.number}</span>
                      <span className="text-2xl">{step.icon}</span>
                    </div>

                    {/* Contenido */}
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-red-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                    {/* Indicador de progreso */}
                    <div className="mt-4 w-full bg-zinc-700 rounded-full h-1">
                      <div
                        className="bg-gradient-to-r from-red-500 to-red-400 h-1 rounded-full transition-all duration-500 group-hover:from-red-400 group-hover:to-red-300"
                        style={{ width: `${(index + 1) * 20}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Flecha de conexión móvil */}
                  {index < 4 && (
                    <div className="flex justify-center my-4 lg:hidden">
                      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Estadísticas del proceso */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-zinc-800 border-b mb-0 pb-16 mt-20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">10</div>
                <div className="text-sm text-gray-400">Días para PoC</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">99%</div>
                <div className="text-sm text-gray-400">Uptime garantizado</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Monitoreo continuo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">∞</div>
                <div className="text-sm text-gray-400">Escalabilidad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Casos de Uso Section */}
      <section id="casos-de-uso" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Casos de <span className="text-red-500">Uso</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <h3 className="text-xl font-bold mb-3">Retail e-commerce</h3>
              <p className="text-gray-400">
                Agente de soporte que reduce tiempos de respuesta y libera al equipo humano.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <h3 className="text-xl font-bold mb-3">Fintech B2B</h3>
              <p className="text-gray-400">Agente de onboarding que automatiza verificación y activación de cuentas.</p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <h3 className="text-xl font-bold mb-3">SaaS Scale-up</h3>
              <p className="text-gray-400">
                Agente de RevOps que mantiene datos limpios entre CRM, billing y analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué Overboost Section */}
      <section id="porque-overboost" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ¿Por qué <span className="text-red-500">Overboost</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cpu className="h-8 w-8 text-red-500" />,
                title: "Enfoque 100% en Agentes",
                description: "Nos dedicamos exclusivamente al software de agentes inteligentes.",
              },
              {
                icon: <Layers className="h-8 w-8 text-red-500" />,
                title: "Equipo Senior",
                description: "Expertos en AI, producto y diseño de procesos.",
              },
              {
                icon: <Rocket className="h-8 w-8 text-red-500" />,
                title: "Entrega Rápida, Escalado Cuidadoso",
                description: "Del MVP a producción en semanas, no meses.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
                title: "Transparencia Total",
                description: "Colaboración y comunicación de principio a fin.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-r from-black via-zinc-900 to-black relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Construyamos tu primer <span className="text-red-500">agente</span>
            </h2>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contacto")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-medium transition-all text-lg inline-flex items-center gap-2"
            >
              <span>Agenda una llamada</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ponte en <span className="text-red-500">Contacto</span>
              </h2>
              <p className="text-xl text-gray-300">
                Estamos listos para impulsar tu negocio al siguiente nivel. Cuéntanos sobre tu proyecto.
              </p>
            </div>
            <div id="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
