import React from 'react';
import { Container } from 'react-bootstrap';
import LeafletMap from '../components/LeafletMap';

class Maps extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container>
                    <h2>Maps: Info about location</h2>
                    <p>Address</p>
                    <LeafletMap/>
                    <p>Written directions (with parking information)</p>
                </Container>
            </div>
        )
    }
}

export default Maps;