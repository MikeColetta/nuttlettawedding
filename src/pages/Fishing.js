import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import fishingPageImage from '../assets/images/FishingPage.jpg';

class Fishing extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2 className='mt-2'>Fishing</h2>
                        </Card.Header>
                        <Image src={fishingPageImage} fluid="true"></Image>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Fishing;