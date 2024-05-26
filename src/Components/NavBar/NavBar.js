import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
export default function NavBar() {
  return (
    <div>
     <Navbar expand="lg" className="navbar">
      <Container>
       <Navbar.Brand>
        <a className="navbarbrand" href="/"><span className="text-regal-blue">Dhiya</span><span className="text-gold">Fashion</span></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Catogries" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Dress</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Cosmetics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Bags
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Flats
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <form className="navbarsearch flex"><input type="text" placeholder="Search here ..."/>
            <button type="submit" className="navbar-search-btn"><i className="fas fa-search"></i></button>
          </form>

          <div className="navbarbtns">
            <a className="add-to-cart-btn flex" href="/cart">
              <span className="btn-ico">
            <i className="fas fa-shopping-cart"></i></span><div className="btn-txt fw-5">Cart<span className="cart-count-value">0</span>
            </div></a></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}
