

import React from 'react';
import { PageTitle } from './ui/PageTitle';
import { recursosCard } from './ui/recursosCard';
import Landings from './data/Landings'
export const ResourcesScreen = () => {
    return (
        <>
            <div className="wrapper">
                <PageTitle />
                <section id="careers" className="careers pt-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                                <div className="heading heading-3 text-center mb-40">
                                    <h2 className="heading__title">Recursos</h2>
                                </div>
                            </div>
                        </div>

                        <div className="lista2" id="lista">
                            <recursosCard />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
