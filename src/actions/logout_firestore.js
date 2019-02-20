import firebase from "../firebase/firebaseConfig";


export function logoutFirebaseUser(userObject){
   
    return function(dispatch){
        
        firebase.auth().signOut()
        .then(() => {
            dispatch({type:"LOGIN_FIRESTORE_USER", payload: {}});
            dispatch({type:"CREATE_USER ACTION", payload: {}});
        }).catch(err => {
            console.log(err);
        })
    }
}
    
