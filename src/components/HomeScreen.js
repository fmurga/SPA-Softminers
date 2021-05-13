
import React from 'react';
import { Helmet } from 'react-helmet';
import { CarouselClientes } from './ui/CarouselClientes';
import { CoberturaInternacional } from './ui/CoberturaInternacional';

export const HomeScreen = () => {

    return (
        <>
            <Helmet>
                <title>SoftMiners - Excelencia en Soluciones Informaticas</title>
            </Helmet>
            <div className="wrapper">
                <CoberturaInternacional />
                <CarouselClientes />
            </div>
        </>
    )
}
