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
                            Eating
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Sleeping
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Accomodations
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Recreation
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav className="lowerNavbarLinks">
                        <Link to="/Info" className="customLowerNavbarItem">
                            Info
                            <br></br>
                            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                        </Link>
                        <br></br>
                        <Link to="/Alerts" className="customLowerNavbarItem">
                            Alerts
                            <br></br>
                            <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                        </Link>
                        <br></br>
                        <Link to="/Maps" className="customLowerNavbarItem">
                            Maps
                            <br></br>
                            <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                        </Link>
                        <br></br>
                        <Link to="/Calendar" className="customLowerNavbarItem">
                            Calendar
                            <br></br>
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                        </Link>
                        <br></br>
                        <Link to="/Fees" className="customLowerNavbarItem">
                            Fees
                            <br></br>
                            <FontAwesomeIcon icon={faTicket}></FontAwesomeIcon>
                        </Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default LowerNavbar;