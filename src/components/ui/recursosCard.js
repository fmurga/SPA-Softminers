import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export const recursosCard = ({LinkLanding, Imagen, Titulo, Tags, DescripcionCard}) => {
    return (
        <div className="project-item" style={{height: '530px'}}>
            <Link to={LinkLanding}>
                <div className="project__img contenedor-imagen" style={{height: '150px'}}>
                    <img src={Imagen} alt="project img" />
                </div>
            </Link>
            <div className="project__content" style={{height: '370px'}}>
                <div style={{height: '56px'}}>
                    <h4 style={{textTransform: 'none'}} className=" project__title">
                        <Link to={LinkLanding}>{Titulo}</Link>
                    </h4>
                </div>
                <div className="landing-tags">
                    <ul className="ctn-tag text-center ">
                        {
                         Tags.map((item, i) => 
                            <li key={i}>{item}</li>
                         )
                        }
                    </ul>
                </div>
                <div style={{height:'200px', overflow: 'hidden'}}>
                    <p className="project__desc mt-1">{DescripcionCard}</p>
                </div>
                <div className="contenedor-btn" style={{height: '45px'}}>
                    <Link to={LinkLanding} className="btn btn__secondary btn__link">
                        <span>VER MÁS</span><i className="icon-arrow-right2"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

recursosCard.propTypes = {
    LinkLanding: PropTypes.string,
    Imagen: PropTypes.string,
    Titulo: PropTypes.string,
    Tags: PropTypes.array,
    DescripcionCard: PropTypes.string
}
