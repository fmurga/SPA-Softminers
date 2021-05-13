import React from 'react'
import { Link } from 'react-router-dom'

export const ServiciosSap = () => {
    return (
            <section id="servicesLayout2" className="services services-layout2 pt-120 pb-90">
            <div className="container">
                <div className="row heading mb-40">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <span className="heading__subtitle">IBM Services</span>
                    <h2 className="heading__title">SAP, le brinda sus soluciones para gestionar desde PyMES hasta corporaciones.</h2>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <p className="heading__desc">Mantenga toda la información fluyendo a través del landscape de servidores SAP, integrando cada solución SAP de forma nativa estándar o convencional. Integramos el SAP ERP y sus soluciones de industrias.</p>
                    <Link to="/casos-exito" className="btn btn__primary btn__lg mt-30">Casos de Exito</Link>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 box_services">
                    <div className="service-item">
                    <div className="service__content">
                        <div className="service__icon"><img src="/assets/images/iconos/1.png" alt="icono" className=""/></div>
                        <h4 className="service__title">Implementaciones</h4>
                        <p className="service__desc">Módulos ecc, productos sap y soluciones de industria. En SoftMiners brindamos servicios de consultoría SAP a nuestros clientes a nivel regional y mundial, con especialistas de larga trayectoria en cada módulo. Entendiendo los procesos de negocio del cliente y maximizando el uso de las funcionalidades del Base Line SAP .</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 box_services">
                    <div className="service-item">
                    <div className="service__content">
                    <div className="service__icon"><img src="/assets/images/iconos/5.png" alt="icono" className=""/></div>
                        <h4 className="service__title">Desarrollos</h4>
                        <p className="service__desc">Desarrollo de soluciones complementarias al estándar. Conocemos sus procesos de negocios y los procesos world className SAP para ayudarlo a implementar el módulo que necesite. Solo consúltenos sin compromiso y evaluaremos su empresa, mediante una metodología de Assessment de TI.</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 box_services">
                    <div className="service-item">
                    <div className="service__content">
                        <div className="service__icon"><img src="/assets/images/iconos/12.png" alt="icono" className=""/></div>
                        <h4 className="service__title">Integraciones</h4>
                        <p className="service__desc">Integraciones entre sistemas sap y legacy. Mantenga toda la información fluyendo a través del landscape de servidores SAP, integrando cada solución SAP de forma nativa estándar o convencional. Integramos el SAP ERP y sus soluciones de industrias, centralización del mantenimiento de la información..</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 box_services">
                    <div className="service-item">
                    <div className="service__content">
                        <div className="service__icon"><img src="/assets/images/iconos/7.png" alt="icono" className=""/></div>
                        <h4 className="service__title">Productos</h4>
                        <p className="service__desc">Soluciones end-to-end integradas a su instalación sap.</p>
                            <ul className="mt-20">
                            <li>SAP - Factura de crédito electrónica</li>
                            <li>SAP - Monedero digital</li>
                            <li>SAP - Automatización de facturas</li>
                            <li>SAP - Máscaras de mantenimiento</li>
                            <li>SAP - Gestión de embargos rrhh</li>
                            <li>SAP - Impuesto a las ganancias rrhh</li>
                            </ul>
                    
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 box_services">
                    <div className="service-item">
                    <div className="service__content">
                        <div className="service__icon"><img src="/assets/images/iconos/17.png" alt="icono" className=""/></div>
                        <h4 className="service__title">Ampliaciones</h4>
                        <p className="service__desc">Mejoras e incorporación de reglas de negocios siguiendo las mejores prácticas.</p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 box_services">
                    <div className="service-item">
                    <div className="service__content">
                        <div className="service__icon"><img src="/assets/images/iconos/8.png" alt="icono" className=""/></div>
                        <h4 className="service__title">Formularios</h4>
                        <p className="service__desc">Desarrollos de nuevos formularios o adaptaciones, spscript, smartforms, hr-forms, adobe.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section> 
    )
}
