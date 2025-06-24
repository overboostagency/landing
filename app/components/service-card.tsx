import Link from "next/link"
import type React from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
}

export function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  const CardContent = () => (
    <>
      <div className="bg-red-500 p-4 rounded-sm mb-6 w-fit group-hover:bg-red-600 transition-all">{icon}</div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </>
  )

  if (link) {
    return (
      <Link
        href={link}
        className="block bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group"
      >
        <CardContent />
      </Link>
    )
  }

  return (
    <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group">
      <CardContent />
    </div>
  )
}
