

import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


export const BannerServicios2 = () => {
        const options = {
    margin: 30,
    responsiveClassName: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    autoplayHoverPause: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 3,

        }
    },
};
    return (
        <section id="careers" className="careers pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                        <div className="heading heading-3 text-center mb-40">
                            <span className="heading__subtitle">Trabaje con Nosotros</span>
                            <h2 className="heading__title">Implemente soluciones a medida de sus necesidades con profesionales.</h2>
                        </div>
                        
                    </div>
                    
                </div>
                




                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <OwlCarousel className="carousel owl-carousel carousel-dots" {...options} >
                            
                            <div className=" job-item">

                                <h4 className="job__title">Soporte SAP, SE</h4>
                                <p className="job__desc">Es frecuente que el conocimiento SAP se centre en uno o dos usuarios claves, generando dependencia de su presencia o disponibilidad para el giro de su negocio, el soporte 24h le permite no tener esa dependencia ante problemas
                                    que se presenten.</p>

                            </div>
                            
                            <div className=" job-item">

                                <h4 className="job__title">Gestión De Indicencias</h4>
                                <p className="job__desc">En SoftMiners brindamos servicios de consultoría SAP a nuestros clientes a nivel regional y mundial, con especialistas de larga trayectoria en cada módulo. Entendiendo los procesos de negocio del cliente y maximizando el
                                    uso de las funcionalidades del Base Line SAP .</p>

                            </div>
                            
                            <div className=" job-item">

                                <h4 className="job__title">Migraciones</h4>
                                <p className="job__desc">Mantenga toda la información fluyendo a través del landscape de servidores SAP, integrando cada solución SAP de forma nativa estándar o convencional. Integramos el SAP ERP y sus soluciones de industrias, centralización
                                    del mantenimiento de la información (MDM) y disponibilizando la misma entre las soluciones SAP.</p>

                            </div>
                            
                            <div className=" job-item">

                                <h4 className="job__title">Consultoría</h4>
                                <p className="job__desc">En SoftMiners brindamos servicios de consultoría SAP a nuestros clientes a nivel regional y mundial, con especialistas de larga trayectoria en cada módulo. Entendiendo los procesos de negocio del cliente y maximizando el
                                    uso de las funcionalidades del Base Line SAP .</p>

                            </div>

                            
                            <div className=" job-item">

                                <h4 className="job__title">Proyectos A Medida</h4>
                                <p className="job__desc">Conocemos sus procesos de negocios y los procesos world className SAP para ayudarlo a implementar el módulo que necesite. Solo consúltenos sin compromiso y evaluaremos su empresa, mediante una metodología de Assessment de TI.</p>

                            </div>

                        </OwlCarousel>
                    </div>
                    
                </div>
                
            </div>
            
        </section>
    )
}
