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
                                <td>5:00pm</td>
                                <td>Arrival and BBQ</td>
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
                                <td>8:00am - 4:00pm</td>
                                <td>Free Time</td>
                            </tr>
                            <tr>
                                <td>4:00pm</td>
                                <td>Cocktail Hour</td>
                            </tr>
                            <tr>
                                <td>5:00pm</td>
                                <td>Wedding Ceremony</td>
                            </tr>
                            <tr>
                                <td>5:30pm</td>
                                <td>Dinner and Reception</td>
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
                                <td>10:30am</td>
                                <td>Checkout and Brunch</td>
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