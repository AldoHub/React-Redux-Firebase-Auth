const createFirestoreUser=(
    //initial state
    state = {
    user: {} 
    }, 
    action)=>{
        if(action.type === "CREATE_USER ACTION"){
            state= {...state, user: action.payload}
        }
        
        return state;
    };
   
export default createFirestoreUser;