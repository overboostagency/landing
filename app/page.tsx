"use client"

import { NavBar } from "./components/navbar"
import { ServiceCard } from "./components/service-card"
import { ContactForm } from "./components/contact-form"
import { Footer } from "./components/footer"
import { VideoHero } from "./components/video-hero"
import { AnimatedCounter } from "./components/animated-counter"
// Import the ClientLogos component at the top of the file
import { ClientLogos } from "./components/client-logos"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <NavBar />

      {/* Hero Section with Video Background */}
      <VideoHero />

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border-l-2 border-red-500">
              <div className="text-4xl font-bold mb-2 flex items-end">
                <AnimatedCounter end={200} prefix="+" className="text-red-500" />
                <span className="text-sm text-gray-400 ml-2 mb-1">%</span>
              </div>
              <p className="text-gray-400">Aumento promedio en ROI</p>
            </div>

            <div className="p-6 border-l-2 border-red-500">
              <div className="text-4xl font-bold mb-2 flex items-end">
                <AnimatedCounter end={50} prefix="+" className="text-red-500" />
                <span className="text-sm text-gray-400 ml-2 mb-1">M</span>
              </div>
              <p className="text-gray-400">Presupuesto gestionado</p>
            </div>

            <div className="p-6 border-l-2 border-red-500">
              <div className="text-4xl font-bold mb-2 flex items-end">
                <AnimatedCounter end={100} prefix="+" className="text-red-500" />
              </div>
              <p className="text-gray-400">Clientes satisfechos</p>
            </div>

            <div className="p-6 border-l-2 border-red-500">
              <div className="text-4xl font-bold mb-2 flex items-end">
                <span className="text-red-500 flex">
                  <AnimatedCounter end={24} />
                  <span>/7</span>
                </span>
              </div>
              <p className="text-gray-400">Monitoreo de campañas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section - AHORA PRIMERO */}
      <section id="enfoque" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70"></div>
          <img
            src="/images/speed-lines-bg.png"
            alt="Speed lines"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="backdrop-blur-sm bg-black/30 p-6 rounded-sm border border-zinc-800">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Nuestro <span className="text-red-500">Enfoque</span>
              </h2>
              <p className="text-xl text-white mb-8">
                Como un equipo de F1, optimizamos cada componente de tu estrategia de marketing para alcanzar la máxima
                velocidad y eficiencia.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-red-500 p-3 rounded-sm h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Análisis de Datos</h3>
                    <p className="text-gray-400">
                      Utilizamos datos en tiempo real para tomar decisiones informadas y ajustar estrategias al
                      instante.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-500 p-3 rounded-sm h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optimización Continua</h3>
                    <p className="text-gray-400">
                      Mejoramos constantemente el rendimiento de tus campañas para maximizar el ROI.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-500 p-3 rounded-sm h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Equipo Especializado</h3>
                    <p className="text-gray-400">
                      Expertos en cada área del marketing digital trabajando en sinergia para tu éxito.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Eliminados los círculos rojos decorativos para que se aprecie mejor la imagen de fondo */}
              <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-sm border border-zinc-700">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Resultados Medibles</h3>
                  <p className="text-gray-400 mb-6">
                    Nuestro enfoque basado en datos te permite ver el impacto real de cada inversión.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Conversiones</span>
                      <span className="text-red-500 font-bold">+175%</span>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Reducción de CPA</span>
                      <span className="text-red-500 font-bold">-45%</span>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Aumento de ROAS</span>
                      <span className="text-red-500 font-bold">+220%</span>
                    </div>
                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - AHORA SEGUNDO */}
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
              description="Campañas de alto rendimiento en Google, Meta, TikTok y más plataformas."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
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
              }
              link="/servicios/paid-media"
            />
            <ServiceCard
              title="SEO Técnico"
              description="Optimización para motores de búsqueda con enfoque en resultados medibles."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              }
            />
            <ServiceCard
              title="Analítica Avanzada"
              description="Medición precisa y análisis de datos para optimizar cada campaña."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              }
            />
            <ServiceCard
              title="Email Marketing"
              description="Estrategias de nurturing y conversión para maximizar el valor del cliente."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
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
              }
            />
            <ServiceCard
              title="Automatización"
              description="Procesos automatizados para escalar tus campañas sin perder eficiencia."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              }
            />
            <ServiceCard
              title="Consultoría"
              description="Asesoramiento estratégico para potenciar tu departamento de marketing."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              }
            />
            <ServiceCard
              title="Ecommerce"
              description="Creación y optimización de tiendas online diseñadas para escalar y maximizar la conversión."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              }
            />
            <ServiceCard
              title="Landing Pages"
              description="Diseño de páginas de aterrizaje de alta conversión como parte integral de tu estrategia de adquisición."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              }
            />
            <ServiceCard
              title="CRM"
              description="Implementación y gestión de sistemas CRM para optimizar el seguimiento de leads y campañas."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Testimonials */}
      <section id="casos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Lo Que Dicen <span className="text-red-500">Nuestros Clientes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experiencias reales de clientes satisfechos con nuestros servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "OVERBOOST transformó nuestra estrategia digital. Aumentamos nuestro ROI en un 300% en solo 3 meses. Su
                enfoque basado en datos es exactamente lo que necesitábamos."
              </p>
              <div>
                <h4 className="font-bold">Carlos Méndez</h4>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Probamos muchas agencias y ninguna daba en la tecla con el rendimiento de los anuncios. Es clave contar
                con un equipo especializado en esta área."
              </p>
              <div>
                <h4 className="font-bold">Laura Gutiérrez</h4>
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "El equipo de OVERBOOST entiende perfectamente cómo convertir datos en estrategias efectivas. Han
                revolucionado nuestra presencia digital y nuestros ingresos."
              </p>
              <div>
                <h4 className="font-bold">Miguel Ángel Rodríguez</h4>
              </div>
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
              ¿Listo para <span className="text-red-500">acelerar</span> tu marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Agenda una consulta gratuita y descubre cómo podemos potenciar tus resultados.
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
              <span>Contactar ahora</span>
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
