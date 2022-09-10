import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import InfoPageImage from '../assets/images/InfoPageImage.jpg';

class Info extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container>
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>How Mike and Katy Met</h2>
                        </Card.Header>
                        <Image src={InfoPageImage} style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2 mb-2"></Image>
                        <p>Mike and Katy met at Washington State University in the Nuthouse Improv Troupe. They actually both
                            had their first show with Nuthouse together.
                        </p>
                        <p>They started dating in the fall of 2008. Mike graduated in 2010, with Katy earning two bachelor's degrees in Theatre
                            and English, graduating in 2011. Since 2018 they've been living in Normandy Park with their loveable murder muppet, Delilah.

                            Mike proposed to Katy at her family cabin on the Skykomish River. He surprised her on the banks of the river when she left to get water.
                            Their friends all decorated the cabin in the bunting Katy had made for them and they had a great night celebrating, until the bat showed up.
                        </p>
                        <p>Mike and Katy are so excited to have friends and family come celebrate their love and life together.</p>
                    </Card>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}><h2>Meet the Bridal Party</h2></Card.Header>
                        <h4>Adriana Lippy</h4>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/Adrianna_Ea-59VAc-H.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662796026268" style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2 mb-2"></Image>
                        <p>Adriana and Katy began their friendship in diapers as they regularly attended the same babysitter, and their moms taught together at North Mason High School.
                            They've been through elementary school, middle school, high school, and college together, backpacked many Pacific Northwest trails,
                            and made fun of each other relentlessly. </p>
                        <h4>Cass Sauve</h4>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/Cass_rzMLARkJe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662796026048" style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2 mb-2"></Image>
                        <p>Cass and Katy met while working at the Seattle Children's Theatre while portraying their alter-egos, Madame Luna and the Change Wizard.
                            Cass and Katy both teach high school theatre, and share a deep and lasting love of collecting Junior Ranger badges at National Parks. </p>
                        <h4>Mattie Olson</h4>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/Mattie_OvDtvS1CTC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662796026383" style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2 mb-2"></Image>
                        <p>Mattie Olson is Katy's cousin on her mom's side, and is fiercely driven in everything she does.
                            Mattie has an incredible taste in fashion and style and works in Bellevue as a real estate agent. Together, they've traveled the world,
                            told many stories of their silly cats, and shared many knowing glances over the holiday dinner tables</p>
                        <h4>Brian Cobb </h4>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/Brian_kUIvbhqe5Z.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662796026263" style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2 mb-2"></Image>
                        <p>Brian and Mike met in the Streit dormitory at Washington State University in the fall of 2006.
                            They've been friends ever since. Brian and Mike were roommates after college in beautiful Renton, Washington together and had
                            a bachelor pad of dreams (just two TVs with two Xboxes in the living room).
                        </p>
                        <h4>Frank Coletta</h4>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/Frank_ZEIHqmrnA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662796026101" style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2 mb-2"></Image>
                        <p>Frank and Mike have known each other since the moment of Mike's birth. Frank's always been there for
                            Mike even when Mike is the dingest of dongs.
                        </p>
                        <h4>Pat Abts</h4>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/Pat_XPtpaCJl1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662796025973" style={{ height: "50%", width: "50%", margin: "auto" }} className="mt-2 mb-2"></Image>
                        <p>Pat and Mike have been best friends since seventh grade. They've been through middle school, high school and college
                            together. Both share an appreciation for comic books, video games, and how bad Mike is at golf.
                        </p>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Info;