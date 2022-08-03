import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faInfoCircle, faMapMarker, faCalendar, faTicket } from "@fortawesome/free-solid-svg-icons";

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
                        <Link to="/Info" className="customLowerNavbarItem">
                            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                            <br></br>
                            Info
                        </Link>
                        <br></br>
                        <Link to="/Alerts" className="customLowerNavbarItem">
                            <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                            <br></br>
                            Alerts
                        </Link>                       
                        <br></br>
                        <Link to="/Maps" className="customLowerNavbarItem">
                            <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                            <br></br>
                            Maps
                        </Link>
                        <br></br>
                        <Link to="/Calendar" className="customLowerNavbarItem">
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                            <br></br>
                            Calendar
                        </Link>
                        <br></br>
                        <Link to="/Fees" className="customLowerNavbarItem">
                            <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon>
                            <br></br>
                            Fees
                        </Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default LowerNavbar;