"use client"

import { Zap, BarChart, TrendingUp, Target, Users, Search, Mail, Megaphone, PieChart } from "lucide-react"
import { NavBar } from "../components/navbar"
import { ServiceCard } from "../components/service-card"
import { ContactForm } from "../components/contact-form"
import { Footer } from "../components/footer"
import { ClientLogos } from "../components/client-logos"

export default function MarketingPage() {
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
            <div className="mb-4 inline-block">
              <span className="text-sm font-mono tracking-wider bg-red-600 px-3 py-1 rounded-sm">
                Performance Marketing
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Crecimiento acelerado con
              <br />
              <span className="text-red-500">Performance Marketing</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Estrategias de marketing digital orientadas a resultados. Maximizamos tu ROI con campañas inteligentes,
              automatización avanzada y análisis de datos en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contacto")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm font-medium transition-all flex items-center gap-2 justify-center"
              >
                <span>Acelera tu crecimiento</span>
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
              <button
                onClick={() => {
                  const servicesSection = document.getElementById("servicios")
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
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
              Servicios de <span className="text-red-500">Performance Marketing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Soluciones integrales para maximizar tu retorno de inversión y acelerar el crecimiento de tu negocio.
            </p>
          </div>

          {/* Paid Media & Growth */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Paid Media & Growth</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ServiceCard
              title="Google Ads & SEM"
              description="Campañas optimizadas en Google Ads para maximizar conversiones y reducir CPA."
              icon={<Search className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Meta Ads & Social"
              description="Estrategias avanzadas en Facebook e Instagram con targeting preciso y creatividades de alto impacto."
              icon={<Users className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="LinkedIn Ads B2B"
              description="Campañas especializadas para generación de leads B2B y posicionamiento profesional."
              icon={<Target className="h-6 w-6 text-white" />}
            />
          </div>

          {/* CRO & Funnels */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">CRO & Funnels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ServiceCard
              title="Optimización de Conversiones"
              description="A/B testing y optimización continua para mejorar las tasas de conversión de tu sitio web."
              icon={<TrendingUp className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Diseño de Funnels"
              description="Construcción de embudos de conversión optimizados para cada etapa del customer journey."
              icon={<Zap className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Landing Pages"
              description="Desarrollo de páginas de aterrizaje de alta conversión con diseño centrado en resultados."
              icon={<Target className="h-6 w-6 text-white" />}
            />
          </div>

          {/* Automatización & Analytics */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Automatización & Analytics</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ServiceCard
              title="Marketing Automation"
              description="Flujos automatizados de email marketing, lead nurturing y customer lifecycle management."
              icon={<Mail className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Analytics & Reporting"
              description="Dashboards personalizados y reportes detallados para tomar decisiones basadas en datos."
              icon={<BarChart className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Attribution Modeling"
              description="Modelos de atribución avanzados para entender el verdadero impacto de cada canal."
              icon={<PieChart className="h-6 w-6 text-white" />}
            />
          </div>

          {/* Content & Brand */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Content & Brand</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Content Marketing"
              description="Estrategias de contenido que educan, enganchan y convierten a tu audiencia objetivo."
              icon={<Megaphone className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Análisis de sentimiento"
              description="Analiza miles de reviews para mejorar tus productos y estrategia de marca."
              icon={<BarChart className="h-6 w-6 text-white" />}
            />
            <ServiceCard
              title="Brand Performance"
              description="Medición y optimización del rendimiento de marca en todos los puntos de contacto."
              icon={<TrendingUp className="h-6 w-6 text-white" />}
            />
          </div>
        </div>
      </section>

      {/* Metodología Section */}
      <section id="metodologia" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestra <span className="text-red-500">Metodología</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un enfoque sistemático y orientado a datos para maximizar el rendimiento de tus campañas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Auditoría & Análisis",
                description: "Evaluación completa de tu situación actual y identificación de oportunidades.",
              },
              {
                step: "02",
                title: "Estrategia & Planning",
                description: "Desarrollo de estrategia personalizada con KPIs claros y roadmap detallado.",
              },
              {
                step: "03",
                title: "Implementación",
                description: "Ejecución de campañas con setup técnico completo y tracking avanzado.",
              },
              {
                step: "04",
                title: "Optimización Continua",
                description: "Monitoreo constante, testing y optimización basada en performance data.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-zinc-800/30 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all"
              >
                <div className="text-3xl font-bold text-red-500 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Casos de Éxito Section */}
      <section id="casos-exito" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Casos de <span className="text-red-500">Éxito</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <h3 className="text-xl font-bold mb-3">E-commerce Fashion</h3>
              <div className="text-2xl font-bold text-red-500 mb-2">+340% ROAS</div>
              <p className="text-gray-400">
                Incremento del retorno de inversión publicitaria mediante optimización de campañas y funnels.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <h3 className="text-xl font-bold mb-3">SaaS B2B</h3>
              <div className="text-2xl font-bold text-red-500 mb-2">-65% CPA</div>
              <p className="text-gray-400">
                Reducción del costo por adquisición mediante targeting avanzado y optimización de landing pages.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <h3 className="text-xl font-bold mb-3">Fintech</h3>
              <div className="text-2xl font-bold text-red-500 mb-2">+280% Leads</div>
              <p className="text-gray-400">
                Aumento en la generación de leads cualificados mediante estrategia multicanal integrada.
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
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Acelera tu <span className="text-red-500">crecimiento</span> hoy
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
              <span>Solicita tu auditoría gratuita</span>
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
                Hablemos de tu <span className="text-red-500">Crecimiento</span>
              </h2>
              <p className="text-xl text-gray-300">
                Agenda una consultoría gratuita y descubre cómo podemos acelerar el crecimiento de tu negocio.
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
