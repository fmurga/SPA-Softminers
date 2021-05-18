import React from 'react'

export const MigracionSap = () => {
    const caracteristicas = [
        {
            imagen: "/assets/images/iconos/17.png",
            titulo: "Simplificación",
            descripcion: "S/4HANA proporciona un aumento en la simplicidad de administración y gestión IT, pues permite centralizar los recursos hardware y de red. Además, sirve como núcleo digital para hacer más sencillos los procesos empresariales gracias a su potente base de datos en memoria"
        },
        {
            imagen: "/assets/images/iconos/13.png",
            titulo: "Accesibilidad",
            descripcion: "Fiori 2.0 introduce cambios no solo en la interfaz, si no también en las rutas de acceso, proporcionando una experiencia de usuario mucho más ágil y agradecida. Adicionalmente aporta un nuevo nivel en cuanto a la disponibilidad de las páginas de resumen, líneas de trabajo e informes, permitiendo acceder a ellas de una manera más sencilla"
        },
                {
            imagen: "/assets/images/iconos/16.png",
            titulo: "Rendimiento y velocidad",
            descripcion: "S/4HANA ha optimizado su rendimiento, lo que da la posibilidad de planificar y ejecutar, generar informes y realizar análisis sobre datos en vivo, además de ofrecer unas predicciones más precisas, activar el cierre de periodos, y dar un mejor servicio para las aplicaciones focalizadas en el cliente."
        },
        {
            imagen: "/assets/images/iconos/14.png",
            titulo: "Rentabilidad",
            descripcion: "Gracias a ser un punto de encuentro para reunir todas las capacidades y posibilidades transaccionales y analíticas de la compañía, lo que se traduce en una mejora de la toma de decisiones, SAP S/4HANA proporciona una alta rentabilidad en cuanto a la inversión necesaria."
        },
                {
            imagen: "/assets/images/iconos/19.png",
            titulo: "Innovación",
            descripcion: "la tecnología avanza a una velocidad sin igual, por lo que mantenerse en la vanguardia es esencial si se pretende ganar ventaja en el mercado. La accesibilidad, versatilidad y optimización de servicio ofrecida por S/4HANA lo posiciona como una de las herramientas con más visión de futuro"
        }
    ];
    return (
        <>
            <section className="services services-layout3 pb-0 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                             <div className="services mb-50">
                                <h2 className="services__title text-center">Porque Migrar a SAP S/4 Hana</h2>
                                <p className="services__desc color-dark">Como es de público conocimiento, SAP anunció que a finales de 2027 dejará de dar servicios de mantenimiento de su ERP ECC 6.0 (y versiones anteriores). Esto implica que todos los clientes SAP deberán comenzar a trabajar con el software de gestión SAP S/4HANA.</p>
                                <p className="services__desc color-dark">SAP S/4HANA es una solución empresarial completa e intuitiva que te permitirá tener una visión global detallada para definir tu estrategia corporativa con criterio. Disfruta de un instrumento capaz, entre otras cosas, de realizar análisis empresariales y gestionar las operaciones y el capital humano.</p>
                                <p className="services__desc color-dark">Con SAP S/4HANA, tu empresa, ya sea grande o mediana, mejorará la productividad y maximizará el uso de sus recursos empresariales gracias a la versatilidad de la herramienta y a su capacidad de gestión integrada para adaptarse a necesidades concretas, sea el sector que sea, en áreas como finanzas, recursos humanos, logística, fabricación o desarrollo de productos. Optimizando el gasto en IT, mejorarás la contabilidad financiera y la flexibilidad ya que reducirás costes y riesgos de forma sustancial.</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>

            <section className="services services-layout2 pt-50 ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="heading text-center">
                                <h2 className="heading__title">Las Principales Ventajas de una Migración SAP S/4 HANA</h2>
                                <p className="heading__desc color-dark"></p>
                            </div>

                        </div>
                       {
                            caracteristicas.map((item,i)=>
                            <div key={i} className="col-sm-12 col-md-6 col-lg-6 pt-1 pb-1 pr-5 pl-5">
                                <div className="feature-item">
                                    <div className="feature__content">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-4">
                                                <div className="fancybox__icon text-center vertical-align-center">
                                                    <img src={item.imagen} alt="icono-sap"/>
                                                </div>
                                            </div>
                                             <div className="col-sm-12 col-md-12 col-lg-8">
                                                <h4 className="feature__title text-center">{item.titulo}</h4>
                                                <p className="feature__desc">
                                                    {item.descripcion}
                                                </p>
                                            </div>
                                        </div>

                                            
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </section>
        
        </>

    )
}
