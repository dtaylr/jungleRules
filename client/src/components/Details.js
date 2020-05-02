import React, { Component } from 'react'
import {AnimalConsumer } from '../context'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Button} from 'reactstrap'

class Details extends Component {
  render() {
    return (
      <AnimalConsumer>
       {/*destructrucring to pass values*/} 
        {value => {
          const {id, name,src, description, status} = value.animalDetail
            return (
              <Container className="detailsContainer">
                <div key={id}>
                  <h1 className="detailsHeader">{name}</h1>
              <Row>
                <Container className="col-md-12 col-md-8">
                  <img className="imageDetail" src={src} alt="animal" />
                </Container>
              {/*description */}
                <Container className="col-md-12 col-md-8" style={{paddingTop: "2em"}}>
                <h3>Description:</h3>
                    {description}

                  <p>Status:{status}</p>
                </Container>  
            </Row>
                <Link to = "/animals"><Button style={{marginTop: "1em", padding: "1rem 2rem"}} color="warning" className="btn btn-lg">Back</Button></Link>
            </div>
            </Container>
          )
        }}
      </AnimalConsumer>
    )
  }
}

export default Details;
