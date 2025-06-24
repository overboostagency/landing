"use client"

import type React from "react"
import { useState } from "react"
import { trackFormSubmission } from "./gtm-events"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Track form submission
    trackFormSubmission("contact_form")

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)

    // Reset form or show success message
    alert("¡Gracias por contactarnos! Te responderemos a la brevedad.")
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })
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

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-sm font-medium transition-all"
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  )
}
