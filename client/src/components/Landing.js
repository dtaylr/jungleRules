import React from 'react';
import {Container, Button, Row, Col} from 'reactstrap';
// import {styled} from 'styled-components';
  
function Landing() {

        return (
            <React.Fragment>
             {/*Image Header*/}
                <Container fluid>
                   <img style={{width: '100%', height: '80vh', padding: '2em'}} 
                  src="https://images.pexels.com/photos/1386559/pexels-photo-1386559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="tiger"/>
                </Container>     
             
                 {/*Main Content*/}
                <Container>
                    <Row>
                        <Col className="mainContent">
                            <h1>What We Do</h1>
                            <hr/>
                                <p className="mainP" style={{boxShadow: "0.4rem 0.3rem 1rem 0.3rem rgba(0,0,0,0.2)"}}> cronut four dollar toast green juice craft beer, vaporware distillery edison bulb austin chicharrones. Banjo wayfarers cliche iceland vice single-origin coffee lo-fi, hashtag beard hot chicken mustache austin prism lomo. Beard hexagon pinterest, literally knausgaard snackwave gluten-free messenger bag. Keytar cardigan photo booth typewriter snackwave coloring book biodiesel try-hard. Viral swag food truck wayfarers fashion axe pitchfork, hoodie 3 wolf moon beard vinyl brunch unicorn flexitarian. Health goth organic succulents vape neutra franzen.
                                </p>
                            <Button className="pageButtons" color="warning" href="/animals"><i className="fa fa-paw"/> View Animals </Button>
                                </Col>
                    </Row>

                    <hr />

                    <h1 className="text-center" style={{display: "flex", justifyContent: "center"}}>Where To Find Us</h1>
                    <Row className="suppContent">
                        <div className="card col-md-4" style={{padding: "0", boxShadow: "0.4rem 0.4rem 0.2rem 0.1rem rgba(0,0,0,0.2)"}}>
                            <div className="card-header text-center" style={{padding: "3rem 0",  backgroundColor: "#626063"}} >
                                Top Locations
                            </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><a href="https://maps.google.com">Ghana</a></li>
                                        <li className="list-group-item"><a href="https://maps.google.com">Costa Rica</a></li>
                                        <li className="list-group-item"><a href="https://maps.google.com">Malaysia</a></li>
                                        <li className="list-group-item"><a href="https://maps.google.com">South Africa</a></li>
                                </ul>
                        </div>

                        <div className="col-md-8">
                            <img src="http://www.mapsnworld.com/world-map/world-endangered-species.jpg" style={{height: "500px", width: "100%", boxShadow: "0.4rem 0.3rem 1rem 0.3rem rgba(0,0,0,0.2)"}} alt="sucks" />
                        
                        </div>
                     
                    </Row>
                </Container>
            </React.Fragment>
            );
        }

export default Landing;