"use client"

import { useState, useRef, useEffect } from "react"

export function VideoHero() {
  const [videoEnded, setVideoEnded] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoEnded = () => {
    setVideoEnded(true)
    setTimeout(() => {
      setContentVisible(true)
    }, 500)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoEnded(true)
        setContentVisible(true)
      })
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-all duration-1000 ${videoEnded ? "brightness-[0.3]" : "brightness-100"}`}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VELOCIMETRO%20FINAL%20720-4cLKl968QFJd1ePIMB4QUcCuEcjuCh.mov"
          muted
          playsInline
          onEnded={handleVideoEnded}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>
        {videoEnded && (
          <>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-red-600/10 to-transparent"></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-4 inline-block">
            <span className="text-sm font-mono tracking-wider bg-red-600 px-3 py-1 rounded-sm">
              Agencia de software especializada en IA
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Agentes de IA que actúan
            <br />
            <span className="text-red-500">Compañías que crecen</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Diseñamos y construimos agentes de IA a medida que se integran a tus operaciones, resuelven tareas
            repetitivas y desbloquean crecimiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm font-medium transition-all flex items-center gap-2 justify-center"
            >
              <span>Conversemos sobre IA  </span>
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
              onClick={() => scrollToSection("servicios")}
              className="border border-white/30 hover:border-white/60 px-8 py-3 rounded-sm font-medium transition-all"
            >
              Ver servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
