import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

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
                                <th>Time</th>
                                <th>Friday, August 11th</th>
                                <th>Saturday, August 12th</th>
                                <th>Sunday, August 13th</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Morning</td>
                                <td>N/A</td>
                                <td>8:00am to 3:00pm - Free time</td>
                                <td>8:00am to 11:00am - Breakfast and Goodbyes</td>

                            </tr>
                            <tr>
                                <td>Afternoon</td>
                                <td>N/A</td>
                                <td>4:00pm - Wedding Ceremony</td>
                                <td>N/A</td>

                            </tr>
                            <tr>
                                <td>Evening</td>
                                <td>5:00pm - Arrival and Cookout!</td>
                                <td>6:00pm - Reception</td>
                                <td>N/A</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>

            </div>
        )
    }
}

export default Calendar;