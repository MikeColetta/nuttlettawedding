import React from "react";
import "./style.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function PhotoTiles() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src="https://ik.imagekit.io/4lalrpwz0sy/Directions_0AXyEWpiBD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795539151" />
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
                        <Card.Img variant="top" src="https://ik.imagekit.io/4lalrpwz0sy/Eating_4jcG2VmVE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795539001" />
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
                        <Card.Img variant="top" src="https://ik.imagekit.io/4lalrpwz0sy/Accomodations_UOW6oh0c2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795539976" />
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
                        <Card.Img variant="top" src="https://ik.imagekit.io/4lalrpwz0sy/About_-WP24av3P.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795538947" />
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
                        <Card.Img variant="top" src="https://ik.imagekit.io/4lalrpwz0sy/Recreation_fyzM4zXf9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795539785" />
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
                        <Card.Img variant="top" src="https://ik.imagekit.io/4lalrpwz0sy/Calendar_868WiEw_iF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795539227" />
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
                        <Card.Img variant="top" src="https://ik.imagekit.io/4lalrpwz0sy/Registry_4SR_x5oSS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795538898" />
                        <Card.Body>
                            <Link to="/Registry" className="photoTileLink">
                                <Card.Title>Registry</Card.Title>
                            </Link>
                            <Card.Text>See where we're registered.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="photoTileCard">
                        <Card.Img variant="top" src="https://ik.imagekit.io/4lalrpwz0sy/Contact_OdjR7KNBg1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795539282" />
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
                        <Card.Img variant="top" src="https://ik.imagekit.io/4lalrpwz0sy/FeesPhototile_Y4duoqYci.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795370054" />
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