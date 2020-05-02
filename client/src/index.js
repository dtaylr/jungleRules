import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import {AnimalProvider} from './context';

// import {combineReducers} from 'redux'
// import postReducer from './postReducer'

// import {combineReducers, createStore, applyMiddleware} from 'redux'

// // function animalReducer(state = [], action) {
// //     return state;
// // }

// // function userReducer(state = '', action){
// //     return state
// // }
 
// // const allReducers = combineReducers({animals: animalReducer, user: userReducer})

// // const store = createStore(
// //     allReducers, 
// //     {
// //     animals: [{name: 'Jaguar'}],
// //     user: 'James'
// // },
// //     window.devToolsExtension && window.devToolsExtension()

// //     );

// // console.log(store.getState())

// export default combineReducers({
//     posts: postReducer
// });

ReactDOM.render(
    //Place Provider here as its highest (accessible) in app.
    <AnimalProvider>
        <Router>
            <App />
        </Router>
    </AnimalProvider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
