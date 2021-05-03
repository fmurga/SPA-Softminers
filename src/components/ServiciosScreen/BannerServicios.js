import React from 'react'

export const BannerServicios = () => {
    const imagen = "/assets/images/video/1.jpg"
    return (
    <section id="Banner3" className="banner banner-3 p-0">
            <div className="container-fluid col-padding-0">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 bg-theme">
                        <div className="inner-padding">
                            <div className="heading heading-2 heading-white mb-30">
                                <h2 className="heading__title">Un equipo profesional altamente calificado e interdisciplinario. </h2>
                                <p className="heading__desc">SoftMiners, experiencia y compromiso en consultoría SAP y desarrollo de soluciones de software. Nuestro equipo de profesionales, cuentan con una experiencia de más de 10 años en soluciones de consultoría SAP, con casos
                                    de éxito en implementaciones; proyectos y desarrollos ABAP en empresas de primera línea.</p>
                            </div>
                            
                            <ul className="list-unstyled list-items list-items-white mb-40">
                                <li> Sistema de control de calidad </li>

                                <li> Velocidad de Respuesta </li>

                                <li> Normas CMMI 3 </li>

                                <li> Profesional y calificado </li>

                                <li> Soluciones personalizadas </li>
                            </ul>
                            <a href="contacto.html" className="btn btn__white btn__bordered btn__hover2 btn__lg">Solicitar Consultor</a>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-lg-6 bg-overlay bg-overlay-4 pt-100 pb-100" style={{backgroundImage: `url(${imagen})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    </div>
                    
                </div>
                
            </div>
           
        </section>
        
    )
}
