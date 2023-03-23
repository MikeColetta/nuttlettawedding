import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faInfoCircle, faMapMarker, faCalendar, faTicket, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function LowerNavbar() {
    return (
        <div className="lowerNavbarDiv">
            <Container>
                <Navbar className="lowerNavbar">
                    <NavDropdown title="Plan Your Visit" id="navbarScrollingDropdown" className="lowerNavbarDropdown">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBReDg1c1exMg1eUI1-w1qSyfnmEgbFkCnyHtyfCup8Ty_kA/viewform?usp=sf_link"
                            className="customNavbarItem"
                            target={"_blank"}
                            rel="noreferrer">
                            RSVP
                        </a>
                        <br></br>
                        <Link to="/Maps" className="customNavbarItem">
                            Maps
                        </Link>
                        <br></br>
                        <Link to="/Eating" className="customNavbarItem">
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
                        <Link to="/Registry" className="customNavbarItem">
                            Registry
                        </Link>
                        <br></br>
                        <Link to="/Contact" className="customNavbarItem">
                            Contact
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
                    </NavDropdown>
                    <Nav className="lowerNavbarLinks">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBReDg1c1exMg1eUI1-w1qSyfnmEgbFkCnyHtyfCup8Ty_kA/viewform?usp=sf_link"
                            className="customLowerNavbarItem"
                            target={"_blank"}
                            rel="noreferrer">
                            RSVP
                            <br></br>
                            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                        </a>
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