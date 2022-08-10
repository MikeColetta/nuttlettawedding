import React from 'react';
import { Container, Card } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

class Contact extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2 className='mt-2'>Contact</h2>
                        </Card.Header>
                    </Card>
                    <ContactForm />
                </Container>
            </div>
        )
    }
}

export default Contact;