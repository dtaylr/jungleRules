import React, { Component } from 'react';
import Animal from './Animal'
import {AnimalConsumer} from '../context'
// import data from './data.json'
 
class AnimalsGallery extends Component {
 render () {
   return (
    <React.Fragment>
      <div data-test-id='container-fluid' class="container-fluid">
      {/*no border*/}
      <h1 className="galleryHeader">The Endangered</h1>
          <div class="cardsGallery">
            <AnimalConsumer>
              {value => { 
                console.log(value)
                return value.animals.map(animal => { 
                  return <Animal key={animal.id} animal={animal} /> 
                })
              }}
            </AnimalConsumer>
            </div>
          </div>
       </React.Fragment>
                  //{/*animalCards*/}
    //  
   )          
  }
  }

export default AnimalsGallery;