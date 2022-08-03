import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";


function Banner() {
    return (
        <div className="bannerContainer">
            <Row className="welcomeMessage">
                <Col xs={2}></Col>
                <Col>
                    <h1 >Nuttletta</h1>
                </Col>
                <Col>
                    <p>National Park Washington</p>
                </Col>
                <Col xs={8}>
                </Col>
            </Row>
        </div>
    )
}

export default Banner;