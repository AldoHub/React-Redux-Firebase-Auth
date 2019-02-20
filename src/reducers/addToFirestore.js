const addTofirestoreReducer=(
    //initial state
    state = {
    post: {} 
    }, 
    action)=>{
        if(action.type === "ADD_FIRESTORE_POST"){
            state= {...state, posts: action.payload}
        }
        
        return state;
    };
   
    export default addTofirestoreReducer;