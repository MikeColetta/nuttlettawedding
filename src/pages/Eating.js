import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import EatingPageImage from '../assets/images/EatingPage.jpg';


class Eating extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Eating</h2>
                        </Card.Header>
                        <Image src={EatingPageImage} style={{ height: "75%", width: "75%", margin: "auto" }} className="mt-2"></Image>
                        <Card.Body>
                            <p>If you're staying with us for the weekend, food will be provided. Stay tuned to this page for a menu coming soon!</p>
                            <br></br>
                            <p>If you're not staying with us, here are some local recommendations in nearby Eatonville:</p>
                            <ul>
                                <li><a className="foodRecLink" href='https://www.eatbrunos.com/menus' target={"_blank"} rel="noreferrer">Bruno's Family Restaurant and Bar</a></li>
                                <li><a className="foodRecLink" href='https://www.eatatcruisercafe.com/' target={"_blank"} rel="noreferrer">Cruiser Cafe</a></li>
                                <li><a className="foodRecLink" href='http://shakentogo.com/' target={"_blank"} rel="noreferrer">Shaken</a></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Eating;