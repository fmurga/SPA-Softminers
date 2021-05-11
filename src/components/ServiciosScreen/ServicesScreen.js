

import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router';
import { getPaginaById } from '../selectors/getPaginaById';
import { CarouselClientes } from '../ui/CarouselClientes';
import { PageTitle } from '../ui/PageTitle';
import { BannerServicios } from './BannerServicios';
import { BannerServicios2 } from './BannerServicios2';

export const ServicesScreen = () => {
    const paginaId = 'servicios';
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
                <title>SoftMiners | Servicios</title>
            </Helmet>
            <div className="wrapper">
                <PageTitle pagina={pagina} titulo={titulo} subpagina={subpagina} imagen={imagen}/>
                <BannerServicios2 />
                <BannerServicios />
                <CarouselClientes />
            </div>
        
        </>
    )
}
