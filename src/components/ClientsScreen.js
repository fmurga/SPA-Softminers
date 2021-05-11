

import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router';
import { getPaginaById } from './selectors/getPaginaById';
import { PageTitle } from './ui/PageTitle';

export const ClientsScreen = () => {
    const paginaId = 'clientes';
    const paginas = useMemo(() => getPaginaById(paginaId), [paginaId]);

    if (!paginas){
        return <Redirect to="/" />  
    }

    const {
        titulo, 
        pagina, 
        subpagina,
        imagen
    } = paginas;

    
    return (
        <>
        <Helmet>
            <title>SoftMiners | Clientes</title>
            <meta></meta>
        </Helmet>
        <div className="wrapper">
            <PageTitle pagina={pagina} titulo={titulo} subpagina={subpagina} imagen={imagen}/>
            
                <section id="clients" className="clients clients-1 border-top">
                    <div className="container">

                        <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9 offset-xl-1 ">
                            <div className="heading heading-3 mb-50">
                            <span className="heading__subtitle">Clientes que Confiaron en nuestros Servicios</span>
                            <h2 className="heading__title">Estas son algunas de las empresas que confian en Softminers</h2>
                            </div>
                        </div>
                        </div>


                        <div className="row mt-100 paginaclientes">


                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo01.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo02.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo03.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo04.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo05.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo06.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo07.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo08.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo09.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo10.gif" alt="client"/></a>
                        </div>


                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo11.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo12.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo13.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo14.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo15.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo16.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo17.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo18.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo19.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo20.jpg" alt="client"/></a>
                        </div>




                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo21.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo22.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo23.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo24.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo25.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo26.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo27.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo28.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo29.jpg" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo30.png" alt="client"/></a>
                        </div>


                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo31.png" alt="client"/></a>
                        </div>
                        <div className="client col-sm-3 col-md-2 col-lg-2 mb-30">
                            <a><img src="assets/clientes/logo32.jpg" alt="client"/></a>
                        </div>

                        </div>
                    </div>
                    </section>
        </div>
        </>
    )
}
