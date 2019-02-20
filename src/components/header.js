import React, { Component } from 'react';
import {Link} from "react-router-dom";
import hero from "../515776-PIVJ8G-39.svg";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {withRouter} from "react-router-dom";

//action
import {logoutFirebaseUser} from "../actions/logout_firestore";

class Header extends Component {

  logout = (e) => {
    e.preventDefault();
   this.props.logoutUser();
   this.props.history.push('/login');
  } 




  render() {
    const {loggedin, signedin} = this.props;
    let buttons;

    if(Object.keys(loggedin).length !== 0 || Object.keys(signedin).length !== 0 ){
        buttons = (  
            <React.Fragment>
                <li><button className="logout" onClick={this.logout}>LogOut</button></li>
            </React.Fragment>)
    }else{
        buttons = (    
            <React.Fragment>
                <li><Link to="/signin">SignIn</Link></li>
                <li><Link to="/login">LogIn</Link></li>              
            </React.Fragment>)
    }
    return (
        <React.Fragment>
            <header>
            <nav>
            <ul>
                <li><Link to="/">ReactFirebaseAuthRedux</Link></li>                
            </ul>

            <ul>
                <li><Link className="links" to="/addpost">Create New Post</Link></li>
                {buttons}    
            </ul>
            
            </nav>
           
                <img alt="hero" src={hero} /> 
                <div>
                    <h1>React Redux Firestore Auth</h1>
                    <p>Powered by React / Redux / Firebase</p>
                </div>
            </header>
        </React.Fragment>
     );
  }
}
function mapStateToProps(state){
    //state.ReducerName.reducerProperty
    return{
      loggedin: state.loginFirestoreUser.user,
      signedin: state.createFirestoreUser.user 
  }
}

  
  // access using "props.namegiven"
function matchDispatchToProps(dispatch){
  //bind the action to be executed
  return bindActionCreators({logoutUser: logoutFirebaseUser }, dispatch);
}
  
export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Header));

