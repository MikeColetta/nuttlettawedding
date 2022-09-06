import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import registryPageImage from '../assets/images/RegistryPage.jpg';

class Registry extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Registry</h2>
                        </Card.Header>
                        <Image src={registryPageImage} style={{ height: "100%", width: "100%", margin: "auto" }} className="mt-2"></Image>
                        <br></br>
                        <Card.Body>
                            <p>Gifts are not expected, but should you feel inclined, we've collected some options to help us celebrate our future together.
                                Check out our registry on <a href='https://registry.theknot.com/katy-nuttman-mike-coletta-august-2023-wa/51681427' target={"_blank"} rel="noreferrer">The Knot</a>.
                            </p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Registry;