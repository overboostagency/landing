"use client"

import { useEffect, useRef } from "react"

interface SpeedometerProps {
  value: number // 0-100
}

export function Speedometer({ value }: SpeedometerProps) {
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

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) * 0.8

    // Draw outer circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 10
    ctx.stroke()

    // Draw background arc
    const startAngle = Math.PI * 0.75
    const endAngle = Math.PI * 2.25

    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 20
    ctx.stroke()

    // Draw value arc
    const valueAngle = startAngle + (endAngle - startAngle) * (value / 100)

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, "#f87171")
    gradient.addColorStop(1, "#ef4444")

    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, startAngle, valueAngle)
    ctx.strokeStyle = gradient
    ctx.lineWidth = 20
    ctx.stroke()

    // Draw ticks
    for (let i = 0; i <= 10; i++) {
      const tickAngle = startAngle + (endAngle - startAngle) * (i / 10)
      const tickLength = i % 5 === 0 ? 20 : 10

      const innerX = centerX + (radius - 30) * Math.cos(tickAngle)
      const innerY = centerY + (radius - 30) * Math.sin(tickAngle)
      const outerX = centerX + (radius - 30 + tickLength) * Math.cos(tickAngle)
      const outerY = centerY + (radius - 30 + tickLength) * Math.sin(tickAngle)

      ctx.beginPath()
      ctx.moveTo(innerX, innerY)
      ctx.lineTo(outerX, outerY)
      ctx.strokeStyle = i % 5 === 0 ? "#fff" : "#666"
      ctx.lineWidth = i % 5 === 0 ? 3 : 2
      ctx.stroke()

      // Add numbers for major ticks
      if (i % 5 === 0) {
        const textX = centerX + (radius - 60) * Math.cos(tickAngle)
        const textY = centerY + (radius - 60) * Math.sin(tickAngle)

        ctx.font = "bold 16px Arial"
        ctx.fillStyle = "#fff"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText((i * 10).toString(), textX, textY)
      }
    }

    // Draw needle
    const needleAngle = startAngle + (endAngle - startAngle) * (value / 100)
    const needleLength = radius - 40

    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(centerX + needleLength * Math.cos(needleAngle), centerY + needleLength * Math.sin(needleAngle))
    ctx.strokeStyle = "#fff"
    ctx.lineWidth = 3
    ctx.stroke()

    // Draw center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI)
    ctx.fillStyle = "#ef4444"
    ctx.fill()
    ctx.strokeStyle = "#fff"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw value text
    ctx.font = "bold 24px Arial"
    ctx.fillStyle = "#fff"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${value}%`, centerX, centerY + radius / 2)

    // Draw label
    ctx.font = "16px Arial"
    ctx.fillStyle = "#ccc"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("RENDIMIENTO", centerX, centerY + radius / 2 + 30)
  }, [value])

  return (
    <div className="relative w-full max-w-md mx-auto">
      <canvas ref={canvasRef} className="w-full aspect-square" style={{ width: "100%", height: "auto" }} />
    </div>
  )
}

