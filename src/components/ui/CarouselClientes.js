

import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css'; 

export const CarouselClientes = () => {
    const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    responsive: {
        0: {
            items: 3,
        },
        400: {
            items: 5,
        },
        600: {
            items: 5,
        },
        700: {
            items: 7,
        },
        1000: {
            items: 7,

        }
    },
};
    return (
        <section id="clients" className="clients clients-1">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="heading text-center mb-20">
                            <span className="heading__subtitle">SoftMiners</span>
                            <h2 className="heading__title">Clientes</h2>
                            <div className="divider__line divider__theme divider__center"></div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <OwlCarousel className="carousel owl-carousel owl-theme" {...options}>


                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo01.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo02.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo03.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo04.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo05.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo06.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo07.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo08.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo09.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo10.gif" alt="client"/></Link>
                            </div>


                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo11.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo12.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo13.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo14.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo15.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo16.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo17.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo18.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo19.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo20.jpg" alt="client"/></Link>
                            </div>




                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo21.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo22.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo23.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo24.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo25.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo26.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo27.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo28.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo29.jpg" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo30.png" alt="client"/></Link>
                            </div>


                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo31.png" alt="client"/></Link>
                            </div>
                            <div className="grey">
                                <Link to="/clientes"><img src="/assets/clientes/logo32.jpg" alt="client"/></Link>
                            </div>


                        </OwlCarousel>
                        
                    </div>
                   
                </div>
                
            </div>
            

            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-40">
                    <p className="text__link mb-0">Clientes de Softminers <Link to="/clientes">Ver Todos</Link></p>
                </div>    
            </div>

        </section>
    )
}
