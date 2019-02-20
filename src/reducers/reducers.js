import {combineReducers} from "redux";

//import the reducers to use
import firesoreReducer from "./firestoreReducer";
import addToFirestoreReducer from "./addToFirestore";
import createFirestoreUser from "./createFirestoreUser";
import loginFirestoreUser from "./loginFirestoreUser";
import logoutFirestoreUser from "./logoutFirestoreUser";


//reducers
const reducers= combineReducers({
    firestoreReducer: firesoreReducer,
    addFirestorePost: addToFirestoreReducer,
    createFirestoreUser: createFirestoreUser,
    loginFirestoreUser: loginFirestoreUser,
    logoutFirestoreUser: logoutFirestoreUser
});

export default reducers;