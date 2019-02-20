import firebase from "../firebase/firebaseConfig";


export function createFirebaseUser(userObject){
   
    return function(dispatch){
        let user = {
            email: userObject["email"],
            password: userObject["password"]
        }

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(user => {
            //---- TODO add the dispatch
            dispatch({type:"CREATE_USER ACTION", payload: user});
            console.log(user);
        }).catch(err => {
            console.log(err);
        })



    }
}
    
