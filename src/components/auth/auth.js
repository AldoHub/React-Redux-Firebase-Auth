import React from 'react';
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";


const Auth = (Component) => { 
    class Auth extends Component {
    
        componentDidMount = () => {

            if((Object.keys(this.props.loggedIn).length === 0) && (Object.keys(this.props.signedIn).length === 0)){
                console.log("user is not set");
                this.props.history.push('/login');
            }

            console.log(this.props)
        }


        render() {
        return (
            <Component {...this.props} />
        );
        }
    }

    
    function mapStateToProps(state){
        //state.ReducerName.reducerProperty
        return{
            loggedIn: state.loginFirestoreUser.user,
            signedIn: state.createFirestoreUser.user
        }
    }

    return connect(mapStateToProps, "")(withRouter(Auth));
} 

    
    
export default Auth;
  