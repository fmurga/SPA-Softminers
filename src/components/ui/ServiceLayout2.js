import React from 'react'
import { Link } from 'react-router-dom'

export const ServiceLayout2 = ({titulo, subtitulo, descripcion, link, nombreLink}) => {
    return (
        <section id="servicesLayout2" className="services services-layout2 pt-120 pb-90">
            <div className="container">
                <div className="row heading mb-40">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <span className="heading__subtitle">{subtitulo}</span>
                        <h2 className="heading__title">{titulo}</h2>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className="heading__desc">{descripcion}</p>
                        <Link to={link} className="btn btn__primary btn__lg mt-30">{nombreLink}</Link>
                    </div>
                </div>

                <div className="contenedor-iframe">
                    <iframe title="ifram ibm" src="https://wcs-es-la-ibmshowcase-softminerssa.mydmportal.com/Home"></iframe>
                </div>

            </div>
        </section>
    )
}
