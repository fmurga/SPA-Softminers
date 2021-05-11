

import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Screenshots } from './Screenshots';
import SimpleReactLightbox from "simple-react-lightbox";
import { PageTitle } from '../ui/PageTitle';
import { getPaginaById } from '../selectors/getPaginaById';
import { Redirect } from 'react-router';
import { InfoBanner } from './InfoBanner';
import { SolutionVideo } from './SolutionVideo';
import { SoftexpertProducts } from './SoftexpertProducts';


export const SolutionsSoftexpertScreen = () => {
    const paginaId = 'soluciones-softexpert';
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
                <meta name="keywords" content="" />
                <link rel="stylesheet" type="text/css" href="/assets/softexpert-excellence-suite/css/style.css"/>
                <link rel="stylesheet" type="text/css" href="/assets/softexpert-excellence-suite/css/style-old.css"/>
                {/* <link rel="stylesheet" type="text/css" href="/assets/softexpert-excellence-suite/css/responsive.css"/> */}
                <link rel="stylesheet" type="text/css" href="/assets/softexpert-excellence-suite/css/us-base.css"/>
                <link rel="stylesheet" type="text/css" href="/assets/softexpert-excellence-suite/css/theme-options.css"/>
                <link rel="stylesheet" href="/assets/css/style.css"/>

            </Helmet>
            <div className="wrapper">
                <PageTitle pagina={pagina} titulo={titulo} subpagina={subpagina} imagen={imagen}/>
                <InfoBanner />
                <SoftexpertProducts />
                <SimpleReactLightbox >
                    <Screenshots />
                </SimpleReactLightbox>
                <SolutionVideo/>
            </div>
        </>
    )
}
