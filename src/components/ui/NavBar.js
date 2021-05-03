
import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPhone } from "@fortawesome/free-solid-svg-icons";

export const NavBar = (props) => {
  

  return (
       
            <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={"/assets/logos/logo-light.png"} className="logo-light" alt="logo"/>
                        <img src={"/assets/logos/logo-dark.png"} className="logo-dark" alt="logo"/>
                    </Link>
                    <div>
                        <button className="navbar-toggler" type="button" id="toggle-first">
                            <span className="menu-lines"><span></span></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="mainNavigation">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav__item">
                                <NavLink activeClassName="active" to="/" className="nav__item-link ">Home</NavLink>
                            </li>
                            
                            <li className="nav__item with-dropdown">
                                <NavLink activeClassName="active" to="/servicios" className="dropdown-toggle nav__item-link">Servicios</NavLink>
                                <ul className="dropdown-menu">
                                    <li className="nav__item"><Link className="nav__item-link" to="/servicios">Soporte
                                            SAP,
                                            SE</Link> </li>
                                    
                                    <li className="nav__item"><Link className="nav__item-link" to="/servicios">Gestión de
                                            Indicencias</Link> </li>
                                    
                                    <li className="nav__item"><Link className="nav__item-link"
                                            to="/servicios">Migraciones</Link> </li>
                                    
                                    <li className="nav__item"><Link className="nav__item-link"
                                            to="/servicios">Consultoría</Link> </li>
                                    
                                    <li className="nav__item"><Link className="nav__item-link" to="/servicios">Proyectos a
                                            Medida</Link> </li>
                                    
                                </ul>
                                
                            </li>



                            
                            <li className="nav__item with-dropdown">
                                <NavLink activeClassName="active" to="/soluciones" className="dropdown-toggle nav__item-link">Soluciones</NavLink>
                                {/* <FontAwesomeIcon icon={faAngleRight} data-toggle="dropdown"/> */}
                                <ul className="dropdown-menu wide-dropdown-menu">
                                    <li className="nav__item">
                                        <div className="row mx-0">
                                            <div className="col-sm-4 dropdown-menu-col">

                                                <ul className="nav flex-column">
                                                    <li>
                                                        <h6 className="hover"> <Link to="/soluciones/soluciones-ibm">Soluciones
                                                                IBM</Link>
                                                        </h6>
                                                    </li>
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="soluciones-ibm">Blockchain</Link></li>
                                                    
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="soluciones-ibm">Seguridad e
                                                            indentidad</Link> </li>
                                                    
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="soluciones-ibm">Internet de las
                                                            cosas</Link> </li>
                                                    
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="soluciones-ibm">Intelingencia
                                                            artificial</Link> </li>
                                                    

                                                    
                                                </ul>
                                            </div>
                                            
                                            <div className="col-sm-4 dropdown-menu-col">

                                                <ul className="nav flex-column">
                                                    <li>
                                                        <h6 className="hover"> <NavLink activeClassName="active" to="soluciones-sap.html"> Soluciones
                                                                SAP</NavLink>
                                                        </h6>
                                                    </li>
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-sap">Soporte</Link></li>
                                                    
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-sap">Proyectos</Link></li>
                                                    
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-sap">Integración SAP</Link>
                                                    </li>
                                                    
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-sap">Testing SAP</Link>
                                                    </li>
                                                    
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-sap">Consultoría</Link>
                                                    </li>
                                                    
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-sap">Factura
                                                            Electrónica</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-4 dropdown-menu-col">

                                                <ul className="nav flex-column">
                                                    <li>
                                                        <h6 className="hover"> 
                                                        <NavLink activeClassName="active" to="/soluciones-softexpert">Soluciones
                                                                SoftExpert</NavLink> </h6>
                                                    </li>
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-softexpert">Calidad</Link>
                                                    </li>
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-softexpert">Digitalización</Link>
                                                    </li>
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-softexpert">Gestión de
                                                            Documentos</Link></li>
                                                    <li className="nav__item"><Link className="nav__item-link"
                                                            to="/soluciones-softexpert">Gestión de
                                                            Activos</Link></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </li>



                            <li className="nav__item with-dropdown">
                                <NavLink to="/clientes" className="dropdown-toggle nav__item-link">Clientes</NavLink> <i
                                    className="fa fa-angle-right" data-toggle="dropdown"></i>
                                <ul className="dropdown-menu">
                                    <li className="nav__item"><Link className="nav__item-link" to="/clientes">Clientes</Link>
                                    </li>
                          
                                    <li className="nav__item"><Link className="nav__item-link" to="/casos-exito#sap">Casos
                                            de
                                            Exito SAP</Link> </li>
                                    <li className="nav__item"><Link className="nav__item-link"
                                            to="/casos-exito#softexpert">Casos de
                                            Exito SoftExpert</Link> </li>
                 
                                </ul>
     
                            </li>
                        
                            <li className="nav__item">
                                <NavLink to="/recursos" className="nav__item-link">Recursos</NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink to="/acerca-nosotros" className="nav__item-link">Nosotros</NavLink>
                            </li>


                        </ul>
                    </div>


                    <div className="navbar-modules">
                        <ul className="list-unstyled d-flex align-items-center modules__btns-list">
                            <li className="d-none d-lg-block">
                                <Link to="/contacto" className="btn btn__primary module__btn-request">
                                    <span>Contacto</span>
                                </Link>
                            </li>
                            <li className="d-none d-lg-block">
                                <div className="module__btn module__btn-phone d-flex align-items-center">
                                    <FontAwesomeIcon icon={faPhone} className="mr-3"/>
                                    <div>
                                        <Link to="tel:+54-9-351-5218080 ">+54 9 351 5218080</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>



                </div>
            </nav>
        
                    
  );
}
