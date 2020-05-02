import {combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
// import rootReducer from './reducers'


const rootReducer = combineReducers({

})

// const  middleware = [thunk]

// function animalReducer(state = [], action) {
//     return state;
// }

// function userReducer(state = '', action){
//     return state
// }
 
// const allReducers = combineReducers({animals: animalReducer, user: userReducer})

const store = createStore(
    rootReducer,
window.devToolsExtension && window.devToolsExtension()
);

// console.log(store.getState())

// const store = createStore(
//     allReducers, 
//     {
//     animals: [{name: 'Jaguar'}],
//     user: 'James'
// },
//     window.devToolsExtension && window.devToolsExtension()

//     );

// console.log(store.getState())

export default store;

