

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


export const PageTitle = ({titulo, pagina, subpagina, imagen}) => {

    return (
        <section id="pageTitle" className="page-title page-title-layout4 bg-overlay bg-parallax text-center bg-img" style={{backgroundImage: `url(${imagen})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            {/* <div className="bg-img"><img src={imagen} alt="background"/></div> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                        <h1 className="pagetitle__heading">{titulo}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item active"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><Link to={`/${pagina}`}>{pagina}</Link></li>
                                {
                                    (subpagina !== '')
                                       && <li className="breadcrumb-item active" aria-current="page">{subpagina}</li>
                                }
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

PageTitle.propTypes = {
    titulo: PropTypes.string,
    pagina: PropTypes.string,
    subpagina: PropTypes.string,
    imagen: PropTypes.string
}