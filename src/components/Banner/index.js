import React from "react";
import "./style.css";
import {Image, Container} from "react-bootstrap";
import Placeholder from '../../assets/images/Placeholder1.jpeg'


function Banner() {
    return (
        <Container className="bannerContainer">
        <Image 
            alt="Mike and Katy"
            src={Placeholder}
            className="banner">
        </Image>
        </Container>
    )
}

export default Banner;