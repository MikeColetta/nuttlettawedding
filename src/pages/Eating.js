import React from 'react';
import { Container, Card, Image, Table } from 'react-bootstrap';

class Eating extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Eating</h2>
                        </Card.Header>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/Eating_4jcG2VmVE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662795539001" style={{ height: "75%", width: "75%", margin: "auto" }} className="mt-2"></Image>
                        <br></br>
                        <Card.Body>
                            <Card.Header style={{ backgroundColor: "white" }}>
                                <h4>Menu</h4>
                            </Card.Header>
                            <Table className="mt-2" responsive="sm">
                                <thead>
                                    <tr>
                                        <th>Friday, August 11th</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dinner - 6:30pm</td>
                                        <td>Hamburgers and hotdogs, pasta salad, baked beans, berry crisp</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Saturday, August 12th</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Breakfast - 8:00am</td>
                                        <td>Breakfast burritos and hashbrowns</td>
                                    </tr>
                                    <tr>
                                        <td>Lunch - 1:00pm</td>
                                        <td>Grilled ham and cheese sandwich with tomato basil soup</td>
                                    </tr>
                                    <tr>
                                        <td>Dinner - 6:15pm</td>
                                        <td>Chicken alfredo lasagna with garlic bread</td>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>Sunday, August 13th</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Brunch - 10:00am</td>
                                        <td>French toast with berries and whipped cream</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card.Header style={{ backgroundColor: "white" }}>
                                <h4>Recommendations</h4>
                            </Card.Header>
                            <br></br>
                            <p>If you're not staying with us, here are some local recommendations:</p>
                            <p>One of Katy's favorite places for pizza and a beverage after a hike at Mt. Rainier is the Rainer BaseCamp Bar and Grill located on the RMI campus.
                                You can also grab a scoop or two of ice cream at the cafe in Whittaker's Bunkhouse</p>
                            <p>Here are some local spots in nearby Eatonville:</p>
                            <ul>
                                <li><a className="recLink" href='https://www.eatbrunos.com/menus' target={"_blank"} rel="noreferrer">Bruno's Family Restaurant and Bar</a></li>
                                <li><a className="recLink" href='https://www.eatatcruisercafe.com/' target={"_blank"} rel="noreferrer">Cruiser Cafe</a></li>
                                <li><a className="recLink" href='http://shakentogo.com/' target={"_blank"} rel="noreferrer">Shaken</a></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Eating;