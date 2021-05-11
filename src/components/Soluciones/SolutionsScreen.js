

import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router';
import { getPaginaById } from '../selectors/getPaginaById';
import { CarouselClientes } from '../ui/CarouselClientes'
import { PageTitle } from '../ui/PageTitle'
import { SolucionesCards } from '../ui/SolucionesCards';

export const SolutionsScreen = () => {
    const paginaId = 'soluciones';
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
                <title>Softminers | Soluciones</title>
            </Helmet>
            <div className="wrapper">
                <PageTitle pagina={pagina} titulo={titulo} subpagina={subpagina} imagen={imagen}/>
                <SolucionesCards />
                <CarouselClientes />
            </div>
        </>
    )
}
