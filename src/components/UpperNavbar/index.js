import React from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./style.css";

function CustomNavbar() {
    return (
        <Container>
            <Navbar className="customNavbar" expand="lg" variant="dark">
                <Link to="/">
                    {/* <img
                        alt="Codex Logo"
                        src={Logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top navbarLogo"
                    />{' '} */}
                </Link>
                <h1>Nuttletta National Park</h1>
                <NavDropdown align="end" title="Menu" id="nav-dropdown" className='customDropdown'>
                    <Link to="/Info" className="customNavbarItem">
                        Info
                    </Link>
                    <br></br>
                    <Link to="/Alerts" className="customNavbarItem">
                        Alerts
                    </Link>
                    <br></br>
                    <Link to="/Maps" className="customNavbarItem">
                        Maps
                    </Link>
                    <br></br>
                    <Link to="/Calendar" className="customNavbarItem">
                        Calendar
                    </Link>
                    <br></br>
                    <Link to="/Fees" className="customNavbarItem">
                        Fees
                    </Link>
                </NavDropdown>
            </Navbar>
        </Container>
    )
}

export default CustomNavbar;