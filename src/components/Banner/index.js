import React from "react";
import "./style.css";
import { Row, Col, Container } from "react-bootstrap";


function Banner() {
    return (
        <div className="bannerContainer">
            <div className="welcomeWrapper">
                <Container className="welcomeMessage">
                    <Row>
                        <Col xs={2}><h1 >Nuttletta</h1></Col>
                        <Col xs={2}>
                            <p className="mb-0 mt-1">National Park</p>
                            <p>Washington</p>
                            </Col>
                        <Col s={8}></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Banner;