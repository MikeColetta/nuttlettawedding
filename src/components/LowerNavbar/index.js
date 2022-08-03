import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./style.css";

function LowerNavbar() {
    return (
        <div className="lowerNavbarDiv">
            <Container>
                <Navbar className="lowerNavbar">
                    <NavDropdown title="Plan Your Visit" id="navbarScrollingDropdown" className="lowerNavbarDropdown">
                        <NavDropdown.Item href="#action3">
                            Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav className="lowerNavbarLinks">
                        <Link to="/Info" className="navbarItem">
                            Info
                        </Link>
                        <br></br>
                        <Link to="/Alerts" className="navbarItem">
                            Alerts
                        </Link>
                        <br></br>
                        <Link to="/Maps" className="navbarItem">
                            Maps
                        </Link>
                        <br></br>
                        <Link to="/Calendar" className="navbarItem">
                            Calendar
                        </Link>
                        <br></br>
                        <Link to="/Fees" className="navbarItem">
                            Fees
                        </Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default LowerNavbar;