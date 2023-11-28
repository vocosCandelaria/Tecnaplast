import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from '../../Assets/logo.png';
import "./styleMenu.css";

const Menu = () => {
   return (
    <header className='sticky-top'>
      
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand href="/">
            <img src={Logo} alt="Logotipo" loading='Tecnaplast' width="65" height="70"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-uppercase">
            <Nav.Link href="/">inicio</Nav.Link>
            <NavDropdown title="maquinas" id="basic-nav-dropdown">
                <NavDropdown title="horno de compresión" id="basic-nav-dropdown" className="dropdown-toggle-right dropdown-menu-right dropdown-submenu-right">
                    <NavDropdown.Item href="/Maquinas/Horno de Compresion">Horno de Compresión</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="trituradoras" id="basic-nav-dropdown" className="dropdown-toggle-right dropdown-menu-right dropdown-submenu-right">
                    <NavDropdown.Item href="/Maquinas/Trituradoras/Trituradora Básica">trituradora básica</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Trituradoras/Trituradora Pro">trituradora pro</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Trituradoras/Kit Básico">kit de trituración básico</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Trituradoras/Kit Pro">kit de trituración pro</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Trituradoras">ver todas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="extrusoras" id="basic-nav-dropdown" className="dropdown-toggle-right dropdown-menu-right dropdown-submenu-right">
                    <NavDropdown.Item href="/Maquinas/Extrusoras/Extrusora Básica">extrusora básica</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Extrusoras/Extrusora Pro">extrusora pro</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Extrusoras/Extrusora Manual">extrusora manual</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Extrusoras/Extrusora Pro Max">extrusora pro max</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Extrusoras">ver todas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="inyectoras" id="basic-nav-dropdown" className="dropdown-toggle-right dropdown-menu-right dropdown-submenu-right">
                    <NavDropdown.Item href="/Maquinas/Inyectoras/Inyectora Manual">inyectora manual</NavDropdown.Item>
                    <NavDropdown.Itemgt href="/Maquinas/Inyectoras/Inyectora Neumática">inyectora neumática</NavDropdown.Itemgt>
                    <NavDropdown.Item href="/Maquinas/Inyectoras">ver todas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="Prensas Tablas" id="basic-nav-dropdown" className="dropdown-toggle-right dropdown-menu-right dropdown-submenu-right">
                    <NavDropdown.Item href="/Maquinas/PrensasTablas/Prensa Tabla 1 x 1">prensa tabla 1m x 1m</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/PrensasTablas/Prensa Tabla 60 x 60">prensa tabla 60cm x 60cm</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Prensas Tablas">ver todas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown title="estaciones combinadas" id="basic-nav-dropdown" className="dropdown-toggle-right dropdown-menu-right dropdown-submenu-right">
                    <NavDropdown.Item href="/Maquinas/EstacionesCombinadas/Inyectora y Trituradora">inyectora y trituradora</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/EstacionesCombinadas/Extrusora y Trituradora">extrusora y trituradora</NavDropdown.Item>
                    <NavDropdown.Item href="/Maquinas/Estaciones Combinadas">ver todas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Maquinas">ver todas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="moldes y accesorios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Moldes/Moldes de Inyección">moldes de inyección</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Moldes/Moldes de Extrusión">moldes de extrusión</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Moldes/Moldes de Compresión">moldes de compresión</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Moldes">ver todos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/PlantaReciclaje">planta reciclaje</Nav.Link>
            <Nav.Link href="/Contacto">contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    </header>
  );
};

export default Menu;

