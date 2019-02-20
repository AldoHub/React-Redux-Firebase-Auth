const loginFirestoreUser=(
    //initial state
    state = {
    user: {} 
    }, 
    action)=>{
        if(action.type === "LOGIN_FIRESTORE_USER"){
            state= {...state, user: action.payload}
        }
      
        return state;
    };
   
export default loginFirestoreUser;