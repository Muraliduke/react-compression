import React, {useState} from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';


const NavBar = (props: any) => {
    const pathname = props.location.pathname;
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <style type="text/css">
                {`
                .bg-dark {
                    background-color: #0d090b!important;
                }
                `}
            </style>
            <Navbar fixed="top" expanded={expanded} collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Navbar.Brand as={Link} to="/"><img className="logo" src={require('../../logo.png')}  alt="koops-logo"/></Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => setExpanded(!expanded)} as={Link} to="/" active={pathname.startsWith('/home')}>Home</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(!expanded)} as={Link} to="/services" active={pathname.startsWith('/services')}>Services</Nav.Link>
                        <Nav.Link onClick={() => setExpanded(!expanded)} as={Link} to="/contact" active={pathname.startsWith('/contact')}>Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
											<Nav.Link href="tel:919551075056"><span>call Us at : +91-9551075056</span></Nav.Link>
											<Nav.Link href="mailto:info@jkcorps.co.in"><span>Mail us at : info@jkcorps.co.in</span></Nav.Link>
											
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default withRouter(NavBar)
