import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';

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
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/AccomodationsPage_VCDqJSixAp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662797301218" style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2"></Image>
                        <br></br>
                        <Card.Text>
                            <h4>Cabins</h4>
                            <p>Cabins at Pack Forest each have 4 bunk beds, for a total of 8 twin beds in each cabin.
                                The restrooms and showers for these cabins are shared and located in a separate building next to the cabins.</p>
                            <h4>Dorms</h4>
                            <p>The Dorms are located overlooking the Recreation Field.  Each room has two twin beds located on the main floor level and two twin beds located in
                                the loft for a total of 4 beds per room.  Access to the loft requires that participants using the space climb a ladder mounted to the wall.
                                Restrooms and showers for this Dorm are located outside of the room on the east end of the Dorm building.</p>
                            <h4>Dining Hall Dorms</h4>
                            <p>Our dining hall dorms are located on the second floor of our dining hall and share a common hallway.
                                The restrooms and showers for this dorm are located in the same building on the main floor.
                                Rooms 251, 252, 253, and 254 have 2 bunk beds each for a total of 4
                                twin mattresses in each of those rooms.  Room 255 has 3 bunk beds for a total of 6 twin mattresses.</p>
                        </Card.Text>
                    </Card>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Packing List</h2>
                        </Card.Header>
                        <Card.Text>
                            <h4 className="mt-2">In addition to the usual items you'd pack for a weekend away, here are some useful suggestions to help keep you comfortable for a weekend away in the woods. </h4>
                            <br></br>
                            <h5 className='mt-2'>Clothing</h5>
                            <ul>
                                <li>Clothing to keep you cool in the sun, and warm in the evenings</li>
                                <li><a href='https://www.theknot.com/content/what-to-wear-semi-formal' target={'_blank'} rel='noreferrer'>Semi-formal attire </a>
                                    for the wedding (no jackets needed for gentlemen in the heat)</li>
                                <li>Hiking socks and boots to trek a trail or two</li>
                                <li>Shower shoes and a bathrobe (you may be using a communal bathroom)</li>
                                <li>Sun hat</li>
                                <li>Sunglasses</li>
                                <li>Insulation layer for a chilly evening</li>
                                <li>A rain jacket (to prevent it from raining)</li>
                            </ul>
                            <h5>Toiletries</h5>
                            <ul>
                                <li>Sunscreen</li>
                                <li>Bugspray</li>
                                <li>Personal towel and wash cloth</li>
                            </ul>
                            <h5>Gear and Gadgets</h5>
                            <ul>
                                <li>Headlamp or flashlight</li>
                                <li>Reusable water bottle (we're trying to keep the wedding as plastic free as possible!)</li>
                                <li>Camp chairs or picnic blankets</li>
                            </ul>
                            <h5>Optional Items</h5>
                            <ul>
                                <li>Lawn games, board games, card games</li>
                                <li>Hiking needs (day pack, Ten Essentials)</li>
                                <li>Fishing needs (bait, tackle, accessories)</li>
                                <li>Hammock</li>
                                <li>Binoculars and bird book</li>
                            </ul>
                        </Card.Text>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Accomodations;