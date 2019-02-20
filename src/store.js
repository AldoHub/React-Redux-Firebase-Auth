// allows you to write action creators that return a function instead of an action
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux"; 
//reducers
import Reducers from "./reducers/reducers"; //---------- add the reducers

//--- MIDDLEWARE
// add middleware inside this function
const middleware= applyMiddleware(thunk);


//--- STORE
// this is the store
const Store= createStore(Reducers, middleware);

//we now export the store
//which is configured now
export default Store;