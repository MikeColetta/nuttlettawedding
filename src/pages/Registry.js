import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';

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
                        <Card.Body>
                            <p>Gifts are not expected, but should you feel inclined, we've collected some options to help us celebrate our future together.
                                Check out our registry on <a href='https://registry.theknot.com/katy-nuttman-mike-coletta-august-2023-wa/51681427' target={"_blank"} rel="noreferrer">The Knot (links to miscellaneous items, as well as our Target and Macy's registry)</a>.
                            </p>
                            <p>We are also registered directly at:</p>
                            <ul>
                                <li><a href='https://www.myregistry.com/wedding-registry/katy-nuttman-and-mike-coletta-normandy-park-wa/3315647' target={"_blank"} rel="noreferrer">MyRegistry (links to items from REI and additional Fiestaware)</a></li>
                            </ul>
                        </Card.Body>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/RegistryPage_jihcT0_cW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662797303616" style={{ height: "100%", width: "100%", margin: "auto" }} className="mt-2"></Image>
                        <br></br>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Registry;