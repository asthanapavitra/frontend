import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import ExampleCarouselImage from './ExampleCarouselImage';

function HeroSection() {
  return (
    <div className="hero-section">
      <Navbar expand="lg" className="navbar-overlay" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <SchoolIcon />
            SkillSpire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 
      {/* Carousel Section */}
      <Carousel fade className="carousel-custom">
        <Carousel.Item>
          <div className="carousel-overlay"></div>
          <ExampleCarouselImage text="First slide" 
            src="https://t4.ftcdn.net/jpg/07/21/92/61/240_F_721926157_RhIwlKTThuvBJ2IJh1M6dD5ueSHp7p7X.jpg"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay"></div>
          <ExampleCarouselImage text="Second slide"
            src="https://t4.ftcdn.net/jpg/06/86/40/33/240_F_686403332_gFWcmLaUHew486oGYeR7KWgFmqEXHCKw.jpg"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-overlay"></div>
          <ExampleCarouselImage text="Third slide" 
            src="https://t3.ftcdn.net/jpg/07/62/80/56/240_F_762805624_kuKfVbrlRgZN30H906m7EOyxUDD8SUOV.jpg"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;


