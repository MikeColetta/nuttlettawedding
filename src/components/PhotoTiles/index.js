import React from "react";
import "./style.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Directions from "../../assets/images/phototiles/Directions.jpg";
import Eating from "../../assets/images/phototiles/Eating.jpg";
import Accomodations from "../../assets/images/phototiles/Accomodations.jpg";
import About from "../../assets/images/phototiles/About.jpg";
import Recreation from "../../assets/images/phototiles/Recreation.jpg";
import Calendar from "../../assets/images/phototiles/Calendar.jpg";
import Registry from "../../assets/images/phototiles/Registry.jpg";
import Contact from "../../assets/images/phototiles/Contact.jpg";
import Fees from "../../assets/images/phototiles/Fees.jpg";

function PhotoTiles() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Directions} />
                        <Card.Body>
                            <Link to="/Maps" className="photoTileLink">
                                <Card.Title>Location and Directions</Card.Title>
                            </Link>
                            <Card.Text>Address, map, and directions to the venue.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Eating} />
                        <Card.Body>
                            <Link to="/Eating" className="photoTileLink">
                                <Card.Title>Eating</Card.Title>
                            </Link>
                            <Card.Text>Drinks, Food, and the Menu.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Accomodations} />
                        <Card.Body>
                            <Link to="/Accomodations" className="photoTileLink">
                                <Card.Title>Accomodations</Card.Title>
                            </Link>
                            <Card.Text>A brief description of where you will be staying.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={About} />
                        <Card.Body>
                            <Link to="/About" className="photoTileLink">
                                <Card.Title>About the Venue</Card.Title>
                            </Link>
                            <Card.Text>Everything you need to know about the UW Pack Forest Conference Center.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Recreation} />
                        <Card.Body>
                            <Link to="/Recreation" className="photoTileLink">
                                <Card.Title>Recreation</Card.Title>
                            </Link>
                            <Card.Text>Fun stuff to do around the venue.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Calendar} />
                        <Card.Body>
                            <Link to="/Calendar" className="photoTileLink">
                                <Card.Title>Calendar/Schedule</Card.Title>
                            </Link>
                            <Card.Text>Important Dates and Times for the Event.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Registry} />
                        <Card.Body>
                            <Link to="/Registry" className="photoTileLink">
                                <Card.Title>Registry</Card.Title>
                            </Link>
                            <Card.Text>See where we're registred.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Contact} />
                        <Card.Body>
                            <Link to="/Contact" className="photoTileLink">
                                <Card.Title>Contact</Card.Title>
                            </Link>
                            <Card.Text>Contact us with any questions.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src={Fees} />
                        <Card.Body>
                            <Link to="/Fees" className="photoTileLink">
                                <Card.Title>Fee Information</Card.Title>
                            </Link>
                            <Card.Text>Cost and expenses for the weekend.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PhotoTiles;