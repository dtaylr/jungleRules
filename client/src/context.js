import React, { Component } from 'react'
import {animalList, animalDetail} from './data' //to be used w/ state.
 
const AnimalContext = React.createContext();
//Provider = provider info for all of app
//Consumer = To use the info from provider

class AnimalProvider extends Component {
    state = {
        animals: [],
        animalDetail: animalDetail
    };

    //places component from loop method.
    componentDidMount(){
      this.setAnimals();
    }

    setAnimals = () => { //function
      let animals = []; 
      animalList.forEach( animal => {
        const singleAnimal = {...animal} //copies values; this is how values are copied instead of referencing
        animals = [...animals,singleAnimal]; //sets array equal to
        
      })
      this.setState(() => {
        return {animals:animals}
      })
    }

    /*function to finds animal by ID*/
    getAnimal = id => { 
      const animal = this.state.animals.find(animal => animal.id === id); 
      return animal
    };

    handleDetail = id => {
         const animal = this.getAnimal(id); //uses returned animal  
          this.setState(() => {
            return {animalDetail:animal} //returns animal detail pg.
          })
    }
    
  render() {
    return (
        //value can be a string or an obj.
      <AnimalContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail  //gets all prop values directly from state and destructres.
      }}>
        {this.props.children}
      </AnimalContext.Provider>
    )
  }
}

const AnimalConsumer = AnimalContext.Consumer;

export {AnimalProvider, AnimalConsumer}