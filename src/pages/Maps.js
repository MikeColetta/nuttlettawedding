import React from 'react';
import { Container } from 'react-bootstrap';

class Maps extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container>
                    <h2>Maps: Info about location</h2>
                    <p>Address</p>
                    <p>Link to location/map on Google</p>
                    <p>Written directions (with parking information)</p>

                </Container>
            </div>
        )
    }
}

export default Maps;