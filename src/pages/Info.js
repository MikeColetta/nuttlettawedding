import React from 'react';
import { Container } from 'react-bootstrap';

class Info extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container>
                    <h2>Info/Learn About the Park</h2>
                    <li>How we met</li>
                    <li>Family and party bios</li>
                </Container>
            </div>
        )
    }
}

export default Info;