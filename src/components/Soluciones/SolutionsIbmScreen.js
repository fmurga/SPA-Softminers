

import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router';
import { getPaginaById } from '../selectors/getPaginaById';
import { PageTitle } from '../ui/PageTitle';
import { ServiceLayout2 } from '../ui/ServiceLayout2'

export const SolutionsIbmScreen = () => {

     
    const titulo1 = "Ayudando a las empresas a acelerar su proceso de cambio hacia la nube.";
    const subtitulo = "IBM Services";
    const descripcion = "Descubra cómo las tecnologías innovadoras de IBM están transformando las industrias con formas más inteligentes de hacer negocios, nuevas oportunidades de crecimiento y estrategias para competir y ganar.";
    const nombreLink = "Casos de Exito";
    const link= "/casos-exito"

    const paginaId = 'soluciones-ibm';
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
                <title>Softminers | Soluciones | Soluciones IBM</title>
                <meta name="keywords" content="Soluciones IBM, Watson, Cloud, IBM, Blockchain, Inteligencia Artificial" />
            </Helmet>
            <div className="wrapper">
                <PageTitle pagina={pagina} titulo={titulo} subpagina={subpagina} imagen={imagen}/>
                <ServiceLayout2 titulo={titulo1} subtitulo={subtitulo} descripcion={descripcion} link={link} nombreLink={nombreLink}/>
            </div>
        </>
    )
}
