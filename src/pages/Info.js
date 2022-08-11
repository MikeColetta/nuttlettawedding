import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import Adrianna from '../assets/images/infopage/Adrianna.jpg';
import Cass from '../assets/images/infopage/Cass.jpg';
import Mattie from '../assets/images/infopage/Mattie.jpg';
import Brian from '../assets/images/infopage/Brian.jpg';
import Frank from '../assets/images/infopage/Frank.jpg';
import Pat from '../assets/images/infopage/Pat.jpg';

class Info extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container>
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}><h2>How Mike and Katy Met</h2></Card.Header>

                        <p>Mike and Katy met at Washington State University in the Nuthouse Improv Troupe. They actually both
                            had their first show with Nuthouse together.
                        </p>
                        <p>They started dating in the fall of 2008. Mike graduated in 2010, with Katy getting a double major in Theatre
                            and English, graduating in 2011. Over the course of their 14 year relationship they've been through Katy's study
                            abroad in Australia and Mike's three year stint in Los Angeles. Since 2018 they've been living in Normandy Park with
                            their loveable murder muppet, Delilah.
                        </p>
                        <p>Mike and Katy are so excited to have friends and family come celebrate their love and life together.</p>
                    </Card>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}><h2>Meet the Bridal Party</h2></Card.Header>
                        <h4>Adrianna Lippy</h4>
                        <Image src={Adrianna} style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2"></Image>
                        <p>Adrianna Lippy...</p>
                        <h4>Cass Sauve</h4>
                        <Image src={Cass} style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2"></Image>
                        <p>Cass...</p>
                        <h4>Mattie Olsen</h4>
                        <Image src={Mattie} style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2"></Image>
                        <p>Mattie...</p>
                        <h4>Brian Cobb </h4>
                        <Image src={Brian} style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2"></Image>
                        <p>Brian and Mike met in the Streit dormitory at Washington State University in the fall of 2006.
                            They've been friends ever since.
                        </p>
                        <h4>Frank Coletta</h4>
                        <Image src={Frank} style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2"></Image>
                        <p>Frank and Mike have known each other since the moment of Mike's birth. Frank's always been there for
                            Mike even when Mike is the dingest of dongs.
                        </p>
                        <h4>Pat Abts</h4>
                        <Image src={Pat} style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2"></Image>
                        <p>Pat and Mike have been best friends since seventh grade. They've been through high school and college
                            together. 
                        </p>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Info;