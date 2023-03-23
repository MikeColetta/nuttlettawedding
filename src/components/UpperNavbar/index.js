import React from "react";
import { Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./style.css";

function UpperNavbar() {
    return (
        <Container>
            <Navbar className="customNavbar" expand="lg" variant="dark">
                <Link to="/" className="upperNavbarLink">
                    <h1 className="websiteName">Mike and Katy's Wedding</h1>
                </Link>
                <NavDropdown align="end" title="Menu" id="nav-dropdown" className='customDropdown'>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBReDg1c1exMg1eUI1-w1qSyfnmEgbFkCnyHtyfCup8Ty_kA/viewform?usp=sf_link"
                        className="customNavbarItem"
                        target={"_blank"}
                        rel="noreferrer">
                        RSVP
                    </a>
                    <br></br>
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

export default UpperNavbar;