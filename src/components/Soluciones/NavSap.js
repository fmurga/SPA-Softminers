import React, { useRef, useState } from 'react';
import { ServiciosSap } from './ServiciosSap';
import { SapHana } from './SapHana';
import './css/navsap.css';
import "bootstrap/js/src/collapse.js";
import { CarouselClientes } from '../ui/CarouselClientes';
import { MigracionSap } from './MigracionSap';
import { ContactForm } from '../ui/ContactForm';
// import { Nav, Navbar } from 'react-bootstrap';

export const NavSap = () => {
    const opcionesSap = ['Soporte SAP', 'Proyectos SAP', 'Integracion SAP', 'Testing SAP', 'Consultoría SAP', 'Factura Electronica SAP']    
    const navSapItems = [
        {component: <ServiciosSap />, title: "Servicios SAP"},
        {component: <SapHana />, title: "SAP S/4 Hana"},
        {component: <MigracionSap />, title: "Migración a SAP S/4 HANA"},
        {component: <MigracionSap />, title: "SAP S/4 Hana on IBM Cloud"},
        {component: <CarouselClientes />, title: "Clientes"},
        {component: <ContactForm opciones={opcionesSap}/>, title: "Contactenos"}
    ];
    const scrollToRef = (ref) => window.scrollTo(0, 400)   
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    const [component, setComponent] = useState(navSapItems[0].component);

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <>
            <nav className="navbar navbar-second navbar-expand-lg navbar-dark bg-dark sticky-navbar-second">
                <div className="container ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                        <ul className="navbar-nav ml-auto mr-auto">
                            {
                                navSapItems.map((item,i) => 
                                <li key={i}  className="nav__item">
                                    <button  onClick={() => {
                                        setComponent(item.component);  
                                        executeScroll();
                                        }
                                    } className="nav__item-link color-white">{item.title}</button> 
                                </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div  className="wrapper">
                <div ref={myRef}>
                    {component}
                </div>
                
            </div>

            {/* <Navbar bg="dark" expand="lg" className="sticky-navbar-second" collapseOnSelect>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        {
                            navSapItems.map((item,i) => 
                            <Nav.Item key={i} eventKey={i}  className="nav__item">
                                <Nav.Link eventKey={i}>
                                    <button  onClick={() => setComponent(item.component)} className="nav__item-link color-white">{item.title}</button>
                                </Nav.Link>
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
