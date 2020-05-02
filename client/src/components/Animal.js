import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody,CardFooter,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import {AnimalConsumer} from '../context'

  class Animal extends Component {
    render(){
      const {id, src, name, location, status} = this.props.animal
        return (
        <AnimalConsumer>
        {/*need to have a function to access*/}
          {animal => (
                <Card className="card">
                  <CardImg className="galleryCard" top width="100%" src={src} alt="Card image cap"/>
                  <CardBody>
                      <CardTitle>Name: {name} </CardTitle>
                      <CardSubtitle> Location: {location}</CardSubtitle>
                      <CardText> Status: {status}</CardText>
                    <CardFooter style={{padding: 0}}>
                      <Link to='/details'>
                        <Button style={{width: "100%"}}className="border-0" onClick={() => animal.handleDetail(id)}>
                          <i className="fa fa-paw"> Learn More </i>
                        </Button>
                      </Link> 
                    </CardFooter>
                </CardBody>
                </Card>
          )
        }
        </AnimalConsumer>
      );
    };
  }

  Animal.propTypes = {
    animal:PropTypes.shape({
      id:PropTypes.number,
      src:PropTypes.string,
      title:PropTypes.string,
      description:PropTypes.string
    }).isRequired
  }
    
export default Animal;

