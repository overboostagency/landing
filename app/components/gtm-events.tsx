// Declarar el tipo para dataLayer
declare global {
  interface Window {
    dataLayer: any[]
  }
}

// Función para enviar eventos a GTM
export const gtmEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    })
  }
}

// Eventos específicos para OVERBOOST
export const trackFormSubmission = (formType: string) => {
  gtmEvent("form_submission", {
    form_type: formType,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export const trackCTAClick = (ctaText: string, location: string) => {
  gtmEvent("cta_click", {
    cta_text: ctaText,
    cta_location: location,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export const trackNavigation = (linkText: string, destination: string) => {
  gtmEvent("navigation_click", {
    link_text: linkText,
    link_destination: destination,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export const trackSectionView = (sectionName: string) => {
  gtmEvent("section_view", {
    section_name: sectionName,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export const trackServiceInterest = (serviceName: string) => {
  gtmEvent("service_interest", {
    service_name: serviceName,
    page_location: window.location.href,
    page_title: document.title,
  })
}
