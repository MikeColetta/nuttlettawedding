import React from 'react';
import { Container, Card } from 'react-bootstrap';
import LeafletMap from '../components/LeafletMap';

class Maps extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container>
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}><h2>Venue Information</h2></Card.Header>
                        <Card.Body>
                            <h4>University of Washington Pack Forest Conference Center</h4>
                            <p>9010 453rd St E, Eatonville, WA 98328</p>
                            <LeafletMap />
                            <br></br>
                            <h4 className='mt-2'>Written directions</h4>
                            <h6>from SeaTac International Airport</h6>
                            <ol>
                                <li>Take I-5 S to Steele St S in Parkland. Take the Steele St exit from WA-512 E
                                    32 min (29.8 mi)
                                </li>
                                <li>Take Spanaway Loop Rd S to WA-704 E
                                    8 min (4.7 mi)</li>
                                <li>Spanaway Loop Rd S turns left and becomes WA-704 E
                                    58 s (0.6 mi)</li>
                                <li>Follow WA-7 S to 453rd St E in La Grande</li>
                            </ol>
                            <h4>Parking Information</h4>
                            <p>Free parking is available on the property.</p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Maps;