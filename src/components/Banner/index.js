import React from "react";
import "./style.css";
import { Row, Col, Container } from "react-bootstrap";


function Banner() {
    return (
        <div className="bannerContainer">
            <div className="welcomeWrapper">
                <Container className="welcomeMessage">
                    <Row className="mt-3">
                        <Col xs={4}><h1 >Nuttletta National Park</h1></Col>
                        <Col xs={2}>
                            <p className="mb-0 mt-1">Eatonville</p>
                            <p>Washington</p>
                        </Col>
                        <Col s={6}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Banner;