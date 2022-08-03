import React from "react";
import { Card, Container } from "react-bootstrap";
import "./style.css";

function Footer() {
    return (
        <Container>
            <Card.Footer className="text-muted customFooter">Copyright 2022 Mike Coletta and Katy Nuttman</Card.Footer>
        </Container>
    )
}

export default Footer;