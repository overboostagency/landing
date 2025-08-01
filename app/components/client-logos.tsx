import Image from "next/image"

export function ClientLogos() {
  const logos = [
    { src: "/logos/tannery.png", alt: "Tannery" },
    { src: "/logos/huapi.png", alt: "Huapi" },
    { src: "/logos/aplus.png", alt: "A+" },
    { src: "/logos/zohara.png", alt: "Zohara" },
    { src: "/logos/velvet.png", alt: "Velvet" },
    { src: "/logos/alm.png", alt: "ALM" },
    { src: "/logos/sancristobal.png", alt: "San Cristobal" },
    { src: "/logos/vandalia.png", alt: "Vandalia" },
    { src: "/logos/rinaldi.png", alt: "Rinaldi" },
    { src: "/logos/ramasco.png", alt: "Ramasco Padilla" },
  ]

  return (
    <section id="clientes" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Confiaron en <span className="text-red-500">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empresas que han acelerado su crecimiento.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-zinc-800/30 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 scale-[1.2] transform"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
