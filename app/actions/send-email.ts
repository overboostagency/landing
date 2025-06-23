"use server"

import nodemailer from "nodemailer"

// Función para determinar si estamos en modo de previsualización
const isPreviewMode = () => {
  return process.env.NODE_ENV === "development" && !process.env.EMAIL_USER
}

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // Si estamos en modo de previsualización, simular el envío de correo
    if (isPreviewMode()) {
      console.log("MODO PREVISUALIZACIÓN: Simulando envío de email")
      console.log({
        to: "overboost.agency@gmail.com",
        subject: `Nuevo contacto desde la web: ${name}`,
        name,
        email,
        company,
        message,
      })

      // Simular un pequeño retraso para que parezca que se está enviando
      await new Promise((resolve) => setTimeout(resolve, 800))

      return {
        success: true,
        message: "¡Gracias por contactarnos! Te responderemos a la brevedad. (Modo previsualización)",
      }
    }

    // Código real para enviar correos cuando no estamos en previsualización
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "overboost.agency@gmail.com",
      subject: `Nuevo contacto desde la web: ${name}`,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company || "No especificada"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return { success: true, message: "¡Gracias por contactarnos! Te responderemos a la brevedad." }
  } catch (error) {
    console.error("Error al enviar el email:", error)
    return { success: false, message: "Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente." }
  }
}
