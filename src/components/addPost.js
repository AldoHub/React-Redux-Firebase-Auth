import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//action
import {addFirestorePost} from "../actions/add_firestore_post";



class Addpost extends Component {
  state = {
    title: "",
    content: "",

  }
  
  getInputValues = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }

  createPost = (e) => {
    e.preventDefault();
    const post = {
      title : this.state.title,
      content :  this.state.content
    }
    this.props.addposts(post);
    this.props.history.push('/');
  }


  render() {
    return (
      <React.Fragment>
    
        <form onSubmit={this.createPost}>
        <p>Create a new post</p>
            <label htmlFor="title">Post Title: </label>
            <input type="text" name="title" onChange={this.getInputValues} />
            <label htmlFor="content">Post Content: </label>
            <textarea name="content" onChange={this.getInputValues} ></textarea>
            <input type="submit" value="create post" />
        </form>
              
    </React.Fragment>
    );
  }
}
function mapStateToProps(state){
  //state.ReducerName.reducerProperty
  return{
      firestorePosts: state.addFirestorePost.post,
  }
}
  
  // access using "props.namegiven"
function matchDispatchToProps(dispatch){
  //bind the action to be executed
  return bindActionCreators({addposts: addFirestorePost }, dispatch);
}
  
export default connect(mapStateToProps, matchDispatchToProps)(Addpost);

