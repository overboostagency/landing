"use client"

import { useState, useEffect } from "react"
import { useInView } from "../hooks/use-in-view"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useInView()

  useEffect(() => {
    if (!isInView) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const currentCount = Math.floor(progress * end)

      setCount(currentCount)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    const animationId = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(animationId)
  }, [end, duration, isInView])

  return (
    <div ref={ref} className={`inline-flex items-baseline ${className}`}>
      {prefix && <span>{prefix}</span>}
      <span>{count}</span>
      {suffix && <span>{suffix}</span>}
    </div>
  )
}
