import firebase from "../firebase/firebaseConfig";

export function addFirestorePost(postObject){
   
    return function(dispatch){
        console.log("ADD_FIRESTORE_POST ACTION");
       
        firebase.firestore().collection("posts").add(postObject)
        .then((post) => {
            dispatch({type: "ADD_FIRESTORE_POST", payload: post});
            console.log("post has been added")
        }).catch(err => {
            console.log("post was NOT added");
        });
    }
}
    
