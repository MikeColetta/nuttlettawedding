import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';

class Recreation extends React.Component {

    render() {
        return (
            <div className="sectionDiv">
                <Container className="contentContainer">
                    <br></br>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h2>Recreation</h2>
                        </Card.Header>
                    </Card>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h3 className='mt-2'>Fishing</h3>
                        </Card.Header>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/FishingPage_UAx3skvp4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662797300576" className="mt-2" fluid="true" style={{ width: "50%", margin: "auto" }}></Image>
                        <br></br>
                        <Card.Body>
                            <h6 style={{ textAlign: "center" }}>There are lots of fishing options around the venue. Here are a few recommendations!</h6>
                            <h4>Nisqually River</h4>
                            <p>Closest spot to the venue and open for all game fish at the time of the wedding.</p>
                            <h4>La Grande Resevoir</h4>
                            <p>South of the Nisqually River is the La Grande Resevoir. Fishing is open all year round, but finding a spot
                                might be tricky.</p>
                            <h4>Alder Lake</h4>
                            <p>Farther south of La Grande Resevoir is Alder Lake. A wide open lake with year-round fishing opportunities. Talk to Mike about
                                borrowing a kayak.
                            </p>
                        </Card.Body>
                    </Card>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h3>Hiking</h3>
                        </Card.Header>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/HikingPage_xEk-QsJJu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662797300855" className="mt-2" fluid="true" style={{ width: "50%", margin: "auto" }}></Image>
                        <br></br>
                        <Card.Body>
                            <h4><a className="recLink" href='http://www.packforest.org/trail-map.html' target={"_blank"} rel={"noreferrer"}>Pack Forest Trails</a></h4>
                            <p>Trail maps will be available at the wedding venue, but preview what's available at all levels.</p>
                            <h4><a className="recLink" href='https://www.wta.org/go-hiking/hikes/little-mashel-falls' target={"_blank"} rel={"noreferrer"}>Little Mashel Falls</a></h4>
                            <p>A moderately difficult hike with three waterfalls, and multiple viewing areas,
                                make this a great choice for a nearby hike. The tallest waterfall plunges over 90 feet!</p>
                            <h4><a className="recLink" href='https://www.nps.gov/mora/planyourvisit/longmire.htm' target={"_blank"} rel={"noreferrer"}>Longmire </a>
                                and <a className="recLink" href='https://www.nps.gov/mora/planyourvisit/paradise.htm' target={"_blank"} rel={"noreferrer"}>Paradise</a>
                                , Mt. Rainier</h4>
                            <p>Mt. Rainier—there are plenty of trails to be found inside the park as well to suit all your hiking needs. Please note that you will need to purchase
                                a park entrance pass to access these trails. A weeklong pass can be purchased for $30, or an annual America The Beautiful Pass,
                                which grants access to all federal lands, can be purchased for $80. Discounts are available for seniors, military, and disabled guests. </p>
                        </Card.Body>
                    </Card>
                    <Card style={{ border: "none" }}>
                        <Card.Header style={{ backgroundColor: "white" }}>
                            <h3>Other Activities</h3>
                        </Card.Header>
                        <Image src="https://ik.imagekit.io/4lalrpwz0sy/OtherActivitiesImage_MQxCxv_9d.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662797299551" className="mt-2" fluid="true" style={{ width: "50%", margin: "auto" }}></Image>

                        <br></br>
                        <Card.Body>
                            <h4><a className="recLink" href='https://www.nwtrek.org/' target={"_blank"} rel={"noreferrer"}>Northwest Trek Wildlife Park </a></h4>
                            <p>Meet native Northwest animals on walking paths or premium tours.</p>
                            <h4><a className="recLink" href='http://www.pioneerfarmmuseum.org/' target={"_blank"} rel={"noreferrer"}>Pioneer Farm Museum and Ohop Indian Village</a></h4>
                            <p>Visit two homestead cabins built in the 1880's and see how the Coast Salish people encouraged game playing to teach their children
                                how to learn, listen and respect their enviroment. </p>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Recreation;