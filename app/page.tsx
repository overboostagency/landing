import { NavBar } from "./components/navbar"
import { ServiceCard } from "./components/service-card"
import { ContactForm } from "./components/contact-form"
import { Footer } from "./components/footer"
import { VideoHero } from "./components/video-hero"

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
                <span className="text-red-500">+200</span>
                <span className="text-sm text-gray-400 ml-2 mb-1">%</span>
              </div>
              <p className="text-gray-400">Aumento promedio en ROI</p>
            </div>

            <div className="p-6 border-l-2 border-red-500">
              <div className="text-4xl font-bold mb-2 flex items-end">
                <span className="text-red-500">+50</span>
                <span className="text-sm text-gray-400 ml-2 mb-1">M</span>
              </div>
              <p className="text-gray-400">Presupuesto gestionado</p>
            </div>

            <div className="p-6 border-l-2 border-red-500">
              <div className="text-4xl font-bold mb-2 flex items-end">
                <span className="text-red-500">+100</span>
              </div>
              <p className="text-gray-400">Clientes satisfechos</p>
            </div>

            <div className="p-6 border-l-2 border-red-500">
              <div className="text-4xl font-bold mb-2 flex items-end">
                <span className="text-red-500">24/7</span>
              </div>
              <p className="text-gray-400">Monitoreo de campañas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
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
              icon="target"
            />
            <ServiceCard
              title="SEO Técnico"
              description="Optimización para motores de búsqueda con enfoque en resultados medibles."
              icon="search"
            />
            <ServiceCard
              title="Analítica Avanzada"
              description="Medición precisa y análisis de datos para optimizar cada campaña."
              icon="bar-chart"
            />
            <ServiceCard
              title="Email Marketing"
              description="Estrategias de nurturing y conversión para maximizar el valor del cliente."
              icon="mail"
            />
            <ServiceCard
              title="Automatización"
              description="Procesos automatizados para escalar tus campañas sin perder eficiencia."
              icon="settings"
            />
            <ServiceCard
              title="Consultoría"
              description="Asesoramiento estratégico para potenciar tu departamento de marketing."
              icon="users"
            />
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-zinc-900/50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-600/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-red-600/10 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Nuestro <span className="text-red-500">Enfoque</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
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
              <div className="aspect-square rounded-full bg-gradient-to-br from-red-500/20 to-red-600/40 absolute -top-20 -right-20 w-1/2"></div>
              <div className="aspect-square rounded-full bg-gradient-to-tr from-red-600/30 to-red-500/10 absolute -bottom-20 -left-20 w-1/2"></div>

              <div className="relative bg-zinc-800/80 p-8 rounded-sm border border-zinc-700">
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Lo Que Dicen <span className="text-red-500">Nuestros Clientes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Empresas que han acelerado su crecimiento con nuestras estrategias.
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
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Carlos Méndez</h4>
                  <p className="text-gray-400 text-sm">Director de Marketing, TechSolutions</p>
                </div>
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
                "Después de trabajar con varias agencias, finalmente encontramos a OVERBOOST. Su capacidad para
                optimizar nuestras campañas y reducir el CPA ha sido impresionante."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Laura Gutiérrez</h4>
                  <p className="text-gray-400 text-sm">CEO, Moda Express</p>
                </div>
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
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-700 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Miguel Ángel Rodríguez</h4>
                  <p className="text-gray-400 text-sm">Director Comercial, Grupo Inmobiliario</p>
                </div>
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
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-medium transition-all text-lg inline-flex items-center gap-2">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ponte en <span className="text-red-500">Contacto</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Estamos listos para impulsar tu negocio al siguiente nivel. Cuéntanos sobre tu proyecto.
              </p>

              <div className="space-y-6 mb-8">
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
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-gray-400">+52 55 1234 5678</p>
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
                    <p className="text-gray-400">contacto@overboostagency.com</p>
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
                    <p className="text-gray-400">Ciudad de México, México</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-sm transition-all">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-sm transition-all">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-sm transition-all">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  </svg>
                </a>
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

