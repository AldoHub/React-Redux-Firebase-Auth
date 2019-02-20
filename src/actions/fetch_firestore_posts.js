import firebase from "../firebase/firebaseConfig";

export function fetchFirestorePosts(){
   
    return function(dispatch){
        firebase.firestore().collection("posts")
        .get()
        .then((querySnapshot) => {
          let posts = [];
          querySnapshot.forEach((doc) => {
                
                //console.log(doc.id, doc.data());
                let post = {
                    "id": doc.id,
                    "data" : doc.data() 
                }
                
                posts.push(post);
                
            });
            console.log(posts);
            //dispatch the action with the posts as the payload
            dispatch({type: "FETCH_FIRESTORE_POSTS", payload: posts});
        });
     
    
    }
}