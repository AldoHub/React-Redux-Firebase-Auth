const firestoreReducer=(
    //initial state
    state = {
    posts:[] 
    }, 
    action)=>{
        if(action.type === "FETCH_FIRESTORE_POSTS"){
            state= {...state, posts: action.payload}
        }
        
        return state;
    };
   
    export default firestoreReducer;