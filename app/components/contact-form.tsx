"use client"

import type React from "react"
import { useState } from "react"
import { sendEmail } from "../actions/send-email"
import { trackFormSubmission } from "./gtm-events"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    // Track form submission attempt
    trackFormSubmission("contact_form")

    try {
      const formDataToSend = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value)
      })

      const result = await sendEmail(formDataToSend)
      setStatus(result)

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800">
      <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-zinc-800 border border-zinc-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-zinc-800 border border-zinc-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Nombre de tu empresa"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-zinc-800 border border-zinc-700 rounded-sm px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
            placeholder="¿Cómo podemos ayudarte?"
          />
        </div>

        {status && (
          <div
            className={`p-4 rounded-sm ${
              status.success ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-sm font-medium transition-all disabled:opacity-70"
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>
    </form>
  )
}
