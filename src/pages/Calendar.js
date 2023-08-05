import React from 'react';
import { Container, Card, Table, Image } from 'react-bootstrap';

class Calendar extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>

                            <h2>Schedule</h2>
                        </Card.Header>
                    </Card>
                    <Table className="mt-2" responsive="sm">
                        <thead>
                            <tr>
                                <th>Friday, August 11th</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5:00-6:00pm</td>
                                <td>Room check in at the Ranger Station</td>
                            </tr>
                            <tr>
                                <td>6:00pm</td>
                                <td>Pina Colettas at the Pavillion</td>
                            </tr>
                            <tr>
                                <td>6:30pm</td>
                                <td>BBQ Dinner served in the dining hall</td>
                            </tr>
                            <tr>
                                <td>7:300pm</td>
                                <td>Lawn games and social time</td>
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
                                <td>8:00am</td>
                                <td>Breakfast in the dining hall</td>
                            </tr>
                            <tr>
                                <td>1:00pm</td>
                                <td>Lunch in the dining hall</td>
                            </tr>
                            <tr>
                                <td>3:30-4:30pm</td>
                                <td>Room check in at the Ranger Station</td>
                            </tr>
                            <tr>
                                <td>4:30pm</td>
                                <td>Cocktail hour at the bar</td>
                            </tr>
                            <tr>
                                <td>5:30pm</td>
                                <td>Wedding Ceremony</td>
                            </tr>
                            <tr>
                                <td>6:15pm</td>
                                <td>Dinner and reception at the Pavillion</td>
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
                                <td>10:00am</td>
                                <td>Checkout and Brunch in the pavillion</td>
                            </tr>
                            <tr>
                                <td>11:00am</td>
                                <td>Farewell</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br></br>
                    <Image src="https://ik.imagekit.io/4lalrpwz0sy/CalendarPageImage_V7fGWxDN_w.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662797300276" style={{ height: "100%", width: "100%", margin: "auto" }} className="mt-2 mb-2"></Image>
                </Container>

            </div>
        )
    }
}

export default Calendar;