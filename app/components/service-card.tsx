import type { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  // Dynamically get the icon from lucide-react
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon

  return (
    <div className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-500/30 transition-all group">
      <div className="bg-red-500/20 p-4 rounded-sm mb-6 w-fit group-hover:bg-red-500/30 transition-all">
        {Icon && <Icon className="h-8 w-8 text-red-500" />}
      </div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
