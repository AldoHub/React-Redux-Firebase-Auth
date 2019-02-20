import firebase from "../firebase/firebaseConfig";


export function loginFirebaseUser(userObject){
   
    return function(dispatch){
        let user = {
            email: userObject["email"],
            password: userObject["password"]
        }
        
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((user)=>{
            dispatch({type:"LOGIN_FIRESTORE_USER", payload: user});
            console.log(user)

        })
        .catch((err)=>{
          console.log("An error ocurred");
         
        })
    }
}
    
