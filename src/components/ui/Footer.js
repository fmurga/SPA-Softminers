/* eslint-disable no-octal-escape */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";



export const Footer = () => {
  return (
        <footer id="footer" className="footer footer-1">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        

                        <div className="col-sm-12 col-md-12 col-lg-3 footer__widget footer__widget-about  mb-30">
                            <div className="footer__widget-content">
                                <img src={"/assets/logos/logo-footer.png"} alt="logo"/>
                            </div>
                        </div>
                        



                        <div className="col-sm-12 col-md-12 col-lg-3 footer__widget footer__widget-about  mb-30">
                            <h6 className="footer__widget-title">Información</h6>
                            <div className="footer__widget-content">
                                <p>Rio de Janeiro 1725 Torre 1 Oficina 2<br /> Villa Allende - Cordoba<br/> Email:
                                    info@softminers.com<br/> 0351-155218080 de Argentina<br/> +54 9 351 5218080 de
                                    Exterior<br/>
                                </p>
                            </div>
                        </div>
                        


                        <div className="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                            <h6 className="footer__widget-title">Company</h6>
                            <div className="footer__widget-content">
                                <nav>
                                    <ul className="list-unstyled">
                                        <li><Link to="/acerca-nosotros">Acerca de Softminers</Link></li>
                                        <li><Link to="/servicios">Servicios</Link></li>
                                        <li><Link to="/soluciones">Soluciones</Link></li>

                                    </ul>
                                </nav>
                            </div>
                            
                        </div>
                        



                        <div className="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                            <h6 className="footer__widget-title">Industrias</h6>
                            <div className="footer__widget-content">
                                <nav>
                                    <ul className="list-unstyled">
                                        <li><Link to="/clientes">Clientes</Link></li>
                                        <li><Link to="/casos-exito">Casos de Exito</Link></li>
                                        <li><Link to="/contacto">Contacto</Link></li>
                                        <li><Link to="/recursos">Recursos</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            
                        </div>
                        

                        <div className="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                            <h6 className="footer__widget-title">Redes Sociales</h6>
                            <div className="social__icons w-100">
                                <a href="https://www.facebook.com/SoftMiners-397451227113548/info/?tab=page_info&section=web_address&view">
                                  <FontAwesomeIcon icon={["fab", "facebook"]}/></a>
                                <a href="skype:softminers?<action>"><FontAwesomeIcon icon={["fab", "skype"]}/></a>
                                <a href="https://www.linkedin.com/in/juliomurga"><FontAwesomeIcon icon={["fab", "linkedin"]}/></a>
                                <a href="https://twitter.com/softminers"><FontAwesomeIcon icon={["fab", "twitter"]}/></a>
                                <a href="https://www.instagram.com/softminers/"><FontAwesomeIcon icon={["fab", "instagram"]}/></a>
                            </div>
                            
                        </div>
                        


                    </div>
                    
                </div>
                
            </div>
            



            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-9 col-lg-9">
                            <div className="footer__copyright">
                                <nav>
                                    <ul className="list-unstyled footer__copyright-links d-flex flex-wrap">
                                        <li><Link to="/"> &copy; {(new Date().getFullYear())} Softminers. All rights reserved. </Link></li>
                                        <li><a href="/SOFTMINERS_DATAFISCAL.pdf">Información Fiscal</a></li>
                                        <li><Link to="/politica-privacidad">Politica de Privacidad</Link></li>


                                    </ul>
                                </nav>

                            </div>
                            
                        </div>
                        

                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <a href="http://qr.afip.gob.ar/?qr=bbo06ipsZDAUfZ6LiNbCWg,," target="_F960AFIPInfo">
                              
                              <img src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" className="float-end" alt="qr afip" border="0" width="40px" /></a>
                        </div>

                    </div>
                    
                </div>
            </div>
        </footer>
  );
}
