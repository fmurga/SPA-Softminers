

import React from 'react'
import { ContactForm } from './ui/ContactForm'

export const ContactSceen = () => {
    const opciones = ['IBM Blockchain','IBM Security','IBM Watson - Internet De Las Cosas','IBM Data and AI','IBM Cloud','IBM Infraestructura de TI','IBM Global Financing','SE - Gestión de la Calidad Empresarial','SE - Gestión de Procesos de Negocios','SE - Gestión De Documentos y Digitalización','SE - Gestión De Activos','SE - Gestión de Recursos Humanos','Soporte SAP','Proyectos SAP','Integración SAP','Testing SAP','Consultoría SAP','Factura Electrónica SAP']
    return (
        <>
            <div className="wrapper">
                <section id="googleMap" class="google-map p-0">
                    <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.1374661663313!2d-64.27899068423186!3d-31.29994549776253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329cf75b1db9b5%3A0x28132916c2450ba7!2sR%C3%ADo%20de%20Janeiro%201725%2C%20Villa%20Allende%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1588184317841!5m2!1ses!2sar"
                        width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                </section>
                <ContactForm opciones={opciones}/>
            </div>
        </>
    )
}
