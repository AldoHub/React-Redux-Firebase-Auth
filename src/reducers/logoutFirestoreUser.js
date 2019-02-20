const logoutFirestoreUser=(
    //initial state
    state = {
    user: {} 
    }, 
    action)=>{
        if(action.type === "LOGOUT_FIRESTORE_USER"){
            state= {...state, user: action.payload}
        }
      
        return state;
    };
   
export default logoutFirestoreUser;