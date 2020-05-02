import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
// import { Provider } from 'react-redux';
//import store from "./store";
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
// import store from './store.js';
import Landing from './components/Landing';
import AnimalsGallery from './components/AnimalsGallery';
import Animal from './components/Animal'
import Details from './components/Details'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
    // <Provider store={store}>
        <React.Fragment>
        <AppNavbar />
            <Route exact path="/" strict component ={Landing} />
          <Switch>
            <Route exact path="/animals" strict component ={AnimalsGallery} />
            </Switch>
            <Route exact path="/details" component = {Details} />
          <Footer />
        </React.Fragment>
        
  //  </Provider>
    );
  }
}

export default App;