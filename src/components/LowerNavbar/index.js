import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faInfoCircle, faMapMarker, faCalendar, faTicket } from "@fortawesome/free-solid-svg-icons";

function LowerNavbar() {
    return (
        <div className="lowerNavbarDiv">
            <Container>
                <Navbar className="lowerNavbar">
                    <NavDropdown title="Plan Your Visit" id="navbarScrollingDropdown" className="lowerNavbarDropdown">
                        <Link to="/Maps" className="customNavbarItem">
                            Maps
                        </Link>
                        <br></br><Link to="/Eating" className="customNavbarItem">
                            Eating
                        </Link>
                        <br></br>
                        <Link to="/Accomodations" className="customNavbarItem">
                            Accomodations
                        </Link>
                        <br></br>
                        <Link to="/About" className="customNavbarItem">
                            About the Venue
                        </Link>
                        <br></br>
                        <Link to="/Recreation" className="customNavbarItem">
                            Recreation
                        </Link>
                        <br></br>
                        <Link to="/Calendar" className="customNavbarItem">
                            Calendar
                        </Link>
                        <br></br>
                        <Link to="/Hiking" className="customNavbarItem">
                            Hiking
                        </Link>
                        <br></br>
                        <Link to="/Fishing" className="customNavbarItem">
                            Fishing
                        </Link>
                        <br></br>
                        <Link to="/Fees" className="customNavbarItem">
                            Fees
                        </Link>
                        <br></br>
                        <Link to="/Info" className="customNavbarItem">
                            Info
                        </Link>
                        <br></br>
                        <Link to="/Alerts" className="customNavbarItem">
                            Alerts
                        </Link>
                        <br></br>
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