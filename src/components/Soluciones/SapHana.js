import React from 'react';

export const SapHana = () => {
    const imagen = "/assets/images/Banners/SAP_4Hana.jpg";
    const caracteristicas = [
        {
            imagen: "/assets/images/iconos/SAP-Huella.png",
            titulo: "50% de reducción en huella de datos",
            descripcion: "Gracias a la base de datos columnar in-memory"
        },
        {
            imagen: "/assets/images/iconos/SAP-Velocidad.png",
            titulo: "100 veces más velocidad en los informes",
            descripcion: "Permite una toma de decisiones resiliente y ágil"
        },
                {
            imagen: "/assets/images/iconos/SAP-IA.png",
            titulo: "Tecnología de IA incorporada",
            descripcion: "Habilita información estratégica y rendimiento mejorados"
        },
                {
            imagen: "/assets/images/iconos/SAP-Analiticas.png",
            titulo: "Analíticas avanzadas en tiempo real",
            descripcion: "Mejores proyecciones y decisiones más rápidas"
        },
                {
            imagen: "/assets/images/iconos/SAP-Visualizacion.png",
            titulo: "Visualización de datos optimizada",
            descripcion: "Permite una toma de decisiones resiliente y ágil"
        },
                {
            imagen: "/assets/images/iconos/SAP-Ventaja.png",
            titulo: "Ventaja competitiva y mejores flujos de trabajo",
            descripcion: "Con procesos de negocio específicos de la industria"
        },
        {
            imagen: "/assets/images/iconos/SAP-UX.png",
            titulo: "UX de grado de consumidor en todos los dispositivos",
            descripcion: "Reduce los errores, aumenta la productividad"
        },
        {
            imagen: "/assets/images/iconos/SAP-Implementacion.png",
            titulo: "Opciones de implementación flexibles",
            descripcion: "Ofrece FTE reducidos e implementaciones más rápidas"
        },
    ];
    return (
        <>
            <section id="Banner3" className="banner banner-2 pb-0" style={{backgroundColor: '#ffffff'}}>
                <div className="container-fluid col-padding-0">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-5 offset-1">
                            <div className="inner-padding pt-50 pb-50">
                                <div className="heading heading-2 mb-30">
                                    <h2 className="heading__title">&iquest; Qué es SAP S/4 HANA ? </h2>
                                    <p className="heading__desc">SAP S/4 HANA es un sistema de planificación de recursos empresariales (ERP) preparado para el futuro con tecnologías inteligentes incorporadas, que incluyen IA, machine learning y analíticas avanzadas. Transforma los procesos de negocio con automatización inteligente y opera en SAP HANA una base de datos in-memory líder en el mercado que ofrece velocidades de procesamiento en tiempo real y un modelo de datos drásticamente simplificado.</p>
                                </div>
                                
                                <ul className="list-items list-items">
                                    <li> Implementación on-premise, en nube pública/privada o híbrida </li>

                                    <li> IA incorporada, analíticas y automatización inteligente de procesos </li>

                                    <li> Base de datos in-memory y modelo de datos simplificado </li>

                                    <li> Capacidades y mejores prácticas para u     na amplia gama de industrias </li>

                                    <li> UX de grado de consumidor </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 bg-overlay bg-overlay-4" style={{backgroundImage: `url(${imagen})`, backgroundColor: '#ffffff' , backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        </div>
                    </div>
                </div>
            </section>
            {/* Puedo hacer este componente reutlilizable */}

            <section id="features" className="features">
                <div className="container">
                    <div className="heading text-center mb-50">
                        <h2 className="heading__title">Características y beneficios de negocio de SAP S/4HANA</h2>
                        <span className="heading__subtitle">Vea cómo el ERP en la nube puede ayudarlo a convertirse en una empresa líder y a mejorar su ventaja competitiva</span>
                        <div className="divider__line divider__theme divider__center"></div>
                    </div>
                    <div className="row">
                       {
                            caracteristicas.map((item,i)=>
                            <div key={i} className="col-sm-12 col-md-6 col-lg-6 pt-1 pb-1 pr-5 pl-5">
                                <div className="feature-item">
                                    <div className="feature__content">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-3">
                                                <div className="fancybox__icon text-center vertical-align-center">
                                                    <img src={item.imagen} alt="icono-sap"/>
                                                </div>
                                            </div>
                                             <div className="col-sm-12 col-md-12 col-lg-9">
                                                <h4 className="feature__title">{item.titulo}</h4>
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
