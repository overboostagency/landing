"use client"

import { useEffect, useRef } from "react"

interface PowerBarProps {
  value: number // 0-100
}

export function PowerBar({ value }: PowerBarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    const width = rect.width
    const height = rect.height
    const barHeight = height * 0.4
    const barY = (height - barHeight) / 2

    // Draw background bar
    ctx.beginPath()
    ctx.rect(0, barY, width, barHeight)
    ctx.fillStyle = "#333"
    ctx.fill()

    // Draw segments
    const segmentCount = 20
    const segmentWidth = width / segmentCount
    const segmentGap = 2
    const filledSegments = Math.floor((value / 100) * segmentCount)

    for (let i = 0; i < segmentCount; i++) {
      const segmentX = i * segmentWidth
      const isFilled = i < filledSegments

      ctx.beginPath()
      ctx.rect(segmentX + segmentGap / 2, barY + segmentGap / 2, segmentWidth - segmentGap, barHeight - segmentGap)

      // Create gradient for filled segments
      if (isFilled) {
        const gradient = ctx.createLinearGradient(segmentX, barY, segmentX, barY + barHeight)
        gradient.addColorStop(0, "#ef4444")
        gradient.addColorStop(1, "#b91c1c")
        ctx.fillStyle = gradient
      } else {
        ctx.fillStyle = "#222"
      }

      ctx.fill()
    }

    // Draw power text
    ctx.font = "bold 16px Arial"
    ctx.fillStyle = "#fff"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("POTENCIA", width / 2, barY / 2)

    // Draw value text
    ctx.font = "bold 16px Arial"
    ctx.fillStyle = "#fff"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${value}%`, width / 2, barY + barHeight + barY / 2)
  }, [value])

  return (
    <div className="w-full max-w-xs">
      <canvas ref={canvasRef} className="w-full h-20" style={{ width: "100%", height: "80px" }} />
    </div>
  )
}

