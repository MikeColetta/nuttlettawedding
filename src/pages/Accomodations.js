import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import accomodationsPageImage from '../assets/images/AccomodationsPage.jpg'


class Accomodations extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Accomodations</h2>
                        </Card.Header>
                        <Image src={accomodationsPageImage} style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2"></Image>
                        <Card.Text>
                            <h4>Apartments</h4>
                            <p>Pack Forest has six apartments.
                                Each unit is equipped with a bathroom with a shower, kitchen and living room.
                                Some bathrooms are shared.</p>
                            <h4>Cabins</h4>
                            <p>We have 10 historical cabins at Pack Forest each with 4 bunk beds, for a total of 8 twin beds in each cabin.
                                The restrooms and showers for these cabins are conveniently located in a separate building next to the cabins.</p>
                            <h4>Dorms</h4>
                            <p>The Dorms are located overlooking the Recreation Field.  Each room has two twin beds located on the main floor level and two twin beds located in
                                the loft for a total of 4 beds per room.  Access to the loft requires that participants using the space climb a ladder mounted to the wall.
                                Restrooms and showers for this Dorm are located outside of the room on the east end of the Dorm building.
                                The Dorms have five separate rooms and can house 20 participants total.</p>
                            <h4>Dining Hall Dorms</h4>
                            <p>Our dining hall dorms are located on the second floor of our dining hall.  Five separate rooms lead out into a common hallway
                                large enough for quick dorm meetings. The restrooms and showers for this dorm are located in the same building on the main floor.
                                Rooms 251, 252, 253, and 254 have 2 bunk beds each for a total of 4
                                twin mattresses in each of those rooms.  Room 255 has 3 bunk beds for a total of 6 twin mattresses.
                                The total number of beds in the Dining Hall Dorm is 22.</p>
                            <h4>Houses</h4>
                            <p>Pack Forest has four different houses with full kitchens and private bathrooms.</p>
                        </Card.Text>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Accomodations;