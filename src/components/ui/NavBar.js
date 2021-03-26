import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { NavLink, Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

  return (
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">SoftMiners</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavLink to="/" activeClassName="active" className="nav-item nav-link" >Home</NavLink>
              <NavLink to="/servicios" activeClassName="active" className="nav-item nav-link" >Servicios</NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavLink to="/soluciones" activeClassName="active" className="nav-item nav-link" >Soluciones</NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavLink to="/clientes" activeClassName="active" className="nav-item nav-link" >Clientes</NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavLink to="/nosotros" activeClassName="active" className="nav-item nav-link" >Nosotros</NavLink>
              <NavLink to="/contacto" activeClassName="active" className="nav-item nav-link" >Contacto</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

NavbarText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}