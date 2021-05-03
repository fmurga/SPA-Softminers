import React from 'react'
import { Link } from 'react-router-dom'

export const ServiceLayout2 = ({titulo, subtitulo, descripcion, link, nombreLink}) => {
    return (
        <section id="servicesLayout2" class="services services-layout2 pt-120 pb-90">
            <div class="container">
                <div class="row heading mb-40">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <span class="heading__subtitle">{subtitulo}</span>
                        <h2 class="heading__title">{titulo}</h2>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <p class="heading__desc">{descripcion}</p>
                        <Link to={link} class="btn btn__primary btn__lg mt-30">{nombreLink}</Link>
                    </div>
                </div>

                <div class="contenedor-iframe">
                    <iframe title="ifram ibm" src="https://wcs-es-la-ibmshowcase-softminerssa.mydmportal.com/Home"></iframe>
                </div>

            </div>
        </section>
    )
}
