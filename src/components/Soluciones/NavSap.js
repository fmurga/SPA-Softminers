import React, { useState } from 'react';
import { ServiciosSap } from './ServiciosSap';
import './css/navsap.css';
import "bootstrap/js/src/collapse.js";
import { CarouselClientes } from '../ui/CarouselClientes';

export const NavSap = () => {

    const navSapItems = [
        {component: <ServiciosSap />, title: "Servicios SAP"},
        {component: <ServiciosSap />, title: "Servicios SAP"},
        {component: <ServiciosSap />, title: "Servicios SAP"},
        {component: <CarouselClientes />, title: "Clientes"},
        {component: <ServiciosSap />, title: "Contactenos"}
    ];

    const [component, setComponent] = useState(navSapItems[0].component);

    return (
        <>
            <nav className="contenedor-navbar navbar navbar-second navbar-expand-lg navbar-dark bg-dark sticky-navbar-second">
                <div className="container ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-auto">
                        {
                            navSapItems.map((item,i) => 
                            <li key={i}  className="nav__item">
                                <button  onClick={() => setComponent(item.component)} className="nav__item-link color-white">{item.title}</button> 
                            </li>
                            )
                        }
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                {component}
            </div>

                        {/* <Navbar bg="dark" expand="lg" className="sticky-navbar-second">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        {
                            navSapItems.map((item,i) => 
                            <Nav.Item key={i} className="nav__item">
                                <button   onClick={() => setComponent(item.component)} className="nav__item-link color-white">{item.title}</button> 
                            </Nav.Item>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container">
                {component}
            </div> */}
        </>
    )
}
