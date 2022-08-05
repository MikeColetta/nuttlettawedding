import React from 'react';
import { Container, Card } from 'react-bootstrap';
import LeafletMap from '../components/LeafletMap';

class Maps extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container>
                    <br></br>
                    <Card>
                        <Card.Header><h2>Maps: Location Information</h2></Card.Header>
                        <Card.Body>
                            <h4>University of Washington Pack Forest Conference Center</h4>
                            <p>9010 453rd St E, Eatonville, WA 98328</p>
                            <LeafletMap />
                            <p>Written directions (with parking information)</p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Maps;