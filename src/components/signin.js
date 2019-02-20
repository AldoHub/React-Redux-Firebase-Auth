import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {withRouter} from "react-router-dom";

//action
import {createFirebaseUser} from "../actions/singin_firestore";


class Signin extends Component {
  state = {
    email: "",
    password: ""
  }


  getInputValues = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }

  signin = (e) => {
    e.preventDefault();
    //user
    const user = {
      email: this.state.email,
      password :  this.state.password
    }
   
    //--TODO pass the user into the Auth Action
    this.props.createUser(user);
    this.props.history.push('/');
    
  }

  render() {
    return (
      <React.Fragment>
    
        <form onSubmit={this.signin}>
        <p>Create an account.</p>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" onChange={this.getInputValues} />
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" onChange={this.getInputValues} />
            <input type="submit" value="Create account" />
        </form>
              
    </React.Fragment>
    );
  }
}


  // access using "props.namegiven"
function matchDispatchToProps(dispatch){
  //bind the action to be executed
  return bindActionCreators({createUser: createFirebaseUser }, dispatch);
}
  
export default connect("", matchDispatchToProps)(withRouter(Signin));
