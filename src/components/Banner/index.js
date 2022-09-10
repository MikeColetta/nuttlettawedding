import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";


function Banner() {
    return (
        <section className="bannerContainer">
            <figure className="bannerImage">
                <div className="welcomeWrapper">
                    <Container className="welcomeMessage">
                        <Row className="mt-3">
                            <Col xs={4}><Link to="/" className="bannerLink"><h1 >Nuttletta National Park</h1></Link></Col>
                            <Col xs={2}>
                                <p className="mb-0 mt-1">Eatonville</p>
                                <p>Washington</p>
                            </Col>
                            <Col s={6}></Col>
                        </Row>
                    </Container>
                </div>
            </figure>
        </section>
    )
}

export default Banner;