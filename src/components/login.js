import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {withRouter} from "react-router-dom";
//action
import {loginFirebaseUser} from "../actions/login_firestore";


class Login extends Component {

  state = {
    email: "",
    password: ""
  }


  getInputValues = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }

  login = (e) => {
    e.preventDefault();
    //user
    const user = {
      email: this.state.email,
      password :  this.state.password
    }
   
    if(user.email !== ""  || user.password !== ""){
      this.props.loginUser(user);
      this.props.history.push('/');
    }else{
      console.log("missing data to auth the user");
    }
    
  }

  render() {
    return (
      <React.Fragment>
    
        <form onSubmit={this.login}>
        <p>Welcome back, login here.</p>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" onChange={this.getInputValues} />
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" onChange={this.getInputValues} />
            <input className="login" type="submit" value="Login" />
        </form>
              
    </React.Fragment>
    );
  }
}




  
  // access using "props.namegiven"
function matchDispatchToProps(dispatch){
  //bind the action to be executed
  return bindActionCreators({loginUser: loginFirebaseUser }, dispatch);
}
  
export default connect("", matchDispatchToProps)(withRouter(Login));

