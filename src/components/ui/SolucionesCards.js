
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export const SolucionesCards = () => {
    return (
        <section id="careers" className="careers pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                        <div className="heading heading-3 text-center mb-40">
                            <span className="heading__subtitle">¿Cómo hacer frente a la Transformación Digital?</span>
                            <h2 className="heading__title">Descubra el universo de soluciones dentro de IBM y SoftExpert
                                Excellence Suite. </h2>
                        </div>
                        
                    </div>
                    
                </div>
                




                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className=" job-item">
                            <div className="service__icon"><img src="/assets/images/Partners/ibm.png" alt="Ibm Logo" /></div>
                            <h4 className="job__title">Soluciones IBM</h4>
                            <p className="job__desc">Descubra cómo las tecnologías innovadoras de IBM están transformando
                                las industrias con formas más inteligentes de hacer negocios, nuevas oportunidades de
                                crecimiento y estrategias para competir y ganar.</p>
                            <Link to="/soluciones/soluciones-ibm" className="btn btn__secondary btn__link">
                                <span>Ampliar</span>
                                <i className="fa fa-arrow-right"></i>
                                {/* <FontAwesomeIcon icon={faArrowRight}/> */}
                            </Link>
                        </div>
                        
                    </div>
                    
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className=" job-item">
                            <div className="service__icon"><img src="/assets/images/Partners/sap.png" alt="Sap Logo" /></div>
                            <h4 className="job__title">Soluciones SAP</h4>

                            <p className="job__desc">Mantenga toda la información fluyendo a través del landscape de
                                servidores SAP, integrando cada solución SAP de forma nativa estándar o convencional.
                                Integramos el SAP ERP y sus soluciones de industrias.</p>
                            <br/>
                            <Link to="/soluciones/soluciones-sap" className="btn btn__secondary btn__link">
                                <span>Ampliar</span>
                                <i className="fa fa-arrow-right"></i>
                                {/* <FontAwesomeIcon icon={faArrowRight}/> */}
                            </Link>
                        </div>
                    
                    </div>
                    
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="job-item">
                            <div className="service__icon"><img src="/assets/images/Partners/softexpert.png" alt="Softexpert Logo" /></div>
                            <h4 className="job__title">Soluciones SoftExpert</h4>

                            <p className="job__desc">SoftExpert Excellence Suite es la solución más completa y modular para
                                atender colaborativamente todas las demandas críticas para la excelencia en el desempeño
                                organizacional en un único ambiente integrado.</p>
                            <br/>
                            <Link to="/soluciones/soluciones-softexpert" className="btn btn__secondary btn__link">
                                <span>Ampliar</span>
                                <i className="fa fa-arrow-right"></i>
                                {/* <FontAwesomeIcon icon={faArrowRight}/> */}
                            </Link>
                        </div>
                        
                    </div>
                    
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="job-item">
                            <div className="service__icon"><img src="/assets/images/Partners/logo-softland-1.jpg" alt="Softland Logo" /></div>
                            <h4 className="job__title">Soluciones Softland</h4>

                            <p className="job__desc">La disrupción tecnológica impulsa a las compañías a digitalizar sus procesos con sistemas de gestión empresarial tipo ERP para hacer más ágiles sus tareas diarias. Softland propicia la inteligencia de las empresas con soluciones de software que se destacan por su innovación, calidad y confianza.</p>
                            <br/>
                            <Link to="/soluciones/soluciones-softexpert" className="btn btn__secondary btn__link">
                                <span>Ampliar</span>
                                <i className="fa fa-arrow-right"></i>
                                {/* <FontAwesomeIcon icon={faArrowRight}/> */}
                            </Link>
                        </div>
                        
                    </div>
                </div>
                

            </div>

            
        </section>
    )
}
