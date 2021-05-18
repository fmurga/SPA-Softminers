import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router';
import { getPaginaById } from '../selectors/getPaginaById';
import { CarouselClientes } from '../ui/CarouselClientes';
import { CoberturaInternacional } from '../ui/CoberturaInternacional';
import { PageTitle } from '../ui/PageTitle'
import { Partners } from '../ui/Partners';
import { NavSap } from './NavSap';

export const SolutionsSapScreen = () => {
    const paginaId = 'soluciones-sap';
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

                <title>{pagina}</title>

            </Helmet>
            <div className="wrapper">
                <PageTitle pagina={pagina} titulo={titulo} subpagina={subpagina} imagen={imagen}/>
                <NavSap />
                <CoberturaInternacional />
                <CarouselClientes />
                <Partners  />
            </div>

        </>
    )
}
