import { useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";
import { Button } from 'react-bootstrap';
import './css/Navigation.css';

const resumeBtn = "button-def";
const navLink = "navLink";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up"); // Set the initial direction to "up"

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 5) {
        // Only update the direction if the scroll difference is significant
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}


function Navigation() {

  const [activeLink, setActiveLink] = useState(null);
  const scrollDirection = useScrollDirection();

  const handleLinkClick = (index) => {
    setActiveLink(index === activeLink ? null : index);
  };

  return (
    <div className={`sticky ${scrollDirection === "down" ? "hidden" : ""}`}>
      <Navbar className="my-nav" variant="light" expand="lg" >
        <Nav.Link href="#home"><Image className='navbar-brand nav-spacing' src='./img/dm_logo_white.png' width="70" height="70"/></Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-spacing'/>
        <Navbar.Collapse className='nav-spacing' id="basic-navbar-nav">
          <Nav className="ml-auto nav-spacing">
            <Nav.Link href="#about" bsPrefix={navLink}>
              <span
              className={activeLink === 0 ? 'nav-click active' : 'nav-click'}
              onClick={() => handleLinkClick(0)}
              >
                <b className='num mono-font'>01.</b><span className='myCustomNavLink'>About</span>
              </span>
            </Nav.Link>
            <Nav.Link href="#experience" bsPrefix={navLink}>
              <span 
              className={activeLink === 1 ? 'nav-click active' : 'nav-click'}
              onClick={() => handleLinkClick(1)}>
                <b className='num mono-font'>02.</b><span className='myCustomNavLink'>Experience</span>
              </span>
            </Nav.Link>
            <Nav.Link href="#organizations" bsPrefix={navLink}>
              <span
              className={activeLink === 2 ? 'nav-click active' : 'nav-click'}
              onClick={() => handleLinkClick(2)}
              >
                <b className='num mono-font'>03.</b><span className='myCustomNavLink'>Organizations</span>
              </span>
            </Nav.Link>
            <Nav.Link href="#projects" bsPrefix={navLink}>
              <span 
              className={activeLink === 3 ? 'nav-click active' : 'nav-click'}
              onClick={() => handleLinkClick(3)}
              >
                <b className='num mono-font'>04.</b><span className='myCustomNavLink'>Projects</span>
              </span>
            </Nav.Link>
            <Nav.Link href="./docs/Daniel_Mironiuk_Resume.pdf" target="_blank">
              <Button bsPrefix={resumeBtn} className='white'>Resume</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;