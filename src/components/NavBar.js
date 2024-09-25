// import a useState hook
import { useState, useEffect } from "react";
// use an import function array
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

//  this creates the transparent background animation on the navbar
export const NavBar = () => {
    // use a useState hook to create a state variable
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
        // use a function that will determine what happens on scroll
        const onScroll = () => {
            // measure if the window has been scrolled 50px (banner size) in the Y position
            if (window.scrollY > 50) {
                setScrolled(true);
            } else { 
                setScrolled(false);
            }
        }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
      <Router>
        {/* // copy and paste below from bootstrap library: https://react-bootstrap.netlify.app/docs/components/navbar/ */}
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
           <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            {/* <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <span className="navbar-text">
            <div className="social-icon">
                  <a href="https://github.com/markbuckle/markbuckle.github.io"><img src={navIcon5} alt="" /></a>
            </div>
            {/* <HashLink to='#connect'>
              <button className="vvd" onClick={() => onUpdateActiveLink('connect')}><span>Let’s Connect</span></button>
            </HashLink> */}
        </span>
        </Container>
      </Navbar>
    </Router>
  )
}