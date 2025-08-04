"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export function SegmentedControl() {
  const pathname = usePathname()
  const router = useRouter()
  const [activeSegment, setActiveSegment] = useState<"ai" | "marketing">("ai")

  useEffect(() => {
    setActiveSegment(pathname === "/marketing" ? "marketing" : "ai")
  }, [pathname])

  const handleSegmentChange = (segment: "ai" | "marketing") => {
    setActiveSegment(segment)
    if (segment === "ai") {
      router.push("/")
    } else {
      router.push("/marketing")
    }
  }

  return (
    <div className="relative bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/40 p-0.5 flex items-center rounded-md">
      {/* Indicador activo animado */}
      <div
        className={`absolute top-0.5 bottom-0.5 bg-red-600/90 rounded-sm transition-all duration-200 ease-out shadow-sm ${
          activeSegment === "ai" ? "left-0.5 w-[calc(50%-2px)]" : "right-0.5 w-[calc(50%-2px)]"
        }`}
      />

      {/* Segmento IA */}
      <button
        onClick={() => handleSegmentChange("ai")}
        className={`relative z-10 px-3 py-1.5 text-xs font-semibold rounded-sm transition-all duration-150 min-w-[36px] text-center pl-5 ${
          activeSegment === "ai" ? "text-white" : "text-gray-400 hover:text-gray-200"
        }`}
      >
        IA
      </button>

      {/* Segmento MKT */}
      <button
        onClick={() => handleSegmentChange("marketing")}
        className={`relative z-10 px-3 py-1.5 text-xs font-semibold rounded-sm transition-all duration-150 min-w-[36px] text-center ml-2.5 ${
          activeSegment === "marketing" ? "text-white" : "text-gray-400 hover:text-gray-200"
        }`}
      >
        MKT
      </button>
    </div>
  )
}
