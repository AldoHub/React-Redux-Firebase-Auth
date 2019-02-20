import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//firestore temporal fix
import firebase from "../firebase/firebaseConfig";


//action
import {fetchFirestorePosts} from "../actions/fetch_firestore_posts";


class Main extends Component {

   componentDidMount = () => {
       // call the action
      this.props.FetchPosts();
   }


   // TODO --- turn this into an action and manage redirections
   delete = (postID) => {
       firebase.firestore().collection("posts").doc(postID).delete().then(()=>{
        alert("post deleted");
      this.props.FetchPosts();
      }).catch(err => console.log(err));
   }

   render() {
   return (
    <div>
        {this.props.firestorePosts.map(post =>{
            return(
            <div className="post" key={post.id}>
               <h3>{post.data.title}</h3>
               <p>{post.data.content}</p>
               <button onClick={() => this.delete(post.id)}>Delete post</button>
            </div>
            )
        })}
    </div>
                    
    );
  }
   
        
}




function mapStateToProps(state){
    //state.ReducerName.reducerProperty
    return{
        firestorePosts: state.firestoreReducer.posts,
    }
}
    
    // access using "props.namegiven"
function matchDispatchToProps(dispatch){
    //bind the action to be executed
    return bindActionCreators({FetchPosts:fetchFirestorePosts }, dispatch);
}
    
export default connect(mapStateToProps, matchDispatchToProps)(Main);//the name of the component

